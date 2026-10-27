/**
 * 音符中的數學 (Math in Musical Notes) - 課程設定與單元資料庫
 * 
 * 本檔案為網站的核心資料中心（七大章節課程資料庫）。
 * 後續要新增、修改任何一堂課的教學內容、公式或 Desmos 連結，只需直接在此修改對應單元即可。
 */

const COURSE_CONFIG = {
  courseTitle: "音符中的數學",
  courseSubtitle: "高中跨領域數學與聲音實驗室",
  version: "20261025_1500",
  targetAudience: "高二、高三跨領域選修／加深加廣／彈性學習課程",
  workflowTip: "雙視窗工作流：左側課程網站閱讀與複製算式，右側 Desmos 登入 Google 帳號實作存檔。",
  defaultDesmosUrl: "https://www.desmos.com/calculator",
  
  // 課程章節目錄定義
  modules: [
    {
      id: "module-1",
      title: "一、單音與發聲",
      units: ["1-1", "1-2"]
    },
    {
      id: "module-2",
      title: "二、音程與律學",
      units: ["2-1", "2-2", "2-3", "supp-theory", "supp-just", "2-4"]
    },
    {
      id: "module-3",
      title: "三、樂譜與旋律",
      units: ["3-1", "3-2"]
    },
    {
      id: "module-4",
      title: "四、節奏與動態",
      units: ["4-1", "4-2", "4-3", "4-4"]
    },
    {
      id: "module-5",
      title: "五、音色與物理",
      units: ["5-1", "5-2", "5-3", "5-4"]
    },
    {
      id: "module-6",
      title: "六、和弦與多聲部",
      units: ["6-1", "6-2", "6-3", "6-4"]
    },
    {
      id: "module-7",
      title: "七、視覺音遊與演算法",
      units: ["7-1", "7-2", "7-3", "7-4", "7-5"]
    }
  ],

  // 27 個單元的詳細內容資料庫
  units: {
    // ==========================================
    // 一、單音與發聲
    // ==========================================
    "1-1": {
      id: "1-1",
      moduleId: "module-1",
      moduleName: "一、單音與發聲",
      title: "聲音三要素與 Desmos 基礎發聲",
      conceptTitle: "聲音三要素",
      modelTitle: "Desmos 發聲函數",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/qc1oj3mnlb",
      motivation: `
在進入數學建模與寫作樂譜之前，我們先複習決定聲音聽感的「三大要素」：

1. **音量（Loudness） $\\to$ 振幅（Amplitude）**：
   - 代表聲波振動的強弱幅度。
   - 振幅越大，聲音越響亮；振幅越小，聲音越微弱。
2. **音高（Pitch） $\\to$ 頻率（Frequency, $f$）**：
   - 代表物體每秒振動的次數，單位為赫茲（$\\text{Hz}$）。
   - 振動頻率越高，聲音聽起來越高；頻率越低，聲音越低沉。
3. **音色（Timbre） $\\to$ 波形（Waveform）**：
   - 代表聲波振動的形狀結構（例如正弦波、方波、鋸齒波，或不同倍頻泛音疊加的波形）。
   - 即使樂器發出相同的音量（相同振幅）與音高（相同頻率），耳朵仍能辨別樂器種類，此由波形決定。
      `,
      mathModel: `
在 Desmos 繪圖計算機中，發出純音的核心函數語法為：
$$\\operatorname{tone}(\\text{頻率}, \\text{音量})$$

- **單參數（省略音量）**：
  - $\\operatorname{tone}(440)$：僅輸入頻率，系統以預設音量（約 $0.6$）發出標準 A 音。
- **雙參數（指定音量）**：
  - $\\operatorname{tone}(440, 0.5)$：第二個參數指定音量（範圍為 $0 \\sim 1$，$0.5$ 代表中等音量）。
- **動態變數滑桿**：
  - $\\operatorname{tone}(a, b)$：將頻率與音量交由滑桿 $a$ 與 $b$ 調節。

**注意事項：Desmos 發聲開關**
若聽不到聲音，請確認以下兩個開關皆已開啟：
1. 畫面最左上角的「揚聲器總開關」。
2. 算式左側圓圈內的「音符圖標」（需亮起，不可為反灰靜音）。
      `,
      tasks: [
        "1. 視窗分割：將螢幕切分為左右視窗（左側講義，右側 Desmos 工作區）。",
        "2. 雲端存檔：於 Desmos 登入個人 Google 帳號，並將圖形命名為「01_聲音實驗」存檔。",
        "3. 基礎發聲：輸入 tone(440) 進行發聲測試（亦可輸入 tone(440, 0.5) 指定音量），確認左上角揚聲器與算式左側音符圖標皆開啟。",
        "4. 滑桿控制：新開一行輸入 tone(a, b) 建立滑桿，設定頻率 a 範圍 50~2000（步長 1）、音量 b 範圍 0~1（步長 0.05），觀察音高與音量變化。",
        "5. 定音測試：將音量 b 固定在 0.5，手動拉動頻率 a 至 440Hz（標準音 A4）。",
        "6. 整理收納：點擊「+」號建立資料夾並命名為「單音與發聲」，將算式拖入收合。"
      ],
      formula: `// 1. 最簡單音發聲 (省略音量，系統以預設音量發聲)\n\\operatorname{tone}(440)\n\n// 2. 雙參數滑桿動態發聲\na = 440\nb = 0.5\n\\operatorname{tone}(a, b)`,
      tips: `
- **發聲排查**：若聽不到聲音，請檢查左上角揚聲器開關與算式左側音符圖標是否開啟。
- **硬體測試**：可先輸入 tone(440) 測試電腦放音或耳機是否正常。
- **設備音量**：操作時以適當音量為準，避免音量過大。
- **工具功能**：若在 Desmos 介面找不到部分功能（如計時器 Ticker），請先確認是否已登入個人帳號。
      `
    },

    "1-2": {
      id: "1-2",
      moduleId: "module-1",
      moduleName: "一、單音與發聲",
      title: "列表循序播放與音樂演奏原理",
      conceptTitle: "音樂演奏原理",
      modelTitle: "列表發聲語法",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/gxgub5desf",
      motivation: `
在 Desmos 中，可用中括號 [ ] 建立「列表（List）」，將多個頻率依序或同時組織起來：
- **多音同時發聲（和弦）**：列表中放入多個頻率，電腦會同時發聲疊加。
- **單音循序演奏（旋律）**：配合時間變數 $t$，以 $\\operatorname{tone}(L[t])$ 依序提取列表中的音符發聲。
      `,
      mathModel: `
**1. 多音同時發聲（和弦）**：
$$\\operatorname{tone}([440, 880])$$
- 列表中包含多個頻率時，Desmos 同時發出 440Hz 與 880Hz 兩個八度純音。

**2. 循序提取單音（旋律播放）**：
$$L = [440, 880, 220, 110, 1760], \\quad t = 1, \\quad \\operatorname{tone}(L[t])$$
- $L[t]$ 代表提取列表中第 $t$ 個音符發聲。
- 隨時間滑桿 $t$ 遞增，音符依序輪流發聲。
      `,
      tasks: [
        "1. 雙音同時播放：輸入 tone([440, 880])，聆聽兩音同時疊加的八度和聲。",
        "2. 建立旋律列表：定義包含 5 個頻率的列表 L = [440, 554, 659, 880, 440]。",
        "3. 時間變數循序提取：輸入 tone(L[t])，新增時間滑桿 t（範圍 1 到 5，步長 1），按下播放鍵觀察音符按時間依序發聲。",
        "4. 課堂旋律聽辨：聆聽課堂播放的示範旋律，並完成隨堂學習單。"
      ],
      formula: `// 1. 同時播放多個音符 (和弦)\n\\operatorname{tone}([440, 880])\n\n// 2. 列表旋律循序播放 (L[t] 代表只輸出第 t 個音符)\nL = [440, 880, 220, 110, 1760]\nt = 1\n\\operatorname{tone}(L[t])`,
      tips: `
- **滑桿播放設定**：點擊時間滑桿 $t$ 左側設定圖標，可調整播放速度與循環模式。
- **列表索引規則**：在 Desmos 中，列表的第一個元素索引為 $1$；若 $t$ 超出列表長度範圍，系統將無聲。
      `,
      worksheet: {
        title: "隨堂學習單 1：課堂旋律聽辨與陣列演奏原理",
        questions: [
          {
            id: "q1_songs",
            title: "課堂旋律聽辨",
            type: "radio",
            prompt: "聆聽老師在課堂播放的 3 首示範旋律，請記錄你聽辨出幾首：",
            options: [
              "0 首",
              "1 首",
              "2 首",
              "3 首（全部辨認出）"
            ],
            solution: "課堂播放的 3 首旋律分別為：《春日影》、《我很好騙》與《Lemon》。\n在 Desmos 中，只需一組頻率列表 $L$ 與時間滑桿 $t$，配合 `tone(L[t])`，電腦即可依序讀取頻率發聲，自動演奏出旋律。",
            formatAnswer: (ans) => `課堂旋律聽辨結果：【${ans}】。\n聽辨解析：透過 Desmos 列表 L[t] 與時間變數 t，可依序提取頻率發聲，自動演奏完整旋律。`
          },
          {
            id: "q2_list_syntax",
            title: "多音和弦與循序單音之語法差異",
            type: "textarea",
            prompt: "在 Desmos 中，`tone([440, 880])` 與 `tone(L[t])` 兩種語法在發聲上有何不同？時間滑桿 $t$ 在其中扮演什麼角色？",
            placeholder: "例如：列表放多個數字會同時發聲形成和弦；而 L[t] 透過 t 依序取出單一音符播放旋律...",
            solution: "1. `tone([440, 880])`：列表內放置多個頻率時，電腦同時發聲形成「和弦」。\n2. `tone(L[t])`：加上索引 $[t]$ 後，每次只提取列表中第 $t$ 個音符發聲；隨時間滑桿 $t$ 遞增，依序演奏出「旋律」。",
            formatAnswer: (ans) => `語法發聲差異說明：\n${ans}\n\n（參考重點：列表放多個頻率為同時發聲的和弦；配合索引 L[t] 與時間滑桿 t 則為依序發聲的旋律。）`
          }
        ]
      }
    },

    // ==========================================
    // 二、音程與律學
    // ==========================================
    "2-1": {
      id: "2-1",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "雙音協和、拍頻盲測與行進波干涉",
      conceptTitle: "雙音與拍頻現象",
      modelTitle: "拍頻物理與動態波形",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/qojryca0zr",
      motivation: `
當兩個頻率相近的聲音同時發出時，波形在空氣中疊加，會產生週期性的同相放大與反相抵消，聽起來忽大忽小——這就是物理學上的「拍頻（Beats）」。
      `,
      mathModel: `
**拍頻（Beats）的物理本質：波形疊加與干涉**

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/j4sqzyfwfx?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

- 🔵 **藍線（波 1）**：基準頻率 $f_1 = 1$ 的聲波向前傳播。
- 🟢 **綠線（波 2）**：頻率微差 $f_2 = 1.1$ 的聲波，波峰隨時間錯位。
- 🔴 **紅線（合成波）**：兩道聲波疊加的振動結果（$y_3 = y_1 + y_2$）。
  - **相長干涉**：波峰重疊時振幅加倍，聲音變大。
  - **相消干涉**：波峰對上波谷時互相抵消，聲音變小。

**思考問題**：
1. 觀察下方紅線，從一次聲音最大到下一次聲音最大，間隔時間大約是多少？（這就是拍頻的週期）。
2. 調整滑桿 $f_2$：當兩道波的頻率越來越接近時，忽大忽小的週期是變長還是變短？為什麼？
      `,
      mathConceptTitle: "數學原理：合成波週期與最小公倍數",
      mathConcept: `
**操場跑步問題**
兩人同時在操場起跑：
- 藍波（基準波）：每圈 $1$ 秒（週期 $T_1 = 1$）。
- 綠波（超車波）：跑得稍快，每圈 $\\frac{10}{11}$ 秒（週期 $T_2 = \\frac{10}{11}$）。

**何時會在起點重新碰頭？**
兩人何時剛好都跑完整數圈，在起點重新波峰重合？
- 藍波跑了 **$10$ 圈**（花 $10$ 秒）。
- 綠波跑了 **$11$ 圈**（花 $10$ 秒）。

兩者在第 **$10$ 秒** 剛好都走完整數圈，在起點重新重合。這段循環時間就是合成波忽大忽小的週期。

**最小公倍數（LCM）**
求兩道波「同時走完整數個週期」的最短時間，本質上就是求週期的最小公倍數。

**思考問題**：
若綠波週期改為 $\\frac{100}{101}$ 秒，兩者需要幾秒才會在起點重新碰頭？合成波忽大忽小的週期會變長還是變短？
      `,
      tasks: [
        "1. 和諧頻率比探索：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【和諧音】並播放 tone([220, 220a])。拖曳比例滑桿 a（1 到 4），觀察停在 a = 2（頻率比 1:2）與 a = 3（頻率比 1:3）時的融合聽感。",
        "2. 人耳聽音盲測：展開第 2 個資料夾【人耳聲音分辨程度】。一人戴耳機閉眼，由同桌夥伴隨機個別播放 tone(442) 與 tone(442b)。若能聽出高低差異，則將滑桿 b 調小再測，記錄能分辨的最小比例 b。",
        "3. 微音差與拍頻現象：保持極小音差 b（例如 b = 1.0004），同時播放兩個聲音，聆聽微小音差如何轉化為週期性忽大忽小的音量起伏（拍頻 Beats）。",
        "4. 動態波形干涉實作：展開第 3 個資料夾【圖示為何會有此現象】（或直接操作上方內嵌畫布），按下時間滑桿 t 的播放鍵 ⏵。觀察藍波 y_1 與綠波 y_2 疊加過程，確認紅線合成波 y_3 在同相時振幅疊加、反相時振幅抵消的干涉現象，並拖曳滑桿 f_2 觀察起伏節奏的變化。"
      ],
      formula: `// 📁 1. 和諧音 (頻率比例滑桿 a)\n\\operatorname{tone}([220, 220a])\na = 1\n\n// 📁 2. 人耳聲音分辨程度 (微音盲測與拍頻，滑桿 b)\n\\operatorname{tone}(442)\n\\operatorname{tone}(442b)\nb = 1.0004\n\n// 📁 3. 圖示為何會有此現象 (行進波干涉動態模擬)\nt = 0\nf_1 = 1\nf_2 = 1.1\ny_1 = \\sin(f_1(x-t))\ny_2 = \\sin(f_2(x-t))\ny_3 = y_1 + y_2`,
      tips: `
- **整數比與聽感**：$a=2$（$1:2$ 完全八度）與 $a=3$（$1:3$ 純五度泛音）因為合成波週期極短，波形重合頻繁，聽感平穩和諧。
- **盲測專注聽感**：個別播放兩音時，注意音高微弱的升降變化。
- **拍頻特徵**：當兩頻率相差極小（例如 1~2Hz）且同時發聲時，大腦不會聽到兩個獨立音高，而是聽到音量忽大忽小的週期性波動。
- **波形干涉**：同相（波峰重疊）振幅相加；反相（波峰對波谷）振幅抵消。
      `,
      worksheet: {
        title: "隨堂學習單 2：雙音和諧比與人耳辨音極限",
        questions: [
          {
            id: "q2_ratio",
            title: "雙音頻率比探索（1:2 與 1:3 聽感分析）",
            type: "textarea",
            prompt: "在 Desmos 第 1 個資料夾【和諧音】中播放 `tone([220, 220a])`，拉動比例滑桿 $a$（從 1 到 4）。\n將滑桿停在 $a = 2$（頻率比 $1:2$）與 $a = 3$（頻率比 $1:3$），聽聽看聲音有什麼特點？寫下你的聽感觀察。",
            placeholder: "例如：當 a = 2 時，兩個音高度融合，聽起來像同一個音；當 a = 3 時，聲音純淨開闊...",
            solution: "當頻率比為簡單整數比時，兩道波波峰完全重合的週期極短，拍頻消除，聽感穩定和諧：\n- 1:2：完全八度（兩音融合成一體）。\n- 1:3：純五度的泛音（聲音開闊純淨）。",
            formatAnswer: (ans) => `1:2 與 1:3 聽感分析：\n${ans}\n\n（核心解析：頻率比為 1:2（八度）與 1:3（五度泛音）時，拍頻消除，聲音融為一體，展現簡單整數比的和諧特性。）`
          },
          {
            id: "q3_jnd",
            title: "同桌盲測：人耳聽音辨識極限與拍頻",
            type: "textarea",
            prompt: "兩人一組合作盲測：一人戴耳機閉眼，由同桌夥伴在第 2 個資料夾【人耳聲音分辨程度】中，隨機個別播放 `tone(442)` 與 `tone(442b)`。\n記錄你們測出「還能分辨高低差異的最小比例 $b$」是多少？並說明當兩音同時播放時聽到了什麼現象。",
            placeholder: "例如：我們測出最小能分辨的比例是 b = 1.005。當 b 更小時分不出高低；但同時播放時，會聽到音量忽大忽小的拍頻波動...",
            solution: "在 442Hz 附近，未經專業訓練的人耳辨識高低差異極限約在 2~3Hz（比例約 $b = 1.005$）。當兩音差異極小時，個別聽難以辨識高低；但同時播放時，聲波干涉會產生忽大忽小的週期性拍頻（Beats）。",
            formatAnswer: (ans) => `同桌盲測結果與聽感：\n${ans}\n\n（聲學解析：在 442Hz 附近，一般人耳辨識高低極限約 2~3Hz。差異極小時，同時播放會轉化為拍頻現象。）`
          }
        ]
      }
    },

    "2-2": {
      id: "2-2",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "畢達哥拉斯五度相生律與五聲音階",
      conceptTitle: "五度相生律與八度折回",
      modelTitle: "五度相生推導流程與比例",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/kklcngvj8a",
      motivation: `
畢達哥拉斯發現弦長與音高的比例關係：

**一、 為什麼 1:2 最和諧？**
- 頻率比 **$1:2$**：合成波每 $1$ 個循環就完全重合一次。除了同音（$1:1$）之外，這是週期最短的比例，兩音完全融合，聽起來如同同一個音。
- 音樂上將 $1:2$ 定義為「高八度」，並以此劃定音階探索範圍：**所有音符的頻率比都落在 1 ~ 2 之間**。

**二、 從 1:3 思考音階建造：**
- 除了 $1:1$ 與 $1:2$ 之外，下一個最簡單的整數比就是 **$1:3$**。
- 但倍數 $3$ 已經超過八度範圍（大於 2）。
- 將其除以 2 折回 1 ~ 2 之間，得到頻率比 **$1 : \\dfrac{3}{2}$**（音樂上稱為「純五度」）。

**三、 畢達哥拉斯五度相生規則：**
1. **規則一：從 1 開始，每次乘以 $\\dfrac{3}{2}$**（純五度向上相生）。
2. **規則二：如果數值大於 2 就除以 2**（折回 1 ~ 2 的八度範圍）。

連續相生五次後，便推導出 5 個和諧的頻率比例。
      `,
      mathModel: `
**五度相生律推導流程（每次乘 $\\frac{3}{2}$，超過 2 則除以 2）**

<div class="scale-derivation-card">
  <svg class="scale-svg" viewBox="0 0 860 215" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="scale-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 1 2 L 7 5 L 1 8 z" fill="#c26d36" />
      </marker>
    </defs>
    
    <!-- 頂部相生弧線與 ×3/2 -->
    <path d="M 112 52 Q 172 16 232 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="172" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 288 50 Q 345 16 402 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="345" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 458 50 Q 515 16 572 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="515" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 628 50 Q 685 16 742 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="685" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>

    <!-- 第 1 音 -->
    <text x="90" y="85" text-anchor="middle" font-size="28" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">1</text>
    <text x="90" y="114" text-anchor="middle" font-size="13" font-weight="600" fill="#456854">第 1 音</text>
    <line x1="90" y1="124" x2="90" y2="152" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2" />
    <rect class="badge-start" x="40" y="156" width="100" height="26" rx="13" fill="#eef7f2" stroke="#c8e6d4" />
    <text class="badge-text-start" x="90" y="173" text-anchor="middle" font-size="12" font-weight="600" fill="#2d6a4f">起點 (基準音)</text>

    <!-- 第 2 音 -->
    <text x="260" y="73" text-anchor="middle" font-size="20" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">3</text>
    <line x1="244" y1="80" x2="276" y2="80" stroke="#2b2723" stroke-width="2.2" stroke-linecap="round" />
    <text x="260" y="99" text-anchor="middle" font-size="20" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">2</text>
    <text x="260" y="122" text-anchor="middle" font-size="13" font-weight="600" fill="#456854">第 2 音</text>
    <line x1="260" y1="130" x2="260" y2="152" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2" />
    <rect class="badge-neutral" x="202" y="156" width="116" height="26" rx="13" fill="#f5f4f0" stroke="#e0ded9" />
    <text class="badge-text-neutral" x="260" y="173" text-anchor="middle" font-size="12" fill="#666">小於 2，直接保留</text>

    <!-- 第 3 音 -->
    <text x="430" y="73" text-anchor="middle" font-size="20" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">9</text>
    <line x1="414" y1="80" x2="446" y2="80" stroke="#2b2723" stroke-width="2.2" stroke-linecap="round" />
    <text x="430" y="99" text-anchor="middle" font-size="20" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">8</text>
    <text x="430" y="122" text-anchor="middle" font-size="13" font-weight="600" fill="#456854">第 3 音</text>
    <line x1="430" y1="130" x2="430" y2="142" stroke="#d97736" stroke-width="1.5" stroke-dasharray="3,2" />
    <text x="430" y="153" text-anchor="middle" font-size="11" fill="#7d756d" font-family="'JetBrains Mono', monospace">3/2 × 3/2 = 9/4 ＞ 2</text>
    <rect class="badge-warn" x="338" y="160" width="184" height="26" rx="13" fill="#fef3eb" stroke="#fcd3b8" />
    <text class="badge-text-warn" x="430" y="177" text-anchor="middle" font-size="12" font-weight="bold" fill="#b85d19">超過 2 所以除以 2 → 9/8</text>

    <!-- 第 4 音 -->
    <text x="600" y="73" text-anchor="middle" font-size="19" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">27</text>
    <line x1="580" y1="80" x2="620" y2="80" stroke="#2b2723" stroke-width="2.2" stroke-linecap="round" />
    <text x="600" y="99" text-anchor="middle" font-size="19" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">16</text>
    <text x="600" y="122" text-anchor="middle" font-size="13" font-weight="600" fill="#456854">第 4 音</text>
    <line x1="600" y1="130" x2="600" y2="152" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2" />
    <rect class="badge-neutral" x="542" y="156" width="116" height="26" rx="13" fill="#f5f4f0" stroke="#e0ded9" />
    <text class="badge-text-neutral" x="600" y="173" text-anchor="middle" font-size="12" fill="#666">小於 2，直接保留</text>

    <!-- 第 5 音 -->
    <text x="770" y="73" text-anchor="middle" font-size="19" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">81</text>
    <line x1="750" y1="80" x2="790" y2="80" stroke="#2b2723" stroke-width="2.2" stroke-linecap="round" />
    <text x="770" y="99" text-anchor="middle" font-size="19" font-weight="bold" fill="#2b2723" font-family="'JetBrains Mono', monospace, sans-serif">64</text>
    <text x="770" y="122" text-anchor="middle" font-size="13" font-weight="600" fill="#456854">第 5 音</text>
    <line x1="770" y1="130" x2="770" y2="142" stroke="#d97736" stroke-width="1.5" stroke-dasharray="3,2" />
    <text x="770" y="153" text-anchor="middle" font-size="11" fill="#7d756d" font-family="'JetBrains Mono', monospace">27/16 × 3/2 = 81/32 ＞ 2</text>
    <rect class="badge-warn" x="674" y="160" width="192" height="26" rx="13" fill="#fef3eb" stroke="#fcd3b8" />
    <text class="badge-text-warn" x="770" y="177" text-anchor="middle" font-size="12" font-weight="bold" fill="#b85d19">超過 2 所以除以 2 → 81/64</text>
  </svg>
</div>

---

**依音高由低到高排序（五聲音階）**：

將推導出的比值由小到大排列（最後補上高八度 $2$）：
$$
1, \\quad \\dfrac{9}{8}, \\quad \\dfrac{81}{64}, \\quad \\dfrac{3}{2}, \\quad \\dfrac{27}{16}, \\quad 2
$$

<div class="scale-table-wrap">
  <table class="scale-table">
    <tbody>
      <tr>
        <th>音高比值</th>
        <td>$1$</td>
        <td>$\\dfrac{9}{8}$</td>
        <td>$\\dfrac{81}{64}$</td>
        <td>$\\dfrac{3}{2}$</td>
        <td>$\\dfrac{27}{16}$</td>
        <td>$2$</td>
      </tr>
      <tr class="scale-name-row">
        <th>對應音名</th>
        <td>宮</td>
        <td>商</td>
        <td>角</td>
        <td>徵</td>
        <td>羽</td>
        <td>高音宮</td>
      </tr>
    </tbody>
  </table>
</div>

*(以基準音 $263\\text{Hz}$ 為例，各音頻率即為基準頻率乘上該比例)*
      `,
      tasks: [
        "1. 推導流程觀察：觀察上方生律圖解，確認「每次乘 3/2、超過 2 則除以 2」的運算步驟，並理解前 5 個音的比例由來（1, 3/2, 9/8, 27/16, 81/64）。",
        "2. 五聲音階階梯播放：開啟 Desmos 範本第一資料夾（基準音設為 263Hz）。依序播放五個比值：tone(263 * 1), tone(263 * 9/8), tone(263 * 81/64), tone(263 * 3/2), tone(263 * 27/16)，聆聽由低到高的五聲音階（宮、商、角、徵、羽）。",
        "3. 《滄海一聲笑》旋律演奏：範本第二資料夾使用英文變數代表五個音（C=宮, D=商, E=角, G=徵, A=羽）。拉動滑桿 t=0 播放陣列 L，觀察五聲音階由高到低倒序（羽、徵、角、商、宮）的旋律線條。",
        "4. 即興排列測試：隨意調整陣列 L 中的音符順序，觀察五聲音階因避開相鄰半音碰撞，任意組合皆不易刺耳的聽覺特點。"
      ],
      formula: `// 1. 五聲音階純分數發聲 (以基準音 263Hz 為例，由低到高排列)
\\operatorname{tone}(263 \\cdot 1)            // 宮 (基準音 1)
\\operatorname{tone}(263 \\cdot \\frac{9}{8})        // 商 (9/8)
\\operatorname{tone}(263 \\cdot \\frac{81}{64})      // 角 (81/64)
\\operatorname{tone}(263 \\cdot \\frac{3}{2})        // 徵 (3/2)
\\operatorname{tone}(263 \\cdot \\frac{27}{16})      // 羽 (27/16)

// 2. Desmos 樂曲變數設定 (因 Desmos 僅支援英文變數，暫借代號表示五聲)
C = 263                  // 宮 (基準音)
D = 263 \\cdot \\frac{9}{8}       // 商
E = 263 \\cdot \\frac{81}{64}     // 角
G = 263 \\cdot \\frac{3}{2}       // 徵
A = 263 \\cdot \\frac{27}{16}     // 羽
A_2 = \\frac{A}{2}              // 低音羽 (A/2)
G_2 = \\frac{G}{2}              // 低音徵 (G/2)

// 3. 《滄海一聲笑》五聲樂譜 (羽 徵 角 商 宮 倒序開頭)
L = [A, G, E, D, C, C, 0, 0, E, E, D, C, A_2, G_2, G_2, 0, 0, G_2, A_2, G_2, A_2, C, D, E, G, A, G, E, D, C, C]
t = 0
\\operatorname{tone}(L[t])`,
      tips: `
- **變數命名**：Desmos 變數僅支援英文字母，因此暫借 C, D, E, G, A 對應宮、商、角、徵、羽。
- **生律順序 vs 音階順序**：生律順序是數學計算的先後（$1 \\to 3/2 \\to 9/8 \\to 27/16 \\to 81/64$）；音階順序則是頻率由小到大的排列（$1, 9/8, 81/64, 3/2, 27/16, 2$）。
- **五聲特點**：五聲音階抽離了小二度（半音）摩擦，音程間距較大，排列時不易出現刺耳撞音。
      `,
      worksheet: {
        title: "隨堂學習單 1：五聲音階手算與八度歸一任務",
        questions: [
          {
            id: "q4_pentatonic",
            title: "五度相生律之八度折半推導計算",
            type: "text",
            prompt: "畢達哥拉斯音律遵循兩大規則：① 從 1 開始每次乘以 3/2；② 若大於 2 則除以 2（折回八度內）。寫出前 5 個音的推導步驟，並將這 5 個分數由小到大排列（寫成分數比值）：",
            placeholder: "請填入 5 個分數比值，例如：1 : 9/8 : 81/64 : 3/2 : 27/16",
            expected: "1 : 9/8 : 81/64 : 3/2 : 27/16 | 1:9/8:81/64:3/2:27/16",
            solution: "推導過程：\n1. 第 1 音：$1$\n2. 第 2 音：$1 \\times \\dfrac{3}{2} = \\dfrac{3}{2}$（小於 2，保留）\n3. 第 3 音：$\\dfrac{3}{2} \\times \\dfrac{3}{2} = \\dfrac{9}{4} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{9}{8}$\n4. 第 4 音：$\\dfrac{9}{8} \\times \\dfrac{3}{2} = \\dfrac{27}{16}$（小於 2，保留）\n5. 第 5 音：$\\dfrac{27}{16} \\times \\dfrac{3}{2} = \\dfrac{81}{32} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{81}{64}$\n\n**由小到大排序**：$1 < \\dfrac{9}{8} < \\dfrac{81}{64} < \\dfrac{3}{2} < \\dfrac{27}{16}$（依序對應宮、商、角、徵、羽）。",
            formatAnswer: (ans) => `五度相生推導步驟：\n1. 第 1 音：1\n2. 第 2 音：1 × (3/2) = 3/2（小於 2 保留）\n3. 第 3 音：(3/2) × (3/2) = 9/4 > 2，除以 2 得 9/8\n4. 第 4 音：(9/8) × (3/2) = 27/16（小於 2 保留）\n5. 第 5 音：(27/16) × (3/2) = 81/32 > 2，除以 2 得 81/64\n\n排序結果：\n學生填答：${ans}\n標準比例：1 : 9/8 : 81/64 : 3/2 : 27/16（依序對應宮、商、角、徵、羽）`
          },
          {
            id: "q5_penta_reflection",
            title: "五聲音階排列與和諧特徵分析",
            type: "textarea",
            prompt: "在課堂嘗試隨意排列五聲音階中的五個音時，聽感依然協調。請說明五聲音階在音程結構上有什麼特點，使其不易產生刺耳不和諧感？",
            placeholder: "例如：因為這五個音都是用 3/2 生出來的，而且避開了緊挨著的半音，音距較開，所以不易有摩擦感...",
            solution: "五聲音階的和諧特點：\n1. 各音頻率皆由純五度（3/2）相生而來，彼此比例自然融合。\n2. 抽離了小二度（半音）摩擦，相鄰音距至少為全音或大三度，避免了波形密集的干涉碰撞，因此任意排列都不易產生刺耳感。",
            formatAnswer: (ans) => `分析心得：\n${ans}\n\n（核心概念：五音源自 3/2 相生，且音距寬闊、無小二度半音碰撞，故隨意排列組合皆維持穩定協和。）`
          }
        ]
      }
    },

    "2-3": {
      id: "2-3",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "五度相生到十二律：永遠關不上的圓（畢氏音差）",
      conceptTitle: "十二律相生與畢氏音差",
      modelTitle: "畢氏律法問題與轉調限制",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/slaarufxib",
      motivation: `
上一單元我們用「每次乘 $\\dfrac{3}{2}$，超過 2 就除以 2」算出了五聲音階的 5 個音：
$$
1, \\quad \\dfrac{3}{2}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{81}{64}
$$

**一、 依規則算到第 12 次（造出十二律）**
若將此規則持續計算（可利用計算機），依序得到的數值為：
$$
1, \\quad \\dfrac{3}{2}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{81}{64}, \\quad \\dfrac{243}{128}, \\quad \\dfrac{729}{512}, \\quad \\dfrac{2187}{2048}, \\quad \\dfrac{6561}{4096}, \\quad \\dfrac{19683}{16384}, \\quad \\dfrac{59049}{32768}, \\quad \\dfrac{177147}{131072}, \\quad \\mathbf{\\dfrac{531441}{524288}}
$$

觀察第 12 次算出的比值：
$$
\\dfrac{3^{12}}{2^{19}} = \\dfrac{531441}{524288} \\approx \\mathbf{1.0136}
$$
因為 $3^{12} \\approx 2^{19}$（$531441 \\approx 524288$），此數值與起點 1 的差距**僅約 1.3%**。單音聆聽時人耳難以分辨這微小差距，因此古代樂律以此為依據，在 12 個音時停下，建立十二律體系。

**二、 由小到大排序（十二半音階梯）**
將這 12 個比值由小到大排序（最後補上高八度 2）：
$$
1, \\quad \\dfrac{2187}{2048}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{19683}{16384}, \\quad \\dfrac{81}{64}, \\quad \\dfrac{177147}{131072}, \\quad \\dfrac{729}{512}, \\quad \\dfrac{3}{2}, \\quad \\dfrac{6561}{4096}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{59049}{32768}, \\quad \\dfrac{243}{128}, \\quad 2
$$

<div class="scale-table-wrap">
  <table class="scale-table">
    <tbody>
      <tr>
        <th>頻率比值</th>
        <td>$1$</td>
        <td>$\\dfrac{2187}{2048}$</td>
        <td>$\\dfrac{9}{8}$</td>
        <td>$\\dfrac{19683}{16384}$</td>
        <td>$\\dfrac{81}{64}$</td>
        <td>$\\dfrac{177147}{131072}$</td>
        <td>$\\dfrac{729}{512}$</td>
        <td>$\\dfrac{3}{2}$</td>
        <td>$\\dfrac{6561}{4096}$</td>
        <td>$\\dfrac{27}{16}$</td>
        <td>$\\dfrac{59049}{32768}$</td>
        <td>$\\dfrac{243}{128}$</td>
        <td>$2$</td>
      </tr>
      <tr class="scale-name-row">
        <th>對應音階</th>
        <td>Do</td>
        <td>升Do</td>
        <td>Re</td>
        <td>升Re</td>
        <td>Mi</td>
        <td>Fa</td>
        <td>升Fa</td>
        <td>Sol</td>
        <td>升Sol</td>
        <td>La</td>
        <td>升La</td>
        <td>Si / Ti</td>
        <td>高音Do</td>
      </tr>
    </tbody>
  </table>
</div>

**三、 畢達哥拉斯音差（Pythagorean Comma）**
雖然 $1.0136$ 非常接近 $1$，但數學上永遠不可能精確等於 1：
$$
3^{12} \\neq 2^{19} \\quad (\\mathbf{\\text{奇數} \\neq \\text{偶數}})
$$
3 的次方恆為奇數，2 的次方恆為偶數。五度相生在數學上無法完全閉合回起點，這約 1.3% 的微小差距即為**「畢達哥拉斯音差」**。
      `,
      mathModel: `
**一、 畢氏十二律發聲語法**：
在 Desmos 中，以基準音（例如中央 C $263\\text{Hz}$）乘上頻率比值 $r$：
$$
f = 263 \\cdot r \\quad \\Longrightarrow \\quad \\operatorname{tone}(263 \\cdot r)
$$
- 例如純五度：$\\operatorname{tone}\\left(263 \\cdot \\dfrac{3}{2}\\right)$
- 展開範本第 1 個資料夾即可依序播放推導出的 12 個音階。

---

**二、 畢氏律法的兩大問題**：
1. **存在微小誤差**：相生 12 次折回的值為 $\\dfrac{531441}{524288} \\approx 1.0136$，與起點 1 無法精確閉合（畢氏音差）。
2. **無法自由轉調**：推導出的相鄰音之間頻率比並不完全相同。若樂器換到不同調性演奏，音階間距會改變，造成走音。
      `,
      tasks: [
        "1. 數值驗算：在 Desmos 算式欄輸入 3^12 / 2^19，確認數值約為 1.0136，驗證相生 12 次後極度接近起點 1。",
        "2. 十二律音階播放：開啟 Desmos 範本第 1 個資料夾，依序播放推導出的 12 個音階，感受相生音律鋪滿八度空間的音高階梯。",
        "3. 轉調問題思考：若從不同音起音演奏，因相鄰音之間頻率比不均勻，音階便會走音；思考如何讓每個相鄰音的間距完全相同？"
      ],
      formula: `// 1. 畢達哥拉斯十二律相生音階清單 (範本第一資料夾)
\\operatorname{tone}(263 \\cdot 1)
\\operatorname{tone}\\left(263 \\cdot \\frac{2187}{2048}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{9}{8}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{19683}{16384}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{81}{64}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{177147}{131072}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{729}{512}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{3}{2}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{6561}{4096}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{27}{16}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{59049}{32768}\\right)
\\operatorname{tone}\\left(263 \\cdot \\frac{243}{128}\\right)
\\operatorname{tone}\\left(263 \\cdot 2\\right)

// 2. 算式驗算
\\frac{3^{12}}{2^{19}}`,
      tips: `
- **12 的由來**：因為 $3^{12} \\approx 2^{19}$（$\\dfrac{531441}{524288} \\approx 1.0136$），相生到第 12 次時非常逼近起點（誤差約 1.3%），因此各文化普遍採用 12 個音建立律制。
- **轉調限制**：畢氏十二律相鄰半音比例不均勻，換調演奏時會產生走音。
      `,
    },

    "supp-theory": {
      id: "補充 1",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "樂理基礎入門：音名、唱名、全半音與簡譜",
      conceptTitle: "音樂的表示系統",
      modelTitle: "音名、唱名、鍵盤全半音與簡譜",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
在音樂中，有一套結合物理頻率與歌唱聽覺的標記系統：
1. **音名**：物理上固定不變的絕對音高。
2. **唱名**：歌唱與聽覺上的相對音級。
3. **簡譜**：以數字 $1 \\sim 7$ 記錄旋律的常見樂譜形式。
      `,
      mathModel: `
**一、 音名 vs 唱名**
- **音名（Pitch Names）**：$C, D, E, F, G, A, B$
  - 代表物理上固定不變的絕對頻率（例如國際標準音 $A_4 = 440\\text{Hz}$、中央 $C_4 \\approx 261.63\\text{Hz}$）。
- **唱名（Solfège）**：$\\text{Do, Re, Mi, Fa, Sol, La, Si/Ti}$（英美常用 Ti，台灣習慣稱 Si）
  - 代表聽感上的音級階梯。在 C 大調中：
    $$C \\to \\text{Do}, \\quad D \\to \\text{Re}, \\quad E \\to \\text{Mi}, \\quad F \\to \\text{Fa}, \\quad G \\to \\text{Sol}, \\quad A \\to \\text{La}, \\quad B \\to \\text{Si/Ti}$$

---

**二、 鋼琴鍵盤上的 12 個音：全音與半音**
在鍵盤樂器上，一個八度內由 7 個白鍵與 5 個黑鍵構成共 12 個音：
- **升號（$\\sharp$）**：升高一個半音；**降號（$\\flat$）**：降低一個半音。
- 例如：$C$ 右側黑鍵可稱為 $C^\\sharp$ 或 $D^\\flat$（同音異名）。

<div class="piano-card">
  <svg class="piano-svg" viewBox="0 0 740 250" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .white-key { fill: #ffffff; stroke: #45403a; stroke-width: 1.5; rx: 5; ry: 5; }
        .black-key { fill: #2b2723; stroke: #1a1816; stroke-width: 1; rx: 4; ry: 4; }
        .key-pitch { font-size: 18px; font-weight: bold; fill: #2b2723; text-anchor: middle; font-family: -apple-system, sans-serif; }
        .key-solfege { font-size: 13px; fill: #456854; font-weight: 600; text-anchor: middle; font-family: -apple-system, sans-serif; }
        .key-num { font-size: 15px; font-weight: bold; fill: #c26d36; text-anchor: middle; font-family: 'JetBrains Mono', monospace; }
        .black-text-sharp { font-size: 12px; font-weight: bold; fill: #ffffff; text-anchor: middle; font-family: -apple-system, sans-serif; }
        .black-text-flat { font-size: 10px; fill: #d5cfc7; text-anchor: middle; font-family: -apple-system, sans-serif; }
        .step-arc { fill: none; stroke: #7d756d; stroke-width: 1.5; }
        .step-arc-half { fill: none; stroke: #c26d36; stroke-width: 2.2; }
        .step-badge { font-size: 11px; font-weight: bold; fill: #7d756d; text-anchor: middle; font-family: -apple-system, sans-serif; }
        .step-badge-half { font-size: 11px; font-weight: bold; fill: #c26d36; text-anchor: middle; font-family: -apple-system, sans-serif; }
      </style>
    </defs>
    <path d="M 124 50 Q 159 34 194 50" class="step-arc" />
    <text x="159" y="32" class="step-badge">全音 (2)</text>
    <path d="M 194 50 Q 229 34 264 50" class="step-arc" />
    <text x="229" y="32" class="step-badge">全音 (2)</text>
    <path d="M 264 50 Q 299 26 334 50" class="step-arc-half" />
    <rect x="274" y="14" width="50" height="18" rx="9" fill="#fdf2e9" stroke="#c26d36" stroke-width="1.2" class="step-rect-half" />
    <text x="299" y="27" class="step-badge-half">半音 (1)</text>
    <path d="M 334 50 Q 369 34 404 50" class="step-arc" />
    <text x="369" y="32" class="step-badge">全音 (2)</text>
    <path d="M 404 50 Q 439 34 474 50" class="step-arc" />
    <text x="439" y="32" class="step-badge">全音 (2)</text>
    <path d="M 474 50 Q 509 34 544 50" class="step-arc" />
    <text x="509" y="32" class="step-badge">全音 (2)</text>
    <path d="M 544 50 Q 579 26 614 50" class="step-arc-half" />
    <rect x="554" y="14" width="50" height="18" rx="9" fill="#fdf2e9" stroke="#c26d36" stroke-width="1.2" class="step-rect-half" />
    <text x="579" y="27" class="step-badge-half">半音 (1)</text>
    <g transform="translate(90, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">C</text><text class="key-solfege" x="34" y="145">Do</text><text class="key-num" x="34" y="165">1</text></g>
    <g transform="translate(160, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">D</text><text class="key-solfege" x="34" y="145">Re</text><text class="key-num" x="34" y="165">2</text></g>
    <g transform="translate(230, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">E</text><text class="key-solfege" x="34" y="145">Mi</text><text class="key-num" x="34" y="165">3</text></g>
    <g transform="translate(300, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">F</text><text class="key-solfege" x="34" y="145">Fa</text><text class="key-num" x="34" y="165">4</text></g>
    <g transform="translate(370, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">G</text><text class="key-solfege" x="34" y="145">Sol</text><text class="key-num" x="34" y="165">5</text></g>
    <g transform="translate(440, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">A</text><text class="key-solfege" x="34" y="145">La</text><text class="key-num" x="34" y="165">6</text></g>
    <g transform="translate(510, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">B</text><text class="key-solfege" x="34" y="145">Si/Ti</text><text class="key-num" x="34" y="165">7</text></g>
    <g transform="translate(580, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">C</text><text class="key-solfege" x="34" y="145">Do</text><text class="key-num" x="34" y="165">1̇</text></g>
    <g transform="translate(139, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">C♯</text><text class="black-text-flat" x="21" y="76">D♭</text></g>
    <g transform="translate(209, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">D♯</text><text class="black-text-flat" x="21" y="76">E♭</text></g>
    <g transform="translate(349, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">F♯</text><text class="black-text-flat" x="21" y="76">G♭</text></g>
    <g transform="translate(419, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">G♯</text><text class="black-text-flat" x="21" y="76">A♭</text></g>
    <g transform="translate(489, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">A♯</text><text class="black-text-flat" x="21" y="76">B♭</text></g>
  </svg>
</div>

- **琴鍵與半音規則**：
  - **半音（1 格）**：鍵盤上相鄰的兩鍵。注意 **E-F** 與 **B-C** 之間無黑鍵，相鄰即為半音。
  - **全音（2 格）**：相差 2 個半音（中間夾有一鍵），例如 $C$ 到 $D$。
  - **規則**：**只有 Mi-Fa 與 Si-Do（Ti-Do）是半音，其餘相鄰白鍵皆為全音。**

---

**三、 簡譜記法與 Desmos 程式碼轉譯**
簡譜以數字記錄旋律，但在 Desmos 中不能直接輸入簡譜數字（例如輸入 tone([1, 1, 5, 5]) 會發出 $1\\text{Hz}$ 與 $5\\text{Hz}$ 的不可聞頻率）。
正確方式是先將簡譜翻譯為音名變數（如 [C, C, G, G]），再輸入 Desmos 播放。

1. **音符數字**：$1 = \\text{Do}, \\; 2 = \\text{Re}, \\; 3 = \\text{Mi}, \\; 4 = \\text{Fa}, \\; 5 = \\text{Sol}, \\; 6 = \\text{La}, \\; 7 = \\text{Si/Ti}$
2. **升降記號**：簡譜常標於數字左上角（如 $^{\\sharp}1$、$^{\\flat}7$），對應英文音名右側的 $C^\\sharp$、$B^\\flat$。
3. **休止符**：數字 0 代表靜音（在 Desmos 中設為數值 0）。
4. **高低音點**：$\\dot{1}$ 代表高八度，$\\text{底下加點}$ 代表低八度。
5. **時值記號**：
   - 無附加線：四分音符（1 拍）。
   - 增時線（右側橫線）：如 $1 -$ 為 2 拍；$1 - - -$ 為 4 拍。
   - 減時線（下方橫線）：如 $\\underline{1}$ 為 0.5 拍。
      `,
      tasks: [
        "1. 琴鍵全半音定位：觀察鍵盤圖解，確認 E-F 與 B-C 兩處無黑鍵相隔，相距僅 1 個半音。",
        "2. 音名與唱名對應：練習簡譜數字 1 到 7 與音名字母（C, D, E, F, G, A, B）的快速對應。",
        "3. 簡譜翻譯練習：閱讀隨堂學習單中的《小星星》簡譜，練習將數字譜（1 1 5 5）翻譯為 Desmos 專用的音名變數陣列（C C G G）。"
      ],
      formula: `// 1. C 大調簡譜、音名與唱名對照表
// 簡譜 1 = C (Do)
// 簡譜 2 = D (Re)
// 簡譜 3 = E (Mi)
// 簡譜 4 = F (Fa)  <-- E 到 F 無黑鍵，相距 1 個半音
// 簡譜 5 = G (Sol)
// 簡譜 6 = A (La)
// 簡譜 7 = B (Si / Ti)  <-- B 到 C 無黑鍵，相距 1 個半音

// 2. 簡譜轉音名陣列示範：《小星星》前段
// 簡譜：1 1 5 5 | 6 6 5 -
// 轉譯音名陣列：[C, C, G, G, A, A, G, G]`,
      tips: `
- **簡譜轉譯**：Desmos 的 tone() 函數需要音名變數（C, D, E...）或頻率數值，不可直接將簡譜數字當作頻率輸入。
- **半音位置**：只有 **E-F** 與 **B-C** 之間無黑鍵，相距 1 個半音；其餘相鄰白鍵皆相距 2 個半音（全音）。
- **休止符**：數字 0 代表靜音。
      `,
      worksheet: {
        title: "隨堂學習單：樂理基礎、琴鍵全半音與簡譜識譜",
        questions: [
          {
            id: "q1_pitch_solfege",
            title: "音名與唱名對照",
            type: "radio",
            prompt: "在標準 C 大調中，簡譜數字 5 對應的「唱名」與「音名」分別是什麼？",
            options: [
              "唱名為 Sol，音名為 G",
              "唱名為 Fa，音名為 F",
              "唱名為 La，音名為 A",
              "唱名為 Re，音名為 D"
            ],
            solution: "在 C 大調中，1=C(Do)、2=D(Re)、3=E(Mi)、4=F(Fa)、5=G(Sol)、6=A(La)、7=B(Si/Ti)。因此數字 5 對應的唱名為 Sol，音名為 G。",
            formatAnswer: (ans) => `音名與唱名對照：\n• 學生選擇：${ans}\n• 解析：在 C 大調中，5 代表 Sol，對應音名字母 G。`
          },
          {
            id: "q2_half_whole_step",
            title: "鍵盤全音與半音判斷",
            type: "radio",
            prompt: "在鋼琴鍵盤上，相鄰兩鍵為 1 個半音（1 格），相隔一鍵為 1 個全音（2 個半音）：\n從白鍵 C 到白鍵 E 跨越了幾個半音？從白鍵 E 到白鍵 F 又是幾個半音？",
            options: [
              "C 到 E 跨越 4 個半音（2 個全音）；E 到 F 跨越 1 個半音",
              "C 到 E 跨越 2 個半音；E 到 F 跨越 2 個半音",
              "C 到 E 跨越 3 個半音；E 到 F 跨越 1 個半音",
              "C 到 E 跨越 4 個半音；E 到 F 跨越 2 個半音"
            ],
            solution: "1. 從 C 到 E：中間經過 C#、D、D# 到達 E，共跨越 4 格（4 個半音 = 2 個全音）。\n2. 從 E 到 F：兩者之間無黑鍵，相鄰緊挨，故僅跨越 1 格（1 個半音）。",
            formatAnswer: (ans) => `全音與半音判斷：\n• 學生選擇：${ans}\n• 解析：C 到 E 為 4 個半音（大三度）；E 到 F 因無黑鍵，相距 1 個半音。`
          },
          {
            id: "q3_score_translation",
            title: "簡譜轉譯音名陣列（《小星星》）",
            type: "textarea",
            prompt: "閱讀以下《小星星》樂句簡譜：\n`1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 -`\n請寫出：\n1. 將這段簡譜翻譯為「音名字母（C, D, E...）」序列。\n2. 簡譜中的橫線（如 `5 -`）代表什麼意思？在 Desmos 中可如何安排播放？",
            placeholder: "例如：1. 音名字母為 C C G G | A A G - | F F E E | D D C -。\n2. 橫線代表增時線，延長為兩拍...",
            solution: "1. 音名序列為：C C G G | A A G - | F F E E | D D C -\n2. 數字後的橫線為增時線，代表延長一拍（共 2 拍）。在 Desmos 中，可連續播放 2 次該音（如 `[G, G]`）以維持節奏時值。",
            formatAnswer: (ans) => `簡譜轉譯成果：\n${ans}\n\n（核心解析：簡譜 1 到 7 對應音名 C, D, E, F, G, A, B；增時線使時值加倍為 2 拍。）`
          }
        ]
      }
    },

    "supp-just": {
      id: "補充 2",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "純律（Just Intonation）：尋找最純淨的簡單整數比",
      conceptTitle: "畢氏律大三度與純律修正",
      modelTitle: "純律三和弦與轉調限制",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator",
      readTime: "5 分鐘",
      difficulty: "輕鬆體驗",
      motivation: `
畢達哥拉斯五度相生律在推導純五度時非常準確（$\\frac{3}{2} = 1.5$）。
但當推算到大三度（例如 $C$ 到 $E$）時，必須連生 4 次五度再折回八度：
$$
\\text{畢氏大三度} = \\left(\\frac{3}{2}\\right)^4 \\div 4 = \\frac{81}{64} \\approx 1.2656
$$
比值 $\\frac{81}{64}$ 的分子分母較大，聲波重合週期長。在 Desmos 中同時播放 $C$ 與 $E$ 時，會聽見明顯的拍頻摩擦感。
音樂家因此思考：能否改用鄰近的小整數比來修正大三度？
      `,
      mathModel: `
**一、 純律的大三度：改用簡單整數比 $\\dfrac{5}{4}$**
觀察 $\\dfrac{81}{64}$，其鄰近有一個非常接近的簡單整數比：
$$
\\frac{80}{64} = \\frac{5}{4} = 1.25
$$
- 兩者數值僅相差約 1.2%（比值為 $\\frac{81}{80} = 1.0125$）。
- 改用 $\\dfrac{5}{4}$ 後，兩道聲波每振動 4 個週期便完全重合，拍頻消除，聽感平穩和諧。這種以簡單小整數比構建各音程的律制稱為**「純律（Just Intonation）」**。

---

**二、 大三和弦的整數比：$4 : 5 : 6$**
在純律中，C 大三和弦（$C - E - G$）：
- 根音 $C = 1 = \\dfrac{4}{4}$
- 大三度 $E = \\dfrac{5}{4}$
- 純五度 $G = \\dfrac{3}{2} = \\dfrac{6}{4}$

三音通分後的頻率比為：
$$
C : E : G = 4 : 5 : 6
$$
簡單整數比使三道波形週期性高度吻合，產生穩定飽滿的和聲聽感。

---

**三、 純律的限制：轉調問題**
雖然純律的三和弦聽感純淨，但應用在樂器上有兩個限制：
1. **全音間距不均勻**：音階中出現兩種不同的全音間距（$\\frac{9}{8}$ 與 $\\frac{10}{9}$）。
2. **無法自由轉調**：這組比例是專為特定調性（如 C 大調）設定。若換到其他調演奏，音程比例錯位，會產生走音。

為了解決自由轉調的需求，後續發展出 2-4 的**「十二平均律」**。
      `,
      tasks: [
        "1. 大三度聽感對比：在 Desmos 中分別播放 C-E 雙音（畢氏 81/64 vs 純律 5/4），比較兩者的拍頻與融合度。",
        "2. 4:5:6 和弦試聽：取消註解播放 [C, E, G]，聆聽純律大三和弦（4:5:6）的共鳴聽感。",
        "3. 轉調限制討論：理解純律因相鄰音距不均勻，在不同調性演奏時產生的走音限制。"
      ],
      formula: `// 1. 基底頻率 (中央 C)
C = 261.63

// 2. 畢氏大三度 vs 純律大三度聽覺對比
E_pyth = C * (81 / 64)    // 畢氏大三度 (~331.13 Hz，有微弱拍頻)
E_just = C * (5 / 4)      // 純律大三度 (327.04 Hz，拍頻消除，融合度高)
// tone([C, E_pyth])      // 取消註解：試聽畢氏大三度
// tone([C, E_just])      // 取消註解：試聽純律大三度

// 3. 純律 4:5:6 大三和弦 (C - E - G)
G = C * (3 / 2)           // 純五度 (392.45 Hz)
// tone([C, E_just, G])   // 取消註解：試聽 4:5:6 和弦`,
      tips: `
- **比值差異**：畢氏大三度為 $\\dfrac{81}{64} \\approx 1.2656$；純律大三度取鄰近的 $\\dfrac{5}{4} = 1.25$。
- **大三和弦**：$4 : 5 : 6$ 為純律大三和弦的頻率比。
- **轉調限制**：純律相鄰音程不均勻，僅在特定調性成立，換調時易走音。
      `,
      worksheet: {
        title: "隨堂學習單：純律大三度與 4:5:6 和聲探索",
        questions: [
          {
            id: "q1_just_third_vs_pyth",
            title: "畢氏大三度 vs 純律大三度",
            type: "radio",
            prompt: "畢氏律大三度的頻率比為較複雜的 $\\frac{81}{64} \\approx 1.2656$；純律則取鄰近的小整數比 $\\frac{5}{4} = 1.25$。\n在 Desmos 中分別播放這兩種雙音時，聽感有何主要差異？",
            options: [
              "純律（5/4）拍頻消除，聲音平穩融合；畢氏律（81/64）可聽見微弱拍頻摩擦感",
              "畢氏律完全沒有拍頻，純律則極為刺耳",
              "兩者聽起來完全相同，人耳無法區分",
              "純律聽起來像雜音，無法形成音階"
            ],
            solution: "純律 5/4 為小整數比，聲波每振動 4 個週期即重合一次，拍頻消除，聽感平穩；畢氏律 81/64 分子分母較大，波形重合週期長，產生微弱拍頻摩擦感。選項 1 正確。",
            formatAnswer: (ans) => `大三度對比結果：\n• 學生選擇：${ans}\n• 解析：純律 5/4 透過小整數比消除拍頻，展現平穩融合的聽感。`
          },
          {
            id: "q2_why_not_just",
            title: "現代鍵盤樂器為何不全面採用純律？",
            type: "radio",
            prompt: "純律的大三和弦（4:5:6）聽感純淨，但現代通用鍵盤樂器（如鋼琴）為何不全面採用純律？",
            options: [
              "因為純律各音距不均勻，換到其他調（轉調）演奏時比例錯位，會產生嚴重走音",
              "因為純律的音量過大，會損壞樂器結構",
              "因為電腦軟體無法計算分數 5/4",
              "因為純律只能用在單音樂器，無法彈奏多音"
            ],
            solution: "純律各全音間距不均，且是為單一調性量身設定的整數比。一旦換調演奏，音程比例錯位會造成走音。為了滿足自由轉調的需求，現代樂器普遍採用十二平均律。選項 1 正確。",
            formatAnswer: (ans) => `純律限制分析：\n• 學生選擇：${ans}\n• 解析：純律無法自由轉調，現代鍵盤樂器因而採用十二平均律。`
          }
        ]
      }
    },

    "2-4": {
      id: "2-4",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "十二平均律與全學期公版發聲基準",
      conceptTitle: "數學上完美的音階：連乘約分與公比推導",
      modelTitle: "全學期公版發聲基準函數",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
回顧前幾節的探索，畢氏律與純律在實際應用上都有轉調問題：
1. **存在微小誤差**：畢氏五度相生 12 次後，$\\dfrac{531441}{524288} \\approx 1.0136$ 與起點 1 有無法完全閉合的畢氏音差。
2. **轉調會有問題**：相鄰半音比例不均勻，換到不同調演奏就會走音。

**解決轉調問題的條件**：
**「任兩個相鄰音的頻率比，必須完全相同！」**
      `,
      mathModel: `
**一、 數學上完美的音階（簡報推導：連乘約分法）**
*(以下用音符名稱代稱該音符之頻率)*

若任兩個相鄰半音的頻率比都相同，將此固定比值設為 $x$：
$$
\\frac{C^\\sharp}{C} = \\frac{D}{C^\\sharp} = \\frac{D^\\sharp}{D} = \\frac{E}{D^\\sharp} = \\frac{F}{E} = \\frac{F^\\sharp}{F} = \\frac{G}{F^\\sharp} = \\frac{G^\\sharp}{G} = \\frac{A}{G^\\sharp} = \\frac{A^\\sharp}{A} = \\frac{B}{A^\\sharp} = \\frac{\\text{高音}C}{B} = x
$$

將這 12 個分數全部連乘：
$$
\\frac{C^\\sharp}{C} \\cdot \\frac{D}{C^\\sharp} \\cdot \\frac{D^\\sharp}{D} \\cdot \\frac{E}{D^\\sharp} \\cdot \\frac{F}{E} \\cdot \\frac{F^\\sharp}{F} \\cdot \\frac{G}{F^\\sharp} \\cdot \\frac{G^\\sharp}{G} \\cdot \\frac{A}{G^\\sharp} \\cdot \\frac{A^\\sharp}{A} \\cdot \\frac{B}{A^\\sharp} \\cdot \\frac{\\text{高音}C}{B} = \\frac{\\text{高音}C}{C} = \\frac{2}{1}
$$

等式左邊為 12 個 $x$ 相乘，中間音符分子分母對角約分消去，得到方程式：
$$
x^{12} = 2 \\implies x = \\sqrt[12]{2} = 2^{\\frac{1}{12}} \\approx 1.059463
$$
每升高一個半音，頻率即乘上 $2^{1/12} \\approx 1.059463$。這就是**「十二平均律」**。

<div class="scale-table-wrap">
  <table class="scale-table">
    <thead>
      <tr>
        <th>音高</th>
        <th>C</th>
        <th>C♯</th>
        <th>D</th>
        <th>D♯</th>
        <th>E</th>
        <th>F</th>
        <th>F♯</th>
        <th>G</th>
        <th>G♯</th>
        <th>A</th>
        <th>A♯</th>
        <th>B</th>
        <th>高音C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>頻率比例</strong></td>
        <td>$1$</td>
        <td>$2^{\\frac{1}{12}}$</td>
        <td>$2^{\\frac{2}{12}}$</td>
        <td>$2^{\\frac{3}{12}}$</td>
        <td>$2^{\\frac{4}{12}}$</td>
        <td>$2^{\\frac{5}{12}}$</td>
        <td>$2^{\\frac{6}{12}}$</td>
        <td>$2^{\\frac{7}{12}}$</td>
        <td>$2^{\\frac{8}{12}}$</td>
        <td>$2^{\\frac{9}{12}}$</td>
        <td>$2^{\\frac{10}{12}}$</td>
        <td>$2^{\\frac{11}{12}}$</td>
        <td>$2$</td>
      </tr>
    </tbody>
  </table>
</div>

---

**二、 全學期公版發聲基準函數（以標準音 A4 = 440Hz 為原點）**：
在 Desmos 中，直接使用指數函數即可建立通用的發聲基準：
$$
f(x) = 440 \\cdot 2^{\\frac{x}{12}}
$$

**琴鍵位移與指數規律**：
- **往右一格（升高一個半音）**：$\\times 2^{\\frac{1}{12}}$，函數自變數 $+1$。
- **往左一格（降低一個半音）**：$\\div 2^{\\frac{1}{12}}$，函數自變數 $-1$（即 $\\times 2^{-\\frac{1}{12}}$）。

- **常用主音區音名坐標（整數 $x$ 代表相對 $A_4=440\\text{Hz}$ 的半音位移，依 C, D, E, F, G, A, B 排序）**：
  - $C_4 = f(-9) \\approx 261.63\\text{Hz}$（中央 C，由 A 往左走 9 格）
  - $D_4 = f(-7) \\approx 293.66\\text{Hz}$
  - $E_4 = f(-5) \\approx 329.63\\text{Hz}$
  - $F_4 = f(-4) \\approx 349.23\\text{Hz}$
  - $G_4 = f(-2) \\approx 392.00\\text{Hz}$
  - $A_4 = f(0) = 440.00\\text{Hz}$（國際標準調音原點）
  - $B_4 = f(2) \\approx 493.88\\text{Hz}$
  - $C_5 = f(3) \\approx 523.25\\text{Hz}$（高音 C）

---

**三、 十二平均律的特點與五度微差**：
- **八度完全閉合**：$f(x+12) = 440 \\cdot 2^{(x+12)/12} = f(x) \\cdot 2$。
- **純五度的微小妥協**：前進 7 個半音，比例為 $2^{7/12} \\approx 1.498307$，與畢氏純五度 $1.500000$ 僅相差約 $0.0017$（人耳幾乎無法察覺），卻能換取在 12 個調性中自由演奏的通用性。
      `,
      tasks: [
        "1. 連乘約分驗算：觀察 12 個相鄰音分數對角約分只剩 (高音C)/C = 2 的過程，理解 x^12 = 2 的由來。",
        "2. 公比數值計算：在 Desmos 算式欄輸入 2^(1/12)，計算數值約為 1.059463，掌握等比數列公比。",
        "3. 建立公版發聲函數：輸入 f(x) = 440 * 2^(x/12)，以標準音 A440 為原點，建立發聲基準。",
        "4. 定義常用音名變數：輸入 C = f(-9), D = f(-7), E = f(-5), F = f(-4), G = f(-2), A = f(0), B = f(2)，確認 E-F 與 B-C 的 1 半音步長。",
        "5. 八度與純五度播放：計算 2^(7/12) 確認五度的數值妥協，並播放 tone([C, f(3)]) 聆聽兩倍八度音程。"
      ],
      formula: `// 1. 全學期公版發聲基準函數 (以國際標準音 A4 = 440Hz 為原點)
f(x) = 440 \\cdot 2^{\\left(\\frac{x}{12}\\right)}

// 2. 常用音名定義 (中央 C 主音區)
C = f(-9)   // 中央 C (C4, 約 261.6Hz)
D = f(-7)   // D4
E = f(-5)   // E4
F = f(-4)   // F4 (E-F 無黑鍵，只差 1 半音)
G = f(-2)   // G4
A = f(0)    // A4 (國際標準基準音 440Hz)
B = f(2)    // B4
C_5 = f(3)  // C5 (B-C 無黑鍵，只差 1 半音)

// 3. 測試播放八度音程與純五度
\\operatorname{tone}([C, C_5])   // 八度翻倍和諧
\\operatorname{tone}([C, G])     // 十二平均律純五度 (2^(7/12))`,
      tips: `
- **連乘約分原理**：12 個相鄰分數連乘時，中間音符分子分母對角約分消去，只剩下 (高音C)/C = 2，因此 $x^{12} = 2 \\implies x = 2^{1/12}$。
- **琴鍵位移規律**：往右一格（高半音）就是 $\\times 2^{1/12}$（指數 $+1$）；往左一格（低半音）就是 $\\div 2^{1/12}$（指數 $-1$）。由 A440 往左 9 格即中央 C $f(-9)$，往右 3 格即高音 C $f(3)$。
- **公版發聲基準**：後續所有樂曲與和弦單元，皆以 $f(x) = 440 \\cdot 2^{x/12}$ 作為核心發聲函數。
      `,
      worksheet: {
        title: "隨堂學習單 2：十二平均律函數與琴鍵定位",
        questions: [
          {
            id: "q1_func_meaning",
            title: "連乘約分與 x^12 = 2 的推導由來",
            type: "text",
            prompt: "將 12 個相鄰半音的頻率比設為 $x$（即 $\\frac{C^\\sharp}{C} = \\frac{D}{C^\\sharp} = \\dots = \\frac{\\text{高音}C}{B} = x$）。\n請說明：\n1. 為什麼把這 12 個分數全部乘在一起時，右邊剛好會等於 $\\frac{\\text{高音}C}{C} = 2$？\n2. 為什麼等式左邊會變成 $x^{12}$，進而推導出公比 $x = 2^{1/12}$？",
            placeholder: "例如：1. 因為中間的音符分子分母對角約分消去，只剩下頭尾的高音 C / C = 2... 2. 因為左邊共有 12 個比值 x 連乘...",
            solution: "1. 將 12 個相鄰音分數連乘時，每個中間音（如 $C^\\sharp, D, D^\\sharp \\dots B$）同時出現在前一項分子與後一項分母，形成對角連續約分，中間音符全數消去，僅剩頭尾的 $\\frac{\\text{高音}C}{C} = \\frac{2}{1} = 2$。\n2. 由於 12 個比值皆等於 $x$，相乘得 $x^{12}$。因此方程式為 $x^{12} = 2$，兩邊開 12 次方根得 $x = 2^{1/12} \\approx 1.059463$。",
            formatAnswer: (ans) => `對角約分推導意涵：\n• 學生回答：${ans}\n• 核心解析：12 個相鄰音分數連乘產生對角約分，中間音符消去，留下頭尾八度比 (高音C)/C = 2；左式 12 個 x 連乘得 x^12 = 2，求得公比 x = 2^(1/12) ≈ 1.05946。`
          },
          {
            id: "q2_find_csharp",
            title: "音名坐標定位實戰：升 Do (C♯4)",
            type: "text",
            prompt: "在標準鋼琴鍵盤上，中央 C 的右側緊挨著黑鍵「升 Do（$C^\\sharp_4$）」。若以 $A_4 = 440\\text{Hz} = f(0)$ 為原點，請寫出：\n1. 升 Do 在公版函數中的自變數坐標 $x$ 應為多少？即 $C^\\sharp_4 = f(?)$？\n2. 它是如何從 $A_4$ 或中央 C（$f(-9)$）推算出來的？",
            placeholder: "例如：1. C#4 = f(-8)... 2. 從中央 C (f(-9)) 往上走 1 個半音...",
            expected: "-8 | f(-8) | 1 | f(1)",
            solution: "1. 升 Do 的坐標為 $C^\\sharp_4 = f(-8)$。\n2. 推算方式：\n- 方法一（從中央 C 出發）：中央 C 為 $f(-9)$，升 Do 為其右側黑鍵，升高 1 個半音，故為 $-9 + 1 = -8$，即 $f(-8)$。\n- 方法二（從 A4 出發）：$A(0) \\to G^\\sharp(-1) \\to G(-2) \\to F^\\sharp(-3) \\to F(-4) \\to E(-5) \\to D^\\sharp(-6) \\to D(-7) \\to C^\\sharp(-8)$。\n頻率約為 $440 \\cdot 2^{-8/12} \\approx 277.18\\text{Hz}$。",
            formatAnswer: (ans) => `升 Do 半音坐標推導：\n• 學生回答：${ans}\n• 正確答案：C#4 = f(-8) ≈ 277.18 Hz。從中央 C f(-9) 向上移動 1 個半音（-9 + 1 = -8）。`
          },
          {
            id: "q3_find_re_octave",
            title: "音名坐標定位實戰：高八度 Re (D5)",
            type: "text",
            prompt: "在演奏旋律時，若需要用到高音區的「高八度 Re（$D_5$）」。若已知中央 C 旁邊的標準 Re 為 $D_4 = f(-7)$：\n1. 請寫出高八度 Re 在公版函數中的自變數坐標，即 $D_5 = f(?)$？\n2. 它的頻率剛好是 $D_4$ 的幾倍？在數學指數律上如何體現？",
            placeholder: "例如：1. D5 = f(5)... 2. 頻率剛好是 2 倍...",
            expected: "5 | f(5) | 14 | f(14)",
            solution: "1. 高八度 Re 的坐標為 $D_5 = f(5)$。\n2. 推算方式：高八度即往上移動 12 個半音，故坐標為 $-7 + 12 = 5$。\n3. 頻率倍數：$f(5) = 440 \\cdot 2^{5/12} = 440 \\cdot 2^{(-7+12)/12} = 440 \\cdot 2^{-7/12} \\cdot 2^1 = f(-7) \\cdot 2$，剛好翻倍為 2 倍。",
            formatAnswer: (ans) => `高八度 Re 半音坐標推導：\n• 學生回答：${ans}\n• 正確答案：D5 = f(5) ≈ 587.33 Hz。由 D4 (-7) 加上八度 12 個半音得 -7 + 12 = 5，頻率恰為 D4 的 2 倍。`
          }
        ]
      }
    },

    // ==========================================
    // 三、樂譜與旋律
    // ==========================================
    "3-1": {
      id: "3-1",
      moduleId: "module-3",
      moduleName: "三、樂譜與旋律",
      title: "樂譜數據化與音名陣列編碼",
      conceptTitle: "旋律與音符數據化",
      modelTitle: "樂譜數據化與陣列編碼",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
建立公版發聲函數後，即可將樂譜轉譯為 Desmos 列表進行演奏。
以《小星星》前段為例：
- 簡譜：1 1 5 5 6 6 5 — 4 4 3 3 2 2 1 —
- 音名序列：C C G G A A G 0 F F E E D D C 0
其中「0」代表休止符（發聲體不振動，呈現無聲停頓）。
將音名組裝為陣列列表 $L$，透過時間滑桿 $t$ 與 $\\operatorname{tone}(L[t])$ 即可循序播放旋律。
      `,
      mathModel: `
**音名陣列編碼與休止符 $0$ 的物理意義**：
$$L = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, \\dots]$$
$$\\operatorname{tone}(L[t]), \\quad t = 0$$
- **陣列結構**：全曲共 42 拍（三大句，每句 14 拍旋律 + 2 拍換氣休止）。
- **休止符 $0$ 的物理意義**：數字 $0$ 代表頻率為 $0\\text{Hz}$（發聲體完全靜止無振動），呈現無聲停頓。
- **時間軸滑桿 $t$**：設定步長為 1，從 0 開始逐拍讀取陣列元素發聲（$t=0$ 讀取為靜音預備拍）。
      `,
      tasks: [
        "1. 定義公版音名：在 Desmos 中確認 2-4 的公版音名（C, D, E, F, G, A, B）已完成定義。",
        "2. 輸入旋律列表：輸入《小星星》音名列表 L（共 42 拍），樂句停頓處填入 0 作為休止符。",
        "3. 循序播放驗證：設定時間滑桿 t=0 並播放，確認旋律按拍點依序演奏。"
      ],
      formula: `// 1. 公版發聲函數與常用音名定義 (中央 C 主音區)
f(x) = 440 \\cdot 2^{\\left(\\frac{x}{12}\\right)}
C = f(-9); D = f(-7); E = f(-5); F = f(-4); G = f(-2); A = f(0); B = f(2)

// 2. 小星星 42 拍完整旋律陣列 (0 為休止符)
L = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, G, G, F, F, E, E, D, 0, G, G, F, F, E, E, D, 0, C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0]

// 3. 循序播放 (t=0 為預備拍)
t = 0
\\operatorname{tone}(L[t])`,
      tips: `
- **休止符填 0 原理**：頻率為 0 代表發聲體不振動，產生乾淨的靜音停頓。
- **陣列排錯注意**：陣列 L 中不可出現連續兩個逗號（如 ,,），否則會產生語法錯誤。
- **音名定義確認**：列表中使用的音名變數必須在陣列上方先完成數值定義。
      `
    },

    "3-2": {
      id: "3-2",
      moduleId: "module-3",
      moduleName: "三、樂譜與旋律",
      title: "陣列向量化指數運算與全曲移調",
      conceptTitle: "旋律移調需求與半音向量",
      modelTitle: "陣列向量運算與移調模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/a0nxj4issv",
      motivation: `
使用個別音名變數編排旋律時，若需要更換調性（移調，如升降 Key），逐一修改音名較為繁瑣。
改用**半音位移向量**表示旋律：
以中央 C 為基準原點（$C = 0$）：
- $C=0, D=2, E=4, F=5, G=7, A=9, B=11$
整首曲子可記錄為整數向量 $S$。利用 Desmos 的陣列運算，透過指數函數 $F = 261.63 \\cdot 2^{S/12}$ 一次算出全曲頻率。
若要移調，只需在指數中加上平移常數 $k$：$F = 261.63 \\cdot 2^{(S+k)/12}$，即可將整首曲子整體升降 $k$ 個半音。
      `,
      mathModel: `
**向量廣播指數運算與平移移調**：
$$S = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, \\dots]$$

- **全曲頻率陣列生成（廣播映射）**：
  $$F = f_0 \\cdot 2^{\\frac{S}{12}} \\quad (f_0 = 261.63\\text{Hz})$$
- **全曲移調運算（$k$ 為平移半音數）**：
  $$F_{\\text{shift}} = f_0 \\cdot 2^{\\frac{S + k}{12}}, \\quad k \\in [-6, 6]$$
  向量中每個元素同時加上 $k$，各音頻率等比放大 $2^{k/12}$ 倍。相對音程比例保持不變，達成整體移調。
      `,
      tasks: [
        "1. 半音向量輸入：將《小星星》以半音整數陣列 S 輸入 Desmos（以 C=0 為原點）。",
        "2. 陣列廣播運算：輸入 F = 261.63 * 2^(S/12)，觀察 Desmos 向量運算直接生成頻率陣列。",
        "3. 移調滑桿實作：新增滑桿 k（範圍 -6 到 +6，步長 1），輸入 F = 261.63 * 2^((S+k)/12)，測試全曲升調與降調效果。",
        "4. 移調計算實練：完成隨堂學習單中的移調題目。"
      ],
      formula: `// 1. 半音位移陣列 S (以中央 C 為 0，0 為休止符)
S = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, 7, 7, 5, 5, 4, 4, 2, 0, 7, 7, 5, 5, 4, 4, 2, 0, 0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0]

// 2. 移調滑桿 k (k=0 原調，k>0 升半音，k<0 降半音)
k = 0
f_0 = 261.63
F = f_0 \\cdot 2^{\\frac{S + k}{12}}

// 3. 循序播放
t = 0
\\operatorname{tone}(F[t])`,
      tips: `
- **陣列廣播運算**：在數學與程式中，向量各元素同時進行指數運算稱為廣播（Broadcasting）。向量中每個元素加上 k，相對音程不變，達成整體移調。
- **平移幾何意義**：滑桿 k 的作用本質上對應一維坐標平移。
      `,
      worksheet: {
        title: "隨堂學習單 2：歌曲移調與半音平移計算",
        questions: [
          {
            id: "q4_jian_ao",
            title: "超高音歌曲降 Key 之指數平移計算",
            type: "text",
            prompt: "已知歌曲中的三個高音為 $f(20), f(23), f(21)$。若演唱時想要【降兩個半音】，請問這三個音會分別變成哪三個函數？若想【降一整個八度】又會變成什麼？請寫出運算式與理由。",
            placeholder: "例如：f(18), f(21), f(19)",
            expected: "f(18), f(21), f(19) | f(18),f(21),f(19) | 18, 21, 19 | 18,21,19",
            solution: "降兩個半音就是把括號內的指數減 2：\n• $f(20 - 2) = f(18)$\n• $f(23 - 2) = f(21)$\n• $f(21 - 2) = f(19)$\n\n*（註記：若想降一整個八度，自變數直接減 12 變成 $f(8), f(11), f(9)$。）*",
            formatAnswer: (ans) => `1. 降兩個半音的計算：\n   在十二平均律指數函數中，每降一個半音自變數減 1，降兩個半音即整體減 2：\n   • 第一音：f(20 - 2) = f(18)\n   • 第二音：f(23 - 2) = f(21)\n   • 第三音：f(21 - 2) = f(19)\n   學生填答：${ans}\n   答：降兩個半音後分別為 f(18), f(21), f(19)。\n\n2. 降一整個八度的計算：\n   一個完全八度包含 12 個半音，降八度代表指數平移減 12：\n   • f(20 - 12) = f(8)\n   • f(23 - 12) = f(11)\n   • f(21 - 12) = f(9)\n   答：降一整個八度後分別為 f(8), f(11), f(9)。`
          },
          {
            id: "q5_c_to_d",
            title: "C 大調整體升兩個半音之調性與音階轉變",
            type: "text",
            prompt: "若有一組 C 大調音階：$[C, D, E, F, G, A, B, C]$，在 Desmos 中將半音向量整體【升兩個半音】，請問這個音階會轉成什麼調？各音符會變成什麼？在數學上是利用什麼運算實現？",
            placeholder: "例如：轉成 D 大調，音符變成 D, E, F#, G, A, B, C#, D",
            solution: "整體升高兩個半音（一個全音）後，調性轉為【D 大調】。\n音階轉變為：$D, E, F^\\#, G, A, B, C^\\#, D$（五線譜上 F 與 C 皆需升半音）。在 Desmos 中，透過向量運算 $F = f_0 \\cdot 2^{(S+2)/12}$，即可實現全曲移調。",
            formatAnswer: (ans) => `1. 調性轉變結果：C 升高兩個半音（一個全音）變為 D，因此整體轉為【D 大調】。\n2. 各音符變化：D, E, F#, G, A, B, C#, D（注意五線譜上 F 與 C 均帶有升記號）。\n3. 數學向量廣播原理：在 Desmos 中設定向量運算 F = f_0 · 2^((S + k) / 12)，設定平移滑桿 k = +2。利用陣列廣播特性，向量中所有元素同時平移，相對音程距離保持不變，達成全曲移調。\n學生作答說明：${ans}`
          }
        ]
      }
    },

    // ==========================================
    // 四、節奏與動態
    // ==========================================
    "4-1": {
      id: "4-1",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "高斯取整與小數計時器",
      conceptTitle: "離散拍點與連續時間",
      modelTitle: "高斯取整與拍內計時器",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/a0nxj4issv",
      motivation: `
時間滑桿 $t$ 是連續平滑滾動的實數（$0.1, 0.2, 0.3 \\dots$），但音樂的拍子是按整數拍跳動的。
如何從連續時間中分離出「當前第幾拍」以及「拍內進行進度」？
透過高斯取整函數 $\\operatorname{floor}(t)$ 即可達成：
- 取整數部分：確認目前在第幾拍。
- 減去整數部分（小數部分）：記錄拍內從 0 到 1 的進度。
      `,
      mathModel: `
**高斯取整與拍內計時器**：
- **拍數計數器（階梯函數）**：
  $$\\lfloor t \\rfloor = \\operatorname{floor}(t)$$
  只取整數部分，鎖定「當前第幾拍」。
- **拍內小數計時器（鋸齒波）**：
  $$t - \\operatorname{floor}(t) \\in [0, 1)$$
  時間減去整數部分，記錄每拍內部從小數 0 到 1 循環的微型計時器。當時間進入下一拍，小數歸零重新計算。
      `,
      tasks: [
        "1. 繪製階梯函數：在 Desmos 輸入 y = floor(x)，觀察整數階梯跳躍。",
        "2. 繪製小數鋸齒波：輸入 y = x - floor(x)，觀察區間 [0, 1) 的循環鋸齒波。",
        "3. 拍點時間對應：理解式子 t - floor(t) 如何量測每一拍內的時間進度百分比。"
      ],
      formula: `// 1. 高斯階梯函數 (整數拍)\ny_1 = \\operatorname{floor}(x)\n\n// 2. 拍內小數鋸齒波 (每拍內 0 到 1 循環)\ny_2 = x - \\operatorname{floor}(x)\n\n// 3. 拍內線性鋸齒衰減函數\ng(x) = \\frac{(\\operatorname{floor}(x) - x)}{2} + 1`,
      tips: `
- **整數拍提取**：高斯函數在 Desmos 中為 floor(x)，用來取得整數拍點。
- **拍內進度計時**：小數部分 x - floor(x) 在每拍內由 0 遞增至 1，是後續斷音控制與動態包絡線的計算基礎。
      `
    },

    "4-2": {
      id: "4-2",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "斷音與時值遮罩陣列（q, p, s 系統）",
      conceptTitle: "音符長短與留白控制",
      modelTitle: "時值遮罩與斷音控制",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/jsesxbjozc",
      motivation: `
連續播放相同音符時（例如 1 1），若波形未中斷，容易產生黏音現象。
為使音符分明，可在每拍拍尾將音量歸零（產生斷音 Staccato）。
利用拍內小數進度或三角函數截波作為音量遮罩，即可調控發聲與靜音的時間比例。
      `,
      mathModel: `
**一、 時值遮罩體系（利用小數部分留白）**：
- **$q$ 遮罩（斷音留白）**：
  $$q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\}$$
  每拍開頭留白 20%（音量為 0），後 80% 正常發聲，避免音符相黏。
- **$p$ 遮罩（半拍短音）**：
  $$p = \\left\\{t - \\operatorname{floor}(t) \\le 0.5: 0, 1\\right\\}$$
- **$s$ 遮罩（長音延留）**：
  $$s = \\left\\{t - \\operatorname{floor}(t) > 0.7: 0, 1\\right\\}$$
- **雙陣列演奏**：$\\operatorname{tone}(L[t], T[t])$，其中時值陣列 $T = [q, q, 1, p, s \\dots]$。

---

**二、 門檻截波（利用三角函數截波）**：
利用週期為 1 拍的正弦波 $\\sin(2\\pi t)$，配合門檻滑桿 $a$：
$$q_{\\text{gate}} = \\left\\{\\sin(2\\pi t) > a: 1, 0\\right\\}, \\quad a \\in [-0.9, 0.9]$$
調整滑桿 $a$ 可調控每拍發聲時間比例：
- $a = -0.5$（門檻低，發聲時間長）$\\to$ 延音
- $a = 0.0$（正半波發聲、負半波靜音）$\\to$ 標準 50% 半拍音
- $a = 0.8$（門檻高，僅波峰發聲）$\\to$ 短促跳音
      `,
      tasks: [
        "1. 黏音對比實作：分別播放無遮罩與加入 q 遮罩 tone(L[t], q) 的旋律，觀察加入留白後的發聲清晰度。",
        "2. 時值陣列建立：建立時值陣列 T = [q, q, 1, p, s]，為不同音符分配不同長短時值。",
        "3. 門檻截波測試：調整門檻滑桿 a（-0.5 到 0.8），觀察波形截斷與跳音長短變化。"
      ],
      formula: `// 1. 經典時值遮罩 (斷音留白)
q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\} // 80% 聲音
p = \\left\\{t - \\operatorname{floor}(t) \\le 0.5: 0, 1\\right\\} // 50% 聲音 (半拍短音)
s = \\left\\{t - \\operatorname{floor}(t) > 0.7: 0, 1\\right\\}   // 70% 聲音 (長音延留)

// 2. 門檻截波滑桿 (a 越大發聲時間越短)
a = 0.2
q_{\\text{gate}} = \\left\\{\\sin(2\\pi t) > a: 1, 0\\right\\}

// 3. 旋律陣列 L 與時值遮罩聯合演奏
\\operatorname{tone}(L[t], q)`,
      tips: `
- **發聲比例控制**：滑桿 a 決定正弦波高於門檻的時間比例，藉此調控音符的跳音程度。
- **時值留白**：斷音遮罩在拍尾預留 15%~20% 靜音，可避免連續同音黏連。
      `
    },

    "4-3": {
      id: "4-3",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "動態包絡衰減函數（敲擊樂器共鳴）",
      conceptTitle: "樂器發聲衰減與包絡線",
      modelTitle: "指數衰減動態包絡模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
若聲音一整拍的音量皆固定不變，聽感較為機械生硬。
敲擊樂器（如木琴、鋼琴、吉他）在敲擊瞬間能量最大、音量最高，隨後隨時間自然衰減。
利用底數為 $0.5$ 的等比指數衰減函數，即可模擬樂器發聲後的能量衰減特性。
      `,
      mathModel: `
**動態包絡線模型**：
利用拍內小數進度 $t - \\operatorname{floor}(t)$ 驅動等比衰減：
$$E(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}$$
- **快速衰減（如木琴）**：阻尼係數 $k = 10$，音量快速下降。
- **緩慢衰減（如鋼琴）**：阻尼係數 $k = 2.5$，餘音維持較久。
      `,
      tasks: [
        "1. 繪製等比衰減曲線：輸入 y = (0.5)^(3x) {0 <= x <= 1}，觀察指數衰減走勢。",
        "2. 阻尼滑桿調整：建立阻尼係數 k 滑桿（範圍 1 到 15），將包絡乘入 tone 音量參數。",
        "3. 衰減特性比對：比較 k=10 與 k=2.5 的音量衰減走勢與聽感差異。"
      ],
      formula: `// 底數 0.5 等比阻尼包絡線 (模擬敲擊樂器自然衰減)\nk = 3.5\nE(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}\n\n// 帶動態包絡之單音發聲\n\\operatorname{tone}(f(S[\\operatorname{floor}(t)]), 0.6 \\cdot E(t))`,
      tips: `
- **靜音間隙**：結尾加入 {t - floor(t) > 0.85: 0} 可保留 15% 靜音縫隙，避免與下一拍發聲重疊產生雜音。
- **阻尼係數**：係數 k 越大衰減越快，數值越小餘音越長。
      `
    },

    "4-4": {
      id: "4-4",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "8-bit 電玩音效與動態鼓組實驗室（選學）",
      conceptTitle: "合成音效的數學模型",
      modelTitle: "合成音效與打擊樂模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
利用拍內計時器 $u = t - \\operatorname{floor}(t)$ 與多項式、指數函數，可以在短時間內（0.1~0.3 秒）模擬各類合成音效與打擊樂器：
- 二次拋物線（頻率快速上升）
- 指數衰減（頻率急墜，打擊樂 Kick）
- 正弦調製（頻率週期性震盪）
      `,
      mathModel: `
**常用音效與打擊樂發聲模型**（以拍內計時器 $u = t - \\operatorname{floor}(t)$ 驅動）：
- **大鼓 Kick（頻率急墜 + 音量阻尼）**：
  $$\\operatorname{tone}(40 + 110 \\cdot (0.5)^{25u}, \\{u > 0.3: 0, (0.5)^{12u}\\})$$
- **跳躍音效（二次拋物線頻率上升）**：
  $$\\operatorname{tone}(400 + 800u^2, 0.5) \\quad \\{u \\le 0.3\\}$$
- **雷射音效（底數 0.5 指數等比下墜）**：
  $$\\operatorname{tone}(1500 \\cdot (0.5)^{10u}, 0.5) \\quad \\{u \\le 0.4\\}$$
- **調頻音效（正弦週期震盪）**：
  $$\\operatorname{tone}(600 + 200 \\sin(20u), 0.5) \\quad \\{u \\le 0.3\\}$$
      `,
      tasks: [
        "1. 大鼓 Kick 實作：輸入大鼓算式，按時間播放鍵，觀察低頻急墜的振動效果。",
        "2. 拋物線音效實驗：輸入二次拋物線算式，調整二次項係數觀察頻率上升速度。",
        "3. 指數下墜音效：輸入以 0.5 為底數的指數衰減算式，觀察頻率滑落走勢。",
        "4. 四拍節奏循環：設定大鼓在第 1、3 拍敲擊，旋律在第 2、4 拍發聲，完成基本節奏循環。"
      ],
      formula: `// 1. 拍內小數計時器 u\nu = t - \\operatorname{floor}(t)\n\n// 2. 大鼓 Kick：指數急墜重低音\n\\operatorname{tone}(40 + 110 \\cdot (0.5)^{25u}, \\{u > 0.3: 0, (0.5)^{12u}\\})\n\n// 3. 跳躍拋物線音效\n\\operatorname{tone}(400 + 800u^2, 0.5) \\{u \\le 0.3\\}\n\n// 4. 雷射指數下墜音效 (底數 0.5 等比遞減)\n\\operatorname{tone}(1500 \\cdot (0.5)^{10u}, 0.5) \\{u \\le 0.4\\}`,
      tips: `
- **打擊樂物理本質**：打擊樂發聲通常為短時間（0.1~0.3秒）內的頻率急降與音量指數衰減。
- **函數代換**：可將二次函數或正弦函數代入頻率參數，觀察不同函數幾何形狀對音高動態的影響。
      `
    },

    // ==========================================
    // 五、音色與物理
    // ==========================================
    "5-1": {
      id: "5-1",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "弦上物理駐波與節點幾何",
      conceptTitle: "琴弦振動與物理駐波",
      modelTitle: "弦上駐波邊界方程式與幾何模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
弦樂器發出的頻率以整數倍泛音為主（$1f_0, 2f_0, 3f_0 \\dots$）。
原因在於琴弦兩端受到固定端點約束（固定邊界條件）。
在 Desmos 中繪製兩端固定的駐波，可以觀察只有整數階數的波形能滿足兩端振幅為零的條件，形成固定不動的「波節（Node）」與振動最大的「波腹（Antinode）」。
      `,
      mathModel: `
**弦上駐波邊界條件方程式**：
設弦長為 $\\pi$，兩端固定在 $(0, 0)$ 與 $(\\pi, 0)$：
$$y(x, t) = \\sin(nx) \\cos(\\omega t) \\quad \\{0 \\le x \\le \\pi\\}$$
- **邊界條件**：在 $x=0$ 處，$\\sin(0) = 0$ 恆成立；在 $x=\\pi$ 處，要滿足 $\\sin(n\\pi) = 0$，**$n$ 必須為正整數（$n = 1, 2, 3 \\dots$）**。
- **波節（Node）**：振幅恆為 0、完全不動的固定點（$n=2$ 在 $\\pi/2$；$n=3$ 在 $\\pi/3, 2\\pi/3$）。
- **波腹（Antinode）**：振動幅度最大的點。
- **非整數階測試**：若 $n = 1.4$，右端點 $\\sin(1.4\\pi) \\approx -0.95 \\neq 0$，無法滿足固定邊界條件，不能形成穩定駐波。
      `,
      tasks: [
        "1. 固定邊界設定：在 Desmos 標註端點 (0, 0) 與 (pi, 0)，確認琴弦兩端受到約束。",
        "2. 整數諧波切換：滑動諧波階數 n = 1, 2, 3, 4，觀察弦上固定不動的「波節（Node）」幾何分佈。",
        "3. 非整數階破壞測試：將 n 改為小數（例如 1.4），觀察右端點脫離邊界、無法形成駐波的現象。",
        "4. 諧波發聲比對：播放 tone(220n)，觀察頻率按整數倍跳躍（八度、五度泛音）的音高變化。"
      ],
      formula: `// 1. 兩端固定邊界點
(0, 0), (\\pi, 0)

// 2. 物理駐波方程式 (按時間 t 播放)
n = 1                      // 諧波階數滑桿 (n = 1, 2, 3, 4...)
\\omega = 6                // 振動角頻率
t = 0
y = \\sin(n \\cdot x) \\cdot \\cos(\\omega \\cdot t) \\{0 \\le x \\le \\pi\\}

// 3. 諧波發聲比對 (基音 220Hz)
\\operatorname{tone}(220 \\cdot n)`,
      tips: `
- **整數倍泛音觀察**：$n=1$ 為基音（一個大波包）；$n=2$ 正中間出現 1 個不動波節；$n=3$ 內部出現 2 個波節。
- **弦長與波長關係**：兩端固定使琴弦只能激發波長為 $\\lambda = 2L/n$ 的自然駐波。
      `
    },

    "5-2": {
      id: "5-2",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "自然泛音列與樂器音色指紋",
      conceptTitle: "樂器音色與泛音分佈",
      modelTitle: "自然泛音列與音色疊加配方",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/gkpqdobd4p",
      motivation: `
不同樂器演奏同一音高（如 $A_3 = 220\\text{Hz}$）時，聽感各具特色。
真實樂器發聲時，除了基音之外，同時包含了一系列整數倍的「自然泛音列」。
各階泛音在能量上的分配比例，即構成了該樂器的音色特徵。
      `,
      mathModel: `
**自然泛音列（等差數列）與音色配比**：
自然泛音列以等差數列展開：
$$F = [f_0, \\; 2f_0, \\; 3f_0, \\; 4f_0] \\quad (f_0 = 220\\text{Hz})$$

- **基音 $1f_0$**：整根琴弦全振動（1 倍頻率）。
- **第 2 泛音 $2f_0$**：琴弦兩半振動（2 倍頻率，比值 $1:2$ 完全八度）。
- **第 3 泛音 $3f_0$**：琴弦三等分振動（3 倍頻率，比值 $1:3$ 純五度泛音）。

在 Desmos 中，音量參數可傳入陣列，為每個泛音設定獨立音量：
$$\\operatorname{tone}(F, \\; [v_1, v_2, v_3, v_4])$$

**三大經典樂器泛音配比參考**：
- **長笛（Flute）**：以基音為主，高次泛音微弱：$[0.8, \\; 0.1, \\; 0.05, \\; 0]$
- **單簧管（Clarinet）**：奇數泛音較顯著：$[0.6, \\; 0.0, \\; 0.35, \\; 0]$
- **弦樂（Strings）**：泛音豐富，能量平緩衰減：$[0.4, \\; 0.3, \\; 0.2, \\; 0.1]$
      `,
      tasks: [
        "1. 八度泛音體驗：播放 tone([k, 2k]) 感受完全八度的重合聽感。",
        "2. 建立 4 階泛音混音：輸入基音 220Hz 及其等差 4 階泛音，設定音量滑桿 v1, v2, v3, v4。",
        "3. 樂器配方比對：分別套用長笛、單簧管與小提琴的配比數值，比較在相同 220Hz 基頻下的音色差異。"
      ],
      formula: `// 1. 基音與 4 階自然泛音列 (等差數列)
f_0 = 220
F = [f_0, 2f_0, 3f_0, 4f_0]

// 2. 泛音音量配比滑桿 (範圍 0 到 1)
v_1 = 0.6   // 基音音量
v_2 = 0.0   // 第二泛音
v_3 = 0.35  // 第三泛音
v_4 = 0.0   // 第四泛音

// 3. 泛音合成發聲
\\operatorname{tone}(F, [v_1, v_2, v_3, v_4])`,
      tips: `
- **總音量控制**：各泛音音量總和建議控制在 1.0 左右（例如 0.6+0.35=0.95），避免過載破音。
- **音色成因**：不同樂器的音色特徵，取決於各階泛音的振幅配比。
      `
    },

    "5-3": {
      id: "5-3",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "幽靈基音（Missing Fundamental）",
      conceptTitle: "聽覺認知與低音還原",
      modelTitle: "幽靈基音之最大公因數模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
小型揚聲器受限於物理尺寸，往往難以發出低頻聲波（如低於 $150\\text{Hz}$）。
但當人耳同時接收到一組高頻倍頻泛音時，聽覺神經系統會依據頻率間隔推算出基頻（即泛音頻率的最大公因數 $\\gcd$），產生感知上的低音，此現象稱為「幽靈基音（Missing Fundamental）」。
      `,
      mathModel: `
**幽靈基音的最大公因數算式**：
同時播放三個高頻聲音：
$$f_1 = 600\\text{Hz}, \\quad f_2 = 800\\text{Hz}, \\quad f_3 = 1000\\text{Hz}$$
這三個頻率皆高於一般低音，但大腦依據頻率間隔計算基頻：
$$f_{\\text{ghost}} = \\gcd(600, 800, 1000) = 200\\text{Hz}$$
耳朵會感知到一個未直接發聲的 $200\\text{Hz}$ 低音。
      `,
      tasks: [
        "1. 播放高頻泛音組：在 Desmos 輸入 tone([600, 800, 1000], [0.3, 0.3, 0.3])。",
        "2. 比對真實低音：單獨播放 tone(200, 0.5)，比較兩者感知到的音高是否一致。",
        "3. 聽覺感知驗證：讓同桌同學聽測該組高頻音，詢問其感受到的整體音高。"
      ],
      formula: `// 幽靈基音實驗 (播放 600, 800, 1000Hz，感知 200Hz 基音)\n\\operatorname{tone}([600, 800, 1000], [0.3, 0.3, 0.3])\n\n// 對照組：真實 200Hz 基音\n\\operatorname{tone}(200, 0.5)`,
      tips: `
- **認知機制**：人耳接收到等差倍頻聲波時，會自動由頻率間距還原基頻。
- **應用實例**：此原理應用於小型耳機與行動裝置的低音強化演算法中。
      `
    },

    "5-4": {
      id: "5-4",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "傅立葉合成三大經典波形",
      conceptTitle: "正弦波合成幾何波形",
      modelTitle: "三大經典幾何波形傅立葉級數",
      status: "pending",
      desmosUrl: null,
      motivation: `
週期性波形皆可表示為不同頻率與振幅之正弦波的疊加（傅立葉級數）。
透過正弦波的級數相加，可逐步合成出方波（含奇數諧波）與鋸齒波（含所有諧波）等幾何波形。
      `,
      mathModel: `
**經典幾何波形之傅立葉級數**：
- **方波（Square Wave，僅含奇數諧波）**：
  $$y = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x) + \\dots$$
- **鋸齒波（Sawtooth Wave，含所有諧波）**：
  $$y = \\sin(x) - \\frac{1}{2}\\sin(2x) + \\frac{1}{3}\\sin(3x) - \\frac{1}{4}\\sin(4x) + \\dots$$
      `,
      tasks: [
        "1. 方波級數疊加：在 Desmos 依序疊加第 1, 3, 5, 7 諧波，觀察頂部如何由平滑弧線逼近方波。",
        "2. 方波發聲體驗：將方波級數振幅係數代入 tone 函數，聆聽合成方波的音質特性。"
      ],
      formula: `// 方波傅立葉前 4 項合成\nk = 220\n\\operatorname{tone}([k, 3k, 5k, 7k], [0.6, 0.6/3, 0.6/5, 0.6/7])\n\n// 坐標系幾何方波\ny = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x)`,
      tips: `
- **級數項數與波形**：疊加的正弦諧波項數越多，方波邊緣越平整，高頻成分越明顯。
- **傅立葉原理**：任何週期波形均可分解為正弦諧波疊加。
      `
    },

    // ==========================================
    // 六、和弦與多聲部
    // ==========================================
    "6-1": {
      id: "6-1",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "三和弦密碼與色彩（大三 vs 小三）",
      conceptTitle: "和弦結構與和聲色彩",
      modelTitle: "三和弦半音向量與結構",
      status: "pending",
      desmosUrl: null,
      motivation: `
大三和弦與小三和弦在聽感上呈現明亮與暗沉的色彩對比。
在半音幾何上，兩者的差異僅在於中間音（三音）相差 1 個半音：
- 大三和弦：$[0, 4, 7]$（大三度 4 半音 + 小三度 3 半音）
- 小三和弦：$[0, 3, 7]$（小三度 3 半音 + 大三度 4 半音）
透過調整半音向量，即可切換和弦的和聲色彩。
      `,
      mathModel: `
**三和弦半音位移向量**（以根音為 0）：
- **大三和弦（Major）**：
  $$[0, 4, 7] \\quad (\\text{大三度 } 4 \\text{ 半音 } + \\text{ 小三度 } 3 \\text{ 半音})$$
- **小三和弦（Minor）**：
  $$[0, 3, 7] \\quad (\\text{小三度 } 3 \\text{ 半音 } + \\text{ 大三度 } 4 \\text{ 半音})$$
      `,
      tasks: [
        "1. 大三和弦發聲：輸入 tone(f([0, 4, 7]), 0.3)，聆聽大三和弦的和聲效果。",
        "2. 小三和弦比對：修改中間音為 3，輸入 tone(f([0, 3, 7]), 0.3)，比較其和聲色彩差異。",
        "3. 和弦根音平移：加入根音變數 root，測試不同音高上的三和弦效果。"
      ],
      formula: `// 大三與小三和弦對照\n\\operatorname{tone}(f([0, 4, 7]), 0.3)  // 大三和弦\n\\operatorname{tone}(f([0, 3, 7]), 0.3)  // 小三和弦`,
      tips: `
- **多音音量控制**：和弦由多個音同時發聲，各音音量建議設定在 0.3 左右，避免總和過大破音。
- **三音決定色彩**：大三與小三和弦的核心差異在於三音（4 vs 3 個半音）。
      `
    },

    "6-2": {
      id: "6-2",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "流行音樂萬能卡農進行與同餘循環低音",
      conceptTitle: "循環低音與同餘運算",
      modelTitle: "同餘循環查表與和弦進行",
      status: "pending",
      desmosUrl: null,
      motivation: `
許多流行樂曲常以循環低音（Bassline）作為和聲基底（如卡農進行）。
利用數學上的同餘運算 $\\operatorname{mod}$，可讓時間變數 $t$ 在有限的陣列索引間週期循環，實現自動重複的低音伴奏。
      `,
      mathModel: `
**同餘查表循環伴奏模型**：
定義 4 拍經典低音循環陣列：
$$C_{\\text{bass}} = [-12, -5, -3, -8] \\quad (C \\to G \\to A \\to F)$$
同餘循環低音函數：
$$B(t) = C_{\\text{bass}}[\\operatorname{mod}(\\lfloor t \\rfloor, 4) + 1]$$
隨時間滑桿 $t$ 遞增，$\\operatorname{mod}$ 運算使索引在 $1, 2, 3, 4$ 之間週期循環。
      `,
      tasks: [
        "1. 同餘索引測試：在 Desmos 輸入 mod(floor(t), 4) + 1，確認數值在 1, 2, 3, 4 之間循環。",
        "2. 卡農低音發聲：輸入循環低音陣列與發聲式，播放觀察 4 拍循環。",
        "3. 雙聲部整合：同時播放旋律軌與低音伴奏軌，完成雙聲部合奏。"
      ],
      formula: `// 卡農 4 拍同餘循環低音\nC_{bass} = [-12, -5, -3, -8]\nB(t) = C_{bass}[\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1]\n\\operatorname{tone}(f(B(t)), 0.35)`,
      tips: `
- **同餘索引位移**：Desmos 的 mod(x, y) 輸出範圍為 0 到 y-1，對應陣列索引時需手動加 1。
- **多聲部配合**：旋律軌與低音軌可共用時間滑桿 t，達成節拍同步。
      `
    },

    "6-3": {
      id: "6-3",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "多軌分段接力架構（Relay Playback）",
      conceptTitle: "長曲分段與時間接力",
      modelTitle: "多軌時間位移接力模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/eodq3asol4",
      motivation: `
當樂曲拍數較長或多聲部並行時，若將所有音符寫在單一列表中，容易造成瀏覽器渲染負擔。
採用「分段接力」結構：將長曲依樂句切為數個分塊（$L_1, L_2, L_3 \\dots$），各段配合時間位移（$t - \\text{offset}$）依序發聲，並收合資料夾以維持運行效能。
      `,
      mathModel: `
**多軌分段時間位移接力模型**：
$$t = 0$$
$$\\operatorname{tone}(L_1[t], T_1[t])$$
$$\\operatorname{tone}(L_2[t - 50], T_2[t - 50])$$
$$\\operatorname{tone}(L_3[t - 98], T_3[t - 98])$$
$$\\dots$$
當時間 $t$ 到達 50 時，$L_2[t-50]$ 恰好從第 1 個音開始發聲，達成平滑接力。
      `,
      tasks: [
        "1. 分段架構解析：開啟範本，觀察長曲如何切分為多個接力分塊與伴奏軌。",
        "2. 時間位移計算：根據各樂段拍數，計算每段接力的時間位移量（offset）。",
        "3. 播放效能維護：播放時收合資料夾，避免瀏覽器同時渲染過多列表元素。"
      ],
      formula: `// 長曲分段接力播放架構 (Relay Playback)\n// 注意事項：播放時收合資料夾以維持效能\nt = 0\n\\operatorname{tone}(L_1[t], T_1[t])\n\\operatorname{tone}(L_2[t - 48], T_2[t - 48])\n\\operatorname{tone}(L_3[t - 84], T_3[t - 84])`,
      tips: `
- **效能維護**：資料夾展開時瀏覽器會為列表中各元素渲染 DOM 節點；播放時收合資料夾可避免掉幀。
- **時間偏移計算**：各段 offset 需等於前幾段拍數的累積總和。
      `
    },

    "6-4": {
      id: "6-4",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "自動琶音器與空間回音（Echo / Delay）",
      conceptTitle: "琶音織體與回音延遲",
      modelTitle: "自動琶音與空間回音模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
自動琶音（Arpeggiator）是將和弦各音依序快速彈奏的技巧。
結合時間延遲（$\\Delta t$）與等比音量衰減，可在聲音後方疊加弱化的複本，產生空間回音（Delay/Echo）效果。
      `,
      mathModel: `
**等比數列空間回音延遲方程**：
原聲加上時間差 $\\Delta t$ 且音量乘以公比 $r < 1$ 的複本：
$$V_{\\text{echo}}(t) = \\operatorname{tone}(f(S[t]), 0.5) + \\operatorname{tone}(f(S[t - 0.25]), 0.25) + \\operatorname{tone}(f(S[t - 0.5]), 0.125)$$
音量依等比數列 $0.5, 0.25, 0.125$ 遞減。
      `,
      tasks: [
        "1. 回音延遲實作：在旋律軌後方疊加一軌延遲 0.25 拍、音量減半的 tone 函數。",
        "2. 延遲時間調節：調整延遲時間 Delta t，比較不同延遲間隔的空間回響效果。",
        "3. 自動琶音播放：利用快速時間滑桿循序提取和弦各音，播放琶音織體。"
      ],
      formula: `// 等比數列空間回音\nV_{echo}(t) = \\operatorname{tone}(f(S[t]), 0.5) + \\operatorname{tone}(f(S[t - 0.25]), 0.25)`,
      tips: `
- **延遲間隔建議**：延遲間隔建議設為 0.25 拍（十六分音符）或 0.5 拍（八分音符），避免干擾原曲節奏。
- **等比衰減**：回音音量按等比數列遞減，呈現空間殘響感。
      `
    },

    // ==========================================
    // 七、視覺音遊與演算法
    // ==========================================
    "7-1": {
      id: "7-1",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "巴哈《螃蟹卡農》幾何對稱變換",
      conceptTitle: "旋律幾何對稱與對位法",
      modelTitle: "旋律幾何對稱變換模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
在古典複音音樂（對位法）中，常利用幾何變換組織旋律：
- **逆行（Retrograde）**：將旋律沿時間軸水平翻轉（由尾奏向頭）。
- **倒影（Inversion）**：將旋律沿音高軸垂直鏡射。
巴哈《螃蟹卡農》即同時演奏正向旋律與逆行旋律，兩者在對稱結構下自然協和。
      `,
      mathModel: `
**旋律陣列的幾何變換**：
設樂譜陣列長度為 $N$：
- **原始正向旋律**：$S_{\\text{orig}}[t]$
- **逆行（水平翻轉）**：
  $$S_{\\text{retro}}[t] = S_{\\text{orig}}[N - t + 1]$$
- **倒影（垂直鏡射，以軸線 $y=C$ 為鏡像）**：
  $$S_{\\text{inver}}[t] = 2C - S_{\\text{orig}}[t]$$
      `,
      tasks: [
        "1. 正反雙軌合奏：在 Desmos 中同時播放正向陣列與逆行陣列，觀察對位效果。",
        "2. 幾何對稱折線：繪製正向與鏡射旋律在坐標平面上的折線圖，觀察幾何對稱性。"
      ],
      formula: `// 旋律逆行 (水平翻轉)\nS_{retro}[t] = S_{orig}[N - t + 1]\n\n// 雙軌對稱同時演奏\n\\operatorname{tone}(f(S_{orig}[t]), 0.35) + \\operatorname{tone}(f(S_{retro}[t]), 0.35)`,
      tips: `
- **幾何對位原理**：數學中的水平翻轉與鉛直鏡射，在音樂對位法中分別對應逆行與倒影。
- **對稱和聲**：正向旋律與逆行旋律經過適當音程設計，可同時演奏產生協和和聲。
      `
    },

    "7-2": {
      id: "7-2",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "Desmos Audio Trace（Alt + T）函數圖形音訊追蹤",
      conceptTitle: "函數圖像音訊追蹤",
      modelTitle: "函數圖像音訊追蹤規約",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/oiamjxssnc",
      motivation: `
Desmos 內建「聲音追蹤（Audio Trace）」無障礙功能，可將坐標平面上的函數曲線轉化為音高播放。
透過定義階梯函數 $y = a[\\operatorname{floor}(nx)]$，並將 Y 軸範圍設為 $0 \\sim 12$（對應一個八度內的 12 個半音），即可直接利用函數圖像進行旋律發聲。
      `,
      mathModel: `
**Desmos 聽圖規約**：
1. **音域限定**：Desmos 聽取圖像聲音的音域固定為 **$E_3 \\sim E_4$**。
2. **半音階梯等分**：把 Y 軸分成 0 到 12（12 等分），每單位長度恰好對應一個半音：
   $0=E, 1=F, 2=F\\#, 3=G, 4=G\\#, 5=A, 6=A\\#, 7=B, 8=C, 9=C\\#, 10=D, 11=D\\#, 12=E$
3. **階梯函數映射**：$y = a[\\operatorname{floor}(nx)]$，其中 $n$ 控制音符密度。
4. **休止符技巧**：設定 $t = -1000$（移至可見音域之外）。
      `,
      tasks: [
        "1. 坐標軸窗口設定：將 Desmos 坐標軸 Y 軸鎖定在 0 到 12 區間。",
        "2. 輸入階梯函數：輸入 y = a[floor(16x)]，填入示範旋律陣列 a。",
        "3. 啟動 Audio Trace：選取該算式，按鍵盤 Alt + T（Mac: Option + T），再按 H 鍵播放函數曲線聲音。"
      ],
      formula: `// Desmos 聽圖音域為 E3~E4，Y軸設為 0~12\ny = a[\\operatorname{floor}(16x)]\nt = -1000 // 負值代表休止符\n\n// 旋律陣列 a\na = [3, t, 5, t, 8, t, 5, t, 12, 12, 12, t, 12, 12, 12, 10, 10, t, t, t, t, 3, t, 5, t, 8, t, 5, t, 10, 10, 10, t, 10, 10, 10, t, 8, 8, t, t, t, t, 3, t, 5, t, 8, t, 5, t, 8, 8, 8, 8, 10, 10, 10, 10, 7, 7, 7, 7, 5, 5, 3, 3, 3, 5, 5, 8, 8, 5, 5, 10, 10, 12, 12, 7, 7, 7, 7, 7, 7, 7, 7]`,
      tips: `
- **坐標系邊界設定**：請確保 Y 軸上下邊界設定在 0 與 12，否則音高會產生整體位移。
- **階梯函數映射**：使用 floor() 將連續函數離散化為琴鍵音階，搭配 Alt + T 即可由圖形直接發聲。
      `
    },

    "7-3": {
      id: "7-3",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "薛帕德無限音階（Shepard Tone）",
      conceptTitle: "聽覺錯覺：連續爬升音階",
      modelTitle: "薛帕德音階數學架構",
      status: "pending",
      desmosUrl: null,
      motivation: `
薛帕德音階（Shepard Tone）是一種心理聲學錯覺：聽者會感覺音階似乎在永無止境地向上爬升。
其數學結構為：多個相隔八度的音階同時爬升（同餘循環），且各音音量受常態分佈（高斯鐘形曲線）包絡調控。當最高音爬至聽覺上限時音量自然減至零，同時最低音自低頻以微小音量升起接替，形成連續爬升的聽感。
      `,
      mathModel: `
**薛帕德音階數學架構**：
多個相隔八度的音同時爬升，音量受高斯常態分佈鐘形函數調控：
$$V(X) = e^{-\\frac{(X - 30)^2}{2 \\cdot 12^2}}$$
最高音在接近聽覺上限時音量縮小為 0，而最低音在低頻處以極小音量升起接續，形成無限循環上升的錯覺。
      `,
      tasks: [
        "1. 繪製高斯鐘形罩：在坐標系繪出高斯音量分佈曲線，觀察其對稱包絡形態。",
        "2. 播放薛帕德音階：按下時間播放鍵，觀察多個八度分組在高斯包絡下的連續爬升聽感。"
      ],
      formula: `// 薛帕德無限音階 (向量運算)\nK = [0, 1, 2, 3, 4]\nX = 12K + \\operatorname{mod}(t, 12)\nV = e^{-\\frac{(X - 30)^2}{2 \\cdot 12^2}}\n\\operatorname{tone}\\left(55 \\cdot 2^{\\frac{X}{12}}, V\\right)`,
      tips: `
- **錯覺成因**：同餘音階爬升結合高斯鐘形音量濾鏡，使人耳忽略端點邊界，產生連續爬升的錯覺。
- **單元目的**：本單元展示數學函數在心理聲學與聽覺認知上的應用。
      `
    },

    "7-4": {
      id: "7-4",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "演算法自動作曲（隨機取樣與機率轉移）",
      conceptTitle: "演算法自動作曲原理",
      modelTitle: "演算法自動作曲模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
透過演算法可自動產生旋律：
1. **五聲音階隨機取樣**：利用五聲音階避開小二度（半音）摩擦的特性，以隨機函數抽籤即可生成協和的旋律。
2. **馬可夫鏈機率轉移（進階）**：定義轉移矩陣，依機率決定下一個音符的走向。
      `,
      mathModel: `
**演算法生成模型分流**：
1. **五聲音階隨機抽籤池**：
   $$P = [C, D, E, G, A], \\quad idx = \\operatorname{floor}(\\operatorname{random}() \\times 5) + 1$$
2. **轉移矩陣馬可夫鏈（補充）**：
   定義狀態轉移矩陣 $M_{ij} = P(S_{t+1} = j \\mid S_t = i)$。
      `,
      tasks: [
        "1. 五聲隨機抽籤：建立五聲候選池，讓 Desmos 隨機抽出 16 顆音符並自動播放。",
        "2. 旋律協和度分析：觀察並討論為何五聲音階隨機生成的旋律不易產生刺耳不協和感。"
      ],
      formula: `// 五聲音階隨機抽籤自動作曲\nP = [0, 2, 4, 7, 9, 12]\nS_{auto} = P[\\operatorname{floor}(5 \\cdot \\operatorname{random}(16)) + 1]\n\\operatorname{tone}(f(S_{auto}[\\operatorname{floor}(t)]))`,
      tips: `
- **五聲隨機作曲**：利用 random() 隨機從五聲音階抽籤，因五聲抽離了半音摩擦，隨機排列依然平穩協和。
- **馬可夫鏈應用**：轉移矩陣涉及機率轉移模型，可作為延伸補充內容。
      `
    },

    "7-5": {
      id: "7-5",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "對數琴鍵映射與參數式下落音遊【期末專題】",
      conceptTitle: "對數坐標映射與節奏遊戲",
      modelTitle: "對數琴鍵映射與下落音遊模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/lp4hwddbnf",
      motivation: `
綜合全學期技巧：公版指數發聲、分段列表接力、時值斷音遮罩，以及**對數反函數還原琴鍵橫坐標**。
將音符頻率經對數運算映射至 X 軸琴鍵位置，縱坐標隨時間等速向下移動，即可在 Desmos 坐標系中建立下落式節奏音遊。
      `,
      mathModel: `
**對數琴鍵映射與下落點陣參數式**：
- **橫坐標（對數反函數還原琴鍵位置）**：
  $$X = 24\\log_{2}\\left(\\frac{L + 1}{442}\\right) + 1$$
  *(加 1 可防止休止符 $L=0$ 產生 $\\log_2(0) = -\\infty$ 無定義)*
- **縱坐標（隨時間 $t$ 等速下落）**：
  $$Y = \\frac{M - t + \\text{offset}}{3} \\quad (M = [1 \\dots N])$$
- 兩者結合成點陣參數式：$\\left(24\\log_2((L+1)/442)+1, \\; (M - t)/3\\right)$。
      `,
      tasks: [
        "1. 驗證對數映射：計算頻率經 24 * log2((L+1)/442) + 1 轉換後，各半音在 X 軸的等距分佈。",
        "2. 下落動態測試：按下時間滑桿 t 播放鍵，觀察音符點陣等速下落並與發聲同步。",
        "3. 期末專題製作：選擇喜愛的曲目，編排下落音遊並儲存於個人的 Desmos 帳號。"
      ],
      formula: `// 下落式音遊核心參數式\nM = [1 ... 320]\n\n// 對數琴鍵還原 X 軸 + 等速時間下落 Y 軸\n\\left(24\\log_{2}\\left(\\frac{L_{1}+1}{442}\\right)+1, \\frac{M-t}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{2}+1}{442}\\right)+1, \\frac{M-t+80}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{3}+1}{440}\\right)+1, \\frac{M-t+160}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{4}+1}{440}\\right)+1, \\frac{M-t+240}{3}\\right)`,
      tips: `
- **對數琴鍵映射**：利用 24*log2((L+1)/440)+1 將頻率還原為琴鍵 X 坐標，達成音符精確打擊。
- **專題成果存檔**：期末專題成果可直接存檔於個人 Desmos Google 帳號，並將分享連結作為學習成果展示。
      `
    }

  }
};
