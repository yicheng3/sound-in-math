/**
 * 音符中的數學 - 前端應用邏輯 (App.js)
 * 負責單元渲染、KaTeX 排版觸發、一鍵複製、導航切換與 Canvas 掛載
 */

document.addEventListener('DOMContentLoaded', () => {
  const sidebarNav = document.getElementById('sidebar-nav');
  const mainContent = document.getElementById('main-content');
  const sidebar = document.getElementById('sidebar');
  const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
  const toastMsg = document.getElementById('toast-msg');

  let currentUnitId = "1-1";

  // 主題切換邏輯 (預設淡雅淺色模式)
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function initTheme() {
    const savedTheme = localStorage.getItem('sound_math_theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeIcon) themeIcon.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.textContent = '🌙';
    }
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('sound_math_theme', isDark ? 'dark' : 'light');
      if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
      showToast(isDark ? '已切換為深夜素墨風格' : '已切換為和紙素雅風格');
    });
  }

  initTheme();

  // 字體大小切換邏輯 (支援大字投影/舒適閱讀模式)
  const btnFontToggle = document.getElementById('btn-font-toggle');
  const fontIcon = document.getElementById('font-icon');

  function initFontSize() {
    const savedFontSize = localStorage.getItem('sound_math_font_size');
    if (savedFontSize === 'large') {
      document.body.classList.add('large-font');
      if (fontIcon) fontIcon.textContent = 'A-';
      if (btnFontToggle) btnFontToggle.title = '切換為標準字體大小';
    } else {
      document.body.classList.remove('large-font');
      if (fontIcon) fontIcon.textContent = 'A+';
      if (btnFontToggle) btnFontToggle.title = '切換為大字投影模式';
    }
  }

  if (btnFontToggle) {
    btnFontToggle.addEventListener('click', () => {
      document.body.classList.toggle('large-font');
      const isLarge = document.body.classList.contains('large-font');
      localStorage.setItem('sound_math_font_size', isLarge ? 'large' : 'standard');
      if (fontIcon) fontIcon.textContent = isLarge ? 'A-' : 'A+';
      if (btnFontToggle) btnFontToggle.title = isLarge ? '切換為標準字體大小' : '切換為大字投影模式';
      showToast(isLarge ? '已開啟大字投影模式 🔍' : '已恢復標準字體大小');
    });
  }

  initFontSize();

  // 1. 初始化側邊欄選單
  function initSidebar() {
    sidebarNav.innerHTML = '';

    COURSE_CONFIG.modules.forEach((mod, modIdx) => {
      const groupEl = document.createElement('div');
      groupEl.className = `module-group ${modIdx === 0 ? 'open' : ''}`;
      groupEl.id = `group-${mod.id}`;

      // 模組折疊標題
      const headerEl = document.createElement('div');
      headerEl.className = 'module-header';
      headerEl.innerHTML = `
        <span class="module-header-title">${mod.title}</span>
        <span class="module-arrow">▶</span>
      `;
      headerEl.addEventListener('click', () => {
        groupEl.classList.toggle('open');
      });

      // 單元列表
      const listEl = document.createElement('ul');
      listEl.className = 'unit-list';

      mod.units.forEach(unitKey => {
        const unit = COURSE_CONFIG.units[unitKey];
        if (!unit) return;

        const itemEl = document.createElement('li');
        itemEl.className = `unit-item ${unitKey === currentUnitId ? 'active' : ''}`;
        itemEl.id = `nav-item-${unitKey}`;

        itemEl.innerHTML = `
          <div class="unit-item-row">
            <span class="unit-id">${unit.id}</span>
            <span class="unit-title">${unit.title}</span>
          </div>
        `;

        itemEl.addEventListener('click', () => {
          switchUnit(unitKey);
          if (window.innerWidth <= 840) {
            sidebar.classList.remove('mobile-open');
          }
        });

        listEl.appendChild(itemEl);
      });

      groupEl.appendChild(headerEl);
      groupEl.appendChild(listEl);
      sidebarNav.appendChild(groupEl);
    });
  }

  // 2. 簡易 Markdown 轉換器（支援段落、條列、區塊引用、加粗、HTML 與 KaTeX 數學區塊保護）
  function parseMarkdown(mdText) {
    if (!mdText) return '';
    let text = mdText.trim();

    // 1. 抽取並保護 HTML 區塊（例如 <iframe>, <div class="...">...</div>, <svg>...</svg>）
    const htmlBlocks = [];
    text = text.replace(/<(div|iframe|svg|table)[\s\S]*?<\/\1>/gi, (match) => {
      const token = `@@HTML_BLOCK_${htmlBlocks.length}@@`;
      htmlBlocks.push(match);
      return token;
    });

    // 2. 抽取並保護 display math: $$[\s\S]*?$$
    const displayMathBlocks = [];
    text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
      const token = `@@DISPLAY_MATH_${displayMathBlocks.length}@@`;
      displayMathBlocks.push(`<div class="math-display">$$${formula.trim()}$$</div>`);
      return token;
    });

    // 3. 處理區塊引用 > ... (支援連續多行引用合併)
    text = text.replace(/(?:^|\n)(?:>[ \t]?(.*)(?:\n|$))+/g, (match) => {
      const lines = match.trim().split('\n').map(l => l.replace(/^>[ \t]?/, ''));
      return `\n<blockquote>${lines.join('<br>')}</blockquote>\n`;
    });

    // 4. 處理行內樣式
    // 加粗 **text**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // 反引號 `code`
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // 5. 段落與清單處理
    const lines = text.split('\n');
    let inList = false;
    let listType = '';
    let result = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) {
          result.push(`</${listType}>`);
          inList = false;
        }
        return;
      }

      // 若遇到已抽取保護之區塊（HTML 或 Display Math）或 blockquote
      if (trimmed.startsWith('@@HTML_BLOCK_') || trimmed.startsWith('@@DISPLAY_MATH_') || trimmed.startsWith('<blockquote>') || trimmed.startsWith('<div')) {
        if (inList) {
          result.push(`</${listType}>`);
          inList = false;
        }
        result.push(trimmed);
        return;
      }

      // 清單內的縮排延續行（支援子項目與 Tab 縮排解釋，防止中斷 ol 計數）
      if (inList && /^[ \t]+/.test(line)) {
        const subContent = trimmed.replace(/^[-*•]\s+/, '');
        const lastIdx = result.length - 1;
        if (result.length > 0 && result[lastIdx].endsWith('</li>')) {
          if (trimmed.startsWith('-') || trimmed.startsWith('*') || trimmed.startsWith('•')) {
            if (result[lastIdx].includes('<ul class="list-sub-desc">')) {
              result[lastIdx] = result[lastIdx].replace('</ul></li>', `<li>${subContent}</li></ul></li>`);
            } else {
              result[lastIdx] = result[lastIdx].slice(0, -5) + `<ul class="list-sub-desc"><li>${subContent}</li></ul></li>`;
            }
          } else {
            result[lastIdx] = result[lastIdx].slice(0, -5) + `<div class="list-sub-indent">${trimmed}</div></li>`;
          }
        } else {
          result.push(`<p>${trimmed}</p>`);
        }
        return;
      }

      // 頂層無序清單 (- 或 * 或 •)
      if (/^[-*•]\s+(.*)/.test(trimmed)) {
        if (!inList || listType !== 'ul') {
          if (inList) result.push(`</${listType}>`);
          result.push('<ul>');
          inList = true;
          listType = 'ul';
        }
        result.push(`<li>${trimmed.replace(/^[-*•]\s+/, '')}</li>`);
      }
      // 頂層有序清單 (1. 2. 等)
      else if (/^\d+\.\s+(.*)/.test(trimmed)) {
        if (!inList || listType !== 'ol') {
          if (inList) result.push(`</${listType}>`);
          result.push('<ol>');
          inList = true;
          listType = 'ol';
        }
        result.push(`<li>${trimmed.replace(/^\d+\.\s+/, '')}</li>`);
      }
      // 一般段落
      else {
        if (inList) {
          result.push(`</${listType}>`);
          inList = false;
        }
        result.push(`<p>${trimmed}</p>`);
      }
    });

    if (inList) {
      result.push(`</${listType}>`);
    }

    let outputHtml = result.join('\n');

    // 6. 還原 display math 區塊（重要：使用函數回傳避免 $$ 被 String.replace 吃掉）
    displayMathBlocks.forEach((block, idx) => {
      outputHtml = outputHtml.replace(`@@DISPLAY_MATH_${idx}@@`, () => block);
    });

    // 7. 還原 HTML 區塊
    htmlBlocks.forEach((block, idx) => {
      outputHtml = outputHtml.replace(`@@HTML_BLOCK_${idx}@@`, () => block);
    });

    return outputHtml;
  }

  // 2.2 KaTeX 全域渲染調度器（防範 CDN 延遲、動態切換與異步排程）
  function triggerMathRender(targetElement) {
    const el = targetElement || document.getElementById('main-content');
    if (!el) return;

    function render() {
      if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false
        });
        return true;
      }
      return false;
    }

    if (!render()) {
      let retries = 0;
      const interval = setInterval(() => {
        retries++;
        if (render() || retries > 50) {
          clearInterval(interval);
        }
      }, 50);
      window.addEventListener('load', render, { once: true });
    }
  }

  // 2.5 渲染隨堂線上互動學習單
  function renderWorksheet(unit) {
    if (!unit.worksheet || !unit.worksheet.questions || unit.worksheet.questions.length === 0) {
      return '';
    }

    const ws = unit.worksheet;
    const questionsHtml = ws.questions.map((q, qIdx) => {
      let inputFieldHtml = '';

      if (q.type === 'radio' && q.options) {
        inputFieldHtml = `
          <div class="ws-options-list">
            ${q.options.map((opt, oIdx) => `
              <label class="ws-option-label" for="ws-opt-${unit.id}-${q.id}-${oIdx}">
                <input type="radio" name="ws-ans-${unit.id}-${q.id}" id="ws-opt-${unit.id}-${q.id}-${oIdx}" value="${escapeHtml(opt)}" class="ws-radio-input" data-qid="${q.id}">
                <span class="ws-option-text">${escapeHtml(opt)}</span>
              </label>
            `).join('')}
          </div>
        `;
      } else if (q.type === 'textarea') {
        inputFieldHtml = `
          <div class="ws-input-container">
            <textarea class="ws-textarea-input" id="ws-ans-${unit.id}-${q.id}" data-qid="${q.id}" rows="3" placeholder="${escapeHtml(q.placeholder || '請在此記錄你的觀察與聽感...')}"></textarea>
          </div>
        `;
      } else {
        // text or fill
        inputFieldHtml = `
          <div class="ws-input-container">
            <div class="ws-input-row">
              <input type="text" class="ws-text-input" id="ws-ans-${unit.id}-${q.id}" data-qid="${q.id}" placeholder="${escapeHtml(q.placeholder || '請輸入作答內容...')}" data-expected="${escapeHtml(q.expected || '')}">
              ${q.expected ? `
                <button type="button" class="btn-ws-check" data-target="ws-ans-${unit.id}-${q.id}" data-res="ws-res-${unit.id}-${q.id}">核對答案</button>
                <span class="ws-check-result" id="ws-res-${unit.id}-${q.id}"></span>
              ` : ''}
            </div>
          </div>
        `;
      }

      return `
        <div class="ws-question-item" id="ws-item-${unit.id}-${q.id}">
          <div class="ws-q-prompt">
            <span class="ws-q-num">第 ${qIdx + 1} 題</span>
            <div class="ws-q-text">${parseMarkdown(q.prompt)}</div>
          </div>
          ${inputFieldHtml}
          ${q.solution ? `
            <details class="ws-solution-details">
              <summary class="ws-solution-summary">💡 查看參考解析與思考引導</summary>
              <div class="ws-solution-content">${parseMarkdown(q.solution)}</div>
            </details>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <section class="teaching-card worksheet-card" id="worksheet-${unit.id}">
        <div class="card-header worksheet-header">
          <div class="worksheet-title-group">
            <span class="card-icon">📝</span>
            <h2 class="card-title">${escapeHtml(ws.title || '課堂隨堂互動學習單')}</h2>
            <span class="badge ws-badge">隨堂線上即時填答</span>
          </div>
          <div class="ws-save-status" id="ws-save-status-${unit.id}">
            <span class="save-icon">💾</span> <span class="save-text">已自動存檔於本機</span>
          </div>
        </div>

        <div class="card-body">
          <!-- 題目區塊 -->
          <div class="ws-questions-container">
            ${questionsHtml}
          </div>

          <!-- 個人 Desmos 實驗存檔連結 (僅在指定需要繳交存檔的單元顯示) -->
          ${ws.requireDesmosLink ? `
            <div class="ws-desmos-share-box">
              <div class="ws-desmos-share-title">
                <span>🔗</span>
                <span>個人 Desmos 實驗作品存檔連結</span>
              </div>
              <p class="ws-desmos-share-desc">
                在右側 Desmos 點擊右上角「儲存（Save）」，並點擊分享按鈕複製作品短網址貼於此處：
              </p>
              <input type="url" class="ws-text-input ws-desmos-input" id="ws-desmos-link-${unit.id}" placeholder="https://www.desmos.com/calculator/..." data-qid="desmos_link">
            </div>
          ` : ''}

          <!-- 底部功能按鈕 -->
          <div class="ws-toolbar">
            <button type="button" class="btn-ws-copy" id="btn-ws-copy-${unit.id}">
              <span>📋 一鍵複製完整作答報告（貼至 Google 表單或 Classroom 繳交）</span>
            </button>
            <button type="button" class="btn-ws-reset" id="btn-ws-reset-${unit.id}">
              <span>🔄 清空本單元重填</span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // 2.6 初始化學習單事件監聽與本機存取
  function initWorksheet(unit) {
    if (!unit.worksheet) return;

    const unitAnswersKey = `sound_math_answers_${unit.id}`;

    // 載入並綁定作答紀錄
    let answers = {};
    try {
      answers = JSON.parse(localStorage.getItem(unitAnswersKey) || '{}');
    } catch (e) {
      answers = {};
    }

    const saveStatusEl = document.getElementById(`ws-save-status-${unit.id}`);
    function saveAnswers() {
      localStorage.setItem(unitAnswersKey, JSON.stringify(answers));
      if (saveStatusEl) {
        saveStatusEl.style.opacity = '0.4';
        setTimeout(() => {
          saveStatusEl.style.opacity = '1';
        }, 150);
      }
    }

    // 恢復已填寫的作答
    if (unit.worksheet.questions) {
      unit.worksheet.questions.forEach(q => {
        const val = answers[q.id];
        if (val !== undefined && val !== null) {
          if (q.type === 'radio') {
            const radios = document.querySelectorAll(`input[name="ws-ans-${unit.id}-${q.id}"]`);
            radios.forEach(r => {
              if (r.value === val) r.checked = true;
            });
          } else {
            const field = document.getElementById(`ws-ans-${unit.id}-${q.id}`);
            if (field) field.value = val;
          }
        }
      });
    }

    // 恢復 Desmos 作品存檔連結
    if (answers['desmos_link']) {
      const desmosInput = document.getElementById(`ws-desmos-link-${unit.id}`);
      if (desmosInput) desmosInput.value = answers['desmos_link'];
    }

    // 監聽單選題變更
    const allRadios = document.querySelectorAll(`#worksheet-${unit.id} .ws-radio-input`);
    allRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const qid = e.target.dataset.qid;
        if (qid) {
          answers[qid] = e.target.value;
          saveAnswers();
        }
      });
    });

    // 監聽文字輸入與長文
    const textFields = document.querySelectorAll(`#worksheet-${unit.id} .ws-text-input, #worksheet-${unit.id} .ws-textarea-input`);
    textFields.forEach(field => {
      field.addEventListener('input', (e) => {
        const qid = e.target.dataset.qid;
        if (qid) {
          answers[qid] = e.target.value;
          saveAnswers();
        }
      });
    });

    // 監聽 Desmos 作品連結輸入
    const desmosInput = document.getElementById(`ws-desmos-link-${unit.id}`);
    if (desmosInput) {
      desmosInput.addEventListener('input', (e) => {
        answers['desmos_link'] = e.target.value.trim();
        saveAnswers();
      });
    }

    // 監聽核對答案按鈕
    const checkBtns = document.querySelectorAll(`#worksheet-${unit.id} .btn-ws-check`);
    checkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetId = e.currentTarget.dataset.target;
        const resId = e.currentTarget.dataset.res;
        const inputEl = document.getElementById(targetId);
        const resEl = document.getElementById(resId);
        if (!inputEl || !resEl) return;

        const userVal = inputEl.value.trim().toLowerCase().replace(/\s+/g, '');
        const rawExpected = (inputEl.dataset.expected || '').trim();

        if (!userVal) {
          resEl.className = 'ws-check-result try-again';
          resEl.textContent = '請先輸入作答內容再核對喔！';
          return;
        }

        // 支援多種正確格式，例如 "14|f(14)" 或 "1:9/8:81/64:3/2:27/16"
        const allowed = rawExpected.toLowerCase().split('|').map(s => s.trim().replace(/\s+/g, ''));
        const isMatched = allowed.some(ans => userVal === ans || userVal.includes(ans) || ans.includes(userVal));

        if (isMatched) {
          resEl.className = 'ws-check-result correct';
          resEl.textContent = '✅ 完全正確！太厲害了！';
        } else {
          resEl.className = 'ws-check-result try-again';
          resEl.textContent = '💡 答案很接近囉，再算看看或參考下方解析！';
        }
      });
    });

    // 一鍵複製完整作答報告按鈕
    const btnCopy = document.getElementById(`btn-ws-copy-${unit.id}`);
    if (btnCopy) {
      btnCopy.addEventListener('click', () => {
        let lines = [
          `======================================================================`,
          `🎵【音符中的數學・隨堂學習單作答成果】`,
          `======================================================================`,
          `• 課堂單元：【${unit.id}】${unit.title}`,
          `• 填答時間：${new Date().toLocaleString('zh-TW', { hour12: false })}`,
          `----------------------------------------------------------------------`
        ];

        if (unit.worksheet.questions) {
          unit.worksheet.questions.forEach((q, idx) => {
            const ans = answers[q.id];
            const hasAns = ans !== undefined && ans !== null && String(ans).trim() !== '';
            const rawAns = hasAns ? String(ans).trim() : '（尚未填答）';

            lines.push(`【問題 ${idx + 1}：${q.title || '課堂任務'}】`);
            lines.push(`題目說明：`);
            const cleanPrompt = q.prompt.replace(/\*\*/g, '').replace(/\\/g, '');
            lines.push(cleanPrompt);
            lines.push(``);
            lines.push(`【學生完整作答與推導】：`);

            if (q.formatAnswer && typeof q.formatAnswer === 'function' && hasAns) {
              lines.push(q.formatAnswer(rawAns));
            } else if (q.type === 'radio') {
              lines.push(`我在本題的觀察與選擇是：【${rawAns}】`);
            } else {
              lines.push(rawAns);
            }

            // 系統自動檢核狀態
            if (q.expected && hasAns) {
              const allowed = q.expected.toLowerCase().split('|').map(s => s.trim().replace(/\s+/g, ''));
              const userVal = rawAns.toLowerCase().replace(/\s+/g, '');
              const isMatch = allowed.some(a => userVal === a || userVal.includes(a) || a.includes(userVal));
              lines.push(``);
              lines.push(`（系統自檢狀態：${isMatch ? '✅ 完全正確' : '💡 建議核對標準推導步驟'}）`);
            }

            lines.push(`----------------------------------------------------------------------`);
          });
        }

        // Desmos 作品存檔連結 (僅在指定單元導出)
        if (unit.worksheet && unit.worksheet.requireDesmosLink) {
          const desmosLink = answers['desmos_link'] || document.getElementById(`ws-desmos-link-${unit.id}`)?.value?.trim() || '';
          lines.push(`【課堂 Desmos 實作存檔與作品連結】`);
          lines.push(`• 我的 Desmos 專案存檔網址：${desmosLink || '（尚未填寫）'}`);
          lines.push(`----------------------------------------------------------------------`);
        }
        lines.push(`======================================================================`);
        lines.push(`（本紀錄由《音符中的數學》線上互動講義系統自動匯出・可直接用於 Google 表單/Classroom 繳交）`);

        copyToClipboard(lines.join('\n'));
        showToast('📋 已複製完整作答報告！可直接貼至 Google 表單或 Classroom 繳交');
      });
    }

    // 重填本單元按鈕
    const btnReset = document.getElementById(`btn-ws-reset-${unit.id}`);
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm('確定要清空本單元的填答內容重新作答嗎？')) {
          localStorage.removeItem(unitAnswersKey);
          answers = {};
          allRadios.forEach(r => r.checked = false);
          textFields.forEach(f => f.value = '');
          const desmosInput = document.getElementById(`ws-desmos-link-${unit.id}`);
          if (desmosInput) desmosInput.value = '';
          document.querySelectorAll(`#worksheet-${unit.id} .ws-check-result`).forEach(r => {
            r.textContent = '';
            r.className = 'ws-check-result';
          });
          showToast('已清空本單元作答內容');
        }
      });
    }
  }

  // 3. 渲染指定單元
  function renderUnit(unitId) {
    const unit = COURSE_CONFIG.units[unitId];
    if (!unit) {
      mainContent.innerHTML = `<div class="teaching-card"><p>單元不存在或正在建置中。</p></div>`;
      return;
    }

    // 取得所有單元清單以計算上一單元/下一單元
    const allUnitIds = [];
    COURSE_CONFIG.modules.forEach(m => allUnitIds.push(...m.units));
    const currentIndex = allUnitIds.indexOf(unitId);
    const prevUnitId = currentIndex > 0 ? allUnitIds[currentIndex - 1] : null;
    const nextUnitId = currentIndex < allUnitIds.length - 1 ? allUnitIds[currentIndex + 1] : null;
    const prevUnit = prevUnitId ? COURSE_CONFIG.units[prevUnitId] : null;
    const nextUnit = nextUnitId ? COURSE_CONFIG.units[nextUnitId] : null;

    const hasDesmosUrl = Boolean(unit.desmosUrl && unit.desmosUrl.trim().length > 0);
    const desmosTarget = hasDesmosUrl ? unit.desmosUrl : "https://www.desmos.com/calculator";

    let html = `
      <!-- 單元頂部橫幅 -->
      <section class="unit-banner">
        <div class="banner-top-meta">
          <span class="banner-module-tag">${unit.moduleName}</span>
          ${hasDesmosUrl ? `
            <a href="${desmosTarget}" target="_blank" rel="noopener noreferrer" class="btn-desmos-jump" title="另開分頁開啟此單元 Desmos 互動教材">
              開啟 Desmos 範本 ↗
            </a>
          ` : `
            <span class="btn-desmos-pending" title="教師專屬範本製作中">
              ⏳ Desmos 範本製作中
            </span>
          `}
        </div>
        <div class="banner-title-group">
          <span class="banner-unit-id">${unit.id}</span>
          <h1 class="banner-title">${unit.title}</h1>
        </div>
      </section>

      <!-- 觀念說明區塊 -->
      ${unit.motivation ? `
        <section class="teaching-card">
          <div class="card-header">
            <span class="card-icon">📖</span>
            <h2 class="card-title">${unit.conceptTitle || '觀念說明'}</h2>
          </div>
          <div class="card-body">
            ${parseMarkdown(unit.motivation)}
          </div>
        </section>
      ` : ''}

      <!-- Desmos 語法與發聲函數區塊 -->
      ${unit.mathModel ? `
        <section class="teaching-card">
          <div class="card-header">
            <span class="card-icon">🎛️</span>
            <h2 class="card-title">${unit.modelTitle || '發聲公式與語法'}</h2>
          </div>
          <div class="card-body">
            ${parseMarkdown(unit.mathModel)}
          </div>
        </section>
      ` : ''}

      <!-- 數學原理 / 延伸探究區塊 -->
      ${unit.mathConcept ? `
        <section class="teaching-card">
          <div class="card-header">
            <span class="card-icon">📐</span>
            <h2 class="card-title">${unit.mathConceptTitle || '數學原理'}</h2>
          </div>
          <div class="card-body">
            ${parseMarkdown(unit.mathConcept)}
          </div>
        </section>
      ` : ''}

      <!-- 課堂實作 -->
      ${unit.tasks && unit.tasks.length ? `
        <section class="teaching-card">
          <div class="card-header">
            <span class="card-icon">🎯</span>
            <h2 class="card-title">課堂動手操作</h2>
          </div>
          <div class="card-body">
            <ul class="task-checklist">
              ${unit.tasks.map((task, idx) => `
                <li class="task-checklist-item">
                  <input type="checkbox" id="task-${unit.id}-${idx}" class="task-checkbox">
                  <label for="task-${unit.id}-${idx}" class="task-text">${task}</label>
                </li>
              `).join('')}
            </ul>

            ${unit.tips ? `
              <div class="teacher-tips-box">
                <div class="tips-header">💡 課堂叮嚀</div>
                <div class="tips-body">${parseMarkdown(unit.tips)}</div>
              </div>
            ` : ''}
          </div>
        </section>
      ` : ''}

      <!-- 隨堂線上互動學習單 -->
      ${renderWorksheet(unit)}

      <!-- 單元前後切換導覽列 -->
      <nav class="unit-nav-footer">
        ${prevUnit ? `
          <a class="btn-nav-unit" href="#${prevUnit.id}">
            <span class="nav-unit-dir">← 上一單元</span>
            <span class="nav-unit-title">${prevUnit.id} ${prevUnit.title}</span>
          </a>
        ` : `<div class="btn-nav-unit disabled"><span class="nav-unit-dir">已是第一單元</span></div>`}

        ${nextUnit ? `
          <a class="btn-nav-unit" style="text-align: right;" href="#${nextUnit.id}">
            <span class="nav-unit-dir">下一單元 →</span>
            <span class="nav-unit-title">${nextUnit.id} ${nextUnit.title}</span>
          </a>
        ` : `<div class="btn-nav-unit disabled" style="text-align: right;"><span class="nav-unit-dir">全課程圓滿結束</span></div>`}
      </nav>
    `;

    mainContent.innerHTML = html;

    // 觸發 KaTeX 渲染數學公式（支援非同步重試機制）
    triggerMathRender(mainContent);

    // 綁定實作任務勾選效果
    const checkboxes = mainContent.querySelectorAll('.task-checkbox');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        const label = e.target.parentElement.querySelector('.task-text');
        if (label) {
          label.classList.toggle('done', e.target.checked);
        }
      });
    });

    // 初始化隨堂線上互動學習單
    initWorksheet(unit);

    // 滾動回頂端
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. 切換單元
  function switchUnit(unitId) {
    if (!COURSE_CONFIG.units[unitId]) return;
    currentUnitId = unitId;
    window.location.hash = unitId;

    // 更新側邊欄 active 狀態
    document.querySelectorAll('.unit-item').forEach(el => el.classList.remove('active'));
    const targetNav = document.getElementById(`nav-item-${unitId}`);
    if (targetNav) {
      targetNav.classList.add('active');
      // 確保其所屬模組群組處於展開狀態
      const parentGroup = targetNav.closest('.module-group');
      if (parentGroup && !parentGroup.classList.contains('open')) {
        parentGroup.classList.add('open');
      }
    }

    renderUnit(unitId);
  }

  // 5. 複製文字到剪貼簿
  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('複製失敗:', err);
      }
      document.body.removeChild(ta);
    }
  }

  // 6. Toast 提示
  function showToast(msg) {
    if (!toastMsg) return;
    toastMsg.textContent = msg;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 3000);
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 7. 綁定側邊欄開關
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener('click', () => {
      if (window.innerWidth <= 840) {
        sidebar.classList.toggle('mobile-open');
      } else {
        sidebar.classList.toggle('collapsed');
      }
    });
  }

  // 8. 監聽 Hash 改變（支援上一頁/下一頁與直達連結）
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && COURSE_CONFIG.units[hash] && hash !== currentUnitId) {
      switchUnit(hash);
    }
  });

  // 啟動應用
  initSidebar();
  const initHash = window.location.hash.replace('#', '');
  if (initHash && COURSE_CONFIG.units[initHash]) {
    switchUnit(initHash);
  } else {
    switchUnit("1-1");
  }
});
