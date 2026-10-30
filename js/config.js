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
      units: ["5-1", "5-2", "5-3", "supp-relay"]
    },
    {
      id: "module-6",
      title: "六、視覺音遊與演算法",
      units: ["6-1", "6-2", "6-3", "6-4", "6-5"]
    }
  ],

  // 全課程 Desmos 範本總覽清單
  desmosTemplates: [
    {
      category: "一、單音與發聲",
      items: [
        {
          name: "tone函數",
          unitKey: "1-1",
          unitLabel: "1-1 聲音三要素與 Desmos 基礎發聲",
          desc: "tone(頻率, 音量) 基礎發聲語法與範例",
          url: "https://www.desmos.com/calculator/qc1oj3mnlb"
        },
        {
          name: "變數滑桿",
          unitKey: "1-1",
          unitLabel: "1-1 聲音三要素與 Desmos 基礎發聲",
          desc: "tone(a, b) 雙變數滑桿動態調音實驗",
          url: "https://www.desmos.com/calculator/nko2nfm41b"
        },
        {
          name: "[Copy of] 音調入門",
          unitKey: "1-2",
          unitLabel: "1-2 列表循序播放與音樂演奏原理",
          desc: "k = 440 與 tone([k, 2k]) 八度雙音同時發聲",
          url: "https://www.desmos.com/calculator/gkpqdobd4p"
        },
        {
          name: "列表",
          unitKey: "1-2",
          unitLabel: "1-2 列表循序播放與音樂演奏原理",
          desc: "列表同時發聲 vs tone(L[t]) 時間滑桿循序播放旋律",
          url: "https://www.desmos.com/calculator/gxgub5desf"
        }
      ]
    },
    {
      category: "二、音程與律學",
      items: [
        {
          name: "和諧的音",
          unitKey: "2-1",
          unitLabel: "2-1 雙音協和、拍頻盲測與行進波干涉",
          desc: "含三資料夾：1. 和諧音比例 a、2. 人耳聲音分辨度盲測 b、3. 行進波干涉圖",
          url: "https://www.desmos.com/calculator/qojryca0zr"
        },
        {
          name: "和諧的音（行進波干涉內嵌圖解）",
          unitKey: "2-1",
          unitLabel: "2-1 雙音協和、拍頻盲測與行進波干涉",
          desc: "兩道正弦行進波疊加產生相長與相消（拍頻包絡）視覺化",
          url: "https://www.desmos.com/calculator/j4sqzyfwfx"
        },
        {
          name: "五聲音階",
          unitKey: "2-2",
          unitLabel: "2-2 畢達哥拉斯五度相生律與五聲音階",
          desc: "畢氏五聲音階（1, 9/8, 81/64, 3/2, 27/16）與《滄海一聲笑》演奏",
          url: "https://www.desmos.com/calculator/kklcngvj8a"
        },
        {
          name: "畢氏12分律",
          unitKey: "2-3",
          unitLabel: "2-3 五度相生到十二律 ／ 補充 2 純律",
          desc: "五度相生十二律分數、畢氏音差驗算與純律整數比對照",
          url: "https://www.desmos.com/calculator/slaarufxib"
        }
      ]
    },
    {
      category: "三、樂譜與旋律",
      items: [
        {
          name: "小星星",
          unitKey: "3-1",
          unitLabel: "2-4 十二平均律 ／ 3-1 樂譜數據化與音名陣列編碼",
          desc: "十二平均律音名定義 f(x) = 263·2^(x/12) 與《小星星》三版本樂譜",
          url: "https://www.desmos.com/calculator/4actxqj5mj"
        },
        {
          name: "高斯函數與分類討論",
          unitKey: "3-2",
          unitLabel: "3-2 陣列向量化指數運算與全曲移調",
          desc: "半音位移陣列 S 直接代入 440·2^(S/12) 與高斯取整包絡函數",
          url: "https://www.desmos.com/calculator/a0nxj4issv"
        }
      ]
    },
    {
      category: "四、節奏與動態",
      items: [
        {
          name: "三角函數做斷音（範本一：三角週期開關）",
          unitKey: "4-2",
          unitLabel: "4-2 週期函數與構造斷音",
          desc: "利用正弦波特殊角門檻與正切函數構造週期斷音開關",
          url: "https://www.desmos.com/calculator/l8nygbjy8e"
        },
        {
          name: "floor函數做斷音（範本二：高斯鋸齒波開關）",
          unitKey: "4-2",
          unitLabel: "4-2 週期函數與構造斷音",
          desc: "利用高斯小數鋸齒波 t - floor(t) 構造任意比例斷音開關 q",
          url: "https://www.desmos.com/calculator/nvksl0vch6"
        },
        {
          name: "三角函數做斷音（步驟一：正弦波與門檻線圖解）",
          unitKey: "4-2",
          unitLabel: "4-2 週期函數與構造斷音",
          desc: "y = sin(2πx + π/3) 與門檻線 y = √3 / 2 交點圖解",
          url: "https://www.desmos.com/calculator/ymeb0xkzsz"
        },
        {
          name: "三角函數做斷音（步驟二：分類討論 0/1 開關圖解）",
          unitKey: "4-2",
          unitLabel: "4-2 週期函數與構造斷音",
          desc: "將正弦波高於門檻區間轉為 0（靜音）、其餘轉為 1（發聲）",
          url: "https://www.desmos.com/calculator/exrboynk81"
        },
        {
          name: "floor函數做斷音（高斯階梯函數 y = floor(x) 圖解）",
          unitKey: "4-1",
          unitLabel: "4-1 動態音量",
          desc: "展示高斯取整函數每滿 1 拍跳升一階的水平階梯圖形",
          url: "https://www.desmos.com/calculator/2fev0huixj"
        },
        {
          name: "floor函數做斷音（拍內小數鋸齒波 y = x - floor(x) 圖解）",
          unitKey: "4-1",
          unitLabel: "4-1 動態音量 ／ 4-2 週期函數與構造斷音",
          desc: "展示每拍從 0 斜直線爬升到 1 的拍內小數計時器",
          url: "https://www.desmos.com/calculator/dm2eoyoon8"
        },
        {
          name: "floor函數做斷音（鋸齒波分類討論 0/1 方波開關圖解）",
          unitKey: "4-2",
          unitLabel: "4-2 週期函數與構造斷音",
          desc: "展示 {x - floor(x) <= 0.2: 0, 1} 切出前 20% 靜音的週期方波",
          url: "https://www.desmos.com/calculator/mq7ka30chq"
        }
      ]
    },
    {
      category: "五、音色與物理（含伴奏與長曲接力補充）",
      items: [
        {
          name: "不同音色",
          unitKey: "5-2",
          unitLabel: "5-2 自然泛音列與樂器音色合成",
          desc: "雙資料夾：1. 長笛（奇偶泛音皆強 V_1）vs 2. 豎笛（單邊封閉奇數泛音強 V_2）",
          url: "https://www.desmos.com/calculator/msxzmo955w"
        },
        {
          name: "傅立葉",
          unitKey: "5-3",
          unitLabel: "5-3 傅立葉合成三大經典波形",
          desc: "共用滑桿 m，含三資料夾：1. 方波、2. 鋸齒波、3. 三角波之級數疊加與發聲",
          url: "https://www.desmos.com/calculator/i17uj3bcsy"
        },
        {
          name: "春日影(90小節)",
          unitKey: "supp-relay",
          unitLabel: "補充 3 循環低音伴奏與長曲分段接力架構",
          desc: "17 段接力長篇作品（L_111[t], L_112[t-72]...）與對數下落音符",
          url: "https://www.desmos.com/calculator/eodq3asol4"
        }
      ]
    },
    {
      category: "六、視覺音遊與演算法（含完整名曲專題範本）",
      items: [
        {
          name: "正反向音樂",
          unitKey: "6-1",
          unitLabel: "6-1 巴哈《螃蟹卡農》幾何對稱變換",
          desc: "16 拍對位旋律，含三資料夾：1. 正向 S_1[t]、2. 反向（水平翻轉 S_1[17-t]）、3. 倒影（鉛直翻轉 12-S_1）",
          url: "https://www.desmos.com/calculator/keqwpyt1lw"
        },
        {
          name: "聲音基礎(可視化函數)",
          unitKey: "6-2",
          unitLabel: "6-2 Desmos Audio Trace（Alt + T）函數圖形音訊追蹤",
          desc: "Y 軸 0~12 對應 E3~E4 半音階梯函數，按 Alt + T 與 H 直接聽函數圖形唱歌",
          url: "https://www.desmos.com/calculator/oiamjxssnc"
        },
        {
          name: "rickroll",
          unitKey: "6-5",
          unitLabel: "6-5 對數琴鍵映射與參數式下落音遊【期末專題】",
          desc: "4 段接力（每段 80 拍）與對數琴鍵反函數 24·log2((L+1)/442)+1 下落音遊",
          url: "https://www.desmos.com/calculator/lp4hwddbnf"
        },
        {
          name: "魷魚魷魚起來",
          unitKey: "6-5",
          unitLabel: "6-5 對數琴鍵映射與參數式下落音遊【期末專題】",
          desc: "10 段接力分塊、q/p/s 時值陣列與對數下落音遊點陣",
          url: "https://www.desmos.com/calculator/jsesxbjozc"
        }
      ]
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
      formula: `// 1. 和諧音 (頻率比例滑桿 a)\n\\operatorname{tone}([220, 220a])\na = 1\n\n// 2. 人耳聲音分辨程度 (微音盲測與拍頻，滑桿 b)\n\\operatorname{tone}(442)\n\\operatorname{tone}(442b)\nb = 1.0004\n\n// 3. 圖示為何會有此現象 (行進波干涉動態模擬)\nt = 0\nf_1 = 1\nf_2 = 1.1\ny_1 = \\sin(f_1(x-t))\ny_2 = \\sin(f_2(x-t))\ny_3 = y_1 + y_2`,
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
這是因為聲波沒有被中斷。如何讓音符粒粒分明？手動塞一堆 0 太過繁瑣，在第四章我們將引入數學上的「週期函數與構造斷音」，優雅解決這個問題！
      `,
      tasks: [
        "1. 開啟範本：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【C大調音符】，確認 C 到 B 各音變數與時間滑桿 t=0。",
        "2. 建立旋律陣列：展開第 2 個資料夾【小星星第一版本】，觀察《小星星》42 拍音名陣列 L，注意換氣停頓處填入 0。",
        "3. 時間滑桿唱針：設定時間滑桿 t 範圍為 0 到 42、步長 1，按下播放鍵 ⏵ 聆聽旋律依序演奏。",
        "4. 連續音聽感比對：仔細聆聽連續播放相同音符（如 C C 或 G G）時的連音聽感，思考如何讓音符邊界更加清晰分明。"
      ],
      formula: `// 1. C 大調音名定義 (基準原點 C = 263Hz)\nf(x) = 263 \\cdot 2^{\\left(\\frac{x}{12}\\right)}\nC = f(0); D = f(2); E = f(4); F = f(5); G = f(7); A = f(9); B = f(11)\nt = 0\n\n// 2. 小星星第一版本 (42 拍完整旋律陣列，0 為休止符)\nL = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, G, G, F, F, E, E, D, 0, G, G, F, F, E, E, D, 0, C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0]\n\n// 循序發聲\n\\operatorname{tone}(L[t])`,
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
            solution: "1. 時間滑桿 $t$ 的角色：$t$ 就像唱盤唱針（索引指針），隨時間遞增依序取出列表 $L[t]$ 中對應拍點的頻率發聲。\n2. 同音黏連現象：連續播放相同音符時，因為頻率相同且波形連續不斷，人耳容易聽成一個拖長的單音，不易分辨個別拍點，這正是第四章「週期函數與構造斷音」將進一步解決的問題。",
            formatAnswer: (ans) => `播放觀察與聽感分析：\n${ans}\n\n（核心解析：時間滑桿 t 扮演唱針角色依序讀取音符；連續同音因波形未中斷而產生黏連，為第四章構造斷音留下伏筆。）`
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
            prompt: "李佳薇的《煎熬》副歌第一句「心一跳」飆到超高音：$f(20), f(23), f(21)$。\n如果去 KTV 唱不上去想要【降兩個半音】，這三個音會變成哪三個函數？\n如果像老師一樣要【降一整個八度】才唱得上去，又會變成什麼？請寫出運算式與理由。（註：我知道有物理老師高中是吉他社社長，可以考慮問問看他能不能唱原 Key）",
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
      title: "動態音量",
      conceptTitle: "發聲函數的第二個參數",
      modelTitle: "動態音量與波形探索",
      status: "ready",
      desmosUrl: null,
      motivation: `
在第三章中，我們學會了用陣列 $L[t]$ 排出樂譜，讓時間滑桿 $t$ 依序播放每一個音。
但目前的音樂聽起來每一顆音都一樣大聲，有些單調平板。

這是因為我們只使用了 Desmos 發聲函數的第一個參數（音高頻率）：
$$\\operatorname{tone}(L[t])$$
還記得第一章學過的發聲語法嗎？它其實有兩個參數：
$$\\operatorname{tone}(\\text{頻率}, \\; \\text{音量})$$
第二個參數控制的是**「音量（大小聲）」**！
為了先搞懂這個參數的威力，我們先卸下樂譜陣列的負擔，從單純的標準 A 音（$440\\text{Hz}$）出發，看看把不同的數學函數填入第二個位置，聲音會產生什麼奇妙的變化！
      `,
      mathModel: `
**一、 從單音 440 開始：正弦波與向上平移**：

**1. 聽見負值的靜音痛點**：
在 Desmos 輸入單音正弦調幅：
$$\\operatorname{tone}(440, \\; \\sin(t))$$
建立時間滑桿 $t$（範圍 $0 \\sim 10$）並按下播放。
- **聽感觀察**：聲音慢慢變大、慢慢變小……然後**突然有一大段時間完全沒聲音（靜音了整整 3 秒多）**！
- **圖形對照**：對照 $y = \\sin(t)$ 圖形，正弦波週期約為 $2\\pi \\approx 6.28$ 秒。在前半週期 $0 \\sim \\pi$（約 3.14 秒）數值大於 0，能正常發聲；但在後半週期 $\\pi \\sim 2\\pi$，數值小於 0。
- **物理原則**：在真實世界與 Desmos 中，**音量不能為負值**。當音量小於或等於 0 時，Desmos 會直接將其當作 0（完全靜音）。

---

**2. 消除靜音：向上平移 $+1$**：
為了不讓聲音在負半週中斷，我們將整個波形向上平移 1 單位：
$$\\operatorname{tone}(440, \\; \\sin(t) + 1)$$
- **代數意義**：正弦函數範圍在 $-1 \\le \\sin(t) \\le 1$，加上 1 之後，整體數值範圍平移為：
  $$0 \\le \\sin(t) + 1 \\le 2$$
- **聽感效果**：負值完全被消除了！聲音在「完全靜音 $\\to$ 2 倍大聲」之間平滑起伏，不再出現長時間無聲的尷尬停頓。

---

**3. 調整呼吸速度：週期縮短為 1 秒**：
$\\sin(t)$ 的週期是 $2\\pi \\approx 6.28$ 秒，起伏太慢了。如果希望音量「每秒規律起伏 1 次」，自變數要乘上 $2\\pi$：
$$\\operatorname{tone}(440, \\; \\sin(2\\pi t) + 1)$$
此時週期縮短為 $T = \\frac{2\\pi}{2\\pi} = 1$ 秒，聲音產生如平穩呼吸般規律起伏的**調幅震音（Tremolo）**！

---

**二、 函數聲音個性大探索：漸近線暴衝 vs 高斯鋸齒波**：

不同的數學函數擁有截然不同的幾何特徵，填入音量位置時，耳朵能聽出無比鮮明的「聲音個性」：

**1. 正切函數 $\\operatorname{tone}(440, \\; \\tan(t))$：漸近線暴衝與斷崖切斷**
- **聽感體驗**：音量從溫和爬升，突然一路狂飆暴衝到極大聲，隨後「啪！」一聲瞬間斷崖式切斷（沉入安靜）！
- **幾何對應**：這正是正切函數在 $t = \\frac{\\pi}{2}$（約 $1.57$）的**垂直漸近線**！當自變數逼近漸近線時，$\\tan(t) \\to +\\infty$（極大聲），一跨過漸近線瞬間跳到 $-\\infty$（小於 0 靜音）。

---

**2. 高斯鋸齒波 $\\operatorname{tone}(440, \\; t - \\operatorname{floor}(t))$：線性漸強（Crescendo）**：

- **認識高斯取整記號 $[x] = \\operatorname{floor}(x)$**：
  在 Desmos 中輸入 \`floor(x)\`，代表「不大於 $x$ 的最大整數」，也就是小學學過的「無條件捨去小數點只留整數」：
  - 例如：$[1.2] = 1, \\; [1.8] = 1, \\; [2.0] = 2, \\; [2.5] = 2$。

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/2fev0huixj?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：呈現一段一段水平跳躍的「整數階梯」。

---

- **原時間減去整數：得到拍內小數鋸齒波 $y = x - \\operatorname{floor}(x)$**：
  如果用連續時間 $x$，減去只取整數的 $\\operatorname{floor}(x)$，留下來的永遠就是「小數點後面的部分」：
  - $x = 1.0 \\implies 1.0 - 1 = 0$
  - $x = 1.4 \\implies 1.4 - 1 = 0.4$
  - $x = 1.9 \\implies 1.9 - 1 = 0.9$
  - 一跨入下一拍 $x = 2.0$，整數變成 2，相減又瞬間歸零（$2.0 - 2 = 0$）重新爬升！

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/dm2eoyoon8?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵與聽感**：
- **幾何形狀**：每 1 秒重複循環一次，在每一拍內由 0 均勻爬升到 1，是一排整齊的「直角三角形鋸齒波」。
- **聽感體驗**：輸入 $\\operatorname{tone}(440, \\; t - \\operatorname{floor}(t))$，音量在每一秒內從無聲線性爬升到最大聲（音樂術語中的**漸強 Crescendo**），一到整數秒瞬間歸零，聽起來就像急促的雷達倒數警報聲！

---

**三、 套入小星星旋律：為樂譜注入呼吸感**：
單音玩熟後，我們將單音 440 替換回第三章排好的小星星樂譜陣列 $L[t]$：
$$\\operatorname{tone}(L[t], \\; \\sin(2\\pi t) + 1)$$
當時間滑桿 $t$ 播放時，不僅旋律在跑，音量也會隨著正弦波週期性地呼吸起伏，展現動態調幅的音樂表現力！

---

**四、 留給下一單元的思考（直通 4-2）**：
平滑的正弦波讓音樂像波浪一樣柔和呼吸；
但回想 3-1 小星星的「同音黏連問題」——當連續出現兩個相同的音（如 1 1 或 5 5）時，我們需要的是**在每一拍開頭瞬間把音量歸零（靜音）、隨後立刻拉滿發聲的「0 與 1 俐落開關」**！
平滑連續的波形辦不到這一點。下一單元「4-2 週期函數與構造斷音」，我們就要從大家剛學過的三角函數開始，研究如何構造精確的斷音開關！
      `,
      tasks: [
        "1. 單音正弦調幅探索：在空白 Desmos 中輸入 tone(440, sin(t))，觀察負值產生的長時間靜音；再輸入 tone(440, sin(t) + 1)，體會向上平移消除負值後的連續呼吸感。",
        "2. 調整呼吸速度：輸入 tone(440, sin(2*pi*t) + 1)，播放滑桿 t，聆聽每秒起伏 1 次的規律調幅震音。",
        "3. 奇異函數音量大探索：依序測試 tone(440, tan(t)) 與 tone(440, t - floor(t))，比較正切漸近線暴衝與高斯鋸齒線性漸強（Crescendo）的鮮明聽感差異。",
        "4. 樂譜呼吸實戰：將呼吸波套入小星星旋律 tone(L[t], sin(2*pi*t) + 1)，感受整首曲子隨時間起伏的動態美感。"
      ],
      formula: `// 1. 單音正弦調幅探索 (基準音 440 Hz)
tone(440, sin(t))           // 負半週靜音 (約 3.14 秒無聲)
tone(440, sin(t) + 1)       // +1 向上平移消除負值
tone(440, sin(2*pi*t) + 1)  // 週期 1 秒，每秒規律呼吸一次

// 2. 奇異函數音量探索
tone(440, tan(t))           // 正切漸近線暴衝與斷崖切斷
tone(440, t - floor(t))     // 高斯鋸齒波線性漸強 (Crescendo)

// 3. 樂譜全曲動態呼吸
// (需搭配小星星樂譜陣列 L 與時間滑桿 t)
tone(L[t], sin(2*pi*t) + 1)`,
      tips: `
- **tone 函數的雙參數規格**：語法為 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$。第二個參數可以直接傳入隨時間變化的函數 $V(t)$。
- **音量數值範圍規則**：音量為 0 時代表無聲，數值越大聲音越大。音量若小於或等於 0，Desmos 會將其視為 0（完全靜音）。
- **高斯取整記號**：$\\operatorname{floor}(t)$ 代表無條件捨去取整數，$t - \\operatorname{floor}(t)$ 提取小數進度（數值介於 $0 \\le y < 1$ 之間）。
- **調幅原理 (Tremolo / AM)**：在音樂效果器中，讓音量週期性大小聲變化的效果稱為 Tremolo（震音）；在物理與通信工程上稱為 AM（Amplitude Modulation，調幅）。
      `,
      worksheet: {
        title: "學習單：動態音量與波形探索",
        questions: [
          {
            id: "q1_sin_negative_shift",
            title: "正弦調幅負半週靜音與向上平移原理",
            type: "textarea",
            prompt: "在 Desmos 播放單音算式 $\\operatorname{tone}(440, \\sin(t))$ 時：\n1. 為什麼有一大段時間完全聽不到聲音？這段靜音時間大約長達幾秒？\n2. 為什麼改成 $\\operatorname{tone}(440, \\sin(t) + 1)$ 之後，聲音就能持續不斷且平滑起伏？",
            placeholder: "請從正弦波數值範圍與 Desmos 對音量小於 0 的判定說明...",
            solution: "1. 負半週靜音原因：正弦函數 $\\sin(t)$ 的數值範圍在 -1 到 1 之間。當 $\\sin(t) < 0$ 時，Desmos 將負值音量視為 0（靜音），因後半週期長達 $\\pi \\approx 3.14$ 秒，所以會安靜 3 秒多。\n2. 向上平移效果：加上 1 之後，整體波形向上平移 1 單位，數值範圍變為 $0 \\le \\sin(t)+1 \\le 2$，完全消除了負數區間，使聲音在 0 到 2 之間平滑起伏不中斷。",
            formatAnswer: (ans) => `正弦調幅分析：\n${ans}\n\n（核心解析：正弦波在負半週數值小於 0 會被判定為靜音；加上 1 向上平移可確保數值恆大於等於 0，實現平滑無間斷的呼吸起伏。）`
          },
          {
            id: "q2_sawtooth_crescendo",
            title: "高斯鋸齒波 $t - \\operatorname{floor}(t)$ 的發聲幾何特徵",
            type: "textarea",
            prompt: "在聆聽 $\\operatorname{tone}(440, t - \\operatorname{floor}(t))$ 時：\n1. 耳朵聽到的聲音強弱變化有什麼特徵？（是漸強還是漸弱？如何歸零？）\n2. 請用數學說明：為什麼原時間 $t$ 減去整數部分 $\\operatorname{floor}(t)$，會在每一秒內產生這種直線爬坡後瞬間跳水的鋸齒波形？",
            placeholder: "請說明：1. 聽感上的漸強與瞬間切斷；2. 小數點後數字隨時間增加與整數秒跳躍...",
            solution: "1. 聽感特徵：每一秒內聲音從無聲線性漸強（Crescendo）到最大聲，隨後在整數秒瞬間歸零中斷，聽起來像急促的警報器鋸齒聲。\n2. 幾何原理：$\\operatorname{floor}(t)$ 提取不大於 $t$ 的整數，相減後 $t - \\operatorname{floor}(t)$ 永遠只保留拍內的小數部分。在每 1 秒內，小數從 0 均勻增加到 0.999...（線性漸強斜坡）；跨入下一整數秒時，整數跳進 1 單位，小數差瞬間歸零，形成直角三角形鋸齒波。",
            formatAnswer: (ans) => `鋸齒波幾何與聽感分析：\n${ans}\n\n（核心解析：原數減整數保留拍內小數進度，在每秒內由 0 線性爬升至 1 產生漸強聽感，並在整數秒瞬間垂直歸零重置。）`
          }
        ]
      }
    },

    "4-2": {
      id: "4-2",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "週期函數與構造斷音",
      conceptTitle: "週期函數與構造斷音",
      modelTitle: "如何構造斷音",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/l8nygbjy8e",
      desmosUrls: [
        { title: "範本一：三角週期開關 ↗", url: "https://www.desmos.com/calculator/l8nygbjy8e" },
        { title: "範本二：高斯鋸齒波開關 ↗", url: "https://www.desmos.com/calculator/nvksl0vch6" }
      ],
      motivation: `
延續 3-1 小星星第一版本的同音黏連問題：如果我們想讓每個音的前 $\\dfrac{1}{6}$（約 $0.167$ 拍的時間）斷音靜音、後 $\\dfrac{5}{6}$ 正常發聲，該怎麼做？

若採用手工暴力法，將每一拍切成 6 格 \`[0, C, C, C, C, C]\` 並開 6 倍速播放，42 拍的樂譜陣列會暴增為 252 個元素，輸入極為繁瑣且容易錯位。

更有效率的做法是延續 4-1 動態音量的概念——在第一章學過的 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 嗎？
在 3-1 中，我們只傳入了頻率陣列 $\\operatorname{tone}(L[t])$，音量由系統預設。
如果我們能用數學工具構造一個開關函數 $q$（需要靜音時數值為 $0$，發聲時數值為 $1$），並填入第二個**「音量」**參數位置：
$$\\operatorname{tone}(L[t], \\; q)$$
那麼電腦就會在每一拍內部自動把音量歸零，實現優雅的斷音控制！這就要靠數學中的**「週期函數」**與**「分類討論函數」**。
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

現在我們想控制 $\\operatorname{tone}$ 的音量：當正弦波大於 $\\frac{\\sqrt{3}}{2}$ 時音量設為 0（靜音），其他地方正常發聲（音量設為 1），在數學上也是同樣的分類討論：
$$y = \\begin{cases}
0, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2} \\text{ 時（音量設為 0 靜音）} \\\\
1, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2} \\text{ 時（音量設為 1 發聲）}
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

**四、 鋸齒波 $y = x - [x]$ 構造任意比例斷音開關**：

還記得在 4-1 中學過的小數鋸齒波 $y = x - \\operatorname{floor}(x)$ 嗎？
如果我們用連續時間 $x$，減去只取整數的 $\\operatorname{floor}(x)$，留下來的剛好就是「拍內小數進度」：

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/dm2eoyoon8?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：
- 週期恰好為 1（每經過 1 拍就重複循環一次）。
- 在每一拍內是一條由 0 均勻爬升到 1 的斜直線，這是一排整齊的**週期鋸齒波**。

---

**用小數鋸齒波構造斷音開關（隨心所欲調整時間）**：
因為這條斜直線的高度直接等於拍內的時間進度比例（$0 \\sim 1$），想調整斷音長度時完全不需要計算角度！
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
2. **斷音開關**：以分類討論函數 $q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; t - \\operatorname{floor}(t) \\ge 0.2: 1\\right\\}$ 決定各時間點的音量狀態（0 為靜音，1 為發聲）。
3. **填入 tone 音量參數實現斷音**：
   回顧第一章的發聲函數語法 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$。
   在 3-1 中我們只傳入頻率 $\\operatorname{tone}(L[t])$（音量使用預設值）；
   現在將斷音開關 $q$ 填入第二個音量參數位置：
   $$\\operatorname{tone}(L[t], \\; q)$$
   當時間滑桿 $t$ 播放時：
   - 每拍開頭 $t - [t] < 0.2$ 時，$q = 0 \\implies$ 音量歸零（自動靜音）。
   - 後續時間 $t - [t] \\ge 0.2$ 時，$q = 1 \\implies$ 音量為 1（正常發聲）。
   藉由控制音量在 0 與 1 之間切換，成功消除了同音黏連問題，演奏節奏分明！
      `,
      tasks: [
        "1. 開啟右上角【範本一：三角週期開關 (l8nygbjy8e)】：觀察 y = sin(2*pi*x + pi/3) 與 y = sqrt(3)/2 的交點，標記 (0, sqrt(3)/2) 與 (1, sqrt(3)/2)，確認週期為 1。",
        "2. 觀察分類討論開關：檢視 y = {sin(2*pi*x + pi/3) >= sqrt(3)/2: 0, sin(2*pi*x + pi/3) < sqrt(3)/2: 1} 如何將高於門檻的區域切為 0（靜音），其餘區域切為 1（發聲）。",
        "3. 繪製高斯取整與鋸齒波：輸入 y = floor(x) 觀察整數階梯，再輸入 y = x - floor(x) 觀察每拍從 0 均勻上升至 1 的直線特性。",
        "4. 開啟右上角【範本二：高斯鋸齒波開關 (nvksl0vch6)】：檢視 y = {x - floor(x) <= 0.2: 0, x - floor(x) > 0.2: 1}，並體會將 0.2 改為 0.15 或 0.3 時數值直接對應時間比例的便利性。",
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
- **tone 函數的音量參數**：語法為 $\operatorname{tone}(\text{頻率}, \text{音量})$。在 3-1 中我們只傳入音高陣列 $L[t]$，現在將斷音開關 $q$ 放在第二個參數位置，數值 0 即為音量 0（靜音）、1 為正常發聲。
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
            title: "正弦波門檻開關 vs 高斯鋸齒波 x - [x] 之幾何與操作比對",
            type: "textarea",
            prompt: "在課堂中我們探討了兩種產生斷音的方法：\n1. 正弦波門檻開關：$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}$。\n2. 高斯鋸齒波開關：$y = \\{x - [x] \\le 0.2: 0, 1\\}$。\n請說明：為什麼在實務上若想自由調整斷音比例（例如 20% 或 15%），使用 $x - [x]$ 會比正弦波更為直接方便？",
            placeholder: "請從正弦波調整時需計算角度/門檻，與高斯鋸齒波直接對應小數進度的角度說明...",
            solution: "1. 正弦波是彎曲曲線：若要改變斷音時長，必須重新計算角度、平移量或使用反三角函數（arcsin）求出對應的水平門檻值，計算過程較為繁瑣。\n2. 高斯鋸齒波是一次線性函數：在每一拍內從 0 均勻上升到 1，數值直接等於拍內的時間比例。想要靜音 20% 就直接設門檻為 0.2，想要 15% 就直接設 0.15，不需任何角度換算即可精準設定。",
            formatAnswer: (ans) => `正弦波 vs 高斯鋸齒波比對：\n${ans}\n\n（核心解析：正弦波調整斷音需涉及角度與反三角函數換算；高斯鋸齒波每拍均勻上升，數值直觀等於時間比例，可直接填寫小數門檻。）`
          }
        ]
      }
    },
    "4-3": {
      id: "4-3",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "音量控制與指數衰減（模擬鋼琴與打擊樂）",
      conceptTitle: "樂器的自然發聲與音量衰減",
      modelTitle: "指數衰減音量模型",
      status: "ready",
      desmosUrl: null,
      motivation: `
在 4-2 中，我們把斷音開關 $q$ 放在 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 的第二個參數位置，成功解決了音符黏在一起的斷音問題。
但每個音在發聲時，音量始終是一條水平直線（只有全開 1 或全關 0），聽起來像電子琴或機器人。

真實樂器（如鋼琴、木琴或吉他撥弦）在被敲擊的瞬間能量最大、音量最高；隨後能量會自然消散（衰減）。
既然我們已經知道第二個位置是控制音量的，而且手握拍內計時器 $u = t - \\operatorname{floor}(t)$（每一拍從小數 0 跑到 1），
只要把第二個音量參數從「只有 0 和 1 的開關」換成「隨時間連續下滑的衰減函數」，就能模擬出真實樂器的自然餘音！
      `,
      mathModel: `
**一、 一次函數線性漸弱（直線溜滑梯）**：
拍內小數進度 $u = t - \\operatorname{floor}(t) \\in [0, 1)$。
若想讓每一拍從最大音量 $1$ 等速掉到 $0.5$：
$$g(t) = 1 - 0.5(t - \\operatorname{floor}(t))$$
- **拍頭** $u = 0 \\implies g(t) = 1$（最大敲擊聲）。
- **拍尾** $u = 1 \\implies g(t) = 0.5$（音量降半）。
- **聽感**：音量以固定斜率直線下滑，聽起來像手動等速拉混音推桿，稍嫌機械生硬。

---

**二、 自然等比衰減（單音敲擊實驗）**：
在真實物理世界中，能量損耗通常是「等比衰減」（每個固定時間間隔乘上固定比例）：
$$E(t) = (0.5)^{k(t - \\operatorname{floor}(t))}$$
我們先用單音 $440\\text{Hz}$ 試敲一次：
$$\\operatorname{tone}(440, \\; (0.5)^{k(t - \\operatorname{floor}(t))})$$
拉動**阻尼係數滑桿 $k$**，親耳感受聲音消散速度的魔術：
- **短促木琴 / 琴弦撥奏**：$k = 8 \\sim 12$，敲擊後音量極速掉落，乾脆清脆。
- **厚實鋼琴**：$k = 2 \\sim 3$，能量緩慢消散，餘音共鳴悠長。

---

**三、 直接套入小星星全曲實戰**：
單音敲擊玩懂後，我們直接將指數衰減代入小星星樂譜陣列 $L[t]$：
$$\\operatorname{tone}(L[t], \\; E(t))$$
相比於 3-1 的連續平音、4-2 的俐落斷音，加入指數衰減後，整首曲子瞬間有了像在彈奏真實鋼琴或鐵琴般的自然空氣感！

---

**四、 拍尾 15% 靜音防呆**：
當 $k$ 調得較小（如 $k=2$）時，在拍尾仍有約 $25\\%$ 的微弱音量。為了避免與下一拍開頭的敲擊重疊產生雜音，可結合 4-2 的分段條件在拍尾最後 15% 強制歸零：
$$E(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, \\; (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}$$
      `,
      tasks: [
        "1. 單音敲擊實驗：在 Desmos 輸入 tone(440, (0.5)^(k * (t - floor(t))))，建立阻尼係數 k 滑桿（範圍 1 到 15，步長 0.5），對比短促木琴 (k=10) 與悠長鋼琴 (k=2.5) 的聽感差異。",
        "2. 全曲真實演奏：將指數衰減套入小星星樂譜 tone(L[t], E(t))，感受每顆音帶有自然衰減餘音的樂器演奏感。",
        "3. 加入拍尾防呆：將衰減函數升級為 E(t) = {t - floor(t) > 0.85: 0, (0.5)^(k * (t - floor(t)))}，體驗拍尾微小留白避免音符雜音重疊的乾淨效果。"
      ],
      formula: `// 1. 拍內小數進度 (0 跑到 1)
u = t - floor(t)

// 2. 單音敲擊實驗 (440Hz，拉動 k 體驗木琴與鋼琴)
k = 3
tone(440, (0.5)^(k * u))

// 3. 指數等比衰減 (加入拍尾 15% 靜音防呆)
E(t) = {t - floor(t) > 0.85: 0, (0.5)^(k * (t - floor(t)))}

// 4. 小星星真實樂器演奏 (需搭配小星星樂譜陣列 L)
tone(L[t], E(t))`,
      tips: `
- **阻尼係數 $k$ 的幾何意義**：底數為 $0.5 < 1$ 時，次方的係數 $k$ 越大，曲線下墜越陡峭，聲音衰退越劇烈；$k$ 越小，曲線越平緩，餘音越悠長。
- **防爆音技巧**：加上 {t - floor(t) > 0.85: 0} 能在拍尾強制歸零，即使係數 $k$ 調得很小，也不會與下一拍的發聲音訊重疊干涉產生雜音。
      `,
      worksheet: {
        title: "學習單：樂器音量控制與指數衰減實驗",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_damping_k",
            title: "阻尼係數 k 與樂器聽感特性",
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
            title: "阻尼係數與拍內音量半衰計算",
            type: "text",
            prompt: "考慮指數衰減算式 $E(u) = (0.5)^{k \\cdot u}$，其中 $u = t - \\operatorname{floor}(t)$ 代表拍內進度（$0 \\le u \\le 1$）。若設定阻尼係數 $k = 4$，請問當拍子進行到一半（即 $u = 0.5$）的瞬間，音量 $E(0.5)$ 會衰減為原本開頭（$u=0$ 時音量為 1）的幾分之幾？（請填小數或分數比值，如 0.25 或 1/4）：",
            placeholder: "請輸入小數或分數，範例：0.5 或 1/2",
            expected: "0.25 | 1/4",
            solution: "推導過程：\n當 $k = 4, u = 0.5$ 時，代入指數得：\n$$E(0.5) = (0.5)^{4 \\times 0.5} = (0.5)^2 = 0.25 = \\frac{1}{4}$$\n因此在該拍進行到一半時，音量已經劇烈衰減至原本的四分之一（$25\\%$）。",
            formatAnswer: (ans) => `半衰音量計算：${ans}（標準答案：0.25 或 1/4）\n推導說明：代入 E(0.5) = (0.5)^(4 × 0.5) = (0.5)^2 = 0.25 = 1/4，音量在半拍時已掉至 25%。`
          },
          {
            id: "q3_linear_vs_exp",
            title: "一次線性漸弱 vs 指數等比衰減之聽感觀察",
            type: "textarea",
            prompt: "在課堂實驗中，分別聆聽「一次函數線性漸弱 $g(u) = 1 - 0.5u$」與「指數等比衰減 $E(u) = (0.5)^{3u}$」，聽起來有什麼明顯的差別？哪一種聽起來更像真實樂器的敲擊感？為什麼？",
            placeholder: "請從聲音衰減的自然度、殘響走勢等面向分享你的操作觀察...",
            solution: "1. 一次函數線性漸弱：音量以固定斜率等速下降，聽起來較為生硬機械化，像手動把混音推桿等速拉下來。\n2. 指數等比衰減：敲擊瞬間能量迅速釋放下滑，但隨後衰減速率漸漸趨緩，留下一小段微弱的自然共鳴餘音，非常符合真實物理世界中空氣阻尼與琴弦振動的能量耗散模型，聽感上遠比直線漸弱更具真實樂器感。",
            formatAnswer: (ans) => `線性漸弱 vs 指數衰減聽感比較：\n${ans}\n\n（核心解析：線性漸弱等速下降較為生硬；指數衰減前期急墜、後期微弱共鳴，符合物理能量損耗，聽感最貼近真實鋼琴與敲擊樂器。）`
          }
        ]
      }
    },

    "4-4": {
      id: "4-4",
      moduleId: "module-4",
      moduleName: "四、節奏與動態",
      title: "8-bit 電玩音效與動態鼓組實驗室（選學）",
      conceptTitle: "合成音效的數學模型",
      modelTitle: "合成音效與打擊樂模型",
      status: "ready",
      desmosUrl: null,
      motivation: `
在 4-1 到 4-3 中，我們學會了用拍內計時器 $u = t - \\operatorname{floor}(t)$ 隨心所欲地塑造「音量的大小聲」。
但如果我們把數學函數同時套進**「第一個參數（音高頻率）」**呢？

在短短 $0.2 \\sim 0.3$ 秒的瞬間，讓頻率沿著二次拋物線往上衝、沿著指數曲線往下掉、或是像正弦波一樣高速震顫，
就能用純數學算式合成出童年經典的紅白機（8-bit）電玩音效與震撼的電子鼓組！
數學函數不只能畫在坐標平面上，還能直接變身成專屬於你的合成音效產生器！
      `,
      mathModel: `
所有音效均由拍內小數進度 $u = t - \\operatorname{floor}(t) \\in [0, 1)$ 驅動，並將發聲門檻直接整合於第二個音量參數中：

**一、 重低音大鼓 Kick Drum（頻率急墜 ＋ 指數阻尼）**：
- **發聲原理**：鼓棒重擊鼓皮的瞬間，皮膜張力極大，發出高頻聲音；隨後張力迅速鬆弛、頻率在 $0.1$ 秒內暴跌至低音，同時音量劇烈阻尼。
- **數學模型**：
  $$\\operatorname{tone}\\left(40 + 110 \\cdot (0.5)^{25u}, \\; \\left\\{u > 0.3: 0, \\; (0.5)^{12u}\\right\\}\\right)$$
  - 頻率部分：從 $40 + 110 = 150\\text{Hz}$ 沿指數曲線極速驟降至 $40\\text{Hz}$ 的重低音。
  - 音量部分：前 $0.3$ 秒等比衰減，隨後強制歸零靜音。
  - **聽感**：厚實有力的重低音「咚——！」。

---

**二、 瑪利歐起跳音效 Mario Jump（二次拋物線頻率上升）**：
- **發聲原理**：起跳時身體克服重力向上衝刺，音高隨時間加速上升。
- **數學模型**：
  $$\\operatorname{tone}\\left(400 + 800u^2, \\; \\{u \\le 0.3: 0.5, \\; 0\\}\\right)$$
  - 頻率部分：以頂點在 $u=0$ 的二次拋物線 $400 + 800u^2$，在 $0.3$ 秒內從 $400\\text{Hz}$ 飆升至 $472\\text{Hz}$。
  - 音量部分：僅在 $u \\le 0.3$ 時發聲，超過即靜音。
  - **聽感**：經典彈跳起飛的「啵嚶——！」。

---

**三、 星際雷射槍 Laser Gun（指數等比俯衝）**：
- **發聲原理**：高能雷射脈衝發射後能量衰退，頻率由極高頻向下等比俯衝。
- **數學模型**：
  $$\\operatorname{tone}\\left(1500 \\cdot (0.5)^{10u}, \\; \\{u \\le 0.4: 0.5, \\; 0\\}\\right)$$
  - 頻率部分：從超高頻 $1500\\text{Hz}$ 沿指數下墜，聽起來像金屬摩擦的雷射光束。
  - **聽感**：清脆凌厲的「咻——！」。

---

**四、 能量水晶 / 吃金幣 Power-up（正弦調頻 FM 顫音）**：
- **發聲原理**：在基準頻率上疊加高速震盪的正弦波，形成金屬光澤的調頻（Frequency Modulation）效果。
- **數學模型**：
  $$\\operatorname{tone}\\left(600 + 200\\sin(30u), \\; \\{u \\le 0.3: 0.5, \\; 0\\}\\right)$$
  - 頻率在 $400 \\sim 800\\text{Hz}$ 之間快速震動。
  - **聽感**：閃閃發光的吃金幣顫音「滋鈴——！」。

---

**五、 進階彩蛋：大鼓伴奏與小星星雙軌合奏**：
<details class="formula-details" style="margin-top: 1rem;">
  <summary class="formula-summary" style="cursor: pointer; padding: 0.6rem 1rem; font-weight: 600;">查看進階彩蛋：大鼓伴奏與小星星雙軌合奏</summary>
  <div style="padding: 1rem 1.25rem; font-size: 0.95rem; line-height: 1.8;">
    在 Desmos 裡，多個 <code>tone</code> 函數是可以同時播放的！<br>
    利用同餘運算判斷奇數拍與偶數拍，就能讓大鼓在第 1、3 拍敲擊，同時小星星旋律依序發聲：
    <pre style="margin-top: 0.5rem; background: var(--bg-card); padding: 0.75rem; border-radius: var(--radius-sm); overflow-x: auto;"><code>// 拍內計時器
u = t - floor(t)

// 軌道一：第 1、3 拍敲擊大鼓 (利用 mod 判斷奇數拍)
tone(40 + 110 * (0.5)^(25u), {mod(floor(t), 2) = 0: {u > 0.3: 0, (0.5)^(12u)}, 0})

// 軌道二：小星星鋼琴旋律 (每拍都發聲)
tone(L[t], {u > 0.85: 0, (0.5)^(3u)})</code></pre>
    按下時間滑桿 $t$ 播放，你就擁有了自己的兩軌電子樂團！
  </div>
</details>
      `,
      tasks: [
        "1. 測試大鼓 Kick：在 Desmos 輸入大鼓算式，按下時間滑桿 t 播放鍵，聆聽低頻極速俯衝帶來的重低音敲擊感。",
        "2. 玩拋物線起跳：輸入瑪利歐起跳算式，拉大二次項係數（如 800 改為 2000）或加上負號（改成 -800），觀察音高走向。",
        "3. 測試雷射槍與吃金幣：依序試聽指數下墜雷射音效與正弦調頻水晶音效，感受不同幾何波形的聲音個性。",
        "4. 自創專屬電玩音效：挑選一個音效自由改寫係數與時間門檻，調出專屬於你的特殊技能或攻擊音效！"
      ],
      formula: `// 1. 拍內小數進度
u = t - floor(t)

// 2. 大鼓 Kick (頻率急墜 + 音量阻尼)
tone(40 + 110 * (0.5)^(25u), {u > 0.3: 0, (0.5)^(12u)})

// 3. 瑪利歐起跳音效 (二次拋物線頻率上升)
tone(400 + 800 * u^2, {u <= 0.3: 0.5, 0})

// 4. 星際雷射槍 (指數等比俯衝)
tone(1500 * (0.5)^(10u), {u <= 0.4: 0.5, 0})

// 5. 能量水晶 / 吃金幣 (正弦動態調頻)
tone(600 + 200 * sin(30u), {u <= 0.3: 0.5, 0})`,
      tips: `
- **打擊樂的物理本質**：真實世界的鼓點發聲通常發生在 $0.1 \\sim 0.3$ 秒極短時間內，特徵是「頻率極速暴跌」結合「音量等比衰減」。
- **拋物線正負號意義**：二項式係數為正時（$+800u^2$），開口向上，音高加速飆升；係數為負時（$-800u^2$），開口向下，音高向下墜落。
- **門檻寫在音量位置**：在 Desmos 中，將時間判斷條件寫在第二個參數 $\{u \\le 0.3: 0.5, 0\}$，時間一到自動歸零靜音，可避免語法報錯。
      `,
      worksheet: {
        title: "學習單：8-bit 電玩音效調音師實驗",
        requireDesmosLink: true,
        questions: [
          {
            id: "q1_parabola_jump",
            title: "拋物線開口方向與音高走勢",
            type: "radio",
            prompt: "在瑪利歐起跳算式 $\\operatorname{tone}(400 + 800u^2, \\; \\{u \\le 0.3: 0.5, 0\\})$ 中：\n若把二次項係數改成負數，例如改成 $400 - 800u^2$：\n1. 二次函數圖形的開口方向會如何改變？\n2. 聽到的聲音特徵會變成什麼樣的電玩音效？",
            options: [
              "圖形開口向下，頻率由 400 往下驟降，聽起來像掉進懸崖或受傷跌倒的音效",
              "圖形開口向上，頻率上升得更快，聽起來像飛得更高的超級跳躍",
              "開口方向不變，但音量會變得比原本大聲兩倍",
              "頻率會完全靜止在 400Hz，聽起來沒有任何音高變化"
            ],
            solution: "解析：\n1. 幾何意義：當二次項係數由正數（$+800$）變為負數（$-800$）時，拋物線開口由「向上」變為「向下」，頂點出現在 $u=0$。\n2. 聽覺效果：隨著時間 $u$ 增加，頻率 $400 - 800u^2$ 會從 $400\\text{Hz}$ 加速向下滑落，產生經典角色掉入坑洞、被擊敗墜落的遊戲音效！",
            formatAnswer: (ans) => `拋物線正負變換分析：【${ans}】\n原理解析：二項式係數為負時拋物線開口向下，頻率隨時間加速下滑，形成電玩中角色墜落跌倒的經典音效。`
          },
          {
            id: "q2_custom_sound_design",
            title: "個人專屬電玩音效創作展示",
            type: "textarea",
            prompt: "請在 Desmos 中發揮調音師創意，挑選一個函數（或魔改上述四大音效的參數），設計一款專屬於你的電玩音效！\n請填寫：\n1. 你的自創音效算式（例如：`tone(...)`）\n2. 這款音效的情境與用途描述（例如：魔王被雷劈、忍者發射手裡劍、賽車氮氣加速）\n3. 你調整了什麼數學參數來達成這個聲音特徵？",
            placeholder: "請填寫：1. 算式；2. 音效情境（如武器、技能、動作）；3. 調整的參數與幾何理由...",
            solution: "參考示範：\n1. 算式：`tone(800 * (0.5)^(15u) + 300 * sin(40u), {u <= 0.25: 0.6, 0})`\n2. 情境：科幻太空船發射雷射電磁砲。\n3. 數學原理：結合了指數快速下墜（營造衝擊速度感）與高頻正弦震動（營造電磁電流滋滋聲），並將發聲時間鎖定在 0.25 秒內乾脆俐落。",
            formatAnswer: (ans) => `個人專屬電玩音效設計：\n${ans}\n\n（核心回顧：透過拍內計時器 u 驅動頻率與音量雙參數，將二次函數、指數函數與三角函數成功化為具象的遊戲音效。）`
          }
        ]
      }
    },

// ==========================================
    // 五、音色與物理
    // ==========================================
    "5-1": {
      id: "5-1",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "物理駐波與邊界條件（雙邊封閉 vs 單邊封閉）",
      conceptTitle: "為什麼泛音是整數倍？為何有些樂器只有奇數倍泛音？",
      modelTitle: "雙邊封閉與單邊封閉之駐波邊界模型",
      status: "ready",
      desmosUrl: null,
      motivation: `
自然界的樂器在發出一個主音（基音 $k$）時，還會同時伴隨一連串整數倍頻率（$2k, 3k, 4k\\dots$）的細微聲音，稱為**「泛音（Harmonics）」**。
但有兩個關鍵的物理謎題：
1. 為什麼泛音的頻率全都是基音的**正整數倍**，而不會出現 $1.4$ 倍這種小數？
2. 為什麼像吉他弦、鋼琴弦與長笛，**奇數倍與偶數倍泛音（$1k, 2k, 3k, 4k\\dots$）全部都有**；但像豎笛（單簧管）這類樂器，卻**幾乎只有奇數倍泛音（$1k, 3k, 5k, 7k\\dots$）**？

答案全藏在樂器兩端的**「邊界條件（Boundary Conditions）」**——也就是波在兩端是被封閉固定（波節），還是開放自由振動（波腹）！
      `,
      mathModel: `
**一、 雙邊封閉／兩端固定駐波（奇數與偶數泛音皆有）**：
代表樂器：**吉他弦、鋼琴弦**（兩端釘死），以及兩端狀態對稱的開管樂器如**長笛**。
設長度為 $\\pi$，左端固定在 $(0, 0)$，右端也固定在 $(\\pi, 0)$。

<div class="piano-card">
  <svg class="piano-svg" viewBox="0 0 740 355" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .sw-wall { stroke: #45403a; stroke-width: 3; stroke-linecap: round; }
        .sw-axis { stroke: #b5ada4; stroke-width: 1; stroke-dasharray: 4,4; }
        .sw-solid { fill: none; stroke: #456854; stroke-width: 2.6; stroke-linecap: round; }
        .sw-dash { fill: none; stroke: #456854; stroke-width: 2; stroke-dasharray: 6,4; opacity: 0.55; }
        .sw-lobe { fill: #456854; opacity: 0.08; }
        .sw-node { fill: #c06933; stroke: #ffffff; stroke-width: 1.5; }
        .sw-label-l { font-size: 14px; font-weight: 700; fill: #2b2723; font-family: -apple-system, sans-serif; }
        .sw-label-sub { font-size: 12px; fill: #6e675f; font-family: -apple-system, sans-serif; }
        .sw-label-r { font-size: 13.5px; font-weight: 700; fill: #456854; font-family: -apple-system, sans-serif; }
        .sw-tag { font-size: 11px; font-weight: 700; fill: #c06933; text-anchor: middle; font-family: -apple-system, sans-serif; }
      </style>
    </defs>
    <!-- 頂部說明 -->
    <text x="350" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#45403a">【物理圖解一】兩端固定（雙邊封閉）駐波：兩端皆為波節 (N)</text>
    <!-- 左右固定牆壁 -->
    <line x1="150" y1="30" x2="150" y2="335" class="sw-wall" />
    <line x1="550" y1="30" x2="550" y2="335" class="sw-wall" />
    <text x="150" y="350" class="sw-tag">左端固定 x = 0 (波節 N)</text>
    <text x="550" y="350" class="sw-tag">右端固定 x = π (波節 N)</text>

    <!-- Row 1: n = 1 -->
    <line x1="150" y1="68" x2="550" y2="68" class="sw-axis" />
    <path d="M 150 68 C 294 28, 406 28, 550 68 C 406 108, 294 108, 150 68 Z" class="sw-lobe" />
    <path d="M 150 68 C 294 28, 406 28, 550 68" class="sw-solid" />
    <path d="M 150 68 C 294 108, 406 108, 550 68" class="sw-dash" />
    <circle cx="150" cy="68" r="5" class="sw-node" />
    <circle cx="550" cy="68" r="5" class="sw-node" />
    <text x="350" y="62" class="sw-tag" fill="#456854">波腹 A</text>
    <text x="20" y="64" class="sw-label-l">n = 1（基音）</text>
    <text x="20" y="82" class="sw-label-sub">1 個波包 (½λ)</text>
    <text x="568" y="73" class="sw-label-r">頻率 1f₀</text>

    <!-- Row 2: n = 2 -->
    <line x1="150" y1="142" x2="550" y2="142" class="sw-axis" />
    <path d="M 150 142 C 222 102, 278 102, 350 142 C 422 182, 478 182, 550 142 C 478 102, 422 102, 350 142 C 278 182, 222 182, 150 142 Z" class="sw-lobe" />
    <path d="M 150 142 C 222 102, 278 102, 350 142 C 422 182, 478 182, 550 142" class="sw-solid" />
    <path d="M 150 142 C 222 182, 278 182, 350 142 C 422 102, 478 102, 550 142" class="sw-dash" />
    <circle cx="150" cy="142" r="5" class="sw-node" />
    <circle cx="350" cy="142" r="5" class="sw-node" />
    <circle cx="550" cy="142" r="5" class="sw-node" />
    <text x="350" y="130" class="sw-tag">N</text>
    <text x="20" y="138" class="sw-label-l">n = 2（偶數泛音）</text>
    <text x="20" y="156" class="sw-label-sub">2 個波包 (1λ)</text>
    <text x="568" y="147" class="sw-label-r">頻率 2f₀（八度）</text>

    <!-- Row 3: n = 3 -->
    <line x1="150" y1="216" x2="550" y2="216" class="sw-axis" />
    <path d="M 150 216 C 198 176, 235 176, 283.3 216 C 331 256, 369 256, 416.7 216 C 465 176, 502 176, 550 216 C 502 256, 465 256, 416.7 216 C 369 176, 331 176, 283.3 216 C 235 256, 198 256, 150 216 Z" class="sw-lobe" />
    <path d="M 150 216 C 198 176, 235 176, 283.3 216 C 331 256, 369 256, 416.7 216 C 465 176, 502 176, 550 216" class="sw-solid" />
    <path d="M 150 216 C 198 256, 235 256, 283.3 216 C 331 176, 369 176, 416.7 216 C 465 256, 502 256, 550 216" class="sw-dash" />
    <circle cx="150" cy="216" r="5" class="sw-node" />
    <circle cx="283.3" cy="216" r="5" class="sw-node" />
    <circle cx="416.7" cy="216" r="5" class="sw-node" />
    <circle cx="550" cy="216" r="5" class="sw-node" />
    <text x="283.3" y="204" class="sw-tag">N</text>
    <text x="416.7" y="204" class="sw-tag">N</text>
    <text x="20" y="212" class="sw-label-l">n = 3（奇數泛音）</text>
    <text x="20" y="230" class="sw-label-sub">3 個波包 (³⁄₂λ)</text>
    <text x="568" y="221" class="sw-label-r">頻率 3f₀</text>

    <!-- Row 4: n = 4 -->
    <line x1="150" y1="290" x2="550" y2="290" class="sw-axis" />
    <path d="M 150 290 C 186 250, 214 250, 250 290 C 286 330, 314 330, 350 290 C 386 250, 414 250, 450 290 C 486 330, 514 330, 550 290 C 514 250, 486 250, 450 290 C 414 330, 386 330, 350 290 C 314 250, 286 250, 250 290 C 214 330, 186 330, 150 290 Z" class="sw-lobe" />
    <path d="M 150 290 C 186 250, 214 250, 250 290 C 286 330, 314 330, 350 290 C 386 250, 414 250, 450 290 C 486 330, 514 330, 550 290" class="sw-solid" />
    <path d="M 150 290 C 186 330, 214 330, 250 290 C 286 250, 314 250, 350 290 C 386 330, 414 330, 450 290 C 486 250, 514 250, 550 290" class="sw-dash" />
    <circle cx="150" cy="290" r="5" class="sw-node" />
    <circle cx="250" cy="290" r="5" class="sw-node" />
    <circle cx="350" cy="290" r="5" class="sw-node" />
    <circle cx="450" cy="290" r="5" class="sw-node" />
    <circle cx="550" cy="290" r="5" class="sw-node" />
    <text x="20" y="286" class="sw-label-l">n = 4（偶數泛音）</text>
    <text x="20" y="304" class="sw-label-sub">4 個波包 (2λ)</text>
    <text x="568" y="295" class="sw-label-r">頻率 4f₀</text>
  </svg>
</div>

弦在位置 $x$、時間 $t$ 的駐波方程式為：
$$y_1 = \\sin(nx) \\cos(\\omega t) \\quad \\{0 \\le x \\le \\pi\\}$$

- **左端點（$x = 0$）**：$\\sin(0) = 0$，恆為靜止不動的**波節（Node, N）**。
- **右端點（$x = \\pi$）**：因為右端也被固定住，振幅必須恆為 $0$，即必須滿足：
  $$\\sin(n\\pi) = 0$$
  回想正弦函數圖形，$\\sin(\\theta) = 0$ 只發生在角度是 $\\pi$ 的整數倍（$\\pi, 2\\pi, 3\\pi, 4\\pi\\dots$）時！
  因此：
  $$n = 1, 2, 3, 4, 5 \\dots \\quad \\text{（所有正整數：奇數倍與偶數倍泛音全部存活！）}$$
- **小數破壞實驗（若 $n = 1.4$）**：右端點 $\\sin(1.4\\pi) \\approx -0.951 \\neq 0$，右端點會脫離固定點 $(\\pi, 0)$ 在空中上下亂甩，無法形成穩定駐波！

---

**二、 單邊封閉、單邊開放駐波（只留奇數倍泛音！）**：
代表樂器：**豎笛（單簧管）**、排笛等「一端吹口封閉、另一端喇叭口開放」的閉管樂器。
- **左端封閉（$x = 0$）**：空氣被管底擋住無法移動，必須是靜止不動的**波節（N，位移為 $0$）**。
- **右端開放（$x = \\pi$）**：管口開放讓空氣自由進出、振動最劇烈，必須是上下張到最大的**波腹（A，波峰或波谷 $|y| = 1$）**！

<div class="piano-card">
  <svg class="piano-svg" viewBox="0 0 740 365" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .cp-pipe { fill: none; stroke: #5a534c; stroke-width: 2.5; stroke-linejoin: round; }
        .cp-axis { stroke: #b5ada4; stroke-width: 1; stroke-dasharray: 4,4; }
        .cp-solid { fill: none; stroke: #456854; stroke-width: 2.6; stroke-linecap: round; }
        .cp-dash { fill: none; stroke: #456854; stroke-width: 2; stroke-dasharray: 6,4; opacity: 0.55; }
        .cp-lobe { fill: #456854; opacity: 0.08; }
        .cp-bad-solid { fill: none; stroke: #b85d43; stroke-width: 2.2; stroke-dasharray: 4,3; }
        .cp-bad-lobe { fill: #b85d43; opacity: 0.06; }
        .cp-node { fill: #c06933; stroke: #ffffff; stroke-width: 1.5; }
        .cp-label-l { font-size: 14px; font-weight: 700; fill: #2b2723; font-family: -apple-system, sans-serif; }
        .cp-label-sub { font-size: 12px; fill: #6e675f; font-family: -apple-system, sans-serif; }
        .cp-label-ok { font-size: 13.5px; font-weight: 700; fill: #456854; font-family: -apple-system, sans-serif; }
        .cp-label-ng { font-size: 13.5px; font-weight: 700; fill: #b85d43; font-family: -apple-system, sans-serif; }
        .cp-tag { font-size: 11px; font-weight: 700; fill: #c06933; text-anchor: middle; font-family: -apple-system, sans-serif; }
      </style>
    </defs>
    <!-- 頂部說明 -->
    <text x="350" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#45403a">【物理圖解二】單邊封閉、單邊開放（閉管）駐波：左端波節 (N)、右端開口必為波腹 (A)</text>

    <!-- Row 1: n = 1 (1/4 lambda) -->
    <path d="M 550 40 L 150 40 L 150 96 L 550 96" class="cp-pipe" />
    <line x1="150" y1="68" x2="550" y2="68" class="cp-axis" />
    <path d="M 150 68 C 294 42, 420 42, 550 42 L 550 94 C 420 94, 294 94, 150 68 Z" class="cp-lobe" />
    <path d="M 150 68 C 294 42, 420 42, 550 42" class="cp-solid" />
    <path d="M 150 68 C 294 94, 420 94, 550 94" class="cp-dash" />
    <circle cx="150" cy="68" r="5" class="cp-node" />
    <text x="542" y="64" class="cp-tag" fill="#456854">波腹 A</text>
    <text x="20" y="64" class="cp-label-l">n = 1（基音）</text>
    <text x="20" y="82" class="cp-label-sub">管長 = ¼λ</text>
    <text x="565" y="73" class="cp-label-ok">✓ 頻率 1f₀（開口為波腹）</text>

    <!-- Row 2: n = 2 (Invalid!) -->
    <path d="M 550 120 L 150 120 L 150 176 L 550 176" class="cp-pipe" stroke-opacity="0.45" />
    <line x1="150" y1="148" x2="550" y2="148" class="cp-axis" />
    <path d="M 150 148 C 294 114, 406 114, 550 148 C 406 182, 294 182, 150 148 Z" class="cp-bad-lobe" />
    <path d="M 150 148 C 294 114, 406 114, 550 148" class="cp-bad-solid" />
    <path d="M 150 148 C 294 182, 406 182, 550 148" class="cp-bad-solid" opacity="0.5" />
    <circle cx="150" cy="148" r="5" class="cp-node" />
    <circle cx="550" cy="148" r="5" fill="#b85d43" stroke="#fff" stroke-width="1.5" />
    <text x="20" y="144" class="cp-label-l" fill="#b85d43">n = 2（偶數倍）</text>
    <text x="20" y="162" class="cp-label-sub">右端變成波節 ✕</text>
    <text x="565" y="145" class="cp-label-ng">✕ 偶數倍 2f₀ 消失！</text>
    <text x="565" y="163" class="cp-label-sub">（違反管口波腹條件）</text>

    <!-- Row 3: n = 3 (3/4 lambda) -->
    <path d="M 550 200 L 150 200 L 150 256 L 550 256" class="cp-pipe" />
    <line x1="150" y1="228" x2="550" y2="228" class="cp-axis" />
    <path d="M 150 228 C 246 192, 320 192, 416.7 228 C 465 246, 505 254, 550 254 L 550 202 C 505 202, 465 210, 416.7 228 C 320 264, 246 264, 150 228 Z" class="cp-lobe" />
    <path d="M 150 228 C 246 192, 320 192, 416.7 228 C 465 246, 505 254, 550 254" class="cp-solid" />
    <path d="M 150 228 C 246 264, 320 264, 416.7 228 C 465 210, 505 202, 550 202" class="cp-dash" />
    <circle cx="150" cy="228" r="5" class="cp-node" />
    <circle cx="416.7" cy="228" r="5" class="cp-node" />
    <text x="416.7" y="216" class="cp-tag">N</text>
    <text x="542" y="224" class="cp-tag" fill="#456854">波腹 A</text>
    <text x="20" y="224" class="cp-label-l">n = 3（奇數泛音）</text>
    <text x="20" y="242" class="cp-label-sub">管長 = ¾λ</text>
    <text x="565" y="233" class="cp-label-ok">✓ 頻率 3f₀（奇數存活）</text>

    <!-- Row 4: n = 5 (5/4 lambda) -->
    <path d="M 550 280 L 150 280 L 150 336 L 550 336" class="cp-pipe" />
    <line x1="150" y1="308" x2="550" y2="308" class="cp-axis" />
    <path d="M 150 308 C 208 272, 252 272, 310 308 C 368 344, 412 344, 470 308 C 499 290, 523 282, 550 282 L 550 334 C 523 334, 499 326, 470 308 C 412 272, 368 272, 310 308 C 252 344, 208 344, 150 308 Z" class="cp-lobe" />
    <path d="M 150 308 C 208 272, 252 272, 310 308 C 368 344, 412 344, 470 308 C 499 290, 523 282, 550 282" class="cp-solid" />
    <path d="M 150 308 C 208 344, 252 344, 310 308 C 368 272, 412 272, 470 308 C 499 326, 523 334, 550 334" class="cp-dash" />
    <circle cx="150" cy="308" r="5" class="cp-node" />
    <circle cx="310" cy="308" r="5" class="cp-node" />
    <circle cx="470" cy="308" r="5" class="cp-node" />
    <text x="310" y="296" class="cp-tag">N</text>
    <text x="470" y="296" class="cp-tag">N</text>
    <text x="542" y="304" class="cp-tag" fill="#456854">波腹 A</text>
    <text x="20" y="304" class="cp-label-l">n = 5（奇數泛音）</text>
    <text x="20" y="322" class="cp-label-sub">管長 = ⁵⁄₄λ</text>
    <text x="565" y="313" class="cp-label-ok">✓ 頻率 5f₀（奇數存活）</text>

    <text x="150" y="356" class="cp-tag">左端封閉管底 x = 0 (必為波節 N)</text>
    <text x="530" y="356" class="cp-tag" fill="#456854">右端開放管口 x = π (必為波腹 A)</text>
  </svg>
</div>

在左端為波節、右端為波腹的條件下，基音（$n=1$）在管長 $\\pi$ 內剛好走完四分之一波長（從 $0$ 爬到第一個波峰 $\\sin(\\frac{\\pi}{2}) = 1$），因此駐波方程式為：
$$y_2 = \\sin\\left(\\frac{n}{2}x\\right) \\cos(\\omega t) \\quad \\{0 \\le x \\le \\pi\\}$$

現在檢查右端開口處（$x = \\pi$）必須為**波腹（最大振幅 $\\pm 1$）**的條件：
$$\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$$
我們把正整數 $n$ 分成「奇數」與「偶數」代進去檢驗：
1. **當 $n = 1, 3, 5, 7\\dots$（奇數倍泛音）**：
   $$\\sin\\left(\\frac{1\\pi}{2}\\right) = 1, \\quad \\sin\\left(\\frac{3\\pi}{2}\\right) = -1, \\quad \\sin\\left(\\frac{5\\pi}{2}\\right) = 1$$
   右端點 $x = \\pi$ 剛好都是振動最大的波腹 $\\implies$ **奇數倍泛音（$1k, 3k, 5k, 7k\\dots$）完美存活！**
2. **當 $n = 2, 4, 6, 8\\dots$（偶數倍泛音）**：
   $$\\sin\\left(\\frac{2\\pi}{2}\\right) = \\sin(\\pi) = 0, \\quad \\sin\\left(\\frac{4\\pi}{2}\\right) = \\sin(2\\pi) = 0$$
   右端點 $x = \\pi$ 竟然變成了完全不動的波節（$0$），違反了開口處必須劇烈振動的物理條件 $\\implies$ **偶數倍泛音（$2k, 4k, 6k\\dots$）全部被消滅！**

---

**三、 兩種駐波決定了下一單元（5-2）的樂器音色配方**：
| 邊界條件類型 | 右端點 $x=\\pi$ 限制 | 數學條件式 | 存活的泛音階數 $n$ | 代表樂器（5-2 實測） |
| :--- | :--- | :--- | :--- | :--- |
| **雙邊封閉（或雙開對稱）** | 固定波節（位移 $= 0$） | $\\sin(n\\pi) = 0$ | $n = 1, 2, 3, 4, 5\\dots$（**奇偶皆有**） | 吉他、鋼琴、**長笛** |
| **單邊封閉、單邊開放** | 自由波腹（振幅 $= 1$） | $\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$ | $n = 1, 3, 5, 7\\dots$（**只有奇數**） | **豎笛（單簧管）** |
      `,
      tasks: [
        "1. 雙邊封閉駐波實驗：在 Desmos 輸入端點 (0, 0), (pi, 0) 與 y_1 = sin(n*x)*cos(6*t) {0 <= x <= pi}。將 n 設為 1, 2, 3, 4，確認不論奇數或偶數，右端點皆牢牢固定在 (pi, 0)。",
        "2. 小數破壞實驗：在雙邊封閉公式中將 n 改為小數 1.4，觀察右端點 x = pi 脫離固定點在空中甩動的現象，驗證非整數倍無法形成駐波。",
        "3. 單邊封閉（左封閉、右開放）駐波實驗：輸入 y_2 = sin((n/2)*x)*cos(6*t) {0 <= x <= pi}。分別將 n 設為奇數 (1, 3, 5) 與偶數 (2, 4)，觀察為什麼只有奇數 n 能讓右端開口 x = pi 成為上下擺動最大的波腹！",
        "4. 奇偶全泛音 vs 純奇數泛音聽感預習：分別試聽奇偶皆有的 tone([220, 440, 660, 880], [0.4, 0.3, 0.2, 0.1]) 與只有奇數倍的 tone([220, 660, 1100, 1540], [0.4, 0.3, 0.2, 0.1])，感受兩者鮮明的音色差異。"
      ],
      formula: `// 1. 雙邊封閉駐波 (兩端皆固定為波節 y=0：奇數與偶數 n 皆成立)
(0, 0), (\\pi, 0)
n = 2                      // 試切換 1, 2, 3, 4 (皆釘死在右端點)，再改 1.4 觀察破壞現象
t = 0
y_1 = \\sin(n \\cdot x) \\cdot \\cos(6t) \\{0 \\le x \\le \\pi\\}

// 2. 單邊封閉、右端開放駐波 (左端 y=0 波節，右端 x=pi 必須為最大振幅波腹)
// 試將 n 切換為奇數 (1, 3, 5) vs 偶數 (2, 4)，觀察右端點 x=pi 的振幅！
y_2 = \\sin\\left(\\frac{n}{2} x\\right) \\cdot \\cos(6t) \\{0 \\le x \\le \\pi\\}

// 3. 聽感預習：奇偶全泛音 (如長笛/弦樂) vs 僅奇數泛音 (如豎笛)
\\operatorname{tone}([1, 2, 3, 4] \\cdot 220, [0.4, 0.3, 0.2, 0.1])   // 奇偶泛音皆有：明亮圓潤
\\operatorname{tone}([1, 3, 5, 7] \\cdot 220, [0.4, 0.3, 0.2, 0.1])   // 只有奇數泛音：木管鼻音`,
      tips: `
- **波節（Node）與波腹（Antinode）**：駐波中振幅恆為 0（完全不動）的點稱為波節；振幅最大（上下擺動最劇烈）的位置稱為波腹。
- **開管與閉管的物理直覺**：長笛雖然兩端開口，但因兩端邊界條件完全對稱（皆為波腹），數學上每一階駐波同樣相差半個波長，因此和兩端固定的弦一樣「奇數、偶數泛音全部都有」；而豎笛一端是吹嘴簧片（視為封閉端波節）、一端是開口（波腹），兩端不對稱，導致偶數倍泛音全部消失，只留下奇數倍泛音！
      `,
      worksheet: {
        title: "學習單：雙邊封閉與單邊封閉駐波邊界條件分析",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_standing_wave_boundary",
            title: "雙邊封閉邊界條件與正整數 n 的關係",
            type: "radio",
            prompt: "在兩端固定的琴弦駐波模型 $y_1 = \\sin(nx)\\cos(\\omega t)\\;\\{0 \\le x \\le \\pi\\}$ 中，為什麼諧波階數 $n$ 可以是任何正整數（$1, 2, 3, 4\\dots$ 奇數與偶數皆可），但不能是 $1.4$ 這樣的小數？",
            options: [
              "因為右端點 x = pi 被固定住（位移必須恆為 0），需滿足 sin(n*pi) = 0，只要 n 是正整數（不論奇偶）皆成立",
              "因為 Desmos 軟體限制滑桿 n 無法輸入小數",
              "因為當 n 是小數時，左端點 x = 0 的 sin(0) 會變成無限大",
              "因為餘弦函數 cos(omega * t) 只有在 n 為整數時才有意義"
            ],
            solution: "解析：\n琴弦兩端點 $(0, 0)$ 與 $(\\pi, 0)$ 被緊緊釘死，代表在 $x=\\pi$ 處位移必須恆為 $0$，即 $\\sin(n\\pi) = 0$。\n因為 $\\sin(\\pi) = \\sin(2\\pi) = \\sin(3\\pi) = \\sin(4\\pi) = 0$，所以只要 $n$ 是正整數（$1, 2, 3, 4\\dots$ 奇數與偶數皆可），都能滿足雙邊封閉的邊界條件；若 $n = 1.4$，右端點會在空中甩動，無法形成駐波。",
            formatAnswer: (ans) => `雙邊封閉駐波邊界條件分析：【${ans}】\n原理解析：右端點 x = pi 固定不動要求 sin(n*pi) = 0，因此所有正整數 n = 1, 2, 3, 4...（奇數與偶數泛音）皆可存在。`
          },
          {
            id: "q2_closed_pipe_odd_harmonics",
            title: "單邊封閉駐波為何只留下「奇數倍泛音」？",
            type: "radio",
            prompt: "像豎笛（單簧管）這類「左端 $x=0$ 封閉（波節）、右端 $x=\\pi$ 開放（必須為振幅最大的波腹）」的樂器，其駐波模型為 $y_2 = \\sin\\left(\\frac{n}{2}x\\right)\\cos(\\omega t)$。\n為了讓右端開口 $x = \\pi$ 滿足最大振幅條件 $\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$，諧波階數 $n$ 只能是哪些數字？",
            options: [
              "只能是奇數（n = 1, 3, 5, 7...），因為偶數會讓 sin(n*pi/2) 變成 0（變成不動的波節）",
              "只能是偶數（n = 2, 4, 6, 8...），因為奇數會讓右端點變成 0",
              "奇數與偶數全部都可以，跟雙邊封閉完全一樣",
              "n 必須是無理數（如 pi 或 sqrt(2)）"
            ],
            solution: "推導過程：\n將右端開口 $x = \\pi$ 代入振幅條件 $\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$：\n- 當 $n = 1, 3, 5, 7\\dots$（奇數）時，$\\sin(\\frac{\\pi}{2})=1, \\; \\sin(\\frac{3\\pi}{2})=-1, \\; \\sin(\\frac{5\\pi}{2})=1$，振幅皆為最大值 $1$（波腹），符合開口條件！\n- 當 $n = 2, 4, 6, 8\\dots$（偶數）時，$\\sin(\\frac{2\\pi}{2}) = \\sin(\\pi) = 0$，右端點變成完全不動的波節，違反開口處空氣劇烈振動的條件。\n因此單邊封閉的管樂器只會產生**奇數倍泛音（$1k, 3k, 5k, 7k\\dots$）**！",
            formatAnswer: (ans) => `單邊封閉駐波奇數泛音推導：【${ans}】\n原理解析：右端開口 x = pi 需滿足 |sin(n*pi/2)| = 1（波腹），僅在 n = 1, 3, 5, 7... 為奇數時成立，偶數倍泛音因 sin 為 0 而消失。`
          }
        ]
      }
    },

    "5-2": {
      id: "5-2",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "自然泛音列與樂器音色合成",
      conceptTitle: "奇偶泛音的聽覺實證：長笛 vs 豎笛",
      modelTitle: "樂器泛音配方、亮度旋鈕與時間音量合體",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/msxzmo955w",
      motivation: `
在上一單元（5-1）我們用三角函數邊界條件證明了兩個關鍵物理結論：
1. **雙邊對稱邊界（如弦樂、開管長笛）**：允許所有正整數諧波 $n = 1, 2, 3, 4, 5\\dots$ 存在，因此**奇數倍與偶數倍泛音全部都有**。
2. **單邊封閉邊界（如閉管豎笛／單簧管）**：右端開口必須是波腹 $\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$，因此**偶數倍泛音消失，只以奇數倍泛音（$n = 1, 3, 5, 7\\dots$）為主**！

當這些整數倍泛音跟基音 $1k$ 疊加在一起時，人耳會將它們融合成單一音高，但**「偶數泛音有沒有存在」、「高次泛音有多強（亮度）」以及「音量隨時間如何衰減（第四章）」**，就決定了我們聽見的是長笛、豎笛還是鋼琴！
現在我們就打開 Desmos 範本親耳驗證這個數學預言！
      `,
      mathModel: `
**一、 實證 5-1 的駐波預言：長笛（奇偶泛音皆強）vs 豎笛（奇數泛音為主）**：
點擊右上角「開啟 Desmos 範本 ↗」（\`msxzmo955w\`），裡面有兩個資料夾，分別對比「單純基音」與「加入前 8 階泛音後的合成音色」：

**1. 📁 資料夾一【長笛】（開管對稱共鳴：奇數與偶數泛音皆飽滿，$k_1 = 440\\text{Hz}$）**：
- 先點亮第一行單音 $\\operatorname{tone}(440, 0.16)$：只有單一正弦波，聽起來是平淡冰冷的電子單音。
- 關掉單音，改點亮下方的 $\\operatorname{tone}(F_1, V_1)$：
  $$F_1 = [k_1, 2k_1, 3k_1, 4k_1, 5k_1, 6k_1, 7k_1, 8k_1, \\; k_1-3, k_1+3, 2k_1-6, 2k_1+6, 3k_1-9, 3k_1+9]$$
  $$V_1 = 0.16 \\cdot [\\mathbf{0.65}, \\; \\mathbf{1.00}, \\; \\mathbf{0.70}, \\; \\mathbf{0.35}, \\; 0.16, 0.08, 0.04, 0.02, \\; 0.05, 0.05, 0.08, 0.08, 0.05, 0.05]$$
- **對應 5-1 的數學觀察**：
  - 看前 4 項音量比例 $[0.65, \\; 1.00, \\; 0.70, \\; 0.35]$：**第 2 階（偶數泛音 $2k_1$，比例 $1.00$）與第 4 階（偶數泛音 $4k_1$，比例 $0.35$）非常飽滿**！正因為偶數與奇數泛音同時存在，長笛聽起來圓潤、明亮且開闊。

**2. 📁 資料夾二【豎笛／單簧管】（單邊封閉共鳴：奇數階強、偶數階微弱，$k_2 = 294\\text{Hz}$）**：
- 同樣先聽第一行單音 $\\operatorname{tone}(294, 0.18)$，再切換聽下方的 $\\operatorname{tone}(F_2, V_2)$：
  $$F_2 = [k_2, 2k_2, 3k_2, 4k_2, 5k_2, 6k_2, 7k_2, 8k_2, \\; k_2-2, k_2+2, 3k_2-6, 3k_2+6]$$
  $$V_2 = 0.18 \\cdot [\\mathbf{1.00}, \\; 0.06, \\; \\mathbf{0.85}, \\; 0.10, \\; \\mathbf{0.45}, \\; 0.06, \\; \\mathbf{0.25}, \\; 0.04, \\; 0.04, 0.04, 0.03, 0.03]$$
- **對應 5-1 的數學觀察**：
  - 仔細看前 8 項的音量比例：
    - **奇數階（第 1, 3, 5, 7 階）**：$\\mathbf{1.00, \\; 0.85, \\; 0.45, \\; 0.25} \\implies$ **能量極強！**
    - **偶數階（第 2, 4, 6, 8 階）**：$0.06, \\; 0.10, \\; 0.06, \\; 0.04 \\implies$ **幾乎接近 $0$！**（真實豎笛僅因音孔與喇叭口散射留有極微量的偶數泛音）。
  - 完美印證 5-1 單邊封閉駐波「只留奇數倍泛音」的結論！這種「缺乏偶數階、奇數階獨大」的頻譜，造就了豎笛獨特的中空木管鼻音！
- **兩個隱藏的聲學巧思**：
  1. **對稱微差共鳴（尾端的 $k \\pm 3$）**：呼應 2-1 的拍頻與三角函數和差化積 $\\sin(2\\pi(k-d)t)+\\sin(2\\pi(k+d)t) = 2\\cos(2\\pi dt)\\sin(2\\pi kt)$，左右微幅偏移讓音準 100% 鎖定在 $k$ 不走音，同時產生如真人吹氣般的自然呼吸起伏。
  2. **防破音安全係數（外層乘 \`0.16\`、\`0.18\`）**：讓各階音量總和保持在 \`1.0\` 以內，避免超過音效卡上限被強制削波（Clipping）破音。

---

**二、 合成器上的「亮度（Brightness）」旋鈕：邊聽音色、邊看疊合波形**：
除了奇偶泛音的差異，合成器玩家最常轉動「**亮度（Brightness）**」旋鈕來改變音色。
所謂調亮度，其實就是用**等比數列 $b^{N-1}$** 一鍵控制高次泛音的強弱，同時改變**疊合出來的波形形狀**：
$$N = [1 \\dots 8], \\quad \\operatorname{tone}\\left(N \\cdot 220, \\; 0.25 \\cdot b^{N - 1}\\right)$$
$$y = \\sum_{n=1}^{8} b^{n-1} \\sin(nx)$$
- **當 $b = 0$（最暗 Dark）**：只有基音 $1k$，圖形是平滑圓潤的正弦波，聲音悶暗柔和。
- **當 $b$ 往 $0.8$ 調大（變亮 Bright）**：高次泛音浮現，座標平面上的合成波變得陡峭、長出鋸齒稜角，聲音也瞬間變得明亮、清脆且有穿透力！
- **核心結論**：**調高次泛音音量 $\\iff$ 改變疊合波形斜率與稜角 $\\iff$ 改變聽覺上的音色與明暗（亮度）！**

---

**三、 第四章 × 第五章合體技：泛音材質 ＋ 時間音量曲線（演奏動作）**：
在合成器裡，第五章的泛音比例決定了樂器的「靜態材質」，若再結合**第四章（4-1 ~ 4-3）的「時間音量函數」**（決定樂器怎麼被演奏），聽感又會產生戲劇性的轉變！

試著把範本中【長笛】或【豎笛】的泛音音量陣列 $V_1$，乘上第四章的時間函數（建立時間滑桿 $t=0$，令 $u = t - \\operatorname{floor}(t)$）：
1. **固定持續音量 $\\operatorname{tone}(F_1, \\; V_1)$**：
   聲音平穩持續，大腦聽起來是**持續吹氣的管樂器或管風琴**。
2. **乘上 4-3 的指數衰減 $\\operatorname{tone}\\left(F_1, \\; V_1 \\cdot (0.5)^{4u}\\right)$**：
   明明泛音陣列 $F_1, V_1$ 完全沒改，但只要乘上指數衰減，原本持續吹奏的長笛聲，瞬間變成**清脆逼真的鋼琴、鐵琴或撥弦古箏**！
3. **乘上 4-1 的鋸齒漸強 $\\operatorname{tone}\\left(F_1, \\; V_1 \\cdot u\\right)$**：
   每一拍音量從 $0$ 慢慢推大，沒有開頭敲擊聲，聽起來就像**緩慢拉弓或吹氣的管弦樂漸強（Swell）**。

> **合成器造音三大支柱總結**：
> 1. **頻率 $k$（第 1~3 章）**：決定**音高**。
> 2. **泛音配比與亮度 $V$（第 5 章）**：決定**波形與材質音色**（如奇偶皆有的長笛 vs 奇數為主的豎笛）。
> 3. **時間音量曲線 $E(t)$（第 4 章）**：決定**演奏方式**（吹奏、拉弓、敲擊、撥弦）。
      `,
      tasks: [
        "1. 長笛（奇偶泛音）vs 豎笛（奇數泛音）實測：點擊右上角「開啟 Desmos 範本 ↗」，在【長笛】與【豎笛】資料夾中，先比較第一行單純基音與下方泛音合成的差別，再觀察 V_1（第 2、3 階皆強）與 V_2（第 1、3、5、7 奇數階強，偶數階極弱）的數值規律。",
        "2. 亮度旋鈕與疊合波形實驗：新增算式 N = [1...8]、tone(N*220, 0.25 * b^(N-1)) 與 y = sum_{n=1}^8 b^(n-1) sin(nx)，拉動滑桿 b（0 到 0.85），同時觀察波形稜角變化與聲音明暗改變。",
        "3. 第四章 × 第五章合體技：在範本中新增時間滑桿 t = 0 與 u = t - floor(t)，將長笛或豎笛的音量乘上指數衰減 tone(F_1, V_1 * (0.5)^(4u))，按下 t 播放，聽聽看管樂器如何一秒變成清脆的敲擊／撥弦樂器！"
      ],
      formula: `// 1. 長笛 8 階泛音合成：奇數與偶數泛音皆飽滿 (Desmos 範本 msxzmo955w)
tone(440, 0.16)   // 對照組：單純 440Hz 基音
k_1 = 440
F_1 = [k_1, 2k_1, 3k_1, 4k_1, 5k_1, 6k_1, 7k_1, 8k_1, k_1-3, k_1+3, 2k_1-6, 2k_1+6, 3k_1-9, 3k_1+9]
V_1 = 0.16 * [0.65, 1.00, 0.70, 0.35, 0.16, 0.08, 0.04, 0.02, 0.05, 0.05, 0.08, 0.08, 0.05, 0.05]
tone(F_1, V_1)

// 2. 豎笛／單簧管：單邊封閉管，奇數階 (1,3,5,7) 極強、偶數階 (2,4,6,8) 極微弱
tone(294, 0.18)   // 對照組：單純 294Hz 基音
k_2 = 294
F_2 = [k_2, 2k_2, 3k_2, 4k_2, 5k_2, 6k_2, 7k_2, 8k_2, k_2-2, k_2+2, 3k_2-6, 3k_2+6]
V_2 = 0.18 * [1.00, 0.06, 0.85, 0.10, 0.45, 0.06, 0.25, 0.04, 0.04, 0.04, 0.03, 0.03]
tone(F_2, V_2)

// 3. 合成器「亮度 (Brightness)」旋鈕 + 疊合波形視覺化
N = [1...8]
b = 0.5   // 亮度滑桿 (設定範圍 0 到 0.85)
tone(N * 220, 0.25 * b^(N - 1))

// 4. 第四章 × 第五章合體技：泛音音色 + 指數衰減敲擊
t = 0
u = t - floor(t)
tone(F_1, V_1 * (0.5)^(4 * u))`,
      tips: `
- **5-1 與 5-2 的完美呼應**：長笛兩端對稱，故 V_1 中偶數階（如第 2 階 1.00）與奇數階都很強；豎笛為單邊封閉管，故 V_2 中奇數階（1.00, 0.85, 0.45, 0.25）極強，偶數階（0.06, 0.10...）幾乎消失！
- **防破音提醒（Clipping）**：在 Desmos 中，若同時播放多個泛音且各階音量總和超過 1.0，波峰會被強制削平產生破音。因此在 V_1、V_2 最外層乘上 0.16、0.18 的安全總音量係數。
- **音色兩大要素**：泛音比例（第 5 章）決定樂器的靜態材質波形；時間音量曲線（第 4 章）則決定樂器是持續吹拉還是瞬間敲擊。
      `,
      worksheet: {
        title: "學習單：奇偶泛音實證、亮度旋鈕與時間音量合體實驗",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_flute_vs_clarinet_harmonics",
            title: "長笛與豎笛的奇偶泛音配比差異（呼應 5-1 駐波邊界）",
            type: "radio",
            prompt: "觀察 Desmos 範本中【長笛】的音量陣列 $V_1$（前四階為 $0.65, 1.00, 0.70, 0.35$）與【豎笛】的音量陣列 $V_2$（前八階為 $1.00, 0.06, 0.85, 0.10, 0.45, 0.06, 0.25, 0.04$），為什麼豎笛的第 2、4、6、8 階（偶數倍泛音）數值都特別小、幾乎接近 0？",
            options: [
              "因為豎笛屬於「單邊封閉、單邊開放」的閉管樂器，由 5-1 駐波邊界條件可知只有奇數倍泛音（1, 3, 5, 7 階）能形成波腹而強烈共鳴",
              "因為豎笛的基音頻率 294Hz 是偶數，所以不能有偶數倍泛音",
              "因為人耳聽不到偶數倍的頻率",
              "因為長笛和豎笛的泛音比例其實完全相同，只是音量大小不同"
            ],
            solution: "解析：\n回顧 5-1 的駐波邊界條件：豎笛（單簧管）吹口端為封閉波節、喇叭口端為開放波腹，滿足 $\\left|\\sin\\left(\\frac{n\\pi}{2}\\right)\\right| = 1$ 的只有**奇數 $n = 1, 3, 5, 7\\dots$**！因此豎笛的能量高度集中在第 1, 3, 5, 7 奇數階泛音（$1.00, 0.85, 0.45, 0.25$），偶數階則極為微弱，形成獨特的溫潤木管音色。",
            formatAnswer: (ans) => `長笛與豎笛奇偶泛音分析：【${ans}】\n原理解析：豎笛為單邊封閉管樂器，駐波邊界條件使奇數階泛音（1, 3, 5, 7 階）強烈共鳴、偶數階泛音幾近消失；長笛則為開管對稱邊界，奇偶泛音皆飽滿。`
          },
          {
            id: "q2_brightness_and_envelope",
            title: "亮度旋鈕、疊合波形與第四章時間音量合體觀察",
            type: "textarea",
            prompt: "在課堂實驗中：\n1. 當我們把高次泛音調強（或調大亮度滑桿 $b$）時，座標平面上的「疊合波形」與聽起來的「聲音明暗」有什麼變化？\n2. 當把長笛泛音 `V_1` 乘上第四章的指數衰減 $(0.5)^{4(t - \\operatorname{floor}(t))}$ 後，為什麼明明泛音比例沒變，聽起來卻從管樂器變成了鋼琴／敲擊樂器？",
            placeholder: "請說明：1. 高次泛音對疊合波形稜角與亮度的影響；2. 持續音量 vs 指數衰減對樂器演奏感之影響...",
            solution: "1. 亮度與疊合波形：高次泛音比例提高時，疊合出來的波形斜率變陡、出現更多皺摺與尖銳稜角，聽覺上音色變得更明亮（Bright）、清脆且具穿透力。\n2. 乘上指數衰減的轉變：持續發聲時像持續吹氣的長笛或風琴；乘上 $(0.5)^{4u}$ 後，每拍開頭瞬間達最大音量並迅速等比消散，大腦便將其辨識為鋼琴、鐵琴或古箏等「敲擊／撥弦樂器」。人耳辨識樂器同時取決於「泛音比例（材質波形）」與「時間音量包絡（演奏方式）」。",
            formatAnswer: (ans) => `亮度波形與時間音量合體實驗觀察：\n${ans}\n\n（核心解析：高次泛音使疊合波形變陡並提升聲音亮度；泛音比例決定材質波形，而第四章的時間音量曲線決定演奏方式是持續吹奏還是瞬間敲擊。）`
          }
        ]
      }
    },

    "5-3": {
      id: "5-3",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "傅立葉合成三大經典波形",
      conceptTitle: "當正弦波疊加成方波、鋸齒波與三角波",
      modelTitle: "三大經典幾何波形之傅立葉級數（Σ 疊加）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/i17uj3bcsy",
      motivation: `
在 5-1 與 5-2 中，我們發現樂器的泛音分成兩大家族：「奇數與偶數泛音皆有（如長笛、弦樂）」以及「只有奇數倍泛音（如單邊封閉的豎笛）」。

十八世紀法國數學家**傅立葉（Joseph Fourier）**提出了一個震撼科學界的定理：
**任何週期性的複雜波形——就算是直角轉彎的「方波」、尖銳如刀齒的「鋸齒波」、或是直線折返的「三角波」——全都可以用最圓潤平滑的正弦波 $\\sin(nx)$ 一層一層疊加拼湊出來！**

這三大幾何波形正是現代電子合成器與 8-bit 電玩音樂（紅白機 Chiptune）最核心的「三大基礎振盪器波形」。現在我們就打開 Desmos 範本，拉動疊加項數滑桿 $m$，親眼見證圓滑的正弦波如何「長出稜角」，並親耳聽見幾何形狀變換帶來的音色奇蹟！
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`i17uj3bcsy\`），最上方有一個共用滑桿 **$m$（疊加的諧波項數）**，下方三個資料夾 \`1\`、\`2\`、\`3\` 分別對應三大經典波形（每次請點開一個資料夾的圖示與喇叭測試）：

---

**一、 📁 資料夾 1：方波（Square Wave）—— 奇數倍泛音 ＋ $\\frac{1}{n}$ 反比衰減**：
- **數學結構**：只取**奇數倍諧波** $N_1 = 1, 3, 5, 7 \\dots (2n-1)$，且第 $N_1$ 倍泛音的振幅剛好是頻率倍數的倒數 $\\frac{1}{N_1}$：
  $$N_1 = 2\\cdot[1\\dots m] - 1$$
  $$y_1 = \\sum_{n=1}^{m} \\frac{1}{2n-1}\\sin\\big((2n-1)x\\big) = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_1, \\; \\frac{0.25}{N_1}\\right)$$
- **視覺與聽覺觀察**：
  - 當 $m = 1$ 時只是單純的圓潤正弦波；當把 $m$ 慢慢拉大（$1 \\to 3 \\to 10 \\to 20$），高頻的小正弦波會把波峰中央壓平、把兩側撐起，最後逼近垂直上下的**矩形方波**！
  - 因為它和 5-1 的閉管樂器一樣**只有奇數倍泛音**，聽起來帶有中空的木管共鳴感，更是經典紅白機（瑪利歐、勇者鬥惡龍）主旋律的招牌電玩音色！

---

**二、 📁 資料夾 2：鋸齒波（Sawtooth Wave）—— 奇偶全泛音 ＋ $\\frac{1}{n}$ 反比衰減**：
- **數學結構**：包含**所有正整數諧波** $N_2 = 1, 2, 3, 4, 5 \\dots$（奇數與偶數倍全部都有），振幅同樣按倒數 $\\frac{1}{n}$ 遞減：
  $$N_2 = [1\\dots m]$$
  $$y_2 = \\sum_{n=1}^{m} \\frac{1}{n}\\sin(nx) = \\sin(x) + \\frac{1}{2}\\sin(2x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{4}\\sin(4x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_2, \\; \\frac{0.2}{N_2}\\right)$$
- **視覺與聽覺觀察**：
  - 隨著 $m$ 拉大，圖形會變成「斜直線緩慢爬升、再垂直瞬間墜落」的**鋸齒狀**！
  - 因為**奇數與偶數泛音無一缺席**，高頻能量極為密集，聽起來比方波更明亮、銳利、充滿金屬穿透力，常被合成器用來模擬**銅管樂器（小號）與小提琴弦樂群**。

---

**三、 📁 資料夾 3：三角波（Triangle Wave）—— 奇數倍泛音 ＋ $\\frac{1}{n^2}$ 平方反比極速衰減**：
- **數學結構**：同樣只取**奇數倍諧波** $N_3 = 1, 3, 5, 7 \\dots$，但振幅以**平方倒數** $\\frac{1}{(2n-1)^2}$（即 $1, \\frac{1}{9}, \\frac{1}{25}, \\frac{1}{49}\\dots$）極速衰減，且圖形正負號交替 $(-1)^{n-1}$：
  $$N_3 = 2\\cdot[1\\dots m] - 1$$
  $$y_3 = \\sum_{n=1}^{m} \\frac{(-1)^{n-1}}{(2n-1)^2}\\sin\\big((2n-1)x\\big) = \\sin(x) - \\frac{1}{9}\\sin(3x) + \\frac{1}{25}\\sin(5x) - \\frac{1}{49}\\sin(7x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_3, \\; \\frac{0.4}{N_3^2}\\right)$$
- **視覺與聽覺觀察**：
  - 只要把 $m$ 拉到 $3$ 或 $4$，圓弧就已經幾乎變成筆直折返的**等腰三角形**！因為 $\\frac{1}{9}, \\frac{1}{25}, \\frac{1}{49}$ 縮小得太快，級數收斂速度極快。
  - 由於高次泛音微乎其微，聽起來非常溫潤柔和、幾乎沒有刺耳的高頻毛邊，聽感介於純音與長笛／陶笛之間。

---

**四、 三大經典合成波形總整理**：
| 經典波形 | 泛音頻率倍數 $N$ | 第 $N$ 倍泛音振幅 | 圖形收斂特徵 | 聽覺音色與代表應用 |
| :--- | :--- | :--- | :--- | :--- |
| **1. 方波（Square）** | 僅奇數倍 $1, 3, 5, 7\\dots$ | $\\frac{1}{N}$（為 $1, \\frac{1}{3}, \\frac{1}{5}\\dots$） | 波峰壓平、兩側陡峭如懸崖 | 中空木管感、經典 8-bit 電玩主音 |
| **2. 鋸齒波（Sawtooth）** | 奇偶皆有 $1, 2, 3, 4\\dots$ | $\\frac{1}{N}$（為 $1, \\frac{1}{2}, \\frac{1}{3}\\dots$） | 斜線上升、瞬間垂直掉落 | 明亮銳利、合成銅管與弦樂群 |
| **3. 三角波（Triangle）** | 僅奇數倍 $1, 3, 5, 7\\dots$ | $\\frac{1}{N^2}$（為 $1, \\frac{1}{9}, \\frac{1}{25}\\dots$） | $m=3$ 即迅速收斂為直線折角 | 溫潤乾淨、柔和低音與長笛音色 |
      `,
      tasks: [
        "1. 方波（資料夾 1）實驗：點開 Desmos 範本（i17uj3bcsy）的資料夾 1，將滑桿 m 從 1 慢慢拉到 20，觀察正弦波如何被削平為方波，並聆聽奇數泛音帶來的 8-bit 電玩音色。",
        "2. 鋸齒波（資料夾 2）實驗：關閉資料夾 1、點開資料夾 2，拉動滑桿 m，觀察奇偶全泛音疊加出的斜坡鋸齒圖形，比較其與方波在「亮度與銳利度」上的聽感差異。",
        "3. 三角波（資料夾 3）實驗：關閉資料夾 2、點開資料夾 3，觀察為何 m 只拉到 3 或 4 圖形就已經非常接近三角形，並聆聽平方反比 (1/N^2) 帶來的柔和音色。"
      ],
      formula: `m=1

N_{1}=2\\cdot\\left[1...m\\right]-1
y_{1}=\\sum_{n=1}^{m}\\frac{1}{2n-1}\\sin\\left(\\left(2n-1\\right)x\\right)
\\operatorname{tone}\\left(220\\cdot N_{1},\\frac{0.25}{N_{1}}\\right)

N_{2}=\\left[1...m\\right]
y_{2}=\\sum_{n=1}^{m}\\frac{1}{n}\\sin\\left(nx\\right)
\\operatorname{tone}\\left(220\\cdot N_{2},\\frac{0.2}{N_{2}}\\right)

N_{3}=2\\cdot\\left[1...m\\right]-1
y_{3}=\\sum_{n=1}^{m}\\frac{\\left(-1\\right)^{n-1}}{\\left(2n-1\\right)^{2}}\\sin\\left(\\left(2n-1\\right)x\\right)
\\operatorname{tone}\\left(220\\cdot N_{3},\\frac{0.4}{N_{3}^{2}}\\right)`,
      tips: `
- **Desmos 乘法小細節**：在 Desmos 中寫數字乘以列表時，必須明確加上乘號 \`2 \\cdot [1...m] - 1\`，否則 \`2[1...m]\` 會被誤判為對數字 2 進行列表索引而報錯。
- **為什麼波形越陡峭、聲音越刺耳明亮？**：從傅立葉級數可以看出，像方波與鋸齒波這樣有「瞬間垂直跳躍（不連續斷崖）」的圖形，背後需要靠大量 $\\frac{1}{n}$ 緩慢衰減的高頻泛音才撐得起來；而三角波只有折角、沒有垂直斷崖，高頻泛音按 $\\frac{1}{n^2}$ 極速消失，因此聲音溫和許多。
      `,
      worksheet: {
        title: "學習單：傅立葉級數與三大經典合成波形實驗",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_fourier_three_waves",
            title: "三大經典波形的泛音結構與振幅衰減規律",
            type: "radio",
            prompt: "比較 Desmos 範本中「方波 $y_1$」、「鋸齒波 $y_2$」與「三角波 $y_3$」的傅立葉級數算式，下列關於三者泛音組成的敘述何者正確？",
            options: [
              "方波與三角波都只含「奇數倍泛音 (1, 3, 5...)」，但方波振幅按 1/N 衰減、三角波按 1/N^2 極速衰減；鋸齒波則包含「所有整數倍泛音 (1, 2, 3...)」",
              "三種波形都包含所有奇數與偶數倍泛音，只是基音頻率不同",
              "鋸齒波只含偶數倍泛音 (2, 4, 6...)，完全沒有基音",
              "三角波的高次泛音振幅比方波還要大，因此聽起來最刺耳"
            ],
            solution: "解析：\n1. **方波（資料夾 1）**：$N_1 = 2[1\\dots m]-1 = [1, 3, 5\\dots]$（僅奇數倍），振幅為 $\\frac{1}{N_1}$。\n2. **鋸齒波（資料夾 2）**：$N_2 = [1\\dots m] = [1, 2, 3, 4\\dots]$（奇偶全泛音），振幅為 $\\frac{1}{N_2}$。\n3. **三角波（資料夾 3）**：$N_3 = 2[1\\dots m]-1 = [1, 3, 5\\dots]$（僅奇數倍），但振幅為平方反比 $\\frac{1}{N_3^2}$（$1, \\frac{1}{9}, \\frac{1}{25}\\dots$）。",
            formatAnswer: (ans) => `三大經典波形泛音結構分析：【${ans}】\n原理解析：方波（奇數倍、1/N）與三角波（奇數倍、1/N^2）皆僅含奇數諧波，鋸齒波（所有整數倍、1/N）則含奇偶全部諧波。`
          },
          {
            id: "q2_fourier_convergence_timbre",
            title: "級數項數 m、波形陡峭度與音色聽感觀察",
            type: "textarea",
            prompt: "在 Desmos 範本中拉動滑桿 $m$（從 $1$ 拉到 $20$）並輪流試聽三個資料夾：\n1. 當 $m$ 越來越大時，方波與鋸齒波的圖形邊緣與聽起來的聲音有什麼變化？\n2. 為什麼「三角波（資料夾 3）」在 $m=3$ 時圖形就幾乎已經是三角形了，而且聽起來比方波、鋸齒波柔和非常多？請從分母的次方（$\\frac{1}{N}$ vs $\\frac{1}{N^2}$）解釋原因。",
            placeholder: "請描述：1. m 增加時的圖形與聽感變化；2. 從 1/N 與 1/N^2 解釋三角波收斂快且音色柔和的原因...",
            solution: "1. 當 $m$ 越大時，疊加進去的高頻正弦波越多，方波與鋸齒波的垂直邊緣變得越來越陡峭平整，聽覺上高頻泛音增加，聲音變得更明亮、清脆且帶有電玩合成器的銳利感。\n2. 三角波的振幅分母是平方 $(2n-1)^2$，第 3、5、7 倍泛音的音量只剩下 $\\frac{1}{9} \\approx 0.11$、$\\frac{1}{25} = 0.04$、$\\frac{1}{49} \\approx 0.02$，衰減速度遠快於方波的 $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}$。因此只要前 3 項就幾乎決定了整個三角形狀，且因高頻泛音極微弱，聽起來格外溫潤柔和。",
            formatAnswer: (ans) => `傅立葉級數項數 m 與音色聽感觀察：\n${ans}\n\n（核心解析：m 越大高頻諧波越多、波形越陡峭、音色越亮；三角波因振幅按 1/N^2 平方反比極速衰減，高次泛音極微弱，故圖形迅速收斂且聽感溫和圓潤。）`
          }
        ]
      }
    },

    "supp-relay": {
      id: "補充 3",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "循環低音伴奏與長曲分段接力架構",
      conceptTitle: "同餘循環伴奏與多軌大隊接力",
      modelTitle: "同餘查表循環與分段時間位移（Relay Playback）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/eodq3asol4",
      motivation: `
當學生想在期末專題挑戰自己喜歡的流行歌或動漫名曲（例如長達 90 小節的《春日影》）時，會遇到兩個最常見的實戰問題：

1. **怎麼加上左手低音伴奏？**
   很多流行歌的伴奏低音，從頭到尾其實只有 4 個音在無限循環（例如經典卡農進行：$C \\to G \\to A \\to F$）。用高一學過的「同餘（$\\operatorname{mod}$）」，就能讓索引永遠在 $1, 2, 3, 4$ 之間自動打轉，不必手動複製貼上幾百次！
2. **整首歌上千拍，塞在同一個列表裡電腦大卡頓怎麼辦？**
   如果把 1000 顆音符全塞進同一個列表 $L$，不僅打錯一個音根本找不到，瀏覽器還會嚴重掉幀。最聰明的工程做法是**「大隊接力（Relay Playback）」**：把長曲切成多段（每段 $60 \\sim 72$ 拍），配合時間平移 $t - \\text{offset}$ 輪流接棒！
      `,
      mathModel: `
**一、 同餘循環低音伴奏（$\\operatorname{mod}$ 無限循環查表）**：
定義 4 拍經典低音循環陣列（以半音位移為例）：
$$C_{\\text{bass}} = [-12, -5, -3, -8] \\quad (C \\to G \\to A \\to F)$$
搭配同餘運算 $\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1$：
$$B(t) = C_{\\text{bass}}\\big[\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1\\big]$$
$$\\operatorname{tone}\\big(f(B(t)), \\; 0.3\\big)$$
- 因為 $\\operatorname{mod}(\\operatorname{floor}(t), 4)$ 的餘數永遠是 $0, 1, 2, 3$，加 $1$ 後剛好循環取出陣列的第 $1, 2, 3, 4$ 個音，與主旋律共用同一個時間滑桿 $t$ 就能雙聲部合奏！

---

**二、 長曲多段接力架構（Relay Playback，以《春日影》範本 \`eodq3asol4\` 為例）**：
點擊右上角「開啟 Desmos 範本 ↗」（\`eodq3asol4\`），打開【聲音】與【上聲調音符】資料夾，可以看到長曲的分段接力寫法：
$$t = 0$$
$$\\operatorname{tone}\\left(L_{111}[t], \\; T_{111}[t]\\right)$$
$$\\operatorname{tone}\\left(L_{112}[t - 72], \\; T_{112}[t - 72]\\right)$$
$$\\operatorname{tone}\\left(L_{113}[t - 144], \\; T_{113}[t - 144]\\right)$$
$$\\operatorname{tone}\\left(L_{114}[t - 216], \\; T_{114}[t - 216]\\right)$$
$$\\dots$$
- **接力原理（函數水平平移）**：
  - 第一段 $L_{111}$ 長度為 $72$ 拍，在 $t = 1 \\sim 72$ 時發聲；當 $t > 72$ 超出列表長度時，Desmos 會自動將其靜音。
  - 第二段 $L_{112}[t - 72]$ 則是把索引減去 $72$：在 $t \\le 72$ 時索引 $\\le 0$ 自動靜音；當時間跑到 $t = 73$ 的瞬間，$73 - 72 = 1$，剛好從 $L_{112}$ 的第 $1$ 顆音無縫接棒！
  - 後續每一段的偏移量（$72, 144, 216, 288\\dots$），就是前面所有段落拍數的累加總和。
      `,
      tasks: [
        "1. 測試同餘循環伴奏：在空白 Desmos 輸入 C_bass = [-12, -5, -3, -8] 與 B = C_bass[mod(floor(t), 4) + 1]，拉動 t 觀察數值如何在 4 個低音之間無限循環。",
        "2. 觀摩《春日影》分段接力架構：點擊右上角「開啟 Desmos 範本 ↗」（eodq3asol4），展開【聲音】資料夾，觀察 L_111[t]、L_112[t-72]、L_113[t-144] 的時間偏移規律。",
        "3. 實戰效能體驗：按下時間 t 播放《春日影》，比較「將音符列表資料夾展開」與「將資料夾全部收合」時的播放順暢度差異。"
      ],
      formula: `t=0

C_{bass}=\\left[-12,-5,-3,-8\\right]
B=C_{bass}\\left[\\operatorname{mod}\\left(\\operatorname{floor}\\left(t\\right),4\\right)+1\\right]
\\operatorname{tone}\\left(440\\cdot2^{\\frac{B}{12}},0.3\\right)

\\operatorname{tone}\\left(L_{111}\\left[t\\right],T_{111}\\left[t\\right]\\right)
\\operatorname{tone}\\left(L_{112}\\left[t-72\\right],T_{112}\\left[t-72\\right]\\right)
\\operatorname{tone}\\left(L_{113}\\left[t-144\\right],T_{113}\\left[t-144\\right]\\right)`,
      tips: `
- **為什麼播放長曲時一定要「收合資料夾」？**：當資料夾展開時，瀏覽器必須即時繪製列表中上百個元素的數學排版，容易導致聲音卡頓掉拍；把長列表放進資料夾並收合起來，電腦就能流暢播放整首百拍長曲！
- **同餘索引 +1 小提醒**：Desmos 的 \`mod(x, 4)\` 輸出範圍是 \`0, 1, 2, 3\`，而 Desmos 列表從第 \`1\` 項開始編號，因此記得在後面加上 \`+ 1\`。
      `
    },

// ==========================================
    // 六、視覺音遊與演算法
    // ==========================================
    "6-1": {
      id: "6-1",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "巴哈《螃蟹卡農》幾何對稱變換",
      conceptTitle: "當音樂遇見線對稱：正向、反向（逆行）與倒影",
      modelTitle: "旋律陣列的水平翻轉與鉛直翻轉模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/keqwpyt1lw",
      motivation: `
如果把一段旋律的「拍子 $X$」當作橫坐標、「半音高度 $S_1$」當作縱坐標，整首曲子就是坐標平面上的一組幾何點陣 $(X, S_1)$！
既然旋律是幾何圖形，我們能不能把高中數學的**「線對稱變換（左右水平翻轉、上下鉛直翻轉）」**直接拿來變魔術？

十八世紀音樂之父**巴哈（J. S. Bach）**在《音樂的奉獻》中寫下了傳奇的**《螃蟹卡農（Crab Canon）》**：
同一份樂譜，第一個人從左往右正著彈（正向），第二個人像螃蟹一樣從最後一個音往左倒著彈（反向／逆行），兩條旋律不僅各自好聽，**同時合奏在一起竟然每一拍都是完美和諧的三度、六度與八度和聲！**
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`keqwpyt1lw\`，標題：**正反向音樂**），最外層定義了 $16$ 拍的對位旋律 $S_1$ 與橫坐標 $X = [1\\dots 16]$：
$$f(x) = 263\\cdot 2^{\\frac{x}{12}}, \\quad X = [1\\dots 16]$$
$$S_1 = [0, 4, 7, 9, 7, 5, 4, 2, 14, 7, 9, 11, 0, 4, 7, 12]$$

範本內有三個資料夾，分別對應三種幾何對稱變換：

---

**一、 📁 資料夾【正向】：原始旋律 $S_1[t]$**
- **座標點陣與動態游標**：$(X, S_1)$ 畫出全部 $16$ 顆音符位置，$(t, S_1[t])$ 則標示目前正在發聲的第 $t$ 顆音：
  $$\\operatorname{tone}\\left(f\\left(S_1[t]\\right), \\; 0.3\\right)$$

---

**二、 📁 資料夾【反向】：左右水平翻轉（逆行 Retrograde，$S_1[17 - t]$）**
- **數學原理**：將長度為 $16$ 的陣列索引反轉為 $[16, 15 \\dots 1]$，第 $t$ 拍改取倒數第 $t$ 個音，索引公式為 **$17 - t$**（因為 $t + (17 - t) = 17$，以 $x = 8.5$ 為鉛直對稱軸左右翻轉）：
  $$S_2 = S_1\\big[[16, 15 \\dots 1]\\big]$$
  $$\\left(X, S_2\\right), \\quad \\left(t, S_1[17 - t]\\right)$$
  $$\\operatorname{tone}\\left(f\\left(S_1[17 - t]\\right), \\; 0.3\\right)$$
- **螃蟹卡農雙軌合奏**：同時打開【正向】與【反向】兩個資料夾的喇叭並播放 $t$（將 $t$ 範圍設為 $1 \\sim 16$，步長 $1$），你會親眼看到兩個游標一左一右在中央 $t = 8, 9$ 交會，並聽見正反兩條旋律合奏出的和諧雙聲部！

---

**三、 📁 資料夾【倒影】：上下鉛直翻轉（Inversion，$12 - S_1$）**
- **數學原理**：畫出水平對稱軸 **$y = 6$**，將原本的音高對 $y = 6$ 做上下鏡射（滿足 $\\frac{S_1 + S_3}{2} = 6 \\implies S_3 = 12 - S_1$）：
  $$y = 6, \\quad S_3 = 12 - S_1$$
  $$\\left(X, S_3\\right), \\quad \\left(t, S_3[t]\\right)$$
  $$\\operatorname{tone}\\left(f\\left(S_3[t]\\right), \\; 0.3\\right)$$
- **聽覺與幾何效果**：原本往上爬升的音階全部變成往下俯衝，原本的高音變成低音，形成奇妙的鏡像旋律！
      `,
      tasks: [
        "1. 視覺化折線設定：點開 Desmos 範本（keqwpyt1lw），將滑桿 t 的範圍設為 1 到 16（步長 1），並長按 (X, S_1)、(X, S_2)、(X, S_3) 左側圓圈打開「線條（Lines）」，清楚觀察三條旋律折線的對稱關係。",
        "2. 螃蟹卡農正反合奏：同時開啟【正向】與【反向】資料夾的發聲開關（暫時關閉【倒影】），按下 t 播放，觀察兩顆發聲點如何左右交會、同時聆聽正反合奏的和諧對位。",
        "3. 上下倒影鏡射實驗：切換開啟【倒影】資料夾，觀察綠色直線 y = 6 如何作為 (X, S_1) 與 (X, S_3) 的上下對稱軸，並聆聽旋律上下翻轉後的聽感變化。"
      ],
      formula: `f\\left(x\\right)=263\\cdot2^{\\frac{x}{12}}
t=1
X=\\left[1...16\\right]
S_{1}=\\left[0,4,7,9,7,5,4,2,14,7,9,11,0,4,7,12\\right]

\\left(X,S_{1}\\right)
\\left(t,S_{1}\\left[t\\right]\\right)
\\operatorname{tone}\\left(f\\left(S_{1}\\left[t\\right]\\right),0.3\\right)

S_{2}=S_{1}\\left[\\left[16,15...1\\right]\\right]
\\left(X,S_{2}\\right)
\\left(t,S_{1}\\left[17-t\\right]\\right)
\\operatorname{tone}\\left(f\\left(S_{1}\\left[17-t\\right]\\right),0.3\\right)

y=6
S_{3}=12-S_{1}
\\left(X,S_{3}\\right)
\\left(t,S_{3}\\left[t\\right]\\right)
\\operatorname{tone}\\left(f\\left(S_{3}\\left[t\\right]\\right),0.3\\right)`,
      tips: `
- **打開折線連線更清楚**：在 Desmos 中長按點陣 \`(X, S_1)\` 左側的顏色圓圖示，把「線條（Lines）」開關打開，16 顆音符就會自動連成直觀的旋律折線圖！
- **為什麼反向索引用 17 - t 而不是 16 - t？**：因為 Desmos 列表從第 1 項編號到第 16 項，當 $t = 1$ 時要取最後一項第 $16$ 項（$17 - 1 = 16$），當 $t = 16$ 時要取第一項第 $1$ 項（$17 - 16 = 1$），首尾索引相加恆為 $N + 1 = 17$。
      `,
      worksheet: {
        title: "學習單：巴哈《螃蟹卡農》與旋律線對稱變換",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_retrograde_index",
            title: "水平翻轉（逆行）的陣列索引推導",
            type: "radio",
            prompt: "在 6-1 的 Desmos 範本中，原始旋律陣列 $S_1$ 共有 $16$ 顆音符（編號為第 $1$ 項到第 $16$ 項）。為什麼在【反向】資料夾中，要讓旋律從最後一顆音倒著彈回來，索引必須寫成 $S_1[17 - t]$，而不是 $S_1[16 - t]$？",
            options: [
              "因為當 t = 1 時，17 - 1 = 16 才能剛好取到最後一項（第 16 項）；當 t = 16 時，17 - 16 = 1 才能剛好取到第 1 項",
              "因為這首歌有 17 個音符",
              "因為 17 是質數，聲音比較好聽",
              "寫 16 - t 與 17 - t 取出來的音符完全一模一樣"
            ],
            solution: "解析：\n對於長度為 $N$（編號 $1 \\sim N$）的列表，第 $1$ 項與第 $N$ 項對稱、第 $2$ 項與第 $N-1$ 項對稱，對稱的兩項編號相加恆等於 **$N + 1$**。\n此處 $N = 16$，故 $t$ 的對稱項為 $16 + 1 - t = 17 - t$（若寫成 $16 - t$，當 $t=16$ 時會變成第 $0$ 項而無定義靜音）。",
            formatAnswer: (ans) => `逆行索引 17 - t 推導分析：【${ans}】\n原理解析：長度為 16 的列表首尾索引相加恆為 16 + 1 = 17，因此第 t 拍對應倒數第 17 - t 項。`
          },
          {
            id: "q2_inversion_axis",
            title: "鉛直翻轉（倒影）的對稱軸與中點公式",
            type: "text",
            prompt: "在【倒影】資料夾中，我們以水平線 $y = 6$ 作為上下翻轉的對稱軸，因此新音高寫成 $S_3 = 12 - S_1$（因為 $\\frac{S_1 + S_3}{2} = 6$）。\n如果今天我們想改以水平線 $y = 5$ 作為上下對稱軸，請問算式 $S_3 = K - S_1$ 中的常數 $K$ 應該改成多少？（請填整數）：",
            placeholder: "請輸入整數，例如：8",
            expected: "10",
            solution: "推導過程：\n原點 $(x, S_1)$ 與對稱點 $(x, S_3)$ 以水平線 $y = 5$ 為對稱軸，代表兩點縱坐標的中點在 $y = 5$ 上：\n$$\\frac{S_1 + S_3}{2} = 5 \\implies S_1 + S_3 = 10 \\implies S_3 = 10 - S_1$$\n因此常數 $K = 10$。",
            formatAnswer: (ans) => `鉛直翻轉對稱軸常數計算：${ans}（標準答案：10）\n推導說明：對稱軸為 y = 5 時，由中點公式 (S_1 + S_3) / 2 = 5 可得 S_3 = 10 - S_1，故常數為 10。`
          }
        ]
      }
    },

    "6-2": {
      id: "6-2",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "Desmos Audio Trace（Alt + T）函數圖形音訊追蹤",
      conceptTitle: "不用寫 tone 函數，讓函數曲線自己唱歌！",
      modelTitle: "Desmos 聽圖音域規約與高斯階梯樂譜映射",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/oiamjxssnc",
      motivation: `
前面五章我們都是用 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 讓 Desmos 發聲。
但其實 Desmos 原本就內建了一個為視障學習者設計的超酷無障礙功能——**「聽取圖像（Audio Trace）」**！
只要點選任何一條函數算式，按下鍵盤的 **\`Alt + T\`**（Mac 為 **\`Option + T\`**），再按下 **\`H\`**（Hear Graph），Desmos 就會從左到右掃描整條函數曲線，把 $y$ 坐標的高低直接「唱」出來！

當我們摸透它的音域規律，並結合第四章學過的高斯取整函數 $\\operatorname{floor}(x)$，就能直接把函數圖形變成會唱歌的階梯樂譜！
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`oiamjxssnc\`，標題：**聲音基礎(可視化函數)**），依序探索三個資料夾：

---

**一、 📁 資料夾 (一) 圖案的聲音：基本函數聽感與 $E_3 \\sim E_4$ 音域規約**
1. **聽聽看各種函數長相的聲音**（點選算式後按 \`Alt + T\` $\\to$ 按 \`H\`）：
   - $y = x$：斜直線上升，音高均勻往上滑音。
   - $y = \\sin x$：平滑波浪，音高上下擺盪如警笛。
   - $y = \\frac{3}{\\sin x}$：遇到漸近線時衝向極高音與極低音斷崖。
   - $y = 2^x$：指數曲線，前半段平緩低音，後半段急速飆高。
   - $y = |2 - |2 - |2 - |2 - |2 - x|||||$：連續絕對值折線，音高規律上下折返。
   - $y = \\sin\\left(x^{\\frac{x}{6}}\\right)$：頻率越來越密集的加速震盪波！
2. **Desmos 聽圖的黃金音域定律**：
   - 經實測，Desmos 聽取圖像的可見縱軸音域固定對應為 **$E_3 \\sim E_4$（剛好一個八度，共 12 個半音）**！
   - 因此，只要打開右上角扳手設定，將顯示出來的 **$y$ 軸上下邊界切齊設為 $0$ 到 $12$**（分成 12 等分），**每 $1$ 單位高度就剛好代表 $1$ 個半音**：
     $$0=E, \\; 1=F, \\; 2=F^\\sharp, \\; 3=G, \\; 4=G^\\sharp, \\; 5=A, \\; 6=A^\\sharp, \\; 7=B, \\; 8=C, \\; 9=C^\\sharp, \\; 10=D, \\; 11=D^\\sharp, \\; 12=E$$
   - 例如 $E$ 大調音階 $E, F^\\sharp, G^\\sharp, A, B, C^\\sharp, D^\\sharp, E$ 對應的高度正好就是 $[0, 2, 4, 5, 7, 9, 11, 12]$。

---

**二、 📁 資料夾 (二) 利用高斯函數（$\\operatorname{floor}$）做一般音階**
- 一般連續曲線唱出來是滑音，要唱出「一顆一顆分明」的音符，就必須讓 $y$ 保持水平階梯狀：
  $$y = m \\cdot \\operatorname{floor}(nx)$$
- 其中 **$n$ 是音符寬度的倒數**：把 $n$ 調大（例如 $n = 12$ 或 $16$），每一階水平線就會變窄，同一個螢幕寬度內就能容納更多顆音符！

---

**三、 📁 資料夾 (三) 音樂範例欣賞：階梯函數查表演奏名曲**
將半音高度存成列表 $a, b, c$，再把高斯函數 $\\operatorname{floor}(16x)$ 當作列表索引：
$$y = a\\big[\\operatorname{floor}(16x)\\big]$$
- 範本內建三首經典名曲，點選對應的 $y$ 算式後按 \`Alt + T\` $\\to$ \`H\` 即可聆聽：
  1. **$y = a[\\operatorname{floor}(16x)]$**：《rickroll》
  2. **$y = b[\\operatorname{floor}(16x)]$**：《殘酷天使的行動綱領》
  3. **$y = c[\\operatorname{floor}(12x)]$**：陳奕迅《淘汰》
- **神級斷音技巧（$t = -1000$）**：
  - 在陣列中穿插變數 $t$，當設定 **$t = -1000$** 時，該拍的函數值會被丟到畫面底部可見範圍（$0 \\sim 12$）之外，Audio Trace 掃描到畫面外就會**自動靜音**，形成乾淨俐落的斷音與休止符！
  - 你也可以試著把範本裡的 $t = 1$ 改回 $t = -1000$，比較「連音不斷開」與「正常斷音休止」的聽感差別！
      `,
      tasks: [
        "1. 體驗函數曲線的聲音：開啟 Desmos 範本（oiamjxssnc），展開資料夾 (一)，點選 y = sin(x) 或連續絕對值算式，按鍵盤 Alt + T（Mac 按 Option + T）再按 H 鍵，聽聽看函數圖形的聲音。",
        "2. 測試高斯階梯密度 n：展開資料夾 (二)，點選 m*floor(nx) 並調整滑桿 n，觀察 n 變大時螢幕內階梯數量的變化。",
        "3. 名曲聽圖與 t = -1000 斷音實驗：展開資料夾 (三)，確認右上角扳手設定的 Y 軸範圍切齊 0 <= y <= 12。將 t = 1 改為 t = -1000，分別點選 rickroll (a)、殘酷天使 (b)、淘汰 (c) 的 y 算式，按 Alt + T 再按 H 聆聽！"
      ],
      formula: `y=a\\left[\\operatorname{floor}\\left(16x\\right)\\right]
t=-1000
a=\\left[3,t,5,t,8,t,5,t,12,12,12,t,12,12,12,10,10,t,t,t,t,3,t,5,t,8,t,5,t,10,10,10,t,10,10,10,t,8,8,t,t,t,t,3,t,5,t,8,t,5,t,8,8,8,8,t,10,10,t,7,7,7,t,5,t,3,t,3,t,10,10,10,10,t,8,8,8,8,8,8,8,8\\right]`,
      tips: `
- **畫面視窗 Y 軸務必切齊 0 到 12**：Audio Trace 是根據「目前螢幕顯示的上下邊界」來決定音高的！請點右上角扳手（圖形設定），將 Y 軸設為 \`0 <= y <= 12\`、X 軸設為 \`0 <= x <= 6\`，音準才會 100% 精準對應半音。
- **快捷鍵口訣**：點一下要聽的函數算式 $\\to$ 按 \`Alt + T\`（Mac 為 \`Option + T\`）開啟音訊追蹤面板 $\\to$ 按 \`H\` 開始播放！
      `,
      worksheet: {
        title: "學習單：Desmos Audio Trace 聽圖規約與階梯函數映射",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_audio_trace_y_axis",
            title: "Y 軸 0 到 12 的半音對應規約",
            type: "radio",
            prompt: "在 Desmos 的 Audio Trace（`Alt + T`）聽圖功能中，畫面可見的縱軸（Y 軸）音域剛好跨越一個八度（$E_3 \\sim E_4$，共 12 個半音）。為什麼我們要把右上角設定中的 Y 軸範圍精確切齊在 $0 \\le y \\le 12$？",
            options: [
              "因為把一個八度（12 個半音）剛好分成 12 等分，每 1 單位的整數高度（0, 1, 2... 12）就正好對應鋼琴上的 1 個半音，不會走音",
              "因為 Desmos 的 Y 軸最大只能輸入到 12",
              "因為 12 是偶數，電腦比較好畫圖",
              "Y 軸放大或縮小完全不會影響聽圖出來的音高"
            ],
            solution: "解析：\nDesmos 的 Audio Trace 會將「目前畫布視窗的下邊界到上邊界」線性對應到 $E_3 \\sim E_4$ 的一個八度（12 個半音）。\n因此當我們把 Y 軸上下限鎖定為 $0$ 到 $12$ 時，高度差 $1$ 單位就剛好等於 $1$ 個半音：$0=E, 1=F, 2=F^\\sharp, 3=G \\dots 12=E$。",
            formatAnswer: (ans) => `Audio Trace Y 軸 0~12 設定原理解析：【${ans}】\n原理解析：可見視窗縱軸對應一個八度（12 半音），切齊 0 到 12 可使每 1 單位高度精準對應 1 個半音。`
          },
          {
            id: "q2_audio_trace_floor_and_mute",
            title: "高斯階梯參數 n 與 t = -1000 斷音技巧",
            type: "textarea",
            prompt: "觀察資料夾 (三) 的算式 $y = a[\\operatorname{floor}(16x)]$ 與變數 $t$：\n1. 為什麼在括號裡面要把 $x$ 乘上 $16$（寫成 $\\operatorname{floor}(16x)$），而不是只寫 $\\operatorname{floor}(x)$？\n2. 把陣列中的 $t$ 設為 $-1000$（對比設為 $t = 1$），為什麼能產生「斷音與休止符」的效果？",
            placeholder: "請說明：1. 乘上 16 對階梯寬度與螢幕容納音符數的影響；2. t = -1000 超出畫面範圍時的發聲變化...",
            solution: "1. 若只寫 $\\operatorname{floor}(x)$，每 $1$ 單位寬度才換一顆音，螢幕寬度 $0 \\sim 6$ 只能放下 $6$ 顆音；乘上 $16$ 後，水平壓縮為原本的 $\\frac{1}{16}$，每 $1$ 單位寬度就能容納 $16$ 顆音符，整段旋律都能塞進同一個畫面裡一次唱完！\n2. 當 $t = -1000$ 時，函數值遠遠低於畫面下邊界（$y = 0$），Audio Trace 掃描到超出畫面可見範圍的點時會自動靜音，因此能做出乾淨的斷音與休止符；若設為 $t = 1$，則該拍會發出 $y=1$（$F$ 音）的聲音。",
            formatAnswer: (ans) => `階梯壓縮係數與畫面外靜音技巧觀察：\n${ans}\n\n（核心解析：floor(16x) 將階梯寬度縮小為 1/16 以在畫面內容納整首旋律；t = -1000 使函數值移出可見視窗 0~12 之外，觸發 Audio Trace 自動靜音以達成斷音與休止符。）`
          }
        ]
      }
    },

    "6-3": {
      id: "6-3",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
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

    "6-4": {
      id: "6-4",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
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

    "6-5": {
      id: "6-5",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
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
