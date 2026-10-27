/**
 * 音符中的數學 - 前端應用邏輯 (App.js)
 * 負責單元渲染、KaTeX 排版觸發、一鍵複製、導航切換與 Canvas 掛載
 */

document.addEventListener('DOMContentLoaded', () => {
  const sidebarNav = document.getElementById('sidebar-nav');
  const mainContent = document.getElementById('main-content');
  const sidebar = document.getElementById('sidebar');
  const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar');
  const toastMsg = document.getElementById('toast-msg');

  let currentUnitId = "1-1";

  // 行動版側邊欄抽屜開關邏輯
  function openMobileSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('mobile-open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleSidebar() {
    if (window.innerWidth <= 840) {
      if (sidebar.classList.contains('mobile-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    } else {
      sidebar.classList.toggle('collapsed');
    }
  }

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

    // 側邊欄頂部：課程首頁按鈕
    const homeEl = document.createElement('div');
    homeEl.className = `sidebar-home-item ${currentUnitId === 'home' ? 'active' : ''}`;
    homeEl.id = 'nav-item-home';
    homeEl.innerHTML = `
      <span class="sidebar-home-icon">🏠</span>
      <span class="sidebar-home-text">課程首頁與使用導引</span>
    `;
    homeEl.addEventListener('click', () => {
      switchUnit('home');
      if (window.innerWidth <= 840) {
        closeMobileSidebar();
      }
    });
    sidebarNav.appendChild(homeEl);

    const divider = document.createElement('div');
    divider.className = 'sidebar-nav-divider';
    sidebarNav.appendChild(divider);

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
            closeMobileSidebar();
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
    // 斜體 *text* (避免影響公式中的符號，先過濾加粗後再轉換)
    text = text.replace(/(^|[^*])\*([^*\n]+?)\*([^*]|$)/g, '$1<em>$2</em>$3');
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

      // 水平分隔線 (--- 或 ***)
      if (trimmed === '---' || trimmed === '***') {
        if (inList) {
          result.push(`</${listType}>`);
          inList = false;
        }
        result.push('<hr class="card-divider">');
        return;
      }

      // 若遇到已抽取保護之區塊（HTML 或 Display Math）或 blockquote 或 hr
      if (trimmed.startsWith('@@HTML_BLOCK_') || trimmed.startsWith('@@DISPLAY_MATH_') || trimmed.startsWith('<blockquote>') || trimmed.startsWith('<div') || trimmed.startsWith('<hr')) {
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
              <summary class="ws-solution-summary">💡 查看參考解析</summary>
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
          resEl.textContent = '✅ 完全正確！';
        } else {
          resEl.className = 'ws-check-result try-again';
          resEl.textContent = '💡 答案不符，請重新檢查或參考下方解析。';
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

    document.title = `${unit.id} ${unit.title} | 音符中的數學`;

    const hasDesmosUrl = Boolean(unit.desmosUrl && unit.desmosUrl.trim().length > 0);
    const desmosTarget = hasDesmosUrl ? unit.desmosUrl : "https://www.desmos.com/calculator";

    let html = `
      <!-- 單元頂部橫幅 -->
      <section class="unit-banner">
        <div class="banner-top-meta">
          <span class="banner-module-tag">${unit.moduleName}</span>
          ${hasDesmosUrl ? `
            <a href="${desmosTarget}" target="_blank" rel="noopener noreferrer" class="btn-banner-desmos" title="另開分頁開啟此單元 Desmos 互動教材">
              <span>🎛️</span>
              <span>開啟 Desmos 範本 ↗</span>
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

      <!-- Desmos 互動教材專屬引導卡片 (桌機與手機皆清晰顯眼) -->
      ${hasDesmosUrl ? `
        <section class="desmos-launcher-card">
          <div class="desmos-launcher-info">
            <div class="desmos-launcher-title">🎯 本單元專屬 Desmos 互動教材</div>
            <div class="desmos-launcher-desc">
              強烈建議點擊開啟！配合講義一邊聆聽真實音效、一邊調整滑桿觀察幾何波形。
            </div>
          </div>
          <a href="${unit.desmosUrl}" target="_blank" rel="noopener noreferrer" class="btn-desmos-launch">
            <span class="desmos-launch-icon">🎛️</span>
            <span>另開分頁開啟 Desmos 範本 ↗</span>
          </a>
        </section>
      ` : `
        <section class="desmos-launcher-card pending-card">
          <div class="desmos-launcher-info">
            <div class="desmos-launcher-title">⏳ 本單元 Desmos 專屬範本製作中</div>
            <div class="desmos-launcher-desc">
              老師正在打磨本單元專屬幾何樂譜。同學亦可先開啟空白 Desmos 計算機，自行輸入公式實驗！
            </div>
          </div>
          <a href="https://www.desmos.com/calculator" target="_blank" rel="noopener noreferrer" class="btn-desmos-launch btn-desmos-blank">
            <span class="desmos-launch-icon">🎛️</span>
            <span>開啟空白 Desmos 計算機 ↗</span>
          </a>
        </section>
      `}

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

      <!-- 數學模型 / 核心原理區塊 -->
      ${unit.mathModel ? `
        <section class="teaching-card">
          <div class="card-header">
            <span class="card-icon">🎛️</span>
            <h2 class="card-title">${unit.modelTitle || '核心原理與數學模型'}</h2>
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
                <div class="tips-header">💡 課堂小提醒</div>
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
        ` : `
          <a class="btn-nav-unit" href="#home">
            <span class="nav-unit-dir">← 回課程首頁</span>
            <span class="nav-unit-title">首頁與使用導引</span>
          </a>
        `}

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

  // 3.5 渲染課程首頁與使用導引
  function renderHome() {
    document.title = '音符中的數學 | 課程首頁與使用導引';

    // 模組簡介描述表
    const moduleDescriptions = {
      "module-1": "探索聲波頻率與振動物理，認識人耳等響度曲線，掌握 Desmos 發聲核心函數 <code>tone(f)</code>。",
      "module-2": "從畢達哥拉斯弦長比、純律大三度自然泛音，推導至十二平均律對數尺度與 440Hz 國際標準音。",
      "module-3": "建立音名指數函數，使用陣列列表儲存《小星星》旋律，透過向量運算完成一秒全曲移調。",
      "module-4": "運用高斯底數鋸齒波與分段討論函數製作斷音時值遮罩，並設計敲擊樂器等比阻尼衰減與電玩音效。",
      "module-5": "深入駐波倍頻物理，利用正弦三角函數傅立葉級數疊加方波、鋸齒波，合成豐富樂器音色。",
      "module-6": "三和弦向量矩陣、差頻干涉拍頻模型與平均律 vs 純律和聲純度物理檢驗。",
      "module-7": "李薩如幾何示波器、多聲部卡農延遲模型與 Desmos 畢業音樂專案獨立發表。"
    };

    let modulesHtml = COURSE_CONFIG.modules.map(mod => {
      const desc = moduleDescriptions[mod.id] || "涵蓋扎實的數學模型推導與 Desmos 課堂實作實驗。";
      const unitPills = mod.units.map(unitKey => {
        const u = COURSE_CONFIG.units[unitKey];
        if (!u) return '';
        return `
          <a href="#${u.id}" class="curriculum-unit-pill" title="${u.title}">
            <span class="pill-id">${u.id}</span>
            <span class="pill-title">${u.title.split('（')[0]}</span>
          </a>
        `;
      }).join('');

      return `
        <div class="curriculum-card">
          <div class="curriculum-card-header">
            <h3 class="curriculum-card-title">${mod.title}</h3>
            <span class="curriculum-badge">${mod.units.length} 個單元</span>
          </div>
          <p class="curriculum-desc">${desc}</p>
          <div class="curriculum-units-list">
            ${unitPills}
          </div>
        </div>
      `;
    }).join('');

    let homeHtml = `
      <div class="home-container">
        <!-- 首頁大橫幅 (Hero Banner) -->
        <header class="home-hero">
          <div class="hero-badge">高中跨領域創新選修課程</div>
          <h1 class="hero-title">🎵 音符中的數學</h1>
          <div class="hero-subtitle-en">Math in Musical Notes</div>
          <p class="hero-desc">
            數學不只是黑板上的公式推導，聲音也不只是空氣中的振動。<br>
            當高中數學的<strong>等比數列、對數尺度、高斯函數、週期函數、三角正弦波與傅立葉疊加</strong>，代入 Desmos 的 <code>tone(...)</code> 發聲引擎，每一道幾何算式都將化作真實可聽的動人樂章。
          </p>
          <div class="hero-author-box">
            <span class="author-label">課程研發與設計</span>
            <span class="author-name">國立臺灣師範大學數學系 賴奕成 老師</span>
          </div>
          <div class="hero-cta-group">
            <a href="#1-1" class="btn-hero-start">
              <span>🚀 立即啟程：探索第 1 單元</span>
              <span class="hero-arrow">→</span>
            </a>
            <a href="#home-guide" class="btn-hero-guide" id="btn-scroll-guide">
              <span>📖 查看使用指南與視窗設定</span>
            </a>
          </div>
        </header>

        <!-- 關鍵提醒卡：為什麼一定要開啟 Desmos 範本？ -->
        <section class="home-alert-card" id="home-guide">
          <div class="alert-card-header">
            <span class="alert-card-icon">⚡</span>
            <h2 class="alert-card-title">核心提醒：為什麼每單元都一定要點開【Desmos 範本】？</h2>
          </div>
          <div class="alert-card-body">
            <div class="alert-points-grid">
              <div class="alert-point-item">
                <div class="point-num">01</div>
                <div class="point-content">
                  <h3>這是一門「邊聽邊算」的實驗課</h3>
                  <p>光看講義上的文字公式，就像「看著樂譜卻不發出聲音」，會錯過 80% 最精彩的聽覺震撼。老師為每個單元都親手製作了專屬的 Desmos 幾何樂譜與動態音訊範本！</p>
                </div>
              </div>
              <div class="alert-point-item">
                <div class="point-num">02</div>
                <div class="point-content">
                  <h3>按播放鍵聽旋律，拉滑桿看波形</h3>
                  <p>點擊單元中的<strong>【開啟 Desmos 範本 ↗】</strong>，按下時間變數 $t$ 的播放鍵 ▶ 就能聽見音符；拖動滑桿更能親眼看見波形幾何收縮、倍頻諧波疊加的即時動態反饋。</p>
                </div>
              </div>
              <div class="alert-point-item">
                <div class="point-num">03</div>
                <div class="point-content">
                  <h3>在真實畫布上調整公式與創作</h3>
                  <p>每個範本都是現成的數學實驗場。同學可以直接在畫布上改寫頻率數列、替換包絡衰減函數、甚至合成自己的專屬和弦，把數學變成你的樂器！</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 雙重視窗操作指南 -->
        <section class="home-section">
          <div class="section-title-wrap">
            <span class="section-icon">💻</span>
            <h2 class="section-title">建議學習模式：雙重視窗操作指南</h2>
          </div>
          <div class="split-screen-card">
            <div class="split-screen-visual">
              <div class="split-pane pane-left">
                <div class="pane-header">📄 左側：本課程講義平台 (50%)</div>
                <div class="pane-body">
                  <ul>
                    <li>📖 閱讀核心原理與幾何模型推導</li>
                    <li>🎯 循序完成課堂動手操作清單</li>
                    <li>📝 即時填寫線上互動學習單與核對</li>
                  </ul>
                </div>
              </div>
              <div class="split-divider">⇋</div>
              <div class="split-pane pane-right">
                <div class="pane-header">🎛️ 右側：Desmos 繪圖計算機 (50%)</div>
                <div class="pane-body">
                  <ul>
                    <li>🎵 點開專屬教材範本，按下播放鍵發聲</li>
                    <li>🎚️ 拖曳參數滑桿，直觀體會聲波變化</li>
                    <li>💾 點擊右上角 Save / Share 複製成果短網址</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="split-screen-tips">
              <strong>💡 行動裝置（手機 / 平板）小撇步：</strong>
              點擊單元中的「開啟 Desmos 範本 ↗」會在瀏覽器新分頁中載入繪圖機。建議在閱讀講義與操作計算機兩分頁間自由切換；若手機支援「分割畫面」，亦可將講義與 Desmos 上下並排操作！
            </div>
          </div>
        </section>

        <!-- 平台三大互動功能說明 -->
        <section class="home-section">
          <div class="section-title-wrap">
            <span class="section-icon">🛠️</span>
            <h2 class="section-title">講義平台三大功能操作指南</h2>
          </div>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3 class="feature-title">1. 課堂動手操作清單</h3>
              <p class="feature-desc">每個單元精心設計 3~4 個具體步驟。輸入算式、調整參數、勾選核對，一步一步累積手感，絕不迷航。</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📝</div>
              <h3 class="feature-title">2. 隨堂線上互動學習單</h3>
              <p class="feature-desc">非開放式題目均附有「防呆即時核對」；卡關時可展開「老師詳細解析」了解解題思維，且作答提示絕不提前破梗！</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💾</div>
              <h3 class="feature-title">3. 作品短網址與一鍵成果複製</h3>
              <p class="feature-desc">在學習單底部貼上個人的 Desmos 存檔短網址，點擊「一鍵複製學習單成果」，能把所有作答整齊排版，直接貼到作業區繳交！</p>
            </div>
          </div>
        </section>

        <!-- 全課程章節藍圖 (7大模組總覽) -->
        <section class="home-section">
          <div class="section-title-wrap">
            <span class="section-icon">🗺️</span>
            <h2 class="section-title">全課程七大模組學習藍圖</h2>
          </div>
          <div class="curriculum-grid">
            ${modulesHtml}
          </div>
        </section>

        <!-- 底部開始探索區塊 -->
        <footer class="home-footer-cta">
          <div class="footer-cta-text">準備好讓數學發出聲音了嗎？</div>
          <a href="#1-1" class="btn-hero-start btn-footer-start">
            <span>🚀 開始探索第一單元：頻率與音高 →</span>
          </a>
        </footer>
      </div>
    `;

    mainContent.innerHTML = homeHtml;
    triggerMathRender(mainContent);

    // 綁定平滑滾動按鈕
    const btnScroll = document.getElementById('btn-scroll-guide');
    if (btnScroll) {
      btnScroll.addEventListener('click', (e) => {
        e.preventDefault();
        const guideEl = document.getElementById('home-guide');
        if (guideEl) guideEl.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // 滾動回頂端
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. 切換單元
  function switchUnit(unitId) {
    if (unitId === 'home') {
      currentUnitId = 'home';
      window.location.hash = 'home';

      // 更新側邊欄 active 狀態
      document.querySelectorAll('.unit-item').forEach(el => el.classList.remove('active'));
      const homeNav = document.getElementById('nav-item-home');
      if (homeNav) homeNav.classList.add('active');

      renderHome();
      return;
    }

    if (!COURSE_CONFIG.units[unitId]) return;
    currentUnitId = unitId;
    window.location.hash = unitId;

    // 清除首頁 active 狀態
    const homeNav = document.getElementById('nav-item-home');
    if (homeNav) homeNav.classList.remove('active');

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

  // 7. 綁定側邊欄開關、遮罩與關閉按鈕
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener('click', toggleSidebar);
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
  }
  if (btnCloseSidebar) {
    btnCloseSidebar.addEventListener('click', closeMobileSidebar);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) {
      closeMobileSidebar();
    }
  });

  // 8. 監聽 Hash 改變（支援上一頁/下一頁、課程首頁與直達連結）
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'home' || !hash) {
      if (currentUnitId !== 'home') switchUnit('home');
    } else if (COURSE_CONFIG.units[hash] && hash !== currentUnitId) {
      switchUnit(hash);
    }
  });

  // 啟動應用
  initSidebar();
  const initHash = window.location.hash.replace('#', '');
  if (initHash && COURSE_CONFIG.units[initHash]) {
    switchUnit(initHash);
  } else if (initHash === 'home') {
    switchUnit('home');
  } else {
    switchUnit('home');
  }
});
