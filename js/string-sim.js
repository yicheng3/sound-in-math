/**
 * 單元 1-2 原生 Canvas 琴弦物理阻尼與觸弦節點（Harmonic Node）模擬元件
 * 
 * 功能：
 * 1. 滑鼠/觸控在畫布任意位置拉起琴弦，放開後產生真實彈力衰減振動動畫。
 * 2. 觸弦節點實驗：提供「自由振動」、「1/2 節點」、「1/3 節點」、「1/4 節點」切換。
 * 3. 結合 Web Audio API 撥弦合成音效，聽覺與視覺精準同步！
 */

class StringSimulator {
  constructor(canvasContainerId) {
    this.container = document.getElementById(canvasContainerId);
    if (!this.container) return;
    
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.innerHTML = '';
    this.container.appendChild(this.canvas);

    this.activeHarmonicNode = 0; // 0: 自由振動, 2: 1/2處, 3: 1/3處, 4: 1/4處
    this.isDragging = false;
    this.dragX = 0;
    this.dragY = 0;

    // 物理模擬參數
    this.pointsCount = 64;
    this.y = new Float32Array(this.pointsCount);
    this.vy = new Float32Array(this.pointsCount);
    this.baseFreq = 220; // A3 基頻
    this.damping = 0.985;
    this.tension = 0.25;

    // 音訊引擎
    this.audioCtx = null;
    this.activeSource = null;

    this.initCanvasSize();
    this.resetString();
    this.bindEvents();
    this.startAnimation();
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initCanvasSize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width || 600;
    this.height = 200;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
    this.midY = this.height / 2;
  }

  resetString() {
    for (let i = 0; i < this.pointsCount; i++) {
      this.y[i] = 0;
      this.vy[i] = 0;
    }
  }

  setNode(nodeFraction) {
    this.activeHarmonicNode = nodeFraction;
    this.resetString();
    this.pluckAt(0.35, 30);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.initCanvasSize());

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: Math.max(10, Math.min(this.width - 10, clientX - rect.left)),
        y: clientY - rect.top
      };
    };

    const startDrag = (e) => {
      e.preventDefault();
      this.initAudio();
      this.isDragging = true;
      const pos = getPos(e);
      this.dragX = pos.x;
      this.dragY = pos.y - this.midY;
      this.updatePluckShape(this.dragX, this.dragY);
    };

    const moveDrag = (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      const pos = getPos(e);
      this.dragX = pos.x;
      this.dragY = Math.max(-70, Math.min(70, pos.y - this.midY));
      this.updatePluckShape(this.dragX, this.dragY);
    };

    const endDrag = (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      this.isDragging = false;
      this.playPluckSound();
    };

    this.canvas.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);

    this.canvas.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag, { passive: false });
  }

  updatePluckShape(px, py) {
    const pluckIndex = Math.floor((px / this.width) * (this.pointsCount - 1));
    for (let i = 0; i < this.pointsCount; i++) {
      if (i <= pluckIndex) {
        this.y[i] = (i / pluckIndex) * py;
      } else {
        this.y[i] = ((this.pointsCount - 1 - i) / (this.pointsCount - 1 - pluckIndex)) * py;
      }
      this.vy[i] = 0;
    }
    this.enforceNodes();
  }

  enforceNodes() {
    this.y[0] = 0;
    this.y[this.pointsCount - 1] = 0;

    if (this.activeHarmonicNode > 0) {
      // 根據節點比例將特定位置強制固定為 0
      const step = (this.pointsCount - 1) / this.activeHarmonicNode;
      for (let k = 1; k < this.activeHarmonicNode; k++) {
        const idx = Math.round(k * step);
        if (idx >= 0 && idx < this.pointsCount) {
          this.y[idx] = 0;
          this.vy[idx] = 0;
        }
      }
    }
  }

  pluckAt(fractionX, amplitude) {
    this.initAudio();
    this.dragX = this.width * fractionX;
    this.dragY = amplitude;
    this.updatePluckShape(this.dragX, this.dragY);
    this.playPluckSound();
  }

  playPluckSound() {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    // 泛音加權合成
    const masterGain = this.audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.3, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    masterGain.connect(this.audioCtx.destination);

    const harmonicsCount = 8;
    const pluckRatio = this.dragX / this.width;

    for (let h = 1; h <= harmonicsCount; h++) {
      // 若有觸弦節點，非該節點整數倍的泛音會被迅速吸收消音
      if (this.activeHarmonicNode > 0 && h % this.activeHarmonicNode !== 0) {
        continue;
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      const freq = this.baseFreq * h;
      osc.frequency.setValueAtTime(freq, now);

      // 撥弦位置對泛音振幅的影響：sin(h * pi * ratio) / h
      const amp = Math.abs(Math.sin(h * Math.PI * pluckRatio)) / (h * 1.2);
      gain.gain.setValueAtTime(amp, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (2.2 / (h * 0.75)));

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 2.5);
    }
  }

  updatePhysics() {
    if (this.isDragging) return;

    // 弦波動差分方程 (Wave Equation)
    for (let i = 1; i < this.pointsCount - 1; i++) {
      const force = this.tension * (this.y[i - 1] + this.y[i + 1] - 2 * this.y[i]);
      this.vy[i] = (this.vy[i] + force) * this.damping;
    }

    for (let i = 1; i < this.pointsCount - 1; i++) {
      this.y[i] += this.vy[i];
    }

    this.enforceNodes();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const isDark = document.body.classList.contains('dark-mode');
    const centerLineColor = isDark ? '#3d3832' : '#dcd5c9';
    const stringColor = isDark ? '#a1c8b0' : '#314d68';
    const pinOuter = isDark ? '#595147' : '#8c8275';
    const pinInner = isDark ? '#a1c8b0' : '#faf8f5';
    const nodeColor = isDark ? '#e08b52' : '#c06933';
    const textColor = isDark ? '#9e968c' : '#797169';

    // 繪製背景參考線
    this.ctx.strokeStyle = centerLineColor;
    this.ctx.lineWidth = 1;
    this.ctx.setLineDash([4, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.midY);
    this.ctx.lineTo(this.width, this.midY);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // 繪製觸弦節點參考虛線
    if (this.activeHarmonicNode > 0) {
      this.ctx.strokeStyle = nodeColor;
      this.ctx.lineWidth = 1.5;
      this.ctx.setLineDash([6, 6]);
      for (let k = 1; k < this.activeHarmonicNode; k++) {
        const nx = (this.width / this.activeHarmonicNode) * k;
        this.ctx.beginPath();
        this.ctx.moveTo(nx, 20);
        this.ctx.lineTo(nx, this.height - 20);
        this.ctx.stroke();

        // 標註文字
        this.ctx.fillStyle = nodeColor;
        this.ctx.font = '12px system-ui, -apple-system, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`節點 ${k}/${this.activeHarmonicNode}`, nx, 16);
      }
      this.ctx.setLineDash([]);
    }

    // 繪製琴弦發光層
    this.ctx.beginPath();
    this.ctx.strokeStyle = stringColor;
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    for (let i = 0; i < this.pointsCount; i++) {
      const x = (i / (this.pointsCount - 1)) * this.width;
      const y = this.midY + this.y[i];
      if (i === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.stroke();

    // 繪製固定端點 (兩端橋碼與弦枕)
    const drawPin = (x, y, label) => {
      this.ctx.fillStyle = pinOuter;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 7, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.fillStyle = pinInner;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = textColor;
      this.ctx.font = '11px system-ui';
      this.ctx.fillText(label, x + (x === 0 ? 15 : -15), y - 12);
    };

    drawPin(0, this.midY, '固定端 (0, 0)');
    drawPin(this.width, this.midY, '固定端 (L, 0)');

    // 提示手勢圖示或文字
    if (!this.isDragging && Math.abs(this.y[Math.floor(this.pointsCount / 2)]) < 0.2) {
      this.ctx.fillStyle = textColor;
      this.ctx.font = '13px system-ui, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('👆 用滑鼠或手指在此拖曳琴弦並放開撥音', this.width / 2, this.midY + 45);
    }
  }

  startAnimation() {
    const loop = () => {
      this.updatePhysics();
      this.draw();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

// 供外部建立控制面板與綁定
window.initStringSimulator = function(containerId) {
  const sim = new StringSimulator(containerId);
  return sim;
};
