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
      units: ["2-1", "2-2", "2-3", "2-4", "2-5"]
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
聲音在生活與高中物理中大家並不陌生。在進入數學建模與寫作樂譜之前，我們先快速複習決定聲音聽感的「三大要素」：

1. **音量（Loudness） $\\to$ 振幅（Amplitude）**：
   - 代表聲波振動的強弱幅度。
   - 振幅越大，聲音越響亮；振幅越小，聲音越微弱。
2. **音高（Pitch） $\\to$ 頻率（Frequency, $f$）**：
   - 代表物體每秒振動的次數，單位為赫茲（$\\text{Hz}$）。
   - 振動頻率越高，聲音聽起來越高亢尖銳；頻率越低，聲音越低沉穩重。
3. **音色（Timbre） $\\to$ 波形（Waveform）**：
   - 代表聲波振動的形狀結構（例如平滑的正弦波、方波、鋸齒波，或不同倍頻泛音疊加出的複雜波形）。
   - 即使鋼琴、小提琴和人聲唱出完全相同的音量（相同振幅）與音高（相同頻率），我們的耳朵依然能輕易分辨是哪種樂器，這就是由波形決定的音色。
      `,
      mathModel: `
在 Desmos 數學繪圖機中，發出純音的核心函數語法為：
$$\\operatorname{tone}(\\text{頻率}, \\text{音量})$$

- **單參數（省略音量）**：
  - $\\operatorname{tone}(440)$：只給頻率，系統直接以預設音量（約 $0.6$）發出標準 A 音。
- **雙參數（指定音量）**：
  - $\\operatorname{tone}(440, 0.5)$：第二個參數可指定音量（範圍為 $0 \\sim 1$，$0.5$ 代表中等音量）。
- **動態變數滑桿**：
  - $\\operatorname{tone}(a, b)$：將頻率與音量交給滑桿 $a$ 與 $b$ 動態拉動調節。

> 💡 **課堂排坑：Desmos 發聲的雙開關**
> 要在 Desmos 順利聽見聲音，必須確認以下兩個開關皆已開啟：
> 1. 畫面最左上角的「揚聲器總開關」（必須開啟）。
> 2. 算式左側圓圈內的「音符小圖標」（必須反白亮起，不可為反灰靜音）。
      `,
      tasks: [
        "【雙視窗分屏教學】：將螢幕左右各半切分（Windows 按 Win + ← / →；Mac 長按視窗左上綠色圓鈕選擇分割視窗），左側放置課程講義，右側放置 Desmos 工作區。",
        "【Google 帳號存檔】：在右側開啟 Desmos 範本，第一件事先登入 Google 帳號，點右上角儲存命名為「01_聲音實驗」。",
        "【輸入發聲函數】：在第一行輸入 tone(440) 體驗最簡發聲（亦可輸入 tone(440, 0.5) 指定音量），確認畫面左上角揚聲器開關與算式左側音符開關皆已開啟，聆聽標準 A 音（440Hz）。",
        "【建立變數滑桿】：新開一行輸入 tone(a, b)，點擊自動建立滑桿。設定頻率 a 範圍 50~2000（步長 1）、音量 b 範圍 0~1（步長 0.05），拉動滑桿直觀感受音高與音量變化。",
        "【調音師小挑戰】：將音量 b 固定在 0.5，手動拉動頻率 a，精準停在 440Hz（標準 A 音）。",
        "【建立資料夾收納】：點擊左上角「+」號建立資料夾並命名為「單音與發聲」，將算式拖入收合保持版面乾淨清爽。"
      ],
      formula: `// 1. 最簡單音發聲 (省略音量，系統以預設音量發聲)\n\\operatorname{tone}(440)\n\n// 2. 雙參數滑桿動態發聲\na = 440\nb = 0.5\n\\operatorname{tone}(a, b)`,
      tips: `
- **排查無聲狀況**：現場聽不到聲音 90% 是因為雙開關未開啟，請檢查「左上角揚聲器總開關」與「算式左側音符圖標」是否皆已點亮。
- **硬體測試小技巧**：懷疑耳機或電腦喇叭異常時，第一動作是在第一行輸入 \`tone(440)\` 測試，能出聲即代表硬體完全正常。
- **設備與音量**：電腦教室以適度放音操作即可，不強求自備 3.5mm 耳機；若有強烈聽音需求，可使用個人手機開啟 Desmos 網址並搭配個人耳機聆聽。
- **找不到進階工具**：若在 Desmos 介面找不到某些功能（如計時器 Ticker），通常是因為未登入 Google 帳號或開啟了無痕視窗，請務必先登入個人帳號。
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
在 Desmos 中，我們可以用中括號 \`[ ]\` 建立「列表（List）」，將多個頻率依序或同時組織起來：
- **多音同時發聲（和弦）**：列表內放入多個頻率，電腦會同時發聲疊加共振。
- **單音循序演奏（旋律）**：配合時間變數 $t$，以 $\\operatorname{tone}(L[t])$ 依序提取列表中的音符，自動演奏出旋律。
      `,
      mathModel: `
**1. 多音並發（和弦初探）**：
$$\\operatorname{tone}([440, 880])$$
- 列表中放入多個頻率，Desmos 同時發出 440Hz 與 880Hz 兩個八度純音。

**2. 循序索引單音（旋律播放模式）**：
$$L = [440, 880, 220, 110, 1760], \\quad t = 1, \\quad \\operatorname{tone}(L[t])$$
- $L[t]$ 代表指針提取列表中第 $t$ 個音符發聲。
- 隨時間滑桿 $t$ 前進，音符依序輪流演奏。
      `,
      tasks: [
        "【和弦初體驗】：輸入 tone([440, 880])，體驗兩個音同時發聲共鳴的和聲效果。",
        "【建立旋律列表】：自訂一個包含 5 個頻率的列表 L = [440, 554, 659, 880, 440]。",
        "【啟動時間滑桿】：輸入 tone(L[t])，新增時間滑桿 t（範圍 1 到 5，步長 1），按下播放鍵聆聽旋律自動依序流動。",
        "【課堂盲聽挑戰】：聆聽老師在課堂投影播放的 3 首神秘旋律，在下方隨堂學習單記錄盲測成果！"
      ],
      formula: `// 1. 同時播放多個音符 (和弦)\n\\operatorname{tone}([440, 880])\n\n// 2. 列表旋律循序播放 (L[t] 代表只輸出第 t 個音符)\nL = [440, 880, 220, 110, 1760]\nt = 1\n\\operatorname{tone}(L[t])`,
      tips: `
- **滑桿播放設定**：點擊時間滑桿 $t$ 左側的設定圖標，可調整播放速度（例如 $0.5\\times$ 慢速或 $2\\times$ 快速）與循環模式。
- **列表索引注意事項**：在 Desmos 中，列表的第一個元素索引為 $1$；若 $t$ 超出列表長度範圍，系統將呈現靜音。
      `,
      worksheet: {
        title: "隨堂學習單 1：神秘旋律盲測與陣列演奏原理",
        questions: [
          {
            id: "q1_songs",
            title: "課堂神秘旋律盲測挑戰",
            type: "radio",
            prompt: "聆聽老師在課堂投影播放的 3 首神秘旋律，請記錄你成功猜中了幾首：",
            options: [
              "一首都沒猜出來 😅",
              "猜中 1 首",
              "猜中 2 首",
              "全對！！！"
            ],
            solution: "課堂播放的 3 首神秘旋律分別為：《春日影》、《我很好騙》與米津玄師《Lemon》！\n在 Desmos 中，只需一組頻率列表 $L$ 與時間滑桿 $t$，配合 `tone(L[t])`，電腦就能像唱盤唱針依序讀取頻率發聲，自動演奏出動聽的旋律。",
            formatAnswer: (ans) => `我在神秘旋律盲測中猜中了：【${ans}】。\n聽辨心得：課堂 3 首神秘旋律為《春日影》、《我很好騙》與《Lemon》。透過 Desmos 列表 L[t] 與時間變數 t，電腦就像唱盤唱針依序讀取頻率發聲，無需手動切換滑桿即可自動演奏完整旋律。`
          },
          {
            id: "q2_list_syntax",
            title: "多音和弦與循序單音之語法差異",
            type: "textarea",
            prompt: "在 Desmos 中，`tone([440, 880])` 與 `tone(L[t])` 兩種語法在發聲物理上有何不同？時間滑桿 $t$ 在其中扮演什麼角色？請寫出你的理解與聽感觀察。",
            placeholder: "例如：中括號放多個數字會同時發聲形成和弦；而 L[t] 透過 t 依序取出單一音符，t 就像唱盤唱針...",
            solution: "1. `tone([440, 880])`：列表內放置多個頻率時，電腦會同時發聲形成「和弦」。\n2. `tone(L[t])`：加上索引 $[t]$ 後，一次只提取列表中第 $t$ 個音符發聲；隨時間滑桿 $t$ 遞增，依序演奏出「旋律」。",
            formatAnswer: (ans) => `語法發聲物理差異與理解：\n${ans}\n\n（參考重點：列表放多個頻率為同時發聲的和弦；配合索引 L[t] 與時間滑桿 t 則為依序發聲的旋律。）`
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
為什麼兩個音一起彈，有時候聽起來純淨穩定，有時候卻像金屬摩擦一樣刺耳？
如果兩道聲音的頻率非常接近，它們在空氣中傳播時會產生「週期性相遇」：
波峰撞波峰時聲音被放大，波峰撞波谷時聲音被抵消抹平——這就是物理學上的「拍頻（Beats）」現象！
      `,
      mathModel: `
**拍頻（Beats）的物理本質：波形週期性同相與反相**

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/j4sqzyfwfx?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

- 🔵 **藍線（波 1）**：基準頻率 $f_1 = 1$ 的聲波向前傳播。
- 🟢 **綠線（波 2）**：頻率微差 $f_2 = 1.1$ 的聲波，波峰隨時間慢慢超車藍線。
- 🔴 **紅線（合成波）**：兩道聲波在空氣中疊加的振動結果（$y_3 = y_1 + y_2$）。
  - **相長**：波峰重疊時振幅變大，聲音變響亮。
  - **相消**：波峰對上波谷時互相抵消抹平，聲音變小甚至無聲。

**🤔 想一想：合成波的週期**
1. 觀察下方紅線，從一次聲音最大到下一次聲音最大，大約經過多久？這就是拍頻的週期。
2. 試著調整畫布上的滑桿 $f_2$：當兩道波的頻率越來越接近時，忽大忽小的週期是變長還是變短？為什麼？
      `,
      mathConceptTitle: "數學原理：合成波週期與最小公倍數",
      mathConcept: `
**操場跑步問題**
想像兩個人在操場起跑線上同時出發：
- 藍波（基準波）：跑完 1 圈要 $1$ 秒（週期 $T_1 = 1$）。
- 綠波（超車波）：稍微快一點點，跑完 1 圈只要 $\\frac{10}{11}$ 秒（週期 $T_2 = \\frac{10}{11}$）。

**何時會在起點重新碰頭？**
兩人什麼時候會「剛好都跑完整數圈」，在起點再次波峰完全重合？
- 藍波跑了 **$10$ 圈**（剛好花 $10$ 秒）。
- 綠波跑了 **$11$ 圈**（也剛好花 $10$ 秒）。

兩者在第 **$10$ 秒** 剛好都走完整數圈，在起點重新波峰重合！這段循環時間就是合成波忽大忽小的週期。

**這就是「最小公倍數」**
找出兩道波能「同時走完整數個週期」的最短時間，本質上就是求週期的最小公倍數。

**🤔 想一想**
若兩波頻率越來越接近（例如綠波跑一圈變成 $\\frac{100}{101}$ 秒），兩者要跑幾圈才會在起點重新碰頭？合成波忽大忽小的週期會變長還是變短？
      `,
      tasks: [
        "【任務一：雙音和諧比例初探】點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【和諧音】並播放 tone([220, 220a])。用滑鼠慢慢拖曳比例滑桿 a（從 1 拉到 4），特別注意停在 a = 2（頻率比 1:2）與 a = 3（頻率比 1:3）的位置，仔細聆聽聲音是不是完全融為一體、純淨無比？（想想看：為什麼這兩個比例會特別純淨安定？）",
        "【任務二：同桌雙人極限盲測】展開第 2 個資料夾【人耳聲音分辨程度】。一人戴耳機背對螢幕（或閉眼），由同桌夥伴操作電腦，隨機順序個別播放 tone(442) 與 tone(442b)。猜猜看哪個音比較高？若能猜中，夥伴便將比例滑桿 b 縮小再測，直到聽不出差異為止，記錄測出的最小極限比例 b（隨後角色互換）。",
        "【任務三：微音拍頻體驗】保持剛才盲測時聽不出高低的微小音差 b（例如 b = 1.0004），同時點開兩個聲音發聲！聆聽耳機中原本個別分不出的微小音差，如何瞬間轉化為緩慢呼吸般忽大忽小的「嗚～嗚～」音量週期波動（拍頻 Beats）。",
        "【任務四：動態波形干涉實作】展開第 3 個資料夾【圖示為何會有此現象】（或直接操作上方內嵌畫布），按下時間滑桿 t 左側的播放鍵 ⏵。親眼觀察上方藍波 y_1 與綠波 y_2 如何超車錯位，並見證下方紅線合成波 y_3 如何在「波峰撞波峰時變大聲（相長）」與「波峰撞波谷時被抹平無聲（相消）」！動手拖曳滑桿 f_2，觀察紅線起伏節奏的變化。"
      ],
      formula: `// 📁 1. 和諧音 (頻率比例滑桿 a)\n\\operatorname{tone}([220, 220a])\na = 1\n\n// 📁 2. 人耳聲音分辨程度 (微音盲測與拍頻，滑桿 b)\n\\operatorname{tone}(442)\n\\operatorname{tone}(442b)\nb = 1.0004\n\n// 📁 3. 圖示為何會有此現象 (行進波干涉動態模擬)\nt = 0\nf_1 = 1\nf_2 = 1.1\ny_1 = \\sin(f_1(x-t))\ny_2 = \\sin(f_2(x-t))\ny_3 = y_1 + y_2`,
      tips: `
- **體驗 1:2 與 1:3**：在拉動滑桿 $a$ 時，可以特別注意 $a=2$（$1:2$ 完全八度）與 $a=3$（$1:3$ 十二度泛音）純淨的聽感，體會簡單小整數比在聽覺上的安定特點。
- **盲測專注聽感**：盲測時音量適中即可，閉上眼睛專注聆聽個別播放時音高是否有細微差異。
- **拍頻觀察技巧**：同時播放兩音時，當兩頻率相差很小時（例如差 1~2Hz），耳朵不會聽到兩個獨立音高，而是聽到像心跳或呼吸般週期性的音量強弱變化。
- **波形相長相消**：兩道波向右傳播時，波峰重合時振幅最大（最響亮），波峰撞波谷時完全抵消（最安靜）。
      `,
      worksheet: {
        title: "隨堂學習單 2：雙音和諧比與人耳辨音極限",
        questions: [
          {
            id: "q2_ratio",
            title: "主觀最美頻率比探索（1:2 與 1:3 聽感分析）",
            type: "textarea",
            prompt: "在 Desmos 第 1 個資料夾【和諧音】中播放 `tone([220, 220a])`，拉動比例滑桿 $a$（從 1 到 4）。\n請特別將滑桿停在 $a = 2$（頻率比 $1:2$）與 $a = 3$（頻率比 $1:3$），聽聽看聲音有什麼特點？寫下你的聽感觀察，並說說看你自己最喜歡哪個頻率比例？",
            placeholder: "例如：當 a = 2（1:2）時，兩個音聽起來完全像同一個音只是高了一層；當 a = 3（1:3）時，聲音非常開闊純淨，完全沒有拍頻摩擦感...",
            solution: "當頻率比為簡單小整數比時，兩道波波峰完全重合的週期極短，拍頻完全消除，因此聽感極為和諧穩定：\n- 1:2：完全八度（聽起來完全融為一體）。\n- 1:3：純五度的泛音（聲音明亮純淨開闊）。",
            formatAnswer: (ans) => `1:2 與 1:3 聽感分析與和諧探究：\n${ans}\n\n（核心解析：頻率比為 1:2（八度）與 1:3（五度泛音）時，拍頻完全消除，聲音融為一體，簡單整數比展現了和諧穩定的聽覺特性。）`
          },
          {
            id: "q3_jnd",
            title: "兩人同桌盲測：人耳聽音辨識極限",
            type: "textarea",
            prompt: "兩人一組合作盲測：一人戴耳機不看畫面，由同桌夥伴在第 2 個資料夾【人耳聲音分辨程度】中，隨機順序個別播放 `tone(442)` 與 `tone(442b)`。\n如果聽得出哪個音比較高，就請夥伴將比例滑桿 $b$ 調小再測一次；直到聽不出來為止。\n請記錄你們測出「還能聽出高低差異的最小比例 $b$」是多少？並分享盲測時的聽覺感受與同時播放時聽到的現象。",
            placeholder: "例如：我們測出最小能分辨的比例是 b = 1.005（約 444.2Hz）。當 b 縮小到 1.002 時，就已經分不出哪個高哪個低了；但同時播放這兩個音時，會聽到像心跳一樣緩慢起伏的拍頻脈動...",
            solution: "在 442Hz 附近，未經專業訓練的人耳大約能察覺 2~3Hz 以上的音高差異（比例約 $b = 1.005$）。當兩音差異極小時，大腦很難直接判斷個別音高；但如果將這兩個音同時播放，反而會聽見忽大忽小的週期性音量波動（拍頻 Beats）！",
            formatAnswer: (ans) => `同桌盲測實測結果與聽感分享：\n${ans}\n\n（聲學解析：在 442Hz 附近，一般人耳辨識高低的極限大約在 2~3Hz 左右。當差異更小時，同時播放便會轉化為拍頻現象。）`
          }
        ]
      }
    },

    "2-2": {
      id: "2-2",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "畢達哥拉斯五度相生律與五聲音階",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/kklcngvj8a",
      motivation: `
古希臘哲學家畢達哥拉斯發現了弦長比例與音高之間的關聯：

**一、 為什麼 1:2 最和諧？（週期最短、聽感最純淨）**
回顧上一單元，我們發現「合成波重複的週期越短，聲音就越乾淨」：
- 頻率比 **$1:2$**：合成波每 **$1$ 個循環**就完全重合一次。除了同頻率（$1:1$）之外，這是週期最短的比例，兩音融合得天衣無縫，聽起來如同同一個聲音！

**二、 定義 1:2 為「高八度」（同一個音）與音階探索範圍**
正因為 $1:2$ 的聽感高度融合，音樂上將頻率翻倍視為進入更高循環的「同一個音」（例如中央音與高八度的音）。
這為我們劃定了一個音階的探索範圍：**所有音符的頻率比都應落在 1 ~ 2 之間**。

**三、 從 1:3 思考：在 1 到 2 之間是哪兩個音的比例？**
回顧上一單元學生聽過極度純淨的泛音：除了 $1:1$ 與 $1:2$ 之外，下一個最簡單的整數比就是 **$1:3$**！
- 但是，頻率倍數 $3$ 已經超過了八度範圍 1 ~ 2（跑到了更高的八度）。
- **請同學思考**：頻率比為 $3$ 的這個音，若要把它折回同一個八度 1 ~ 2 之間（也就是降一個八度除以 2），會對應到哪兩個音的比例？
- 答案就是：**$1 : \\dfrac{3}{2}$**（也就是頻率乘上 $\\dfrac{3}{2}$，音樂上稱為「純五度」）！
既然 $\\dfrac{3}{2}$ 來自最簡單純淨的 $1:3$ 折半，我們接下來就**「一直乘以 $\\dfrac{3}{2}$」**來持續建構音階！

**四、 音階造法**
畢達哥拉斯從基準音 $1$ 出發，反覆執行這項法則：
1. **每次乘 $\\dfrac{3}{2}$**（純五度向上相生，源自最簡單和諧的整數 3）。
2. **大於等於 2 則除以 2**（若依規則算出的頻率比超過 $2$，代表它跑進了更高的八度，就必須「除以 2」折回 1 ~ 2 的八度範圍內）。

如此相生五次後，便推導出了 5 個純淨和諧的頻率比例！
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
    
    <!-- 頂部相生弧線與 ×3/2 (弧頂與數字保留充裕間距，箭頭不遮字) -->
    <path d="M 112 52 Q 172 16 232 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="172" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 288 50 Q 345 16 402 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="345" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 458 50 Q 515 16 572 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="515" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>
    
    <path d="M 628 50 Q 685 16 742 50" fill="none" stroke="#c26d36" stroke-width="2.2" stroke-linecap="round" marker-end="url(#scale-arrow)" />
    <text x="685" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#c26d36" font-family="'JetBrains Mono', monospace, sans-serif">× 3/2</text>

    <!-- 中間行：純分數直式排版 (分子、分數線、分母) 與推導順序 (排序前不出現音名) -->
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

依照上方生律圖計算出的分數，由小到大排隊（最後補上高八度 $2$）：
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

*(以基準音 $263\\text{Hz}$ 為例，各音頻率即為基準頻率乘上該純分數)*
      `,
      tasks: [
        "【生律推導流程觀察】：觀察上方生律圖解，理解每次乘 3/2、超過 2 則除以 2 的運算規則，並體會由小到大排列出的五聲音階比例（1, 9/8, 81/64, 3/2, 27/16）。",
        "【聆聽五聲音階階梯】：開啟 Desmos 範本第一資料夾，基準音設定為 263Hz。依序播放五個分數比值 tone(263 * 1)、tone(263 * 9/8)、tone(263 * 81/64)、tone(263 * 3/2)、tone(263 * 27/16)，親耳感受由低到高逐級上升的五聲音階（宮、商、角、徵、羽）。",
        "【《滄海一聲笑》五聲演奏】：因為 Desmos 變數僅支援英文字母，範本第二資料夾暫時借用五個英文代號代表五個音（宮=C, 商=D, 角=E, 徵=G, 羽=A）。拉動滑桿 t=0 播放陣列 L，體驗黃霑大師將五聲音階由高到低倒著唱（羽 徵 角 商 宮）的武俠名曲！",
        "【即興無地雷挑戰（自由選玩）】：五聲音階沒有相鄰緊挨的音，隨意更換陣列 L 中的音符排列，聽聽看是不是怎麼亂彈都充滿仙俠古風？"
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
- **變數代號說明**：在 Desmos 中使用 C, D, E, G, A 是因為軟體變數以英文字母命名，在此分別對應推導出的五個音高。
- **生律順序 vs 音階順序**：生律順序是數學乘法產生的計算先後（$1 \\longrightarrow 3/2 \\longrightarrow 9/8 \\longrightarrow 27/16 \\longrightarrow 81/64$），音階順序則是把頻率由小到大排好歌唱的結果（$1, \\; 9/8, \\; 81/64, \\; 3/2, \\; 27/16, \\; 2$）。
- **五聲即興無地雷**：五聲音階抽掉了相鄰緊挨的音，音距寬闊，且彼此比例源自純五度相生，因此隨意排列組合都不會刺耳撞音！
      `,
      worksheet: {
        title: "隨堂學習單 1：五聲音階手算與八度歸一任務",
        questions: [
          {
            id: "q4_pentatonic",
            title: "五度相生律之八度折半推導計算",
            type: "text",
            prompt: "畢達哥拉斯音律遵循兩大規則：① 從 1 開始每次乘以 3/2；② 若大於 2 則除以 2（折回八度內）。請在草稿紙寫出前 5 個音的推導步驟，並將這 5 個分數由小到大排列（寫成分數比值）：",
            placeholder: "請填入 5 個分數比值，例如：1 : 9/8 : 81/64 : 3/2 : 27/16",
            expected: "1 : 9/8 : 81/64 : 3/2 : 27/16 | 1:9/8:81/64:3/2:27/16",
            solution: "推導過程全記錄：\n1. 第 1 個音：$1$\n2. 第 2 個音：$1 \\times \\dfrac{3}{2} = \\dfrac{3}{2}$（小於 2，保留）\n3. 第 3 個音：$\\dfrac{3}{2} \\times \\dfrac{3}{2} = \\dfrac{9}{4} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{9}{8}$\n4. 第 4 個音：$\\dfrac{9}{8} \\times \\dfrac{3}{2} = \\dfrac{27}{16}$（小於 2，保留）\n5. 第 5 個音：$\\dfrac{27}{16} \\times \\dfrac{3}{2} = \\dfrac{81}{32} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{81}{64}$\n\n**由小到大排隊**：$1 < \\dfrac{9}{8} < \\dfrac{81}{64} < \\dfrac{3}{2} < \\dfrac{27}{16}$（依序對應宮、商、角、徵、羽）！",
            formatAnswer: (ans) => `五度相生推導步驟：\n1. 第 1 音：1\n2. 第 2 音：1 × (3/2) = 3/2（小於 2 保留）\n3. 第 3 音：(3/2) × (3/2) = 9/4 > 2，除以 2 得 9/8\n4. 第 4 音：(9/8) × (3/2) = 27/16（小於 2 保留）\n5. 第 5 音：(27/16) × (3/2) = 81/32 > 2，除以 2 得 81/64\n\n由小到大排序結果：\n學生填答：${ans}\n標準比例：1 : 9/8 : 81/64 : 3/2 : 27/16（依序對應宮、商、角、徵、羽）`
          },
          {
            id: "q5_penta_reflection",
            title: "《滄海一聲笑》五聲音階與無地雷即興心得",
            type: "textarea",
            prompt: "黃霑的《滄海一聲笑》將五聲音階由高到低倒著彈（羽、徵、角、商、宮）成為傳世名曲。在課堂嘗試隨意排列這五個音時，也完全不會刺耳難聽。請用自己的話說說看：為什麼這五個音怎麼隨便彈都很和諧？",
            placeholder: "例如：因為這五個音都是用好聽的 3/2 生出來的，而且音跟音之間的距離拉開了，沒有緊挨著擠在一起打架的雜音...",
            solution: "五聲音階之所以怎麼彈都好聽，主要有兩個直觀原因：\n1. 【血緣親近】：五個音都是從最和諧的 3/2（由 1:3 降八度折回的純五度）相生而來，彼此比例自然融洽。\n2. 【音距拉開】：五聲音階只有 5 個音，音與音之間的距離拉得很開，沒有緊挨在一起擠著打架的音，所以不會產生刺耳的摩擦感，怎麼彈都自帶優美古風！",
            formatAnswer: (ans) => `心得與觀察：\n${ans}\n\n（核心概念：五音源自最和諧的 3/2 相生，且音距寬闊、沒有相鄰擠壓打架的刺耳雜音，因此隨意排列組合都很優美。）`
          }
        ]
      }
    },

    "2-3": {
      id: "2-3",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "五度相生到十二律：永遠關不上的圓（畢氏音差）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/slaarufxib",
      motivation: `
在上一單元（2-2），我們用「每次乘 $\\dfrac{3}{2}$，超過 2 就除以 2」算出了五聲音階的 5 個音：
$$
1, \\quad \\dfrac{3}{2}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{81}{64}
$$

**一、 用相同的規則繼續算下去（造出十二律）**
如果我們把這個規則一直做下去（可以按計算機），依序算出的數字為：
$$
1, \\quad \\dfrac{3}{2}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{81}{64}, \\quad \\dfrac{243}{128}, \\quad \\dfrac{729}{512}, \\quad \\dfrac{2187}{2048}, \\quad \\dfrac{6561}{4096}, \\quad \\dfrac{19683}{16384}, \\quad \\dfrac{59049}{32768}, \\quad \\dfrac{177147}{131072}, \\quad \\mathbf{\\dfrac{531441}{524288}}
$$

請看第 12 次算出來的數字：
$$
\\dfrac{3^{12}}{2^{19}} = \\dfrac{531441}{524288} \\approx \\mathbf{1.0136}
$$
因為 $3^{12} \\approx 2^{19}$（$531441 \\approx 524288$），它與起點 1 的誤差**只有微弱的 1.3%**！（回想之前 2-1 時，你能聽出的最小比例有小於 1.013 嗎？）
單獨聆聽一個音時，**人耳根本分辨不出這 1.3% 的微小差距**（聽起來幾乎就像同一個音）。因為乘到第 12 次時非常逼近起點，古代樂律學家便在 12 這個數字停下，建立十二律體系。

**二、 同樣由小到大排序後（畢氏十二律音階）：**
將這 12 個分數在 1 ~ 2 之間由小到大排好（最後補上高八度 2）：
$$
1, \\quad \\dfrac{2187}{2048}, \\quad \\dfrac{9}{8}, \\quad \\dfrac{19683}{16384}, \\quad \\dfrac{81}{64}, \\quad \\dfrac{177147}{131072}, \\quad \\dfrac{729}{512}, \\quad \\dfrac{3}{2}, \\quad \\dfrac{6561}{4096}, \\quad \\dfrac{27}{16}, \\quad \\dfrac{59049}{32768}, \\quad \\dfrac{243}{128}, \\quad 2
$$

**三、 圓永遠關不上（畢達哥拉斯音差）**
雖然 $1.0136$ 極度接近 $1$，但它在數學上**永遠不可能剛好等於 1**：
$$
3^{12} \\neq 2^{19} \\quad (\\mathbf{\\text{奇數} \\neq \\text{偶數}})
$$
3 的次方永遠是奇數、2 的次方永遠是偶數。五度相生的螺旋在數學上注定永遠無法剛好閉合成圓，多出來這塊 1.3% 的微小碎片，就是音樂史上著名的**「畢達哥拉斯音差（Pythagorean Comma）」**。
      `,
      mathModel: `
**一、 畢氏十二律發聲語法**：
在 Desmos 中，以基準音（例如中央 C $263\\text{Hz}$）乘上推導出的頻率比值 $r$ 進行發聲：
$$
f = 263 \\cdot r \\quad \\Longrightarrow \\quad \\operatorname{tone}(263 \\cdot r)
$$
- 例如純五度：$\\operatorname{tone}\\left(263 \\cdot \\dfrac{3}{2}\\right)$
- 展開範本第 1 個資料夾即可依序播放推導出的 12 個音階。

---

**二、 畢氏律法的問題：在不同調時會走音**：
五度相生推導出的十二律雖然在單一調性下很和諧，但應用在樂器上有兩項限制：
1. **存在微小誤差**：相生 12 次折回的值為 $\\dfrac{531441}{524288} \\approx 1.0136$，與起點 1 仍有些微差距（畢氏音差）。
2. **在不同調時會有問題（無法自由轉調）**：因為相生出的相鄰音之間頻率比並不完全相同，若將樂器換到不同的調性彈奏，音階的間距就會改變而產生走音。
      `,
      tasks: [
        "【Desmos 算式驗算】：在 Desmos 輸入 3^12 / 2^19，親眼看見數值跳出 1.0136...，驗證相生 12 次非常逼近起點 1。",
        "【聆聽畢氏十二律階梯】：開啟 Desmos 範本第 1 個資料夾，依序播放相生推導出的 12 個音階，感受五度相生鋪滿整個八度空間。",
        "【思考轉調問題】：若換從不同音起音演奏，因相鄰音之間頻率比不均勻，音階便會走音，思考如何讓每個相鄰音的間距完全相同？"
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
- **12 的由來**：因為 $3^{12} \\approx 2^{19}$（$\\dfrac{531441}{524288} \\approx 1.0136$），相生到第 12 次時非常逼近起點（誤差約 1.3%），因此許多文化皆採用 12 個音建立律制。
- **轉調問題**：畢氏十二律相鄰半音比例不均勻，在不同調演奏時會產生走音。
      `
    },

    "2-4": {
      id: "2-4",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "樂理基礎入門：音名、唱名、全半音與簡譜",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
上一單元我們用五度相生算出了一個八度內的 12 個頻率比值，但古代人算出了這些數字後，在樂器上要怎麼稱呼它們？為什麼現代音樂家不用「頻率 $329.6\\text{Hz}$」來溝通，而是說「這首歌是 E 調、先唱 Mi」？

因為在音樂中，發展出了一套兼顧**「物理客觀標準」**與**「歌唱聽覺感受」**的語言系統：
1. **音名（絕對身分證）**：代表物理上固定不變的絕對音高。
2. **唱名（相對聽感）**：代表我們嘴巴唱出來、耳朵聽到的階梯角色。
3. **簡譜（大眾樂譜）**：用最平易近人的數字 $1 \\sim 7$，任何人都能 3 分鐘看懂旋律！
      `,
      mathModel: `
**一、 音名 vs 唱名：身分證字號 vs 隨境暱稱**
- **音名（Pitch Names）**：$C, D, E, F, G, A, B$
  - 代表物理上**固定不變的絕對音高**（例如國際標準音 $A = 440\\text{Hz}$、中央 $C \\approx 261.6\\text{Hz}$）。
  - 無論唱哪一首歌、換到什麼調，音名的頻率永遠不會改變，就像每個人的身分證字號。
- **唱名（Solfège）**：$\\text{Do, Re, Mi, Fa, Sol, La, Ti}$
  - 代表**嘴巴唱出來的發音**與耳朵聽到的相對高低關係。
  - 在最基礎的 C 大調中：
    $$C \\to \\text{Do}, \\quad D \\to \\text{Re}, \\quad E \\to \\text{Mi}, \\quad F \\to \\text{Fa}, \\quad G \\to \\text{Sol}, \\quad A \\to \\text{La}, \\quad B \\to \\text{Ti}$$

---

**二、 鋼琴鍵盤上的 12 個音：全音與半音**
在鍵盤樂器上，一個八度內由 **7 個白鍵** 與 **5 個黑鍵** 構成共 12 個音：
- **升號（$\\sharp$，Sharp）**：升高一個半音；**降號（$\\flat$，Flat）**：降低一個半音。
- 例如：$C$ 右邊的黑鍵既可稱作 $C^\\sharp$（升 C），也可稱作 $D^\\flat$（降 D），兩者音高相同（同音異名）。

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
    <g transform="translate(510, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">B</text><text class="key-solfege" x="34" y="145">Ti</text><text class="key-num" x="34" y="165">7</text></g>
    <g transform="translate(580, 58)"><rect class="white-key" x="0" y="0" width="68" height="175" /><text class="key-pitch" x="34" y="125">C</text><text class="key-solfege" x="34" y="145">Do</text><text class="key-num" x="34" y="165">1̇</text></g>
    <g transform="translate(139, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">C♯</text><text class="black-text-flat" x="21" y="76">D♭</text></g>
    <g transform="translate(209, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">D♯</text><text class="black-text-flat" x="21" y="76">E♭</text></g>
    <g transform="translate(349, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">F♯</text><text class="black-text-flat" x="21" y="76">G♭</text></g>
    <g transform="translate(419, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">G♯</text><text class="black-text-flat" x="21" y="76">A♭</text></g>
    <g transform="translate(489, 58)"><rect class="black-key" x="0" y="0" width="42" height="106" /><text class="black-text-sharp" x="21" y="60">A♯</text><text class="black-text-flat" x="21" y="76">B♭</text></g>
  </svg>
</div>

- **黑鍵「二三規律」與半音秘密**：
  - 鋼琴黑鍵呈現「兩顆一組、三顆一組」交替排布。
  - 請特別觀察兩處**完全沒有黑鍵**的縫隙：**E 與 F** 以及 **B 與 C**！
  - **半音（Half step，1 格）**：鍵盤上緊挨著的相鄰兩鍵（距離最小）。因為沒有黑鍵相隔，$E$ 到 $F$、$B$ 到 $C$ 是天然的**半音**！
  - **全音（Whole step，2 格）**：相距 2 個半音（中間夾了一顆鍵）。例如 $C$ 到 $D$ 中間夾了 $C^\\sharp$，所以 $C$ 到 $D$ 是**全音**。
  - **口訣記憶**：**「只有 Mi-Fa 與 Ti-Do 是半音，其他相鄰白鍵都是全音！」**

---

**三、 簡譜記法（Numbered Musical Notation）**
在後續單元中，我們要將旋律輸入 Desmos 陣列演奏。看懂大眾簡譜能讓你隨時把喜歡的歌變成代碼：
1. **音符數字**：
   - $1 = \\text{Do}, \\; 2 = \\text{Re}, \\; 3 = \\text{Mi}, \\; 4 = \\text{Fa}, \\; 5 = \\text{Sol}, \\; 6 = \\text{La}, \\; 7 = \\text{Ti}$
2. **休止符（靜音）**：
   - 數字 **0** 代表安靜休息、不發聲（在 Desmos 列表中也是靜音預留位）。
3. **音高標記（高音點與低音點）**：
   - 數字上方加一點 $\\dot{1}$：代表高八度（高音 Do）。
   - 數字下方加一點 $\\text{低音點}$：代表低八度。
4. **拍子節奏線（時值）**：
   - **無附加線**（如 $1$）：四分音符（標準 $1$ 拍）。
   - **增時線（右邊加橫線）**：如 $1 -$ 代表延長一拍（共 $2$ 拍）；$1 - - -$ 代表長音共 $4$ 拍。
   - **減時線（底下一條橫線）**：如 $\\underline{1}$ 代表音長減半（$0.5$ 拍，八分音符）；$\\underline{1 \\; 2}$ 兩個音合起來剛好走完 $1$ 拍。
      `,
      tasks: [
        "【鍵盤全半音尋寶】：觀察上方鍵盤圖解，找出兩處沒有黑鍵的縫隙（E-F 與 B-C），親眼確認它們只有 1 個半音的最小間距。",
        "【簡譜與音名快問快答】：隨意指認簡譜數字 1 到 7，在腦海中快速反射出對應的音名字母（C, D, E, F, G, A, B）。",
        "【小星星簡譜翻譯任務】：閱讀隨堂學習單中的《小星星》簡譜，將數字翻譯為音名陣列，並理解增時線「-」的拍子意涵。"
      ],
      formula: `// 1. C 大調簡譜、音名與唱名對照表
// 簡譜 1 = C (Do)
// 簡譜 2 = D (Re)
// 簡譜 3 = E (Mi)
// 簡譜 4 = F (Fa)  <-- 注意：E 到 F 無黑鍵，只有 1 個半音！
// 簡譜 5 = G (Sol)
// 簡譜 6 = A (La)
// 簡譜 7 = B (Ti)  <-- 注意：B 到 C 無黑鍵，只有 1 個半音！

// 2. 簡譜轉 Desmos 樂曲陣列範例：《小星星》前段
// 簡譜：1 1 5 5 | 6 6 5 -
// 陣列：[C, C, G, G, A, A, G, G]  // 延長音以兩拍表現`,
      tips: `
- **半音口訣**：只有 **E-F (Mi-Fa)** 與 **B-C (Ti-Do)** 中間沒有黑鍵，相距 1 個半音；其餘白鍵相鄰都相距 2 個半音（全音）。
- **簡譜休止符**：數字 0 代表停頓留白，能讓旋律更有節奏呼吸感。
      `,
      worksheet: {
        title: "隨堂學習單：樂理基礎、琴鍵全半音與簡譜識譜",
        questions: [
          {
            id: "q1_pitch_solfege",
            title: "音名與唱名直覺對照",
            type: "radio",
            prompt: "在標準 C 大調中，簡譜數字 5 對應的「唱名」與「音名」分別是甚麼？",
            options: [
              "唱名為 Sol，音名為 G",
              "唱名為 Fa，音名為 F",
              "唱名為 La，音名為 A",
              "唱名為 Re，音名為 D"
            ],
            solution: "在標準 C 大調中，簡譜 1 對應 C (Do)，依序推算：1=C(Do)、2=D(Re)、3=E(Mi)、4=F(Fa)、5=G(Sol)、6=A(La)、7=B(Ti)。因此數字 5 對應的唱名為 Sol，音名為 G！",
            formatAnswer: (ans) => `音名與唱名直覺對照：\n• 學生選擇：${ans}\n• 解析：在 C 大調中，5 代表 Sol，對應鍵盤上的音名字母 G。音名代表固定不變的物理絕對音高，唱名代表歌唱時聽感上的音級階梯。`
          },
          {
            id: "q2_half_whole_step",
            title: "鍵盤全音與半音數格子",
            type: "radio",
            prompt: "觀察鋼琴鍵盤上相鄰鍵的距離（一個半音 = 前進 1 格；一個全音 = 包含 2 個半音 = 前進 2 格）：\n從白鍵 C 走到白鍵 E 總共跨越了幾個半音？從白鍵 E 走到白鍵 F 又是幾個半音？",
            options: [
              "C 到 E 跨越 4 個半音（2 個全音）；E 到 F 跨越 1 個半音",
              "C 到 E 跨越 2 個半音；E 到 F 跨越 2 個半音",
              "C 到 E 跨越 3 個半音；E 到 F 跨越 1 個半音",
              "C 到 E 跨越 4 個半音；E 到 F 跨越 2 個半音"
            ],
            solution: "1. 從 C 到 E：中間經過 C#、D、D# 到達 E，每步 1 格，共跨越 4 格（4 個半音 = 2 個全音）。\n2. 從 E 到 F：因為兩者之間「完全沒有黑鍵」，相鄰緊挨著，因此只跨越 1 格（1 個半音）！",
            formatAnswer: (ans) => `鍵盤全音與半音距離計算：\n• 學生選擇：${ans}\n• 解析：C 到 E 經過 4 格（4 個半音，音樂上稱為大三度）；而 E 到 F 因無黑鍵相隔，距離僅為 1 個半音。`
          },
          {
            id: "q3_score_translation",
            title: "簡譜旋律轉譯實戰（《小星星》旋律解碼）",
            type: "textarea",
            prompt: "請閱讀以下《小星星》經典樂句簡譜：\n`1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 -`\n請寫出：\n1. 將這段簡譜翻譯成「音名字母（C, D, E...）」序列。\n2. 在簡譜中，後面的橫線（如 `5 -` 與 `1 -`）代表什麼意思？如果要在 Desmos 中演奏，你會怎麼安排拍子長度？",
            placeholder: "例如：1. 音名字母為 C C G G | A A G - | F F E E | D D C -。\n2. 橫線代表增時線，將音符延長為兩拍...",
            solution: "1. 音名序列為：C C G G | A A G - | F F E E | D D C -\n2. 數字後面的橫線 `1 -` 是增時線，代表該音延長一拍（總長度為 2 拍）。在 Desmos 中，可將其視為連續播放 2 個相同的音符（如 `[G, G]`），或延長播放時間以表現長音！",
            formatAnswer: (ans) => `簡譜旋律解碼與演奏思考：\n${ans}\n\n（核心解析：簡譜 1 到 7 對應音名 C, D, E, F, G, A, B；增時線使音長翻倍為 2 拍。掌握簡譜識譜後，任何人都能將市面上的大眾簡譜輕鬆轉化為 Desmos 樂曲陣列！）`
          }
        ]
      }
    },

    "2-5": {
      id: "2-5",
      moduleId: "module-2",
      moduleName: "二、音程與律學",
      title: "十二平均律與全學期公版發聲基準",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
五度相生相生 12 次後會產生無法閉合的畢氏音差（$1.0136 \\neq 1.0000$），使得樂器在轉調時會產生走音。

明代律學家朱載堉（1584 年）與西方音樂家提出以**等比數列（Geometric Sequence）**來劃分音階：
將一個八度（頻率倍數為 2）等比例均勻切成 12 個半音。
等比數列的公比為：
$$r = \\sqrt[12]{2} = 2^{1/12} \\approx 1.059463$$
每前進一個半音就乘上 $r$，前進 12 個半音剛好為 $r^{12} = 2$。

由於每個半音的比例完全一致，任何調性皆可自由轉換，這套律制即為今日通用的**「十二平均律」**。
      `,
      mathModel: `
**一、 全學期公版發聲基準函數（以國際標準音 A4 = 440Hz 為基準）**：
$$
f(x) = 440 \\cdot 2^{\\frac{x}{12}}
$$
- **基準音 $f_0 = 440\\text{Hz}$**：國際交響樂團調音標準音（A4，中央 C 上方的 A）。
- **$x$ 代表半音位移個數（整數，可正可負）**：
  - $A_4 = f(0) = 440\\text{Hz}$
  - $A\\sharp / B\\flat = f(1)$
  - $B_4 = f(2)$
  - $C_5 \\text{ (高音 C)} = f(3)$
  - $C_4 \\text{ (中央 C)} = f(-9) \\approx 261.63\\text{Hz}$
  - $D_4 = f(-7) \\approx 293.66\\text{Hz}$
  - $E_4 = f(-5) \\approx 329.63\\text{Hz}$
  - $F_4 = f(-4) \\approx 349.23\\text{Hz}$
  - $G_4 = f(-2) \\approx 392.00\\text{Hz}$

**二、 結合上一單元鍵盤坐標：為什麼中央 C 的半音位移是 $f(-9)$？**：
在上一單元我們學到「E-F 與 B-C 只有 1 個半音，其餘相鄰白鍵相差 2 個半音」。
現在以國際標準音 $A_4 = 440\\text{Hz} = f(0)$ 為原點：
- **向下數半音**：$A(0) \\xrightarrow{-1} G^\\sharp(-1) \\xrightarrow{-1} G(-2) \\xrightarrow{-1} F^\\sharp(-3) \\xrightarrow{-1} F(-4)$
- 因為 $E$ 到 $F$ 只有 1 個半音，所以 $E$ 位於 $f(-5)$！
- 繼續向下：$E(-5) \\xrightarrow{-1} D^\\sharp(-6) \\xrightarrow{-1} D(-7) \\xrightarrow{-1} C^\\sharp(-8)$
- 因為 $C$ 到 $D$ 相差 2 個半音（全音），所以中央 C 就是 $C_4 = f(-9) \\approx 261.63\\text{Hz}$！
- **向上數半音**：$A(0) \\xrightarrow{+1} A^\\sharp(1) \\xrightarrow{+1} B(2)$；因為 $B$ 到 $C$ 只有 1 個半音，所以高音 C 為 $C_5 = f(3)$！

**三、 妥協的代價與換來的自由**：
- **八度完全閉環**：$f(x+12) = 440 \\cdot 2^{(x+12)/12} = f(x) \\cdot 2$，誤差恆為 $0$。
- **純五度的微小妥協**：前進 7 個半音，比例為 $2^{7/12} \\approx 1.498307$，與畢氏純五度 $1.500000$ 僅差 $0.0017$（不到 2 個音分，人耳幾乎無法察覺），卻換來全樂器 12 個調性自由穿梭的無限自由！
      `,
      tasks: [
        "【朱載堉公比驗算】：在 Desmos 算式欄輸入 2^(1/12)，親眼看見數值跳出 1.059463...，掌握等比數列公比。",
        "【建立公版發聲函數】：輸入 f(x) = 440 * 2^(x/12)，以國際標準音 A440 為原點，奠定全學期造音地基。",
        "【定義中央 C 音名變數】：輸入 C = f(-9), D = f(-7), E = f(-5), F = f(-4), G = f(-2), A = f(0), B = f(2)，體會 E-F 與 B-C 的 1 半音步長。",
        "【八度閉環與五度驗算】：計算 2^(7/12) 體驗僅差 0.0017 的五度妥協，並播放 tone([C, f(3)]) 聆聽完美的兩倍八度純淨音程。"
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
- **琴鍵坐標系規律**：鋼琴黑鍵「兩顆一組、三顆一組」交替分布。只要記住 E-F 和 B-C 沒有黑鍵（只有半音），利用正負數半音位移，就能在 Desmos 中優雅召喚出任何音符！
- **音名變數定義**：所有音名變數（如 C, D, E）需預先定義好頻率公式，後續寫樂譜時即可直接引用。
      `,
      worksheet: {
        title: "隨堂學習單 2：十二平均律函數與琴鍵定位",
        questions: [
          {
            id: "q1_func_meaning",
            title: "十二平均律指數函數之幾何意涵",
            type: "text",
            prompt: "在 Desmos 中建立全學期公版十二平均律函數 $f(x) = 440 \\cdot 2^{x/12}$（以國際標準音 $A_4 = 440\\text{Hz}$ 為基準原點 $f(0)$）。請問這個函數自變數 $x$ 每增加 1，代表音高會如何變化？每增加 12 又代表什麼？",
            placeholder: "例如：x 每增加 1 代表音高升高一個半音，增加 12 代表升高八度...",
            solution: "$x$ 每增加 1，代表音高升高「一個半音」（頻率乘以公比 $\\sqrt[12]{2} = 2^{1/12} \\approx 1.05946$）。當 $x$ 增加 12 時，頻率乘以 $2^{12/12} = 2$，恰好翻倍升高一個完全八度！",
            formatAnswer: (ans) => `自變數意涵分析：\n• 學生回答：${ans}\n• x 每增加 1 的意義：代表音高升高一個半音，頻率乘上公比 r = 2^(1/12) ≈ 1.05946。\n• x 每增加 12 的意義：代表頻率乘以 2^(12/12) = 2，恰好翻倍升高一個完全八度，實現八度完美閉合。`
          },
          {
            id: "q2_c_sharp",
            title: "升 Do (C#) 函數坐標定位",
            type: "text",
            prompt: "在公版函數中，已知中央 C ($C_4$) 的定位為 $f(-9)$。如果我想播放比中央 C 高一個半音的「升 Do」($C^\\#_4$)，請問自變數應輸入 $f(?)$？（請填入括號內的整數值）",
            placeholder: "請填入括號內的整數，例如：-8",
            expected: "-8 | f(-8) | 1 | f(1)",
            solution: "在以 $A_4=440\\text{Hz}$ 為原點的公版函數中，中央 C 定位為 $f(-9)$；升 Do 升高 1 個半音，因此自變數為 $-9 + 1 = -8$，記為 $f(-8)$！（若以中央 C 為相對原點則對應 $f(1)$，若取高八度升 Do $C^\\#_5$ 則為 $f(4)$）。",
            formatAnswer: (ans) => `升 Do (C#) 坐標定位與推導：\n• 學生填答：f(${ans})\n• 推導理由：在以 A440 為原點的公版函數中，中央 C 為 f(-9)，升 Do 升高 1 個半音為 f(-9 + 1) = f(-8)；若以中央 C 為相對基準則對應 f(1)。`
          },
          {
            id: "q3_high_re",
            title: "高一個八度的 Re (D5) 函數坐標定位",
            type: "text",
            prompt: "在公版函數中，已知中央 Re ($D_4$) 的定位為 $f(-7)$。如果我想播放「高一個八度的 Re」($D_5$)，請問自變數應輸入 $f(?)$？（請填入括號內的整數值）",
            placeholder: "請填入括號內的整數，例如：5",
            expected: "5 | f(5) | 14 | f(14)",
            solution: "中央 Re 位於 $D_4 = f(-7)$；升高一整個八度需再加上 12 個半音，因此高音 Re 為 $f(-7 + 12) = f(5)$！（也可以從基準音 $A_4 = f(0)$ 向上推算：$B_4 = f(2), C_5 = f(3), D_5 = f(5)$；若以中央 C 為相對原點則為 $f(14)$）。",
            formatAnswer: (ans) => `高八度 Re (D5) 坐標定位與推導：\n• 學生填答：f(${ans})\n• 推導理由：中央 Re 為 f(-7)，升高一個八度需再加上 12 個半音，因此高音 Re 為 f(-7 + 12) = f(5)；若以中央 C 為相對原點則為 f(14)。`
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
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/4actxqj5mj",
      motivation: `
學會了公版公式 $f(x)$ 之後，看著五線譜或簡譜，我們就能像寫歌詞一樣把音符寫進代碼！
以人人耳熟能詳的《小星星》為例：
- 簡譜：1 1 5 5 6 6 5 — 4 4 3 3 2 2 1 —
- 對應音名：C C G G A A G 0 F F E E D D C 0
在 Desmos 中，常用音名變數已經定義好。遇到休止符或句尾換氣停頓，直接填入最直覺的「0」！
把音名組裝成陣列列表 $L = [C, C, G, G, A, A, G, 0 ...]$，滑桿 $t=0$ 按下播放，旋律自動悠揚流淌！
      `,
      mathModel: `
**音名陣列編碼與休止符 $0$ 的物理意義**：
$$L = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, \\dots]$$
$$\\operatorname{tone}(L[t]), \\quad t = 0$$
- **陣列結構**：全曲共 42 拍（三大句，每句 14 拍旋律 + 2 拍換氣休止）。
- **休止符 $0$ 的物理直覺**：數字 $0$ 代表頻率為 $0\\text{Hz}$（發聲體完全靜止無振動），耳機中自然產生乾淨俐落的無聲停頓。
- **時間軸滑桿 $t$**：設定步長為 1，從 0 開始逐拍讀取陣列元素播放（$t=0$ 讀取為靜音預備拍）。
      `,
      tasks: [
        "【音名變數確認】：在 Desmos 確認 2-5 的公版音名（C, D, E, F, G, A, B）已完成定義。",
        "【小星星全曲組裝】：輸入 42 元素的音名列表 L，在小節停頓處填入 0 作為休止符。",
        "【時間軸循序播放】：設定 t=0 按下播放鍵，聆聽自己在 Desmos 中親手演奏的第一首完整世界名曲！"
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
- **休止符填 0 原理**：頻率為 0 代表發聲體不震動，自然產生乾淨的靜音停頓，免除繁瑣的分段防呆語法。
- **陣列排坑叮嚀**：陣列 L 中千萬不要有連續兩個逗號（如 ,,），這會導致 Desmos 跳出橘色驚嘆號報錯。
- **音名未定義排坑**：所有自訂的音名變數必須在陣列上方先給定數值定義，未定義的字母會造成陣列解析失敗。
      `
    },

    "3-2": {
      id: "3-2",
      moduleId: "module-3",
      moduleName: "三、樂譜與旋律",
      title: "陣列向量化指數運算與全曲移調",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/a0nxj4issv",
      motivation: `
音名法直覺好寫，但如果今天全班要在 KTV 齊唱這首《小星星》，女生嫌太低、男生嫌太高，音名法沒辦法一鍵變調！
這時數學家切換成**工程師視角**：
我們不要宣告一堆個別音名變數，而是把整首歌記錄成「半音位移整數向量」$S$！
以中央 C 為基準（$C=0$）：
- $C=0, D=2, E=4, F=5, G=7, A=9, B=11$
一行指數運算 $F = f(S)$，Desmos 自動廣播計算出全曲所有頻率！
更神的是：只要在指數中加上平移滑桿 $k$（$f(S+k)$），整首歌在課堂上一秒實現 **KTV 升降 Key**！
      `,
      mathModel: `
**向量廣播指數運算與平移移調**：
$$S = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, \\dots]$$

- **全曲頻率陣列生成（廣播映射）**：
  $$F = f_0 \\cdot 2^{\\frac{S}{12}} \\quad (f_0 = 261.63\\text{Hz})$$
- **KTV 升降 Key 向量平移（$k$ 為升降半音數）**：
  $$F_{\\text{shift}} = f_0 \\cdot 2^{\\frac{S + k}{12}}, \\quad k \\in [-6, 6]$$
  向量中每個元素同時加上 $k$，每個音符的頻率同步放大 $2^{k/12}$ 倍。音程的相對比例分毫不變，整體幾何向上或向下平移！
      `,
      tasks: [
        "【半音數字陣列輸入】：將《小星星》以半音整數陣列 S 代碼輸入 Desmos（以 C=0 為原點）。",
        "【陣列廣播運算體驗】：輸入 F = 261.63 * 2^(S/12)，觀察 Desmos 如何用一行算式瞬間算出 42 個真實頻率。",
        "【KTV 升降 Key 滑桿】：新增滑桿 k（範圍 -6 到 +6，步長 1），拉動滑桿體驗全曲升調（花栗鼠）與降調（男低音）的向量平移魔力！",
        "【《煎熬》降 Key 實戰】：挑戰隨堂學習單中的李佳薇《煎熬》心一跳降 Key 思考題，幫唱不上去的老師算出降 Key 函數！"
      ],
      formula: `// 1. 半音位移陣列 S (以中央 C 為 0，0 為休止符)
S = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, 7, 7, 5, 5, 4, 4, 2, 0, 7, 7, 5, 5, 4, 4, 2, 0, 0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0]

// 2. KTV 升降 Key 滑桿 (k=0 原調，k>0 升 Key，k<0 降 Key)
k = 0
f_0 = 261.63
F = f_0 \\cdot 2^{\\frac{S + k}{12}}

// 3. 循序播放
t = 0
\\operatorname{tone}(F[t])`,
      tips: `
- **列表廣播運算**：在數學上，這叫做列表廣播運算（Broadcasting）。向量中每個元素同時加上 k，音程的相對距離完全不變，音樂整體平移。
- **向量平移實例**：拉動滑桿 k 即刻實現全曲幾何平移升降 Key，生動連結高中數學向量平移概念。
      `,
      worksheet: {
        title: "隨堂學習單 2：《煎熬》降 Key 與移調任務",
        questions: [
          {
            id: "q4_jian_ao",
            title: "歌曲《煎熬》超高音降 Key 之指數平移計算",
            type: "text",
            prompt: "已知歌曲《煎熬》（李佳薇）中的「心一跳」三個經典超高音為 $f(20), f(23), f(21)$。若演唱時想要【降兩個半音】，請問這三個音會分別變成哪三個函數？若想【降一整個八度】又會變成什麼？請寫出完整運算式與理由。",
            placeholder: "例如：f(18), f(21), f(19)",
            expected: "f(18), f(21), f(19) | f(18),f(21),f(19) | 18, 21, 19 | 18,21,19",
            solution: "降兩個半音就是把括號內的指數直接減 2：\n• $f(20 - 2) = f(18)$\n• $f(23 - 2) = f(21)$\n• $f(21 - 2) = f(19)$\n\n*（註記：若想降一整個八度，自變數直接減 12 變成 $f(8), f(11), f(9)$。）*",
            formatAnswer: (ans) => `1. 降兩個半音的計算：\n   在十二平均律指數函數中，每降一個半音自變數減 1，降兩個半音即整體減 2：\n   • 第一音：f(20 - 2) = f(18)\n   • 第二音：f(23 - 2) = f(21)\n   • 第三音：f(21 - 2) = f(19)\n   學生填答：${ans}\n   答：降兩個半音後分別為 f(18), f(21), f(19)。\n\n2. 降一整個八度的計算：\n   一個完全八度包含 12 個半音，降八度代表指數平移減 12：\n   • f(20 - 12) = f(8)\n   • f(23 - 12) = f(11)\n   • f(21 - 12) = f(9)\n   答：降一整個八度後分別為 f(8), f(11), f(9)。`
          },
          {
            id: "q5_c_to_d",
            title: "C 大調整體升兩個半音之調性與音階轉變",
            type: "text",
            prompt: "如果現在有一個 C 大調音階：$[C, D, E, F, G, A, B, C]$，我們在 Desmos 中將半音向量整體【升兩個半音】，請問這個音階會轉成什麼調？各音符會變成什麼？在數學上是利用什麼運算實現？",
            placeholder: "例如：轉成 D 大調，音符變成 D, E, F#, G, A, B, C#, D",
            solution: "整體升高兩個半音（全音）後，調性轉為【D 大調】！\n音階轉變為：$D, E, F^\\#, G, A, B, C^\\#, D$（注意五線譜上 F 與 C 都必須升半音）。在 Desmos 中，只要給定向量運算 $F = f_0 \\cdot 2^{(S+2)/12}$，就能在一毫秒內實現全曲一鍵移調！",
            formatAnswer: (ans) => `1. 調性轉變結果：C 升高兩個半音（一個全音）變為 D，因此整體轉為【D 大調】。\n2. 各音符變化：D, E, F#, G, A, B, C#, D（注意五線譜上 F 與 C 均帶有升記號）。\n3. 數學向量廣播原理：在 Desmos 中設定向量運算 F = f_0 · 2^((S + k) / 12)，設定平移滑桿 k = +2。利用陣列廣播特性，向量中所有元素同時平移，相對音程幾何距離分毫不變，實現一毫秒全曲無縫移調。\n學生作答說明：${ans}`
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
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/a0nxj4issv",
      motivation: `
時間滑桿 $t$ 是連續平滑滾動的（$0.1, 0.2, 0.3 ...$），但音樂的拍子是一拍一拍跳動的！
如何讓時間滑桿既能知道「現在是第幾拍」，又能在每一拍內部擁有一個「從小數 0 到 1」的小秒表？
高斯取整函數 $\\operatorname{floor}(t)$ 就是這座連接連續與離散的魔法橋樑！
      `,
      mathModel: `
**高斯取整與拍內計時器**：
- **拍數計數器（階梯函數）**：
  $$\\lfloor t \\rfloor = \\operatorname{floor}(t)$$
  只取整數部分，無論小數怎麼跑，穩穩鎖定「當前第幾拍」。
- **拍內小數計時器（鋸齒波）**：
  $$t - \\operatorname{floor}(t) \\in [0, 1)$$
  時間減去整數部分，留下來的就是每一拍內「從小數 0 到 1」循環的微型秒表！當時間跨過整數拍，秒表瞬間歸零重新計時。
      `,
      tasks: [
        "【繪製高斯階梯】：在 Desmos 輸入 y = floor(x)，觀察台階狀的幾何跳躍。",
        "【繪製小數鋸齒波】：輸入 y = x - floor(x)，觀察不斷從 0 上升到 1 再跳回 0 的鋸齒波。",
        "【理解拍點計時】：體會式子 t - floor(t) 如何在每一拍內部精確量測拍長百分比。"
      ],
      formula: `// 1. 高斯階梯函數 (只抓整數拍)\ny_1 = \\operatorname{floor}(x)\n\n// 2. 拍內小數鋸齒波 (每一拍內 0 到 1 循環)\ny_2 = x - \\operatorname{floor}(x)\n\n// 3. 拍內線性鋸齒衰減函數 (範本 9 原裝)\ng(x) = \\frac{(\\operatorname{floor}(x) - x)}{2} + 1`,
      tips: `
- **整數拍提取**：高斯函數在 Desmos 的指令是 floor(x)，用來精準抓取當前整數拍點。
- **拍內進度計時**：小數部分 x - floor(x) 會在每一拍內從 0 循環至 1，是打擊樂、動態包絡線與斷音的核心基石。
      `
    },

    "4-2": {
      id: "4-2",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "斷音與時值遮罩陣列（q, p, s 系統）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/jsesxbjozc",
      motivation: `
在播放連續相同的音符時（例如 1 1），若沒有主動停頓，相同頻率的聲波會融在一起，聽起來像是一整條長音（黏音現象）。

要讓音符清楚分開，我們需要在每拍的特定時間點將音量歸零（產生斷音 Staccato）。
我們可以利用數學工具（高斯符號 floor 或週期三角函數）作為「音量遮罩」，控制每顆音符發聲與靜音的時間長短。
      `,
      mathModel: `
**一、 時值遮罩體系（利用小數部分留白）**：
- **$q$ 遮罩（斷音留白，音符具顆粒感）**：
  $$q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\}$$
  每一拍開頭留白 20%（音量歸零），後 80% 正常發聲，避免音符相黏。
- **$p$ 遮罩（半拍短音）**：
  $$p = \\left\\{t - \\operatorname{floor}(t) \\le 0.5: 0, 1\\right\\}$$
- **$s$ 遮罩（延留長音）**：
  $$s = \\left\\{t - \\operatorname{floor}(t) > 0.7: 0, 1\\right\\}$$
- **雙陣列演奏**：$\\operatorname{tone}(L[t], T[t])$，其中時值陣列 $T = [q, q, 1, p, s \\dots]$。

---

**二、 水位門檻滑桿（利用三角函數截波）**：
利用週期為 1 拍的正弦波 $\\sin(2\\pi t)$，配合門檻滑桿 $a$：
$$q_{\\text{gate}} = \\left\\{\\sin(2\\pi t) > a: 1, 0\\right\\}, \\quad a \\in [-0.9, 0.9]$$
拉動滑桿 $a$ 即可調控每拍發聲時間比例：
- $a = -0.5$（門檻低，波形露出時間長）$\\to$ **延音**
- $a = 0.0$（正半波發聲、負半波靜音）$\\to$ **標準 50% 半拍音**
- $a = 0.8$（門檻高，只露出波峰頂端）$\\to$ **短促跳音**
      `,
      tasks: [
        "【黏音對比實作】：先播放不加遮罩的小星星，再代入 q 遮罩 tone(L[t], q)，感受音符加入留白後清晰的顆粒感。",
        "【時值陣列建構】：建立時值陣列 T = [q, q, 1, p, s]，為旋律中不同的音符配上不同的長短節奏。",
        "【水位門檻滑桿體驗】：操作門檻滑桿 a（-0.5 到 0.8），觀察波形截斷與聆聽跳音長短變化。"
      ],
      formula: `// 1. 經典時值遮罩 (斷音留白)
q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\} // 80% 聲音 (小星星顆粒感必備)
p = \\left\\{t - \\operatorname{floor}(t) \\le 0.5: 0, 1\\right\\} // 50% 聲音 (半拍短音)
s = \\left\\{t - \\operatorname{floor}(t) > 0.7: 0, 1\\right\\}   // 70% 聲音 (長音延留)

// 2. 老師示範：免背平移的「水位門檻滑桿」 (a 越大跳音越短)
a = 0.2
q_{\\text{gate}} = \\left\\{\\sin(2\\pi t) > a: 1, 0\\right\\}

// 3. 實戰演奏 (旋律陣列 L 與遮罩聯合演奏)
\\operatorname{tone}(L[t], q)`,
      tips: `
- **免背公式專注聽感**：範本已經將週期固定為 1 拍（2πt），大家只要專注拉動滑桿 a 觀察波形被切斷的幾何形狀，用耳朵辨識跳音變化即可。
- **時值留白比例**：斷音遮罩強制在拍尾留白 15%~20%，可完美消除同音連續彈奏時的黏連卡頓。
      `
    },

    "4-3": {
      id: "4-3",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "動態包絡衰減函數（木琴與鋼琴共鳴）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
如果聲音一整拍的音量都固定不變，聽起來就像冰冷的防空警報。
真實世界中的敲擊樂器（鋼琴、木琴、吉他），在敲擊瞬間能量最強、音量最大，隨後隨時間自然衰減！
代入高一熟悉的底數 $0.5$ 等比衰減函數，我們的音樂就能模擬出樂器琴弦的物理共鳴！
      `,
      mathModel: `
**動態包絡線模型**：
利用拍內小數進度 $t - \\operatorname{floor}(t)$ 驅動等比衰減（完全不需尚未學過的自然常數 $e$）：
$$E(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}$$
- **短促木琴**：阻尼係數 $k = 10$，音量極速墜落，乾脆俐落。
- **悠長鋼琴**：阻尼係數 $k = 2.5$，餘音繞樑，悠長共鳴。
      `,
      tasks: [
        "【繪製等比衰減曲線】：輸入 y = (0.5)^(3x) {0 <= x <= 1}，觀察能量滑落軌跡。",
        "【阻尼滑桿調整】：建立阻尼係數 k 滑桿（範圍 1 到 15），將包絡乘在 tone 音量參數。",
        "【樂器質感對比】：切換 k=10 與 k=2，聆聽清脆木琴與厚實鋼琴的音色轉變。"
      ],
      formula: `// 底數 0.5 等比阻尼包絡線 (模擬敲擊樂器自然衰減)\nk = 3.5\nE(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}\n\n// 帶動態包絡之單音發聲\n\\operatorname{tone}(f(S[\\operatorname{floor}(t)]), 0.6 \\cdot E(t))`,
      tips: `
- **防爆音縫隙**：結尾加入 {t - floor(t) > 0.85: 0} 可以保留 15% 靜音縫隙，避免與下一拍的敲擊重疊爆音。
- **阻尼係數調節**：拉動係數 k 可模擬不同打擊樂器，數值越大衰減越乾脆（木琴），數值越小餘音越厚實（鋼琴）。
      `
    },

    "4-4": {
      id: "4-4",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "8-bit 電玩音效與動態鼓組實驗室（選學）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
學會了高斯小數計時器 $t - \\operatorname{floor}(t)$ 與指數包絡衰減後，我們終於有能力用連續函數來「主動造音」了！
在 80 年代的 8-bit 紅白機時代，沒有真實樂器採樣，所有跳躍、激光槍與擊打鼓點，全靠數學函數在短短 0.1~0.3 秒內的幾何變化！
- 二次拋物線向上彎 $\\to$ 瑪利歐起跳騰空
- 底數 0.5 指數極速下墜 $\\to$ 星際激光槍射擊
- 正弦週期高速震盪 $\\to$ 吃金幣叮鈴聲
- 頻率瞬間墜入重低音 $\\to$ 大鼓 Kick 擊打效果
- 課堂充裕時間：搭配生成式 AI 角色創作專屬技能配音！
      `,
      mathModel: `
**常用電玩動態與打擊樂發聲模型**（以拍內計時器 $u = t - \\operatorname{floor}(t)$ 驅動，免打希臘字母）：
- **大鼓 Kick 重低音（頻率急墜 + 音量阻尼）**：
  $$\\operatorname{tone}(40 + 110 \\cdot (0.5)^{25u}, \\{u > 0.3: 0, (0.5)^{12u}\\})$$
- **瑪利歐起跳聲（二次拋物線頻率暴升）**：
  $$\\operatorname{tone}(400 + 800u^2, 0.5) \\quad \\{u \\le 0.3\\}$$
- **激光槍射擊（底數 0.5 指數快速等比下墜）**：
  $$\\operatorname{tone}(1500 \\cdot (0.5)^{10u}, 0.5) \\quad \\{u \\le 0.4\\}$$
- **吃金幣／警報調頻（正弦週期震盪）**：
  $$\\operatorname{tone}(600 + 200 \\sin(20u), 0.5) \\quad \\{u \\le 0.3\\}$$
      `,
      tasks: [
        "【大鼓 Kick 實戰】：輸入大鼓算式，按時間播放鍵，感受耳機傳來的低音震盪效果。",
        "【瑪利歐起跳實驗】：輸入拋物線起跳算式，調整二次項係數感受體重與彈跳感差異。",
        "【星際雷射槍下墜】：輸入以 0.5 為底數的指數衰減算式，體會光束破空下墜感。",
        "【合成 4 拍節奏 Loop】：讓大鼓在第 1、3 拍敲擊，旋律在第 2、4 拍響起，完成自帶鼓點的音樂循環。",
        "【進階延伸挑戰（課堂時間充裕時）】：利用 AI 工具生成一個專屬電玩角色，並結合上述函數為其量身調配一記原創「專屬大招技能音效」！"
      ],
      formula: `// 1. 拍內小數計時器 (簡單好打的英文字母 u)\nu = t - \\operatorname{floor}(t)\n\n// 2. 大鼓 Kick：指數急墜重低音\n\\operatorname{tone}(40 + 110 \\cdot (0.5)^{25u}, \\{u > 0.3: 0, (0.5)^{12u}\\})\n\n// 3. 瑪利歐起跳拋物線聲\n\\operatorname{tone}(400 + 800u^2, 0.5) \\{u \\le 0.3\\}\n\n// 4. 激光槍指數下墜聲 (底數 0.5 等比遞減)\n\\operatorname{tone}(1500 \\cdot (0.5)^{10u}, 0.5) \\{u \\le 0.4\\}`,
      tips: `
- **電玩音效物理**：電玩音效與大鼓在本質上相同，都是短時間（0.1~0.3秒）內的頻率急墜與音量指數衰減。
- **自主創作延伸**：可嘗試將二次拋物線或正弦震盪代入頻率參數，創作出跳躍或吃金幣等專屬技能音效！
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
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
為什麼樂器發出的頻率偏偏都是整數倍泛音（$1f_0, 2f_0, 3f_0 ...$），而不是隨便的小數倍？
答案不在空氣中，而在琴弦兩端被機械結構死死釘住的「固定邊界」！
在 Desmos 中繪製兩端固定的弦振動，你將親眼看見只有整數階數的波形能被端點釘住，形成位置永不移動的「波節（Node）」！
      `,
      mathModel: `
**弦上駐波邊界條件方程式**：
設弦長為 $\\pi$，兩端固定在 $(0, 0)$ 與 $(\\pi, 0)$：
$$y(x, t) = \\sin(nx) \\cos(\\omega t) \\quad \\{0 \\le x \\le \\pi\\}$$
- **邊界鎖定**：在 $x=0$ 處，$\\sin(0) = 0$ 永遠成立；在 $x=\\pi$ 處，要讓 $\\sin(n\\pi) = 0$，**$n$ 必須是正整數（$n = 1, 2, 3 \\dots$）**！
- **波節（Node）**：振幅恆為 0、完全不動的固定點（$n=2$ 在 $\\pi/2$；$n=3$ 在 $\\pi/3, 2\\pi/3$）。
- **波腹（Antinode）**：振動最大的波峰與波谷。
- **物理破壞實驗**：若 $n = 1.4$，右端點 $\\sin(1.4\\pi) \\approx -0.95 \\neq 0$，琴弦脫離釘子在空中失控甩動，無法形成穩定的聲音！
      `,
      tasks: [
        "【建立兩端固定邊界】：在 Desmos 標註端點 (0, 0) 與 (pi, 0)，確認琴弦兩端被鎖定。",
        "【切換整數諧波】：滑動諧波階數 n = 1, 2, 3, 4，觀察弦上固定不動的「波節（Node）」幾何分佈。",
        "【破壞邊界實驗】：將 n 改為小數（例如 1.4），親眼看見右端點脫離邊界甩出的失序現象！",
        "【聲畫連動驗證】：點開 tone(220n)，聽聽看階數 n 每跳動 1 階，聲音如何以八度與純五度整數倍向上跳躍！"
      ],
      formula: `// 1. 兩端固定邊界點 (琴弦兩端琴碼)
(0, 0), (\\pi, 0)

// 2. Desmos 原生物理駐波方程式 (按時間 t 播放)
n = 1                      // 諧波階數滑桿 (n = 1, 2, 3, 4...)
\\omega = 6                // 振動角頻率
t = 0
y = \\sin(n \\cdot x) \\cdot \\cos(\\omega \\cdot t) \\{0 \\le x \\le \\pi\\}

// 3. 聲畫連動：聆聽諧波整數跳躍 (基音 220Hz)
\\operatorname{tone}(220 \\cdot n)`,
      tips: `
- **整數倍泛音觀察**：觀察 n=1（基音，一個完整大波包）、n=2（第一泛音，正中間出現一個完全不動的波節）、n=3（第二泛音，內部兩個波節）。
- **弦樂邊界條件**：兩端固定釘死，使琴弦只能激發波長為 2L/n 的整數階自然駐波！
      `
    },

    "5-2": {
      id: "5-2",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "自然泛音列與樂器音色指紋",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/gkpqdobd4p",
      motivation: `
鋼琴和小提琴彈奏同一個音高 $A_3$（$220\\text{Hz}$），為什麼你的耳朵一秒就能分辨出來？
因為世界上不存在純粹的單一正弦波樂器！
每把樂器發出的聲音，都是基音加上一整組整數倍等差數列的「泛音合唱團」。
每個泛音分配到的能量多寡，就是這把樂器的「音色指紋」！
      `,
      mathModel: `
**自然泛音列（等差數列）與音色指紋配方**：
自然泛音列以等差數列展開：
$$F = [f_0, \\; 2f_0, \\; 3f_0, \\; 4f_0] \\quad (f_0 = 220\\text{Hz})$$

**💡 世紀之謎揭曉：為什麼 1:2 與 1:3 最純淨好聽？**
在單元 2-1 與 2-2 中，我們發現「合成波重複週期越短，聲音越乾淨」，$1:2$ 與 $1:3$ 聽感最和諧。
到了真實樂器的物理發聲，原因終於揭曉：
- **基音 $1f_0$**：整根琴弦全振動（1 倍頻率）。
- **第 2 泛音 $2f_0$**：琴弦兩半振動（2 倍頻率，剛好就是比值 $1:2$ 八度）。
- **第 3 泛音 $3f_0$**：琴弦三等分振動（3 倍頻率，剛好就是比值 $1:3$ 五度泛音）。

在自然界中，任何真實樂器（弦樂、管樂、人聲）只要一發聲，**天生就自帶 2 倍與 3 倍的自然泛音**！
人類耳朵經過演化，早就認定這組「自然自帶的等差整數倍」是最舒服、最純淨的聲音。

在 Desmos 中，音量參數可以傳入陣列，為每個泛音設定獨立音量：
$$\\operatorname{tone}(F, \\; [v_1, v_2, v_3, v_4])$$

**三大經典樂器音色配方**：
- **溫潤長笛（Flute）**：幾乎只有基音，高次泛音微弱：$[0.8, \\; 0.1, \\; 0.05, \\; 0]$
- **空靈單簧管（Clarinet）**：偶數泛音被管身物理抵消，奇數泛音突出：$[0.6, \\; 0.0, \\; 0.35, \\; 0]$
- **明亮小提琴（Strings）**：泛音層次豐富，能量平緩衰減：$[0.4, \\; 0.3, \\; 0.2, \\; 0.1]$
      `,
      tasks: [
        "【八度和弦體驗】：開啟 Desmos 範本，播放 tone([k, 2k]) 感受完全八度的重合質感。",
        "【建立 4 泛音混音台】：輸入基音 220Hz 及其等差 4 階泛音，宣告音量滑桿 v1, v2, v3, v4。",
        "【親調三大樂器音色】：分別套用長笛、單簧管與小提琴的配方數值，在同一個 220Hz 音高下，親耳見證音色截然不同的魔法！"
      ],
      formula: `// 1. 基音與 4 階自然泛音列 (等差數列)
f_0 = 220
F = [f_0, 2f_0, 3f_0, 4f_0]

// 2. 音色指紋調音台 (滑桿範圍 0 到 1)
v_1 = 0.6   // 基音音量
v_2 = 0.0   // 第二泛音
v_3 = 0.35  // 第三泛音
v_4 = 0.0   // 第四泛音

// 3. 泛音合唱發聲 (單簧管音色示範)
\\operatorname{tone}(F, [v_1, v_2, v_3, v_4])`,
      tips: `
- **總音量控制**：所有泛音的音量總和建議控制在 1.0 左右（例如 0.6+0.35=0.95），可以獲得最豐滿、不破音的和諧音質。
- **音色指紋**：不同樂器的音色差異，正是由不同階數泛音的振幅配比所決定。
      `
    },

    "5-3": {
      id: "5-3",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "幽靈基音（Missing Fundamental）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
手機的小喇叭單體極小，物理上根本發不出低於 $150\\text{Hz}$ 的重低音，但為什麼我們聽流行音樂時，依然能清楚聽見低沉的貝斯？
這就是聽覺神經科學上的「幽靈基音（Missing Fundamental）」現象：
當大腦同時接收到幾個高頻泛音時，神經系統會自動計算它們的「最大公因數 $\\gcd$」，合成出未直接發聲的低音！
      `,
      mathModel: `
**幽靈基音的最大公因數算式**：
同時播放三個高頻聲音：
$$f_1 = 600\\text{Hz}, \\quad f_2 = 800\\text{Hz}, \\quad f_3 = 1000\\text{Hz}$$
這三個頻率全部高於一般低音，但大腦會自動計算：
$$f_{\\text{ghost}} = \\gcd(600, 800, 1000) = 200\\text{Hz}$$
你的耳朵會聽見一個未直接發聲的 $200\\text{Hz}$ 低音！
      `,
      tasks: [
        "【播放高頻泛音】：在 Desmos 輸入 tone([600, 800, 1000], [0.3, 0.3, 0.3])。",
        "【比對真實低音】：單獨播放 tone(200, 0.5)，對比兩者音高是否完全一致！",
        "【同儕盲測】：讓隔壁同學閉上眼睛聽三個高頻音，詢問他聽到的音高是高音還是低音。"
      ],
      formula: `// 幽靈基音實驗 (播放 600, 800, 1000Hz，大腦自動腦補 200Hz)\n\\operatorname{tone}([600, 800, 1000], [0.3, 0.3, 0.3])\n\n// 比對組：真實 200Hz 基音\n\\operatorname{tone}(200, 0.5)`,
      tips: `
- **神經感知原理**：大腦聽見等差倍頻聲波時，會自動由頻率間距計算出基音頻率。
- **科技生活應用**：這項數學原理被廣泛應用在耳機、手機喇叭重低音強化晶片（MaxxBass）中。
      `
    },

    "5-4": {
      id: "5-4",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "傅立葉合成三大經典波形",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
既然所有聲音都可以拆解成正弦波的等差數列，那反過來：我們能不能用純粹的正弦波加法，把圓滑的波形「削平成長方形」？
答案就是法國數學家傅立葉的偉大發明！
透過奇數倍泛音的無窮級數加法，正弦波逐漸長出銳利稜角，變成電玩紅白機的「方波」與弦樂的「鋸齒波」！
      `,
      mathModel: `
**經典幾何波形之傅立葉級數**：
- **方波（Square Wave, 8-bit 電玩音色，僅含奇數諧波）**：
  $$y = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x) + \\dots$$
- **鋸齒波（Sawtooth Wave, 弦樂明亮感，全諧波）**：
  $$y = \\sin(x) - \\frac{1}{2}\\sin(2x) + \\frac{1}{3}\\sin(3x) - \\frac{1}{4}\\sin(4x) + \\dots$$
      `,
      tasks: [
        "【正弦波削平觀察】：在 Desmos 依序疊加第 1, 3, 5, 7 諧波，觀察頂部如何從弧形被削平成方波。",
        "【聆聽方波質感】：將方波的級數係數代入 tone 函數，聆聽經典的任天堂紅白機電玩音質。"
      ],
      formula: `// 方波傅立葉前 4 項合成\nk = 220\n\\operatorname{tone}([k, 3k, 5k, 7k], [0.6, 0.6/3, 0.6/5, 0.6/7])\n\n// 坐標系幾何方波\ny = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x)`,
      tips: `
- **波形合成規律**：正弦級數疊加項數越多，波形的方角就越銳利，高頻的金屬電玩感就越強。
- **傅立葉前瞻**：任何週期波形都可以分解為不同頻率與振幅的正弦波疊加。
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
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
為什麼大三和弦聽起來晴朗自信，小三和弦聽起來陰鬱悲傷？
這兩種強烈的情感對比，背後在數學半音幾何上，居然僅僅相差了「一個半音」！
掌握和弦的半音位移向量，你就能隨心所欲地控制整座實驗室的情緒溫度！
      `,
      mathModel: `
**三和弦半音位移向量**（以基音為 0）：
- **大三和弦（Major, 陽光晴朗）**：
  $$[0, 4, 7] \\quad (\\text{大三度 } 4 \\text{ 半音 } + \\text{ 小三度 } 3 \\text{ 半音})$$
- **小三和弦（Minor, 陰雨憂傷）**：
  $$[0, 3, 7] \\quad (\\text{小三度 } 3 \\text{ 半音 } + \\text{ 大三度 } 4 \\text{ 半音})$$
      `,
      tasks: [
        "【大三和弦發聲】：輸入 tone(f([0, 4, 7]), 0.3)，感受明亮開朗的色彩。",
        "【小三和弦對比】：修改中間音為 3，輸入 tone(f([0, 3, 7]), 0.3)，感受憂傷哀怨的氛圍。",
        "【和弦平移】：加上位移滑桿 root，同時移動整個和弦。"
      ],
      formula: `// 大三與小三和弦對照\n\\operatorname{tone}(f([0, 4, 7]), 0.3)  // 大三 (晴天明亮)\n\\operatorname{tone}(f([0, 3, 7]), 0.3)  // 小三 (雨天憂傷)`,
      tips: `
- **多音音量控制**：和弦由多個音同時發聲，每個音的音量設定建議在 0.3 左右，避免加總超過 1.0 產生雜音。
- **情感色彩翻轉**：大三和弦與小三和弦僅差一個半音（4 vs 3），卻能帶來明亮晴空與憂傷陰雨的強烈情感對比。
      `
    },

    "6-2": {
      id: "6-2",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "流行音樂萬能卡農進行與同餘循環低音",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
為什麼從古典帕海貝爾的《卡農》，到周杰倫、紅髮艾德的流行金曲，都有讓人百聽不厭的強大魔力？
因為它們的底層都跑著一套永恆的「4 和弦循環低音（Bassline）」！
配合高中數學的同餘運算 $\\operatorname{mod}$，只要一行公式，就能讓低音伴奏像迴轉壽司一樣無限循環！
      `,
      mathModel: `
**同餘查表循環伴奏模型**：
定義 4 拍經典低音循環陣列：
$$C_{\\text{bass}} = [-12, -5, -3, -8] \\quad (C \\to G \\to A \\to F)$$
同餘循環低音函數：
$$B(t) = C_{\\text{bass}}[\\operatorname{mod}(\\lfloor t \\rfloor, 4) + 1]$$
隨時間滑桿 $t$ 一直變大，$\\operatorname{mod}$ 運算保證索引永遠在 $1, 2, 3, 4$ 之間循環打轉！
      `,
      tasks: [
        "【同餘循環測試】：在 Desmos 測試 mod(floor(t), 4) + 1 的數值循環。",
        "【卡農低音發聲】：輸入卡農低音算式，按下播放鍵聽聽看熟悉的流行樂底座。",
        "【雙軌合奏】：左手放低音循環，右手放單音旋律，親手完成雙聲部合奏！"
      ],
      formula: `// 卡農 4 拍同餘循環低音\nC_{bass} = [-12, -5, -3, -8]\nB(t) = C_{bass}[\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1]\n\\operatorname{tone}(f(B(t)), 0.35)`,
      tips: `
- **同餘查表語法**：Desmos 的 mod(x, y) 輸出範圍是 0 到 y-1，因此陣列索引必須手動加 1。
- **雙聲部協同**：右手演奏主旋律，左手利用同餘循環演奏低音，正式解鎖多聲部合奏！
      `
    },

    "6-3": {
      id: "6-3",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "多軌分段接力架構（Relay Playback）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/eodq3asol4",
      motivation: `
當樂曲長達數百拍、主旋律與和弦伴奏多聲部並行時，如果把幾百個音塞在同一個列表，Desmos 瀏覽器容易卡頓爆音。
老師私房的大型專題「分段接力架構」在此公開：
將長曲按 48~80 拍切成多個分塊（$L_1, L_2, L_3 ...$），利用時間位移接力演奏，並收合資料夾確保順暢運行！
      `,
      mathModel: `
**多軌分段時間位移接力模型**：
$$t = 0$$
$$\\operatorname{tone}(L_1[t], T_1[t])$$
$$\\operatorname{tone}(L_2[t - 50], T_2[t - 50])$$
$$\\operatorname{tone}(L_3[t - 98], T_3[t - 98])$$
$$\\dots$$
當時間 $t$ 抵達 50 時，$L_2[t-50]$ 恰好從第 1 個音開始演奏，達成零縫隙接力！
      `,
      tasks: [
        "【解析《春日影(90小節)》】：開啟 Desmos 範本，觀察 17 個接力分塊與低音伴奏軌的組織結構。",
        "【時間位移計算】：計算每段樂句的拍數長度與 offset 偏移量。",
        "【效能排坑實踐】：體會老師的重要註解「播放聲音時請勿打開資料夾，會卡頓」，落實效能管理！"
      ],
      formula: `// 長曲分段接力播放架構 (Relay Playback)\n// 關鍵叮嚀：播放聲音時請勿打開資料夾，會卡頓！\nt = 0\n\\operatorname{tone}(L_1[t], T_1[t])\n\\operatorname{tone}(L_2[t - 48], T_2[t - 48])\n\\operatorname{tone}(L_3[t - 84], T_3[t - 84])`,
      tips: `
- **算力釋放技巧**：當 Desmos 的資料夾展開時，瀏覽器會為列表中的所有元素渲染 DOM 節點，導致嚴重掉幀；播放時請收合資料夾！
- **時間偏移接力**：利用 t - 48 等時間軸位移量，多軌音軌便能依序接力演奏長曲。
      `
    },

    "6-4": {
      id: "6-4",
      moduleId: "module-6",
      moduleName: "六、和弦與多聲部",
      title: "自動琶音器與空間回音（Echo / Delay）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
把和弦的音按極快速度一個一個輪流彈出，就成了賽博龐克跑酷遊戲最愛的「自動琶音（Arpeggiator）」！
再加上等比數列衰減的時間延遲，你的音樂瞬間像是搬到了阿爾卑斯山谷或歐洲大教堂，長出令人沉醉的空間深度！
      `,
      mathModel: `
**等比數列空間回音延遲方程**：
原聲加上時間差 $\\Delta t$ 且音量乘以公比 $r < 1$ 的複本：
$$V_{\\text{echo}}(t) = \\operatorname{tone}(f(S[t]), 0.5) + \\operatorname{tone}(f(S[t - 0.25]), 0.25) + \\operatorname{tone}(f(S[t - 0.5]), 0.125)$$
音量依等比數列 $0.5, 0.25, 0.125$ 幾何衰減。
      `,
      tasks: [
        "【回音延遲實作】：在旋律軌後面加上一軌延遲 0.25 拍、音量減半的 tone。",
        "【空間感調節】：修改延遲時間 Delta t，感受金屬錄音室與空曠大教堂的不同回響。",
        "【自動琶音體驗】：用快速時間滑桿滾動和弦，做出跑酷電音質感。"
      ],
      formula: `// 等比數列空間回音\nV_{echo}(t) = \\operatorname{tone}(f(S[t]), 0.5) + \\operatorname{tone}(f(S[t - 0.25]), 0.25)`,
      tips: `
- **延遲時間設定**：回音時間間隔太長會干擾旋律拍點，建議設定為 0.25 拍（十六分音符）或 0.5 拍（八分音符）。
- **等比音量衰減**：回音的音量隨時間呈等比數列遞減，營造大教堂般的空間立體感。
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
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
音樂大師巴哈是隱藏在古典時期的「幾何變換狂魔」！
他創作的《螃蟹卡農》，第一位樂手從頭往後彈，第二位樂手從尾巴往前倒著彈（水平翻轉）；
更有甚者，把整首曲子的音高上下倒過來鏡射（垂直鏡射）——兩條軌道疊在一起居然毫無破綻，嚴絲合縫！
      `,
      mathModel: `
**旋律陣列的幾何變換**：
設樂譜陣列長度為 $N$：
- **原始正向旋律**：$S_{\\text{orig}}[t]$
- **逆行（水平翻轉，像螃蟹倒著爬）**：
  $$S_{\\text{retro}}[t] = S_{\\text{orig}}[N - t + 1]$$
- **倒影（垂直鏡射，以軸線 $y=C$ 為鏡像）**：
  $$S_{\\text{inver}}[t] = 2C - S_{\\text{orig}}[t]$$
      `,
      tasks: [
        "【正反雙軌合奏】：將簡譜正向陣列與逆行陣列同時輸入 Desmos 並播放。",
        "【幾何鏡射繪圖】：在坐標平面繪出正向與鏡射旋律折線圖，親眼看見莫比烏斯環般的幾何對稱美學！"
      ],
      formula: `// 旋律逆行 (水平翻轉)\nS_{retro}[t] = S_{orig}[N - t + 1]\n\n// 雙軌對稱同時演奏\n\\operatorname{tone}(f(S_{orig}[t]), 0.35) + \\operatorname{tone}(f(S_{retro}[t]), 0.35)`,
      tips: `
- **幾何對位美學**：高中數學中的水平逆行與垂直倒影，在古典音樂中正是複音對位法（Counterpoint）的極致巔峰。
- **雙軌莫比烏斯環**：順向旋律與逆向旋律同時演奏，能自動交織出巴哈式的優雅和聲。
      `
    },

    "7-2": {
      id: "7-2",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "Desmos Audio Trace（Alt + T）視覺聽圖音樂",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/oiamjxssnc",
      motivation: `
完全不用寫 tone 函數，只要在 Desmos 坐標系畫出一條階梯函數曲線，按下一組神秘快捷鍵，Desmos 就能「把整張圖唱出來給你聽」！
這項原本設計給視障學生的「聲音追蹤（Audio Trace）」無障礙功能，被我們解鎖成了強大純粹的視覺繪圖作曲神器！
      `,
      mathModel: `
**老師實測 Desmos 聽圖規約**：
1. **音域限定**：Desmos 聽取圖像聲音的音域固定是 **$E_3 \\sim E_4$**。
2. **半音階梯等分**：把 Y 軸分成 0 到 12（12 等分），每單位長度恰好對應一個半音：
   $0=E, 1=F, 2=F\\#, 3=G, 4=G\\#, 5=A, 6=A\\#, 7=B, 8=C, 9=C\\#, 10=D, 11=D\\#, 12=E$
3. **階梯函數映射**：$y = a[\\operatorname{floor}(nx)]$，其中 $n$ 控制音符密度。
4. **休止符技巧**：設定 $t = -1000$（負無窮遠靜音）。
      `,
      tasks: [
        "【窗口設定】：將 Desmos 坐標軸 Y 軸嚴格鎖定在 0 到 12 區間。",
        "【輸入階梯函數】：輸入 y = a[floor(16x)]，填入《rickroll》或《殘酷天使》旋律陣列。",
        "【啟動聽圖模式】：選取該算式，按鍵盤 Alt + T（Mac: Option + T），再按 H 鍵，閉上眼睛聽函數唱歌！"
      ],
      formula: `// 經老師實測：Desmos 聽圖音域為 E3~E4，Y軸設為 0~12\ny = a[\\operatorname{floor}(16x)]\nt = -1000 // 負無窮大代表靜音休止符\n\n// rickroll 旋律陣列 a\na = [3, t, 5, t, 8, t, 5, t, 12, 12, 12, t, 12, 12, 12, 10, 10, t, t, t, t, 3, t, 5, t, 8, t, 5, t, 10, 10, 10, t, 10, 10, 10, t, 8, 8, t, t, t, t, 3, t, 5, t, 8, t, 5, t, 8, 8, 8, 8, 10, 10, 10, 10, 7, 7, 7, 7, 5, 5, 3, 3, 3, 5, 5, 8, 8, 5, 5, 10, 10, 12, 12, 7, 7, 7, 7, 7, 7, 7, 7]`,
      tips: `
- **聽圖坐標系邊界**：請務必確保 Y 軸上下邊界剛好卡在 0 與 12，否則音高會產生整體位移。
- **階梯函數映射**：使用 floor() 將函數離散化為琴鍵音階，搭配 Alt + T 實現「畫圖唱歌」黑科技。
      `
    },

    "7-3": {
      id: "7-3",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "薛帕德無限音階（Shepard Tone）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
名導諾蘭在電影《敦克爾克大行動》與《星際效應》中，運用了一種讓人心跳加速、彷彿永遠在無限往上爬升的緊迫配樂！
這在心理聲學上稱為「聽覺潘洛斯階梯」——不管音階爬了多久，音高好像永遠都在往上衝！
它的數學原理是「同餘循環音階」乘上「高斯常態分佈鐘形音量濾鏡」：
      `,
      mathModel: `
**薛帕德音階數學架構**：
多個相隔八度的音同時爬升，音量受高斯常態分佈鐘形函數罩住：
$$V(X) = e^{-\\frac{(X - 30)^2}{2 \\cdot 12^2}}$$
最高音在快爬出人耳極限時音量漸漸縮小為 0，而最低音在底下以極小音量悄悄升起接棒，大腦產生無限循環上升的錯覺！
      `,
      tasks: [
        "【繪製高斯鐘形罩】：在坐標系繪出高斯音量分佈曲線，觀察其鐘形包絡。",
        "【播放無限音階】：按下時間播放鍵，閉眼感受大腦如何被這段永無止境爬升的階梯所欺騙！"
      ],
      formula: `// 薛帕德無限音階 (向量運算)\nK = [0, 1, 2, 3, 4]\nX = 12K + \\operatorname{mod}(t, 12)\nV = e^{-\\frac{(X - 30)^2}{2 \\cdot 12^2}}\n\\operatorname{tone}\\left(55 \\cdot 2^{\\frac{X}{12}}, V\\right)`,
      tips: `
- **無限循環錯覺**：同餘音階爬升結合高斯鐘形音量濾鏡，創造大腦永無止境爬升的聽覺彭羅斯階梯。
- **感官心理體驗**：此單元為展示體驗課，讓學生見識數學與大腦感官錯覺結合的特點。
      `
    },

    "7-4": {
      id: "7-4",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "演算法自動作曲（隨機與轉移矩陣選學）",
      status: "pending",
      desmosUrl: null, // 空位：待教師製作後填入
      motivation: `
電腦能不能自己創作出一首永不重複、卻又無比動聽的音樂？
- 基礎版：利用五聲音階天然沒有半音衝突的特性，配合 Desmos 的隨機函數抽籤作曲；
- 進階補充版：利用轉移矩陣（馬可夫鏈）定義音符之間的跳動機率，讓演算法自主產生旋律。
      `,
      mathModel: `
**演算法生成模型分流**：
1. **五聲音階隨機抽籤池（全年級適用）**：
   $$P = [C, D, E, G, A], \\quad idx = \\operatorname{floor}(\\operatorname{random}() \\times 5) + 1$$
2. **轉移矩陣馬可夫鏈（高三／高二下學期末選學補充）**：
   定義狀態轉移矩陣 $M_{ij} = P(S_{t+1} = j \\mid S_t = i)$。
      `,
      tasks: [
        "【五聲隨機抽籤】：建立五聲候選池，讓 Desmos 隨機抽出 16 顆音符並自動播放。",
        "【評價演算法旋律】：聆聽電腦創作的旋律，討論為什麼五聲音階隨機彈奏依然聽起來自然流暢。"
      ],
      formula: `// 五聲音階隨機抽籤袋自動作曲\nP = [0, 2, 4, 7, 9, 12]\nS_{auto} = P[\\operatorname{floor}(5 \\cdot \\operatorname{random}(16)) + 1]\n\\operatorname{tone}(f(S_{auto}[\\operatorname{floor}(t)]))`,
      tips: `
- **五聲隨機作曲**：利用 random() 隨機從五聲音階抽籤，因為五聲無半音衝突，電腦永遠能自動生成優美旋律。
- **馬可夫鏈分流**：轉移矩陣涉及高二下末矩陣單元，可視班級學生數學背景彈性補充。
      `
    },

    "7-5": {
      id: "7-5",
      moduleId: "module-7",
      moduleName: "七、視覺音遊與演算法",
      title: "對數琴鍵還原與參數式下落音遊【期末大專題】",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/lp4hwddbnf",
      motivation: `
整合全學期學到的所有核心技巧：公版音高指數運算、列表接力播放、時值斷音遮罩，以及**對數反函數還原琴鍵橫坐標**！
音符點隨時間等速向下墜落，精準落在底部的判定線上，發出對應樂音——親手做出你專屬的《Deemo / 節奏天國》下落式音樂遊戲！
      `,
      mathModel: `
**對數琴鍵映射與下落點陣參數式**：
- **橫坐標（對數反函數還原琴鍵位置）**：
  $$X = 24\\log_{2}\\left(\\frac{L + 1}{442}\\right) + 1$$
  *💡 技巧：加 1 可防止休止符 $L=0$ 產生 $\\log_2(0) = -\\infty$ 無定義，並將休止符移至可見螢幕之外！*
- **縱坐標（隨時間 $t$ 等速下落）**：
  $$Y = \\frac{M - t + \\text{offset}}{3} \\quad (M = [1 \\dots N])$$
- 兩者結合成點陣參數式：$\\left(24\\log_2((L+1)/442)+1, \\; (M - t)/3\\right)$。
      `,
      tasks: [
        "【對數琴鍵映射驗證】：驗證為什麼頻率除以 442 取 log2 乘 24，正好能將半音等距排列在 X 軸。",
        "【下落動態實測】：按下時間 t 播放鍵，親眼目睹音符點陣如瀑布般下落，與耳機音樂百分之百同步打在判定線上！",
        "【期末專題發表】：自選喜愛的曲目，編排專屬下落音遊並儲存於 Google 帳號，進行課堂全產出大發表！"
      ],
      formula: `// 老師原創下落式音遊核心參數式 (rickroll / 魷魚遊戲 / 春日影 公版)\nM = [1 ... 320]\n\n// 對數琴鍵還原 X 軸 + 等速時間下落 Y 軸\n\\left(24\\log_{2}\\left(\\frac{L_{1}+1}{442}\\right)+1, \\frac{M-t}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{2}+1}{442}\\right)+1, \\frac{M-t+80}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{3}+1}{440}\\right)+1, \\frac{M-t+160}{3}\\right)\n\\left(24\\log_{2}\\left(\\frac{L_{4}+1}{440}\\right)+1, \\frac{M-t+240}{3}\\right)`,
      tips: `
- **對數琴鍵映射**：利用 24*log2((L+1)/440)+1 將頻率精準還原為琴鍵 X 坐標，實現音符精準砸線打擊。
- **學習歷程檔案**：期末音遊專題成果可直接存檔於個人 Desmos Google 雲端，並將 Desmos 分享連結繳交作為 108 課綱多元學習歷程檔案！
      `
    }
  }
};
