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
      units: ["4-1", "4-2", "4-3"]
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

  // 26 個單元的詳細內容資料庫
  units: {
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
物理課學過聲音的三種特徵：音量、音調、音色。
在 Desmos 裡面，這三件事剛好對應三個數學特徵：

1. **音量**：跟**振幅**有關（振幅越大聲音越大，反之越小）。
2. **音調（音高）**：跟**頻率、週期**有關（頻率越高聲音越尖，頻率越低越低沉）。
3. **音色**：跟**波形**有關（即使鋼琴和小提琴彈一樣的音高與音量，波形長相不同，耳朵就分得出來）。
      `,
      mathModel: `
在 Desmos 中，讓電腦發出聲音的語法：
$$\\operatorname{tone}(\\text{頻率}, \\text{音量})$$

- **最簡單發聲**：
  - $\\operatorname{tone}(440)$：只給頻率，預設音量發出標準 A 音（$440\\text{Hz}$）。
- **指定音量**：
  - $\\operatorname{tone}(440, 0.5)$：第二個數字是音量（範圍 $0 \\sim 1$，$0.5$ 為中等音量）。
- **用滑桿控制**：
  - $\\operatorname{tone}(a, b)$：建立滑桿 $a$（頻率）與 $b$（音量），動態拉動調整。

**聽不到聲音的檢查步驟**：
1. 畫面最左上角的「揚聲器總開關」有沒有開啟？
2. 算式左側圓圈內的「音符小圖標」有沒有點亮（反灰代表靜音）？
      `,
      tasks: [
        "1. 左右分割畫面：左邊放講義，右邊放 Desmos 工作區。",
        "2. 登入存檔：在 Desmos 登入個人 Google 帳號，並將圖形命名為「01_聲音實驗」存檔。",
        "3. 第一個聲音：在第一行輸入 tone(440) 聽聽看標準 A 音（可改 tone(440, 0.5) 調整音量）。",
        "4. 建立滑桿：輸入 tone(a, b) 並建立滑桿，設定 a 範圍 50~2000、b 範圍 0~1，拉拉看感受音高與音量變化。",
        "5. 手動定音：將音量 b 固定在 0.5，手動拉動頻率 a，看看能否剛好停在 440Hz。",
        "6. 資料夾整理：點「+」新增資料夾命名為「單音與發聲」，把算式收合進去保持乾淨。"
      ],
      formula: `// 1. 最簡單發聲 (省略音量，系統以預設音量發聲)\n\\operatorname{tone}(440)\n\n// 2. 雙參數滑桿發聲\na = 440\nb = 0.5\n\\operatorname{tone}(a, b)`,
      tips: `
- **沒聲音檢查**：90% 是開關沒開，請確認左上角喇叭與算式左側音符圖標都已點亮。
- **耳機或喇叭測試**：輸入 tone(440) 能出聲就代表硬體正常。
- **音量提醒**：電腦教室以適度放音即可，避免音量開過大。
- **找不到功能**：若找不到某些功能（如計時器 Ticker），通常是因為沒登入帳號或開了無痕視窗。
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
一個一個音手動拉滑桿太慢了。要讓電腦自己彈出一首歌，我們需要兩樣工具：
- **列表（List）**：用中括號 [ ] 把一串音符的頻率存起來。
- **時間滑桿 $t$**：當作唱盤唱針，配合 $\\operatorname{tone}(L[t])$ 依序讀出音符自動播放。

另外，如果把多個音同時放在同一個列表裡（例如兩個頻率），電腦就會同時發聲，形成「和弦」。
      `,
      mathModel: `
**1. 兩個音同時發聲（和弦）**：
$$\\operatorname{tone}([440, 880])$$
- 列表中放入多個頻率，Desmos 就會同時發出 $440\\text{Hz}$ 與 $880\\text{Hz}$（高八度）。

**2. 照順序一個一個發聲（旋律播放）**：
$$L = [440, 880, 220, 110, 1760], \\quad t = 1, \\quad \\operatorname{tone}(L[t])$$
- $L[t]$ 代表指針只讀取列表中「第 $t$ 個音符」。
- 隨時間滑桿 $t$ 自動往前跑，音符就依序輪流演奏出來。
      `,
      tasks: [
        "1. 同時播放雙音：輸入 tone([440, 880])，聽聽看兩個音疊在一起的和聲。",
        "2. 建立旋律列表：自己輸入一個包含 5 個音的列表 L = [440, 554, 659, 880, 440]。",
        "3. 讓時間當唱針：輸入 tone(L[t])，新增時間滑桿 t（範圍 1 到 5，步長 1），按下播放鍵聽旋律跑動。",
        "4. 課堂猜歌：聽老師在課堂播放的 3 首旋律，在下方學習單記錄你猜中幾首。"
      ],
      formula: `// 1. 同時播放多個音符 (和弦)\n\\operatorname{tone}([440, 880])\n\n// 2. 列表旋律循序播放 (L[t] 代表只取出第 t 個音符)\nL = [440, 880, 220, 110, 1760]\nt = 1\n\\operatorname{tone}(L[t])`,
      tips: `
- **滑桿速度**：點時間滑桿 t 左邊的設定，可以調整播放速度（慢速 0.5x 或快速 2x）。
- **列表索引**：Desmos 列表第一個音是從 1 開始算；若 t 超過列表長度，電腦就會安靜無聲。
      `,
      worksheet: {
        title: "學習單 1：課堂猜歌與列表演奏原理",
        questions: [
          {
            id: "q1_songs",
            title: "問題一：你猜中幾首歌？",
            type: "radio",
            prompt: "聽老師在課堂投影播放的 3 首旋律，請記錄你猜中了幾首：",
            options: [
              "一首都沒有ＱＡＱ",
              "就猜到一首",
              "差一點點，只猜到兩首",
              "我超強，3首都猜中"
            ],
            solution: "課堂播放的 3 首旋律分別是：《春日影》、《我很好騙》與《Lemon》。\n在 Desmos 裡，只要把頻率存成列表 $L$，配上時間滑桿 $t$ 與 `tone(L[t])`，電腦就能像唱針一樣依序讀取頻率，自動播出一整首歌！",
            formatAnswer: (ans) => `課堂猜歌成果：【${ans}】。\n原理解析：在 Desmos 中透過列表 L 與時間變數 t，電腦就能依序讀出頻率發聲，自動演奏出旋律。`
          },
          {
            id: "q2_list_syntax",
            title: "多音和弦與循序單音的語法差異",
            type: "textarea",
            prompt: "在 Desmos 中，`tone([440, 880])` 與 `tone(L[t])` 這兩種寫法聽起來有什麼不一樣？時間滑桿 $t$ 在裡面做什麼？",
            placeholder: "請說明：1. 中括號放多個數字聽起來如何？2. 加了 [t] 之後有何差別？滑桿 t 扮演什麼角色？",
            solution: "1. `tone([440, 880])`：列表內放多個頻率，電腦會「同時發聲」，形成和弦。\n2. `tone(L[t])`：加了索引 $[t]$，一次只拿出列表中第 $t$ 個音符發聲；隨滑桿 $t$ 往前跑，音符就「依序發聲」形成旋律。",
            formatAnswer: (ans) => `語法發聲差異說明：\n${ans}\n\n（核心解析：列表放多個頻率為同時發聲的和弦；配合索引 L[t] 與時間滑桿 t 則為依序發聲的旋律。）`
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
調吉他或鋼琴的時候，如果兩個音很接近但差了一點點，耳朵會聽到一種「嗡～嗡～嗡」忽大忽小的聲音，這就是物理學上的「拍頻（Beats）」。
為什麼頻率差一點點，聲音就會忽大忽小？在 Desmos 裡把兩道聲波畫出來疊加，就能看見波峰波谷互相加倍與抵消的干涉過程！
      `,
      mathModel: `
**拍頻（Beats）的物理本質：波形疊加與干涉**

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/j4sqzyfwfx?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

- 🔵 **藍線（基準波 $y_1$）**：頻率 $f_1 = 1$ 的聲波向前傳播。
- 🟢 **綠線（超車波 $y_2$）**：頻率微差 $f_2 = 1.1$ 的聲波，波峰隨時間錯位。
- 🔴 **紅線（合成波 $y_3$）**：兩道聲波疊加的振動結果（$y_3 = y_1 + y_2$）。
  - **相長干涉**：波峰重疊時振幅加倍，聲音變大。
  - **相消干涉**：波峰對上波谷時互相抵消，聲音變小。

**課堂觀察**：
1. 觀察下方紅線，從一次聲音最大到下一次聲音最大，間隔時間大約是多少？（這就是拍頻的週期）。
2. 調整滑桿 $f_2$：當兩道波的頻率越來越接近時，忽大忽小的週期是變長還是變短？為什麼？
      `,
      mathConceptTitle: "數學原理：操場跑步與最小公倍數",
      mathConcept: `
**操場跑步問題**：
兩個人同時在操場起跑：
- 藍波（基準波）：每圈 $1$ 秒（週期 $T_1 = 1$）。
- 綠波（超車波）：跑得稍快，每圈 $\\frac{10}{11}$ 秒（週期 $T_2 = \\frac{10}{11}$）。

**何時會在起點重新碰頭？**
兩人何時剛好都跑完整數圈，在起點重新波峰重合？
- 藍波跑了 **$10$ 圈**（花 $10$ 秒）。
- 綠波跑了 **$11$ 圈**（花 $10$ 秒）。

兩人在第 **$10$ 秒** 剛好都走完整數圈，在起點重新重合。這段循環時間就是合成波忽大忽小的週期。
求兩道波「同時走完整數個週期」的最短時間，本質上就是求週期的最小公倍數（LCM）。
      `,
      tasks: [
        "1. 和諧頻率比探索：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【和諧音】並播放 tone([220, 220a])。拖曳比例滑桿 a（1 到 4），觀察停在 a = 2（頻率比 1:2）與 a = 3（頻率比 1:3）時的融合聽感。",
        "2. 人耳聽音盲測：展開第 2 個資料夾【人耳聲音分辨程度】。一人戴耳機閉眼，由同桌夥伴隨機個別播放 tone(442) 與 tone(442b)。若能聽出高低差異，則將滑桿 b 調小再測，記錄能分辨的最小比例 b。",
        "3. 微音差與拍頻現象：保持極小音差 b（例如 b = 1.0004），同時播放兩個聲音，聆聽微小音差如何轉化為週期性忽大忽小的音量起伏（拍頻 Beats）。",
        "4. 動態波形干涉實作：展開第 3 個資料夾【圖示為何會有此現象】（或直接操作上方內嵌畫布），按下時間滑桿 t 的播放鍵 ⏵。觀察藍波 y_1 與綠波 y_2 疊加過程，確認紅線合成波 y_3 在同相時振幅疊加、反相時振幅抵消的干涉現象，並拖曳滑桿 f_2 觀察起伏節奏的變化。"
      ],
      formula: `// 📁 1. 和諧音 (頻率比例滑桿 a)\n\\operatorname{tone}([220, 220a])\na = 1\n\n// 📁 2. 人耳聲音分辨程度 (微音盲測與拍頻，滑桿 b)\n\\operatorname{tone}(442)\n\\operatorname{tone}(442b)\nb = 1.0004\n\n// 📁 3. 圖示為何會有此現象 (行進波干涉動態模擬)\nt = 0\nf_1 = 1\nf_2 = 1.1\ny_1 = \\sin(f_1(x-t))\ny_2 = \\sin(f_2(x-t))\ny_3 = y_1 + y_2`,
      tips: `
- **整數比與聽感**：a=2（1:2 完全八度）與 a=3（1:3 純五度泛音）因為合成波週期極短，波形重合頻繁，聽感平穩和諧。
- **盲測專注聽感**：個別播放兩音時，注意音高微弱的升降變化。
- **拍頻特徵**：當兩頻率相差極小（例如 1~2Hz）且同時發聲時，大腦不會聽到兩個獨立音高，而是聽到音量忽大忽小的週期性波動。
- **波形干涉**：同相（波峰重疊）振幅相加；反相（波峰對波谷）振幅抵消。
      `,
      worksheet: {
        title: "學習單 2：雙音和諧比與人耳辨音極限",
        questions: [
          {
            id: "q2_ratio",
            title: "問題二：雙音頻率比探索",
            type: "textarea",
            prompt: "請問你自己覺得兩個音頻率比為何的時候聲音最好聽？（答案範例：我覺得1:3.14的時候好聽）\n在 Desmos 第 1 個資料夾【和諧音】中播放 `tone([220, 220a])`，拉動比例滑桿 $a$（從 1 到 4），停在 $a = 2$（頻率比 $1:2$）與 $a = 3$（頻率比 $1:3$）聽聽看，寫下你的聽感觀察：",
            placeholder: "請寫下你覺得最好聽的比例，以及停在 a=2 與 a=3 時聽到的聲音特性...",
            solution: "當頻率比為簡單整數比時，兩道波波峰完全重合的週期極短，拍頻消除，聽感穩定和諧：\n- 1:2：完全八度（兩音融合成一體）。\n- 1:3：純五度的泛音（聲音開闊純淨）。",
            formatAnswer: (ans) => `雙音頻率比聽感記錄：\n${ans}\n\n（解析：頻率比為 1:2（八度）與 1:3（五度泛音）時，拍頻消除，聲音融為一體，展現簡單整數比的和諧特性。）`
          },
          {
            id: "q3_jnd",
            title: "問題三：人耳聲音分辨極限盲測",
            type: "textarea",
            prompt: "你能聽出差異的頻率倍率最小為何？（答案範例：1:1.002）\n同桌合作盲測：一人戴耳機閉眼，夥伴在第 2 個資料夾【人耳聲音分辨程度】隨機個別播放 `tone(442)` 與 `tone(442b)`。\n記錄你們測出「還能分辨高低差異的最小比例 $b$」是多少？另外，當把這兩個差一點點的音「同時播放」時，你聽到了什麼現象？",
            placeholder: "請記錄測出的最小比例 b，並描述兩音差一點點同時播放時聽到的聲音起伏...",
            solution: "在 442Hz 附近，未經專業訓練的人耳辨識高低差異極限約在 2~3Hz（比例約 $b = 1.005$）。當兩音差異極小時，個別聽難以辨識高低；但同時播放時，聲波干涉會產生忽大忽小的週期性拍頻（Beats）。",
            formatAnswer: (ans) => `同桌盲測結果與聽感：\n${ans}\n\n（解析：在 442Hz 附近，一般人耳辨識高低極限約 2~3Hz。差異極小時，同時播放會轉化為拍頻現象。）`
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
畢達哥拉斯是個整數比狂人。
他發現把弦長減半（頻率比 $1:2$），兩個音聽起來就像同一個音（高八度），所以探索音階的範圍就被鎖定在 $1 \\sim 2$ 之間。
那下一個最簡單的整數比是誰？就是 **$1:3$**。
但倍數 $3$ 已經大於 2、跑出八度外面了，所以除以 2 折回來，得到頻率比 **$1 : \\dfrac{3}{2}$**（也就是純五度）。

**五度相生律就靠這兩條超簡單規則**：
1. **規則一：從 1 開始，每次乘以 $\\dfrac{3}{2}$**。
2. **規則二：如果大於 2 就除以 2**（折回 1 ~ 2 的八度內）。

連算五次，五聲音階（宮、商、角、徵、羽）就誕生了！
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
      formula: `// 1. 五聲音階純分數發聲 (以基準音 263Hz 為例，由低到高排列)\n\\operatorname{tone}(263 \\cdot 1)            // 宮 (基準音 1)\n\\operatorname{tone}(263 \\cdot \\frac{9}{8})        // 商 (9/8)\n\\operatorname{tone}(263 \\cdot \\frac{81}{64})      // 角 (81/64)\n\\operatorname{tone}(263 \\cdot \\frac{3}{2})        // 徵 (3/2)\n\\operatorname{tone}(263 \\cdot \\frac{27}{16})      // 羽 (27/16)\n\n// 2. Desmos 樂曲變數設定 (因 Desmos 僅支援英文變數，暫借代號表示五聲)\nC = 263                  // 宮 (基準音)\nD = 263 \\cdot \\frac{9}{8}       // 商\nE = 263 \\cdot \\frac{81}{64}     // 角\nG = 263 \\cdot \\frac{3}{2}       // 徵\nA = 263 \\cdot \\frac{27}{16}     // 羽\nA_2 = \\frac{A}{2}              // 低音羽 (A/2)\nG_2 = \\frac{G}{2}              // 低音徵 (G/2)\n\n// 3. 《滄海一聲笑》五聲樂譜 (羽 徵 角 商 宮 倒序開頭)\nL = [A, G, E, D, C, C, 0, 0, E, E, D, C, A_2, G_2, G_2, 0, 0, G_2, A_2, G_2, A_2, C, D, E, G, A, G, E, D, C, C]\nt = 0\n\\operatorname{tone}(L[t])`,
      tips: `
- **變數命名**：Desmos 變數僅支援英文字母，因此暫借 C, D, E, G, A 對應宮、商、角、徵、羽。
- **生律順序 vs 音階順序**：生律順序是數學計算的先後（$1 \\to 3/2 \\to 9/8 \\to 27/16 \\to 81/64$）；音階順序則是頻率由小到大的排列（$1, 9/8, 81/64, 3/2, 27/16, 2$）。
- **五聲特點**：五聲音階抽離了小二度（半音）摩擦，音程間距較大，排列時不易出現刺耳撞音。
      `,
      worksheet: {
        title: "學習單 1：五聲音階手算與八度歸一任務",
        questions: [
          {
            id: "q4_pentatonic",
            title: "問題四：五聲音階規則推導",
            type: "text",
            prompt: "五聲音階規則：規則一從 1 開始乘 3/2，規則二大於 2 除以 2。（答案範例：1:2:3:4:5，當然不是這個答案）\n請寫出前 5 個音的推導步驟，並將這 5 個分數由小到大排列（寫成分數比值）：",
            placeholder: "請依由小到大順序填入比值，格式範例：1 : ... : ... : ... : ...",
            expected: "1 : 9/8 : 81/64 : 3/2 : 27/16 | 1:9/8:81/64:3/2:27/16",
            solution: "推導過程：\n1. 第 1 音：$1$\n2. 第 2 音：$1 \\times \\dfrac{3}{2} = \\dfrac{3}{2}$（小於 2，保留）\n3. 第 3 音：$\\dfrac{3}{2} \\times \\dfrac{3}{2} = \\dfrac{9}{4} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{9}{8}$\n4. 第 4 音：$\\dfrac{9}{8} \\times \\dfrac{3}{2} = \\dfrac{27}{16}$（小於 2，保留）\n5. 第 5 音：$\\dfrac{27}{16} \\times \\dfrac{3}{2} = \\dfrac{81}{32} > 2$，除以 2 折回 $\\longrightarrow \\dfrac{81}{64}$\n\n**由小到大排序**：$1 < \\dfrac{9}{8} < \\dfrac{81}{64} < \\dfrac{3}{2} < \\dfrac{27}{16}$（依序對應宮、商、角、徵、羽）。",
            formatAnswer: (ans) => `五度相生推導步驟：\n1. 第 1 音：1\n2. 第 2 音：1 × (3/2) = 3/2（小於 2 保留）\n3. 第 3 音：(3/2) × (3/2) = 9/4 > 2，除以 2 得 9/8\n4. 第 4 音：(9/8) × (3/2) = 27/16（小於 2 保留）\n5. 第 5 音：(27/16) × (3/2) = 81/32 > 2，除以 2 得 81/64\n\n排序結果：\n學生填答：${ans}\n標準比例：1 : 9/8 : 81/64 : 3/2 : 27/16（依序對應宮、商、角、徵、羽）`
          },
          {
            id: "q5_penta_reflection",
            title: "五聲音階排列與和諧特徵分析",
            type: "textarea",
            prompt: "在課堂上嘗試隨意調換五聲音階這 5 個音的播放順序，聽起來感覺如何？為什麼五聲音階隨便排都不容易刺耳？",
            placeholder: "請描述隨意排列五音時的聽感，並從音程或相鄰音距角度說明原因...",
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
如果我們把「每次乘 $\\dfrac{3}{2}$，大於 2 就除以 2」這套規則繼續算下去呢？
算到第 12 次的時候，會算出一個神奇的數字：
$$
\\dfrac{3^{12}}{2^{19}} = \\dfrac{531441}{524288} \\approx \\mathbf{1.0136}
$$
因為 $3^{12} \\approx 2^{19}$（$531441 \\approx 524288$），這個數值跟起點 1 只差了 **約 1.3%**！
單音聆聽時人耳根本分辨不出這微小差距，所以古人就在這裡停下，定出了「十二律」。

但這也留下了數學上的大問題：
$$
3^{12} \\neq 2^{19} \\quad (\\mathbf{\\text{奇數} \\neq \\text{偶數}})
$$
3 的次方永遠是奇數，2 的次方永遠是偶數，兩邊在數學上永遠不可能真正相等。五度相生永遠無法完全閉合回起點，這多出來約 1.3% 的微小差距，就是歷史上有名的**「畢達哥拉斯音差」**。
      `,
      mathModel: `
**一、 由小到大排序（十二半音階梯）**：

將相生出的 12 個比值由小到大排序（最後補上高八度 2）：
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
      formula: `// 1. 畢達哥拉斯十二律相生音階清單 (範本第一資料夾)\n\\operatorname{tone}(263 \\cdot 1)\n\\operatorname{tone}\\left(263 \\cdot \\frac{2187}{2048}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{9}{8}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{19683}{16384}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{81}{64}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{177147}{131072}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{729}{512}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{3}{2}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{6561}{4096}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{27}{16}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{59049}{32768}\\right)\n\\operatorname{tone}\\left(263 \\cdot \\frac{243}{128}\\right)\n\\operatorname{tone}\\left(263 \\cdot 2\\right)\n\n// 2. 算式驗算\n\\frac{3^{12}}{2^{19}}`,
      tips: `
- **12 的由來**：因為 $3^{12} \\approx 2^{19}$（$\\dfrac{531441}{524288} \\approx 1.0136$），相生到第 12 次時非常逼近起點（誤差約 1.3%），因此各文化普遍採用 12 個音建立律制。
- **轉調限制**：畢氏十二律相鄰半音比例不均勻，換調演奏時會產生走音。
      `
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
在音樂裡，頻率、音符與琴鍵有三種常用的語言：
1. **音名**：物理上固定不變的絕對音高（$C, D, E, F, G, A, B$）。
2. **唱名**：歌唱與聽覺上的相對音級（$\\text{Do, Re, Mi, Fa, Sol, La, Si/Ti}$）。
3. **簡譜**：以數字 $1 \\sim 7$ 記錄旋律的常見樂譜。
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
        "3. 簡譜猜歌與翻譯練習：閱讀隨堂學習單中的兩首簡譜，猜出歌名並練習將數字譜翻譯為 Desmos 音名變數陣列。"
      ],
      formula: `// 1. C 大調簡譜、音名與唱名對照表\n// 簡譜 1 = C (Do)\n// 簡譜 2 = D (Re)\n// 簡譜 3 = E (Mi)\n// 簡譜 4 = F (Fa)  <-- E 到 F 無黑鍵，相距 1 個半音\n// 簡譜 5 = G (Sol)\n// 簡譜 6 = A (La)\n// 簡譜 7 = B (Si / Ti)  <-- B 到 C 無黑鍵，相距 1 個半音\n\n// 2. 簡譜轉音名陣列示範：《小星星》前段\n// 簡譜：1 1 5 5 | 6 6 5 -\n// 轉譯音名陣列：[C, C, G, G, A, A, G, G]`,
      tips: `
- **簡譜轉譯**：Desmos 的 tone() 函數需要音名變數（C, D, E...）或頻率數值，不可直接將簡譜數字當作頻率輸入。
- **半音位置**：只有 **E-F** 與 **B-C** 之間無黑鍵，相距 1 個半音；其餘相鄰白鍵皆相距 2 個半音（全音）。
- **休止符**：數字 0 代表靜音。
      `,
      worksheet: {
        title: "學習單：樂理基礎、琴鍵全半音與簡譜識譜",
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
            id: "q3_score_guess",
            title: "問題五：簡譜猜歌與音名翻譯",
            type: "textarea",
            prompt: "簡譜上這兩首是哪兩首歌呢？\n第一首：`1 1 5 5 6 6 5 - 4 4 3 3 2 2 1 -`\n第二首：`3 3 4 5 5 4 3 2 1 1 2 3 3 2 2 -`\n請寫出歌名，並將第一首翻譯為音名序列（C, D, E...）：",
            placeholder: "請寫出第一首歌名與音名翻譯，以及第二首歌名（格式範例：第一首歌名為...，音名序列為...；第二首是...）",
            solution: "1. 第一首是《小星星》，翻譯音名為：C C G G A A G 0 F F E E D D C 0\n2. 第二首是貝多芬的《歡樂頌》（Ode to Joy）。",
            formatAnswer: (ans) => `簡譜猜歌與翻譯成果：\n${ans}\n\n（解析：第一首為《小星星》，第二首為《歡樂頌》；簡譜 1~7 對應音名 C, D, E, F, G, A, B。）`
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
畢達哥拉斯五度相生律推導純五度（$\\frac{3}{2}$）非常準。
但推算到大三度（例如 $C$ 到 $E$）時，連生 4 次五度再折回八度：
$$
\\text{畢氏大三度} = \\left(\\frac{3}{2}\\right)^4 \\div 4 = \\frac{81}{64} \\approx 1.2656
$$
比值 $\\frac{81}{64}$ 數字較大，聲波要很久才碰頭一次，在 Desmos 裡同時播放 $C$ 與 $E$ 會聽見微弱的拍頻摩擦感。

於是有人想：乾脆找它旁邊最漂亮的小整數比 $\\dfrac{80}{64} = \\dfrac{5}{4} = 1.25$ 來代替！
這就是「純律」。三和弦 $C - E - G$ 剛好是完美的 $4 : 5 : 6$，聽起來純淨無比。
可惜純律音距不均勻，只能彈特定調，換個調演奏就會走音。
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
      `,
      tasks: [
        "1. 大三度聽感對比：在 Desmos 中分別播放 C-E 雙音（畢氏 81/64 vs 純律 5/4），比較兩者的拍頻與融合度。",
        "2. 4:5:6 和弦試聽：取消註解播放 [C, E, G]，聆聽純律大三和弦（4:5:6）的共鳴聽感。",
        "3. 轉調限制討論：理解純律因相鄰音距不均勻，在不同調性演奏時產生的走音限制。"
      ],
      formula: `// 1. 基底頻率 (中央 C)\nC = 261.63\n\n// 2. 畢氏大三度 vs 純律大三度聽覺對比\nE_pyth = C * (81 / 64)    // 畢氏大三度 (~331.13 Hz，有微弱拍頻)\nE_just = C * (5 / 4)      // 純律大三度 (327.04 Hz，拍頻消除，融合度高)\n// tone([C, E_pyth])      // 取消註解：試聽畢氏大三度\n// tone([C, E_just])      // 取消註解：試聽純律大三度\n\n// 3. 純律 4:5:6 大三和弦 (C - E - G)\nG = C * (3 / 2)           // 純五度 (392.45 Hz)\n// tone([C, E_just, G])   // 取消註解：試聽 4:5:6 和弦`,
      tips: `
- **比值差異**：畢氏大三度為 $\\dfrac{81}{64} \\approx 1.2656$；純律大三度取鄰近的 $\\dfrac{5}{4} = 1.25$。
- **大三和弦**：$4 : 5 : 6$ 為純律大三和弦的頻率比。
- **轉調限制**：純律相鄰音程不均勻，僅在特定調性成立，換調時易走音。
      `,
      worksheet: {
        title: "學習單：純律大三度與 4:5:6 和聲探索",
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
畢氏律和純律在實際演奏時，都有嚴重的「轉調」問題：因為相鄰半音的間距不完全相同，只要升 Key 降 Key 換個調彈，音階比例就跑掉走音了。
要讓音樂可以在任何調性自由演奏，唯一條件就是：
**「任兩個相鄰音的頻率比，必須完全相同！」**
      `,
      mathModel: `
**一、 相鄰音公比推導（連乘約分）**

若任兩個相鄰半音的頻率比都固定為 $x$：
$$
\\frac{C^\\sharp}{C} = \\frac{D}{C^\\sharp} = \\frac{D^\\sharp}{D} = \\dots = \\frac{\\text{高音}C}{B} = x
$$

將這 12 個相鄰比值連乘，中間音符分子分母對角約分消去，只剩下頭尾的高八度比值：
$$
x^{12} = \\frac{\\text{高音}C}{C} = 2 \\implies x = \\sqrt[12]{2} = 2^{\\frac{1}{12}} \\approx 1.059463
$$
每升高一個半音，頻率就乘上 $2^{1/12} \\approx 1.059463$。這就是**「十二平均律」**。

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
- **往右一格（升高一個半音）**：其實就是 $\\times 2^{\\frac{1}{12}}$（指數自變數 $+1$）。
- **往左一格（降低一個半音）**：其實就是 $\\div 2^{\\frac{1}{12}}$（指數自變數 $-1$）。

**常用音名半音坐標（依 C, D, E, F, G, A, B 排序）**：
- $C_4 = f(-9) \\approx 261.63\\text{Hz}$（中央 C）
- $D_4 = f(-7) \\approx 293.66\\text{Hz}$
- $E_4 = f(-5) \\approx 329.63\\text{Hz}$
- $F_4 = f(-4) \\approx 349.23\\text{Hz}$（E 到 F 只有 1 個半音，無黑鍵）
- $G_4 = f(-2) \\approx 392.00\\text{Hz}$
- $A_4 = f(0) = 440.00\\text{Hz}$（國際標準調音原點）
- $B_4 = f(2) \\approx 493.88\\text{Hz}$
- $C_5 = f(3) \\approx 523.25\\text{Hz}$（高音 C，B 到 C 只有 1 個半音）
      `,
      tasks: [
        "1. 連乘約分計算：理解 12 個相鄰音分數相乘等於 2 的過程，掌握 x^12 = 2 的由來。",
        "2. 公比數值驗算：在 Desmos 算式欄輸入 2^(1/12)，計算數值約為 1.059463，確認等比數列公比。",
        "3. 建立公版發聲函數：輸入 f(x) = 440 * 2^(x/12)，以標準音 A440 為原點，建立發聲基準。",
        "4. 定義常用音名變數：依序輸入 C = f(-9), D = f(-7), E = f(-5), F = f(-4), G = f(-2), A = f(0), B = f(2)，確認 E-F 與 B-C 的 1 半音步長。",
        "5. 八度與純五度播放：計算 2^(7/12) 確認五度的數值妥協，並播放 tone([C, f(3)]) 聆聽兩倍八度音程。"
      ],
      formula: `// 1. 全學期公版發聲基準函數 (以國際標準音 A4 = 440Hz 為原點)\nf(x) = 440 \\cdot 2^{\\left(\\frac{x}{12}\\right)}\n\n// 2. 常用音名定義 (中央 C 主音區)\nC = f(-9)   // 中央 C (C4, 約 261.6Hz)\nD = f(-7)   // D4\nE = f(-5)   // E4\nF = f(-4)   // F4 (E-F 無黑鍵，只差 1 半音)\nG = f(-2)   // G4\nA = f(0)    // A4 (國際標準基準音 440Hz)\nB = f(2)    // B4\nC_5 = f(3)  // C5 (B-C 無黑鍵，只差 1 半音)\n\n// 3. 測試播放八度音程與純五度\n\\operatorname{tone}([C, C_5])   // 八度翻倍和諧\n\\operatorname{tone}([C, G])     // 十二平均律純五度 (2^(7/12))`,
      tips: `
- **連乘約分原理**：12 個相鄰分數連乘時，中間音符分子分母對角約分消去，只剩下 (高音C)/C = 2，因此 $x^{12} = 2 \\implies x = 2^{1/12}$。
- **琴鍵位移規律**：往右一格（高半音）就是 $\\times 2^{1/12}$（指數 $+1$）；往左一格（低半音）就是 $\\div 2^{1/12}$（指數 $-1$）。
- **公版發聲基準**：後續所有樂曲與和弦單元，皆以 $f(x) = 440 \\cdot 2^{x/12}$ 作為核心發聲函數。
      `,
      worksheet: {
        title: "學習單 2：十二平均律函數與琴鍵定位",
        questions: [
          {
            id: "q1_func_meaning",
            title: "連乘約分與 x^12 = 2 的推導由來",
            type: "text",
            prompt: "將 12 個相鄰半音的頻率比設為 $x$（即 $\\frac{C^\\sharp}{C} = \\frac{D}{C^\\sharp} = \\dots = \\frac{\\text{高音}C}{B} = x$）。\n請說明：\n1. 為什麼把這 12 個分數全部乘在一起時，右邊剛好會等於 $\\frac{\\text{高音}C}{C} = 2$？\n2. 為什麼等式左邊會變成 $x^{12}$，進而推導出公比 $x = 2^{1/12}$？",
            placeholder: "請簡述：1. 分數連乘時分子分母有何約分規律？2. 等式左邊為什麼是 x^12？",
            solution: "1. 將 12 個相鄰音分數連乘時，每個中間音同時出現在前一項分子與後一項分母，形成連續約分，中間音符全數消去，僅剩頭尾的 $\\frac{\\text{高音}C}{C} = \\frac{2}{1} = 2$。\n2. 由於 12 個比值皆等於 $x$，相乘得 $x^{12}$。因此方程式為 $x^{12} = 2$，兩邊開 12 次方根得 $x = 2^{1/12} \\approx 1.059463$。",
            formatAnswer: (ans) => `約分推導意涵：\n• 學生回答：${ans}\n• 核心解析：12 個相鄰音分數連乘產生對角約分，中間音符消去，留下頭尾八度比 (高音C)/C = 2；左式 12 個 x 連乘得 x^12 = 2，求得公比 x = 2^(1/12) ≈ 1.05946。`
          },
          {
            id: "q2_find_csharp",
            title: "音名坐標定位實戰：升 Do (C♯4)",
            type: "text",
            prompt: "在標準鋼琴鍵盤上，中央 C 的右側緊挨著黑鍵「升 Do（$C^\\sharp_4$）」。若以 $A_4 = 440\\text{Hz} = f(0)$ 為原點，請寫出：\n1. 升 Do 在公版函數中的自變數坐標 $x$ 應為多少？即 $C^\\sharp_4 = f(?)$？\n2. 它是如何從中央 C（$f(-9)$）推算出來的？",
            placeholder: "請填入答案與推導理由，格式範例：f(?)，因為從中央 C 往...",
            expected: "-8 | f(-8) | 1 | f(1)",
            solution: "1. 升 Do 的坐標為 $C^\\sharp_4 = f(-8)$。\n2. 推算方式：中央 C 為 $f(-9)$，升 Do 為其右側黑鍵，升高 1 個半音（往右 1 格），故為 $-9 + 1 = -8$，即 $f(-8)$。頻率約為 $440 \\cdot 2^{-8/12} \\approx 277.18\\text{Hz}$。",
            formatAnswer: (ans) => `升 Do 半音坐標推導：\n• 學生回答：${ans}\n• 正確答案：C#4 = f(-8) ≈ 277.18 Hz。從中央 C f(-9) 向上移動 1 個半音（-9 + 1 = -8）。`
          },
          {
            id: "q3_find_re_octave",
            title: "音名坐標定位實戰：高八度 Re (D5)",
            type: "text",
            prompt: "在演奏旋律時，若需要用到高音區的「高八度 Re（$D_5$）」。若已知中央 C 旁邊的標準 Re 為 $D_4 = f(-7)$：\n1. 請寫出高八度 Re 在公版函數中的自變數坐標，即 $D_5 = f(?)$？\n2. 它的頻率剛好是 $D_4$ 的幾倍？在數學指數律上如何體現？",
            placeholder: "請填入坐標與倍數，格式範例：f(?)，頻率剛好是幾倍...",
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
有了定義好的音名變數之後，我們就能把簡譜轉換成電腦看得懂的列表，讓電腦自己唱出一整首歌。
以《小星星》為例：
- 簡譜：1 1 5 5 6 6 5 — 4 4 3 3 2 2 1 —
- 音名序列：C C G G A A G 0 F F E E D D C 0
其中的「0」代表休止符（發聲體不振動，呈現無聲停頓）。
把整首曲子寫成陣列列表 $L$，配合時間滑桿 $t$ 與 $\\operatorname{tone}(L[t])$，電腦就能像唱針一樣依序自動演奏出旋律！
      `,
      mathModel: `
**一、 C 大調音名定義（資料夾一）**：
在 Desmos 範本第 1 個資料夾【C大調音符】中，以中央 C 為基準原點：
$$f(x) = 263 \\cdot 2^{\\frac{x}{12}}$$
$$C = f(0), \\; D = f(2), \\; E = f(4), \\; F = f(5), \\; G = f(7), \\; A = f(9), \\; B = f(11)$$

---

**二、 小星星第一版本（資料夾二）**：
$$L = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, \\dots]$$
$$\\operatorname{tone}(L[t]), \\quad t = 0$$

- **全曲 42 拍陣列**：三大句，每句 14 拍旋律 + 2 拍換氣休止。
- **休止符 $0$ 的物理意義**：數字 $0$ 代表頻率為 $0\\text{Hz}$（發聲體完全靜止無振動），呈現乾淨的無聲停頓。
- **時間軸滑桿 $t$**：設定步長為 1，從 0 開始逐拍讀取陣列元素發聲（$t=0$ 讀取為靜音預備拍）。

---

**三、 課堂聽感觀察（預告第四章節奏篇）**：
播放第一版本時，你會發現一個有趣的現象：**連續兩個相同的音（如 $C\\;C$ 或 $G\\;G$）波形黏在一起，聽起來像一個長音**。
這是因為聲波沒有被中斷。如何讓音符粒粒分明？手動塞一堆 0 太過繁瑣，在第四章我們將引入數學上的「分類討論函數與時值遮罩」，優雅解決這個問題！
      `,
      tasks: [
        "1. 開啟範本：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【C大調音符】，確認 C 到 B 各音變數與時間滑桿 t=0。",
        "2. 建立旋律陣列：展開第 2 個資料夾【小星星第一版本】，觀察《小星星》42 拍音名陣列 L，注意換氣停頓處填入 0。",
        "3. 時間滑桿唱針：設定時間滑桿 t 範圍為 0 到 42、步長 1，按下播放鍵 ⏵ 聆聽旋律依序演奏。",
        "4. 連續音聽感比對：仔細聆聽連續播放相同音符（如 C C 或 G G）時的連音聽感，思考如何讓音符邊界更加清晰分明。"
      ],
      formula: `// 📁 1. C 大調音名定義 (基準原點 C = 263Hz)\nf(x) = 263 \\cdot 2^{\\left(\\frac{x}{12}\\right)}\nC = f(0); D = f(2); E = f(4); F = f(5); G = f(7); A = f(9); B = f(11)\nt = 0\n\n// 📁 2. 小星星第一版本 (42 拍完整旋律陣列，0 為休止符)\nL = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, G, G, F, F, E, E, D, 0, G, G, F, F, E, E, D, 0, C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0]\n\n// 循序發聲\n\\operatorname{tone}(L[t])`,
      tips: `
- **Desmos 報錯排坑三部曲**（算式旁出現黃色驚嘆號）：
  1. 陣列 L 還沒定義。
  2. 時間滑桿 t 還沒定義。
  3. 陣列 L 裡面有打錯的音名，或是兩個逗號黏在一起（如 ,,）。
- **沒聲音檢查**：確認左上角喇叭與算式左側音符圖標已點亮；時間滑桿 t 範圍（樂譜有 42 顆音，範圍就要設為 0 到 42）。
- **播放速度調整**：點時間滑桿 t 左側的設定按鈕，可切換 0.5x、1x、2x 等播放速度。
      `,
      worksheet: {
        title: "學習單：簡譜轉譯與列表演奏原理",
        questions: [
          {
            id: "q1_score_to_array",
            title: "簡譜轉譯音名陣列實戰",
            type: "text",
            prompt: "閱讀《小星星》前段簡譜：`1 1 5 5 | 6 6 5 -`。\n若在 Desmos 中要將這 8 拍寫成音名陣列，其中兩拍的長音以「音符 + 休止符 0」換氣留白：\n請寫出這段樂譜對應的 Desmos 陣列（格式如 `[C, C, ...]`）：",
            placeholder: "請填入中括號陣列格式，例如：[C, D, E, ...]",
            expected: "[C, C, G, G, A, A, G, 0] | [C,C,G,G,A,A,G,0] | C, C, G, G, A, A, G, 0 | C,C,G,G,A,A,G,0",
            solution: "在 C 大調中：1=C、5=G、6=A。兩拍的長音 5- 記為「音符 G 加上一拍休止符 0」換氣，因此陣列為 `[C, C, G, G, A, A, G, 0]`。",
            formatAnswer: (ans) => `簡譜轉譯陣列：\n• 學生答案：${ans}\n• 標準陣列：[C, C, G, G, A, A, G, 0]（長音以音符加 0 換氣留白）`
          },
          {
            id: "q2_tone_l_t_reflection",
            title: "第一版本播放觀察與同音黏連現象",
            type: "textarea",
            prompt: "在 Desmos 播放小星星第一版本 `tone(L[t])` 時：\n1. 時間滑桿 $t$ 在這個算式中扮演了什麼角色？\n2. 連續播放兩個相同的音（例如 1 1 或 5 5）時，聽感上有什麼特點？為什麼？",
            placeholder: "請說明：1. 滑桿 t 的唱針角色；2. 連續播放相同音符時聽到的連音現象...",
            solution: "1. 時間滑桿 $t$ 的角色：$t$ 就像唱盤唱針（索引指針），隨時間遞增依序取出列表 $L[t]$ 中對應拍點的頻率發聲。\n2. 同音黏連現象：連續播放相同音符時，因為頻率相同且波形連續不斷，人耳容易聽成一個拖長的單音，不易分辨個別拍點，這正是第四章將用時值遮罩進一步解決的問題。",
            formatAnswer: (ans) => `播放觀察與聽感分析：\n${ans}\n\n（核心解析：時間滑桿 t 扮演唱針角色依序讀取音符；連續同音因波形未中斷而產生黏連，為第四章時值遮罩留下伏筆。）`
          }
        ]
      }
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
如果整首歌都用 C, D, E 這些字母寫，想要換調（升降 Key）就得把每個音重新改過，超級麻煩。
但如果我們把音符改記成『離中央 C 幾個半音』的數字陣列 $S$：
中央 C 是 0，D 是 2，E 是 4，F 是 5，G 是 7，A 是 9，B 是 11。
在 Desmos 裡，整個陣列可以直接丟進指數運算：$F = 261.63 \\cdot 2^{S/12}$。
想升降 Key？只要加一個滑桿 $k$：$F = 261.63 \\cdot 2^{(S+k)/12}$，一行算式就能全曲移調！
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
      formula: `// 1. 半音位移陣列 S (以中央 C 為 0，0 為休止符)\nS = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, 7, 7, 5, 5, 4, 4, 2, 0, 7, 7, 5, 5, 4, 4, 2, 0, 0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0]\n\n// 2. 移調滑桿 k (k=0 原調，k>0 升半音，k<0 降半音)\nk = 0\nf_0 = 261.63\nF = f_0 \\cdot 2^{\\frac{S + k}{12}}\n\n// 3. 循序播放\nt = 0\n\\operatorname{tone}(F[t])`,
      tips: `
- **陣列廣播運算**：在數學與程式中，向量各元素同時進行指數運算稱為廣播（Broadcasting）。向量中每個元素加上 k，相對音程不變，達成整體移調。
- **平移幾何意義**：滑桿 k 的作用本質上對應一維坐標平移。
      `,
      worksheet: {
        title: "學習單 2：歌曲移調與半音平移計算",
        questions: [
          {
            id: "q4_jian_ao",
            title: "超高音歌曲降 Key 之指數平移計算",
            type: "text",
            prompt: "李佳薇的《煎熬》副歌第一句「心一跳」飆到超高音：$f(20), f(23), f(21)$。\n如果去 KTV 唱不上去想要【降兩個半音】，這三個音會變成哪三個函數？\n如果像奕成老師一樣要【降一整個八度】才唱得上去，又會變成什麼？請寫出運算式與理由。（註：我知道有物理老師高中是吉他社社長，可以考慮問問看他能不能唱原 Key）",
            placeholder: "請填寫三個函數，格式範例：f(?), f(?), f(?)",
            expected: "f(18), f(21), f(19) | f(18),f(21),f(19) | 18, 21, 19 | 18,21,19",
            solution: "1. 降兩個半音就是把括號內的指數減 2：\n• $f(20 - 2) = f(18)$\n• $f(23 - 2) = f(21)$\n• $f(21 - 2) = f(19)$\n\n2. 若想降一整個八度，一個八度有 12 個半音，自變數直接減 12：\n• $f(20 - 12) = f(8)$\n• $f(23 - 12) = f(11)$\n• $f(21 - 12) = f(9)$",
            formatAnswer: (ans) => `1. 降兩個半音的計算：\n   在十二平均律指數函數中，每降一個半音自變數減 1，降兩個半音即整體減 2：\n   • 第一音：f(20 - 2) = f(18)\n   • 第二音：f(23 - 2) = f(21)\n   • 第三音：f(21 - 2) = f(19)\n   學生填答：${ans}\n   答：降兩個半音後分別為 f(18), f(21), f(19)。\n\n2. 降一整個八度的計算：\n   一個完全八度包含 12 個半音，降八度代表指數平移減 12：\n   • f(20 - 12) = f(8)\n   • f(23 - 12) = f(11)\n   • f(21 - 12) = f(9)\n   答：降一整個八度後分別為 f(8), f(11), f(9)。`
          },
          {
            id: "q5_c_to_d",
            title: "C 大調整體升兩個半音之調性與音階轉變",
            type: "text",
            prompt: "若有一組 C 大調音階：$[C, D, E, F, G, A, B, C]$，在 Desmos 中將半音向量整體【升兩個半音】（$k = +2$）：\n1. 請問這個音階會轉成什麼調？各音符會變成什麼？\n2. 在數學上是利用什麼運算實現全曲移調？",
            placeholder: "格式範例：轉為某大調，音符序列為...，利用...運算實現全曲移調",
            solution: "整體升高兩個半音（一個全音）後，調性轉為【D 大調】。\n音階轉變為：$D, E, F^\\#, G, A, B, C^\\#, D$（五線譜上 F 與 C 皆需升半音）。在 Desmos 中，透過向量運算 $F = f_0 \\cdot 2^{(S+2)/12}$，即可實現全曲移調。",
            formatAnswer: (ans) => `1. 調性轉變結果：C 升高兩個半音（一個全音）變為 D，因此整體轉為【D 大調】。\n2. 各音符變化：D, E, F#, G, A, B, C#, D（注意五線譜上 F 與 C 均帶有升記號）。\n3. 數學向量廣播原理：在 Desmos 中設定向量運算 F = f_0 · 2^((S + k) / 12)，設定平移滑桿 k = +2。利用陣列廣播特性，向量中所有元素同時平移，相對音程距離保持不變，達成全曲移調。\n學生作答說明：${ans}`
          }
        ]
      }
    },

// ==========================================
    // 四、節奏與動態
    // ==========================================
    // ==========================================
    // 四、節奏與動態
    // ==========================================
    "4-1": {
      id: "4-1",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "週期函數與構造斷音",
      conceptTitle: "週期函數與構造斷音",
      modelTitle: "如何構造斷音",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/l8nygbjy8e",
      motivation: `
延續 3-1 小星星第一版本的同音黏連問題：如果我們想讓每個音的前 $\\dfrac{1}{6}$（約 $0.167$ 拍的時間）斷音靜音、後 $\\dfrac{5}{6}$ 正常發聲，該怎麼做？

若採用手工暴力法，將每一拍切成 6 格 \`[0, C, C, C, C, C]\` 並開 6 倍速播放，42 拍的樂譜陣列會暴增為 252 個元素，輸入極為繁瑣且容易錯位。

更有效率的做法是利用數學工具：讓時間滑桿 $t$ 正常推進，藉由**「週期函數」**與**「分類討論函數」**在每一拍內部自動產生開關控制。
      `,
      mathModel: `
**一、 正弦波與水平門檻線（圖形演示）**：

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/ymeb0xkzsz?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形線條與觀察重點**：
- 🔴 **紅色曲線**：$y = \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right)$（正弦波形）。
- 🔵 **藍色水平線**：$y = \\frac{\\sqrt{3}}{2}$（門檻參考線）。
- **標記點觀察**：
  - 點 $\\left(0, \\frac{\\sqrt{3}}{2}\\right)$ 與 $\\left(1, \\frac{\\sqrt{3}}{2}\\right)$（以及第 2 拍的 $\\left(2, \\frac{\\sqrt{3}}{2}\\right)$）：橫坐標每相差 $1$ 就回到完全相同的起伏位置，清楚顯示波形的**週期恰好為 1**（對應 1 拍的時間長度）。
  - 點 $\\left(0, \\frac{\\sqrt{3}}{2}\\right)$ 到 $\\left(\\frac{1}{6}, \\frac{\\sqrt{3}}{2}\\right)$（圖中標記約 $0.167$）：紅線高於藍線的這段區間，橫向長度剛好是 $\\frac{1}{6}$ 拍（約 $0.167$ 拍，剛好對應我們前言想要的 1/6 拍靜音長度）。

---

**二、 利用分類討論函數做成斷音開關**：
還記得高一絕對值的代數定義嗎？我們在其中就用到了**分類討論**：
$$|x| = \\begin{cases}
\\ \\ \\ x, & \\text{在 } x \\ge 0 \\text{ 時} \\\\
-x, & \\text{在 } x < 0 \\text{ 時}
\\end{cases}$$

現在我們想讓正弦波大於 $\\frac{\\sqrt{3}}{2}$ 的地方不發出聲音（數值設為 0 靜音），其他地方正常發聲（數值設為 1），在數學上也是同樣的分類討論：
$$y = \\begin{cases}
0, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2} \\text{ 時（靜音）} \\\\
1, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2} \\text{ 時（發聲）}
\\end{cases}$$

但在 Desmos 裡面因為不能輸入上下兩行大括號，所以寫法改用單行大括號：
$$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}$$
*(在 Desmos 中也可以簡記為省略第二段條件的寫法：$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; 1\\right\\}$)*

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/exrboynk81?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形線條與觀察重點**：
- 🟢 **綠色方波**：分類討論開關。當紅色正弦波高於藍色門檻時，數值降為 $0$（靜音）；其餘時間為 $1$（發聲）。
- 觀察畫面中在每拍開頭切出的 0 值區間，這就是每拍開頭自動靜音六分之一拍的斷音效果！

---

**三、 正弦波調整斷音時間的限制**：
在上述正弦波中，高於 $\\frac{\\sqrt{3}}{2}$ 的區間剛好是每拍的六分之一（約 $0.167$ 拍）。
如果我們想調整斷音比例，例如改為靜音 $20\\%$（$0.2$ 拍）或 $15\\%$（$0.15$ 拍）：
- 因為正弦函數是彎曲的曲線，若要改變斷音長度，就必須重新計算對應的角度、水平線高度與平移量。
- 這種依賴角度換算的計算方式在實務調整時相當繁瑣。

---

**四、 高斯取整與小數鋸齒波圖形**：

**1. 認識高斯取整函數 $[x] = \\operatorname{floor}(x)$**：
高斯取整符號 $[x]$（在 Desmos 中寫作 \`floor(x)\`）代表「不大於 $x$ 的最大整數」，也就是將數字小數點直接捨去、只保留整數部分：
- 例如：$[1.2] = 1, \\; [1.8] = 1, \\; [2.0] = 2, \\; [2.5] = 2$。

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/2fev0huixj?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：呈現一段一段水平跳躍的「整數階梯」。在音樂中，它能告訴電腦當前時間正處於第幾拍（整數拍）。

---

**2. 原數減去整數部分：得到拍內小數鋸齒波 $y = x - [x]$**：
如果我們用原來的連續時間 $x$，減去只取整數的 $[x]$：
$$y = x - \\operatorname{floor}(x)$$
留下來的就剛好是「小數點後面的部分」：
- 當 $x = 1.0$ 時，$1.0 - 1 = 0$。
- 當 $x = 1.2$ 時，$1.2 - 1 = 0.2$。
- 當 $x = 1.9$ 時，$1.9 - 1 = 0.9$。
- 一旦跨入下一拍 $x = 2.0$，整數變成 2，相減又瞬間歸零（$2.0 - 2 = 0$）重新爬升！

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/dm2eoyoon8?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：
- 週期恰好為 1（每經過 1 拍就重複循環一次）。
- 在每一拍內是一條由 0 均勻爬升到 1 的斜直線，這是一排整齊的**週期鋸齒波**。

---

**3. 用小數鋸齒波構造斷音開關（隨心所欲調整時間）**：
因為這條斜直線的高度直接等於拍內的時間進度比例（$0 \\sim 1$），想調整斷音長度時完全不需要計算角度。
如果想靜音前 $20\\%$（$0.2$ 拍），在數學上的分類討論寫法為：
$$q = \\begin{cases}
0, & \\text{在 } t - [t] < 0.2 \\text{ 時（靜音）} \\\\
1, & \\text{在 } t - [t] \\ge 0.2 \\text{ 時（發聲）}
\\end{cases}$$

但在 Desmos 裡面因為不能寫兩行，所以寫法為：
$$q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; t - \\operatorname{floor}(t) \\ge 0.2: 1\\right\\}$$
*(在 Desmos 中也可以簡記為省略第二段條件的寫法：$q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; 1\\right\\}$)*

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/mq7ka30chq?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：
- 鋸齒波搭配綠色方波開關，在每拍開頭小於 $0.2$ 時開關為 0（靜音），其餘時間為 1（發聲）。
- 若想調整靜音時間，完全不需角度換算，想要靜音 15% 就直接填 \`< 0.15\`，想要靜音 30% 就填 \`< 0.3\`，非常直觀且易於調整！

---

**五、 延伸思考與反三角函數簡介**：
1. **其他週期函數的可能**：
   除了 $x - [x]$ 之外，數學上還有許多週期函數。例如右上角範本中第二個資料夾【tan圖形】，展示了利用正切函數 $y = \\tan\\left(\\pi x - \\frac{\\pi}{2}\\right)$ 與水平門檻線 $y = -1$ 進行分類討論，同樣也能達成週期開關的效果！
2. **簡要補充：如何用正弦波精確改斷音時間？（反三角函數對應關係）**：
   如果想要使用正弦波來調整任意斷音時間，就需要用到**反三角函數**（如 $\\arcsin$）：
   - **一般三角函數**：輸入「角度」 $\\to$ 輸出「函數值」（例如 $\\sin(30^\\circ) = 0.5$）。
   - **反三角函數**：輸入「函數值」 $\\to$ 查出「角度」（例如 $\\arcsin(0.5) = 30^\\circ$ 或弧度 $\\frac{\\pi}{6}$）。
   Desmos 內建有 \`arcsin\` 運算。若要用正弦波精準控制比例，可利用反三角函數由目標時間比例反推所需的門檻值與角度。
   雖然正弦波透過反三角函數也能達成目的，但比起 $x - [x]$ 直接填寫小數的方式，運算繁複許多。

---

**六、 本單元核心架構總結**：
本單元整合了以下數學工具來實現音樂的斷音控制：
1. **拍內進度基準**：以週期函數 $t - \\operatorname{floor}(t)$ 提供每一拍內 $0$ 到 $1$ 的線性進度。
2. **斷音開關**：以分類討論函數 $q = \\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\}$ 決定各時間點的發聲狀態（0 為靜音，1 為發聲）。
3. **樂譜發聲結合**：在 Desmos 發聲函式中加入開關變數 $\\operatorname{tone}(L[t], q)$。當滑桿 $t$ 播放時，每個音符在開頭 $0.2$ 拍自動靜音，解決同音黏連問題。
      `,
      tasks: [
        "1. 開啟右上角 Desmos 範本 (l8nygbjy8e)：觀察 y = sin(2*pi*x + pi/3) 與 y = sqrt(3)/2 的交點，標記 (0, sqrt(3)/2) 與 (1, sqrt(3)/2)，確認週期為 1。",
        "2. 觀察分類討論開關：檢視 y = {sin(2*pi*x + pi/3) >= sqrt(3)/2: 0, sin(2*pi*x + pi/3) < sqrt(3)/2: 1} 如何將高於門檻的區域切為 0（靜音），其餘區域切為 1（發聲）。",
        "3. 繪製高斯取整與鋸齒波：輸入 y = floor(x) 觀察整數階梯，再輸入 y = x - floor(x) 觀察每拍從 0 均勻上升至 1 的直線特性。",
        "4. 設定斷音開關：輸入 q = {t - floor(t) < 0.2: 0, 1}，並體會將 0.2 改為 0.15 或 0.3 時數值直接對應時間比例的便利性。",
        "5. 小星星第三版演奏：將 q 開關乘入發聲算式 tone(L[t], q)，滑桿 t 以 0.1x 播放，驗證前 0.2 拍自動斷音效果。"
      ],
      formula: `// 1. 正弦波與水平門檻線 (Desmos 範本 l8nygbjy8e)
y_1 = \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right)
y_2 = \\frac{\\sqrt{3}}{2}
y_3 = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}

// 2. 拍內線性進度 (高斯鋸齒波)
y_4 = x - \\operatorname{floor}(x)

// 3. 構造斷音開關 q (前 0.2 拍靜音)
q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\}

// 4. 小星星自動斷音發聲
\\operatorname{tone}(L[t], q)`,
      tips: `
- **Desmos 分類討論格式**：語法為 \`{條件: 取值1, 取值2}\`，當符合條件時輸出第一個值，不符合時輸出第二個值。
- **斷音比例調整**：在高斯鋸齒波開關中，調整小數數值即可直接改變斷音比例（例如 0.2 為靜音 20%，0.15 為靜音 15%），無需進行角度換算。
- **反三角函數補充**：若在 Desmos 中欲由比值查角度，可使用內建函式 \`arcsin(y)\`。
      `,
      worksheet: {
        title: "學習單：週期函數、分類討論與構造斷音實作",
        questions: [
          {
            id: "q1_manual_vs_mask",
            title: "手工切分暴力法 vs 週期函數斷音開關之優劣比對",
            type: "textarea",
            prompt: "若想讓每個音的前 1/6 斷音靜音：\n有人提議將每拍切成 6 格 \`[0, C, C, C, C, C]\` 並開 6 倍速播放。比起這種手工暴力法，利用週期分類討論函數 $q$ 開關有什麼優勢？",
            placeholder: "請從樂譜長度、輸入效率與後續調整彈性等方面說明...",
            solution: "1. 樂譜簡潔：旋律陣列 L 只需記錄原本的核心音名（例如小星星只需 42 個元素），不需將陣列擴充 6 倍（252 個元素），降低輸入負擔與出錯機率。\n2. 調整彈性：若要修改靜音時間，只需調整開關中的門檻數值（例如 0.2 改為 0.15），全曲所有音符的斷音長度即同步更新，無需逐一改動樂譜陣列。",
            formatAnswer: (ans) => `手工切分 vs 數學開關比對：\n${ans}\n\n（核心解析：手工切分使陣列暴增 5 倍且容易錯位；數學開關維持樂譜簡潔，且修改單一門檻即可全曲同步調整斷音比例。）`
          },
          {
            id: "q2_gauss_vs_sine",
            title: "正弦波門檻截波 vs 高斯鋸齒波 x - [x] 之幾何與操作比對",
            type: "textarea",
            prompt: "在課堂中我們探討了兩種產生斷音的方法：\n1. 正弦波門檻截波：$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}$。\n2. 高斯鋸齒波開關：$y = \\{x - [x] \\le 0.2: 0, 1\\}$。\n請說明：為什麼在實務上若想自由調整斷音比例（例如 20% 或 15%），使用 $x - [x]$ 會比正弦波更為直接方便？",
            placeholder: "請從正弦波調整時需計算角度/門檻，與高斯鋸齒波直接對應小數進度的角度說明...",
            solution: "1. 正弦波是彎曲曲線：若要改變斷音時長，必須重新計算角度、平移量或使用反三角函數（arcsin）求出對應的水平門檻值，計算過程較為繁瑣。\n2. 高斯鋸齒波是一次線性函數：在每一拍內從 0 均勻上升到 1，數值直接等於拍內的時間比例。想要靜音 20% 就直接設門檻為 0.2，想要 15% 就直接設 0.15，不需任何角度換算即可精準設定。",
            formatAnswer: (ans) => `正弦波 vs 高斯鋸齒波比對：\n${ans}\n\n（核心解析：正弦波調整斷音需涉及角度與反三角函數換算；高斯鋸齒波每拍均勻上升，數值直觀等於時間比例，可直接填寫小數門檻。）`
          }
        ]
      }
    },
    "4-2": {
      id: "4-2",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "音量控制與指數衰減（模擬鋼琴與打擊樂）",
      conceptTitle: "樂器的自然發聲與音量衰減",
      modelTitle: "指數衰減音量模型",
      status: "ready",
      desmosUrl: null,
      motivation: `
在 4-1 中，我們用分段開關 $q$ 解決了音符黏在一起的斷音問題。
但每個音在發聲時，音量始終是一條水平直線（只有全開 1 或全關 0），聽起來像電子琴或機器人。

真實樂器（如鋼琴、木琴或吉他撥弦）在被敲擊的瞬間能量最大、音量最高；隨後能量會自然消散（衰減）。
還記得 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 嗎？第二個位置本來就是控制音量的！
既然我們已經有了拍內計時器 $u = t - \\operatorname{floor}(t)$（每一拍從小數 0 跑到 1），只要把第二個位置換成隨時間下滑的函數，就能模擬出真實樂器的自然餘音！
      `,
      mathModel: `
**一、 一次函數線性漸弱（直線溜滑梯）**：
拍內小數進度 $u = t - \\operatorname{floor}(t) \\in [0, 1)$。
若想讓每一拍從最大音量 $1$ 等速掉到 $0.5$：
$$g(t) = \\frac{\\operatorname{floor}(t) - t}{2} + 1 = 1 - \\frac{t - \\operatorname{floor}(t)}{2}$$
- **拍頭** $u = 0 \\implies g(t) = 1$（最大敲擊聲）。
- **拍尾** $u = 1 \\implies g(t) = 0.5$（音量降半）。

**二、 自然等比衰減（指數衰減模型）**：
在真實物理世界中，能量損耗通常是「等比衰減」（每個固定時間間隔乘上固定比例）：
$$E(t) = (0.5)^{k(t - \\operatorname{floor}(t))}$$
透過**阻尼衰減係數滑桿 $k$** 控制聲音消散的速度：
- **快速衰減（如木琴、撥弦）**：$k = 8 \\sim 12$，音量在拍頭敲擊後急遽掉落，聲音短促清脆。
- **緩慢衰減（如鋼琴）**：$k = 2 \\sim 3$，餘音持續共鳴較久，聽起來厚實悠長。

**三、 拍尾 15% 靜音防呆**：
結合 4-1 的分段條件，在拍尾強制歸零，避免與下一拍重疊產生雜音：
$$E(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, \\; (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}$$
      `,
      tasks: [
        "1. 繪製線性衰減：在 Desmos 輸入 g(x) = (floor(x) - x) / 2 + 1，觀察每一拍音量線性下滑的鋸齒圖形。",
        "2. 建立指數衰減滑桿：輸入 E(t) = (0.5)^(k * (t - floor(t)))，建立阻尼係數 k 滑桿（範圍 1 到 15，步長 0.5）。",
        "3. 聲音特徵對比實驗：分別聆聽固定音量 tone(L[t]) 與動態衰減 tone(L[t], E(t))，比較 k=10（短促木琴）與 k=2.5（悠長鋼琴）的聽感差異。"
      ],
      formula: `// 1. 拍內小數進度 (0 跑到 1)\nu = t - \\operatorname{floor}(t)\n\n// 2. 一次線性漸弱 (音量從 1 掉到 0.5)\ng(t) = \\frac{\\operatorname{floor}(t) - t}{2} + 1\n\n// 3. 指數等比衰減 (帶阻尼滑桿 k 與拍尾 15% 靜音防呆)\nk = 3.5\nE(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}\n\n// 4. 發聲對比：固定音量 vs 指數衰減音量\n\\operatorname{tone}(L[t])        // 機器人固定音量\n\\operatorname{tone}(L[t], E(t))  // 帶自然餘音之樂器發聲`,
      tips: `
- **阻尼係數 $k$ 的幾何意義**：底數為 $0.5 < 1$ 時，次方的係數 $k$ 越大，曲線下墜越陡峭，聲音衰退越劇烈；$k$ 越小，曲線越平緩，餘音越悠長。
- **防爆音技巧**：加上 {t - floor(t) > 0.85: 0} 能在拍尾強制歸零，即使係數 $k$ 調得很小，也不會與下一拍的發聲音訊重疊干涉產生雜音。
      `,
      worksheet: {
        title: "學習單：樂器音量控制與指數衰減實驗",
        requireDesmosLink: true,
        questions: [
          {
            id: "q1_damping_k",
            title: "問題一：阻尼係數 k 與樂器聽感特性",
            type: "radio",
            prompt: "若想在 Desmos 中用指數衰減模型 $E(t) = (0.5)^{k(t - \\operatorname{floor}(t))}$ 模擬「聲音短促清脆的木琴或撥弦樂器（敲擊瞬間最大聲，隨後聲音極速消散）」，阻尼係數 $k$ 應該如何設定？",
            options: [
              "將 k 調大（例如 k = 10），讓指數曲線極速下墜",
              "將 k 調小（例如 k = 0.5），讓曲線保持平緩悠長",
              "將 k 設為 0，讓音量完全不衰減",
              "k 只會影響音高（頻率），與聲音餘音長短無關"
            ],
            solution: "因為底數為 $0.5$（小於 1），當指數上的阻尼係數 $k$ 越大，次方成長越快，數值衰減就越劇烈、越陡峭。\n- $k = 10$：音量在拍頭敲擊瞬間迅速掉光，聽起來短促乾脆，正如木琴（Xylophone）或琴弦撥奏（Pizzicato）。\n- $k = 2.5$：衰減平緩，餘音繚繞，如平台鋼琴（Piano）。",
            formatAnswer: (ans) => `阻尼係數 k 聽感選擇：【${ans}】\n原理解析：底數為 0.5 時，k 越大衰減越快，適合模擬短促清脆的木琴；k 較小時衰減平緩，適合模擬餘音悠長的鋼琴。`
          },
          {
            id: "q2_decay_half",
            title: "問題二：阻尼係數與拍內音量半衰計算",
            type: "text",
            prompt: "考慮指數衰減算式 $E(u) = (0.5)^{k \\cdot u}$，其中 $u = t - \\operatorname{floor}(t)$ 代表拍內進度（$0 \\le u \\le 1$）。若設定阻尼係數 $k = 4$，請問當拍子進行到一半（即 $u = 0.5$）的瞬間，音量 $E(0.5)$ 會衰減為原本開頭（$u=0$ 時音量為 1）的幾分之幾？（請填小數或分數比值，如 0.25 或 1/4）：",
            placeholder: "請輸入小數或分數，範例：0.5 或 1/2",
            expected: "0.25 | 1/4",
            solution: "推導過程：\n當 $k = 4, u = 0.5$ 時，代入指數得：\n$$E(0.5) = (0.5)^{4 \\times 0.5} = (0.5)^2 = 0.25 = \\frac{1}{4}$$\n因此在該拍進行到一半時，音量已經劇烈衰減至原本的四分之一（$25\\%$）。",
            formatAnswer: (ans) => `半衰音量計算：${ans}（標準答案：0.25 或 1/4）\n推導說明：代入 E(0.5) = (0.5)^(4 × 0.5) = (0.5)^2 = 0.25 = 1/4，音量在半拍時已掉至 25%。`
          },
          {
            id: "q3_linear_vs_exp",
            title: "問題三：一次線性漸弱 vs 指數等比衰減之聽感觀察",
            type: "textarea",
            prompt: "在課堂實驗中，分別聆聽「一次函數線性漸弱 $g(u) = 1 - 0.5u$」與「指數等比衰減 $E(u) = (0.5)^{3u}$」，聽起來有什麼明顯的差別？哪一種聽起來更像真實樂器的敲擊感？為什麼？",
            placeholder: "請從聲音衰減的自然度、殘響走勢等面向分享你的操作觀察...",
            solution: "1. 一次函數線性漸弱：音量以固定斜率等速下降，聽起來較為生硬機械化，像手動把混音推桿等速拉下來。\n2. 指數等比衰減：敲擊瞬間能量迅速釋放下滑，但隨後衰減速率漸漸趨緩，留下一小段微弱的自然共鳴餘音，非常符合真實物理世界中空氣阻尼與琴弦振動的能量耗散模型，聽感上遠比直線漸弱更具真實樂器感。",
            formatAnswer: (ans) => `線性漸弱 vs 指數衰減聽感比較：\n${ans}\n\n（核心解析：線性漸弱等速下降較為生硬；指數衰減前期急墜、後期微弱共鳴，符合物理能量損耗，聽感最貼近真實鋼琴與敲擊樂器。）`
          }
        ]
      }
    },

    "4-3": {
      id: "4-3",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "8-bit 電玩音效與動態鼓組實驗室（選學）",
      conceptTitle: "合成音效的數學模型",
      modelTitle: "合成音效與打擊樂模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
有了拍內小數計時器 $u = t - \\operatorname{floor}(t)$，我們甚至能在 0.2 秒內玩出各種復古遊戲機音效：
- **大鼓（Kick）**：頻率在 0.1 秒內從高頻快速暴跌到 40Hz，加上快速音量衰減，就是震撼的重低音鼓點。
- **馬力歐跳躍**：頻率用二次拋物線 $400 + 800u^2$ 往上衝。
- **雷射槍**：頻率用指數等比急墜。
數學函數不只畫圖，還能直接當合成音效產生器！
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
吉他弦或小提琴弦兩端被緊緊固定住。當弦被撥動時，不是什麼波都能在上面活下來。
只有兩端剛好停在 0 的波，才能形成穩定的駐波。
在數學上，這要求 $\\sin(nx)$ 在兩端都是 0，所以 $n$ 必須是正整數（1, 2, 3...）。
這就是為什麼樂器發出來的泛音全都是整數倍！
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
      formula: `// 1. 兩端固定邊界點\n(0, 0), (\\pi, 0)\n\n// 2. 物理駐波方程式 (按時間 t 播放)\nn = 1                      // 諧波階數滑桿 (n = 1, 2, 3, 4...)\n\\omega = 6                // 振動角頻率\nt = 0\ny = \\sin(n \\cdot x) \\cdot \\cos(\\omega \\cdot t) \\{0 \\le x \\le \\pi\\}\n\n// 3. 諧波發聲比對 (基音 220Hz)\n\\operatorname{tone}(220 \\cdot n)`,
      tips: `
- **整數倍泛音觀察**：n=1 為基音（一個大波包）；n=2 正中間出現 1 個不動波節；n=3 內部出現 2 個波節。
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
為什麼同一首曲子，鋼琴彈跟長笛吹，耳朵一聽就知道不一樣？
因為樂器發出一個音時，不只有基音 $f_0$，還附帶了一整串整數倍的自然泛音（$2f_0, 3f_0, 4f_0...$）。
每種樂器分配給各階泛音的音量比例都不一樣——這就是樂器的「音色指紋」！
在 Desmos 裡，我們只要給泛音列不同的音量陣列，就能親手調出長笛或單簧管的聲音。
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
      formula: `// 1. 基音與 4 階自然泛音列 (等差數列)\nf_0 = 220\nF = [f_0, 2f_0, 3f_0, 4f_0]\n\n// 2. 泛音音量配比滑桿 (範圍 0 到 1)\nv_1 = 0.6   // 基音音量\nv_2 = 0.0   // 第二泛音\nv_3 = 0.35  // 第三泛音\nv_4 = 0.0   // 第四泛音\n\n// 3. 泛音合成發聲\n\\operatorname{tone}(F, [v_1, v_2, v_3, v_4])`,
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
手機喇叭那麼小，物理上根本播不出 100Hz 的重低音，那為什麼我們用手機聽音樂還能感覺到低音節奏？
這是大腦的奇妙錯覺：
如果耳機同時放 600Hz、800Hz、1000Hz 三個高頻音，大腦會自動找它們的最大公因數 $\\gcd(600, 800, 1000) = 200\\text{Hz}$，並在大腦裡自己「腦補」出一個 200Hz 的低音！
這個根本沒被播出來卻被聽到的音，就叫「幽靈基音」。
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
高中數學學的正弦波 $\\sin(x)$ 圓潤平滑。但只要把不同頻率與振幅的正弦波疊加起來，竟然能拼出稜角分明的幾何圖形！
- 奇數諧波照 $\\frac{1}{n}$ 疊加，圓弧慢慢被削平，最後變成剛硬的「方波」。
- 所有諧波一起來，正負交替，就拼出銳利的「鋸齒波」。
這就是偉大的傅立葉級數：任何週期波形，都能拆解成一堆簡單正弦波。
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
為什麼大三和弦聽起來明亮開朗，小三和弦聽起來就帶著一點憂鬱？
答案藏在半音間距裡：
- **大三和弦**：$[0, 4, 7]$，底層是大三度（4 個半音）。
- **小三和弦**：$[0, 3, 7]$，中間的音往下降了 1 個半音，變成小三度（3 個半音）。
只差這微小的 1 個半音，整個和弦的情緒色彩完全翻轉！
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
周杰倫、林俊傑很多流行歌的伴奏低音，從頭到尾其實只有 4 個音在無限循環（例如卡農進行：$C \\to G \\to A \\to F$）。
要讓電腦自動一直重複這 4 個音，用數學上的「同餘（mod）」最快：
隨時間 $t$ 一直往前跑，$\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1$ 就永遠在 1、2、3、4 之間打轉，自動為旋律鋪上源源不絕的低音節奏！
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
整首歌幾百拍，如果全塞在同一個列表裡，瀏覽器很容易卡頓掉幀。
聰明的做法是「大隊接力」：把樂曲切成幾段（$L_1, L_2, L_3$），每段配合時間差（offset）輪流上場：
第一棒跑完 48 拍，第二棒剛好從 $t-48$ 接著跑。
平時把算式資料夾收合起來，電腦跑起來順暢又乾淨。
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
一個三和弦一次按下去叫和聲，一個一個音快速依序彈出來就叫「琶音」。
如果我們把原本的旋律複製一份，往後挪動 0.25 拍、音量除以 2 疊在一起，耳朵立刻會聽見空間迴盪的立體回音（Delay）！
簡單的等比衰減與時間平移，就能讓單薄的電子音帶上現場演奏的空間感。
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
巴哈是音樂界的幾何大師。他寫的《螃蟹卡農》，譜面上正著彈是一首好聽的曲子，像螃蟹一樣倒著彈（水平翻轉）也是一首曲子；兩個人一個從頭彈、一個從尾巴彈，合在一起竟然完全不打架，和諧無比！
在陣列裡，這就是索引用 $N - t + 1$ 的水平鏡射。數學上的線對稱與對稱變換，在古典音樂裡被玩到了極致。
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
Desmos 其實有一個超酷的彩蛋功能：只要按下鍵盤的 \`Alt + T\`（Mac 是 \`Option + T\`），再按 \`H\`，它就能把畫布上的函數曲線直接「唱」出來！
Desmos 的聽圖音域鎖定在 $E_3 \\sim E_4$。我們把 Y 軸設成 0 到 12，剛好對應 12 個半音。
用階梯函數把簡譜畫成折線圖，不用寫發聲式，函數圖形自己就能發聲演奏！
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
電影《全面啟動》或《敦克爾克大行動》裡，常有一種讓人心跳加速的背景音：音階好像一直在往上爬，永遠爬不到頂！
這不是魔法，而是心理聲學上的錯覺：
好幾個相隔八度的音同時往上跑，但音量套上了「高斯常態分佈鐘形曲線」。
當音爬到最高時聲音自動悄悄變小消失，而底層早就由極小音量升起新的一棒接替，人耳的大腦就被騙過去了，以為音調一直在無限爬升。
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
電腦能不能自己寫歌？
如果讓電腦在所有音符裡隨機亂抽，保證刺耳難聽。
但如果候選池只給它「五聲音階」的 5 個音，因為避開了半音打架，隨機抽出來的 16 個音不管怎麼排，聽起來都有模有樣、自成一曲！
進一步還能用馬可夫鏈，給不同音符設定前進的機率，這就是演算法自動作曲的雛形。
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
結合全學期的成果，我們要在 Desmos 裡做出一款像節奏大師那樣的「下落式音遊」！
核心數學就在於「對數反函數」：
發聲時我們用指數 $f = 440 \\cdot 2^{x/12}$；
要畫出畫面時，我們就取反函數對數 $\\log_2$，把頻率還原成琴鍵的橫坐標 $X$！
縱坐標 $Y$ 配合時間滑桿等速往下掉。
看著音符像瀑布一樣落下，掉到琴鍵判定線的瞬間剛好發聲——數學、音樂與程式在這一刻完美結合！
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
