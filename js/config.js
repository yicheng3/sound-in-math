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
      units: ["2-1", "2-2", "2-3", "2-4"]
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
      units: ["5-1", "5-2", "5-3"]
    },
    {
      id: "module-6",
      title: "六、視覺音遊與演算法",
      units: ["6-1", "6-2", "6-3", "6-4", "6-5"]
    },
    {
      id: "module-supp",
      title: "延伸補充單元",
      units: ["supp-theory", "supp-just", "supp-relay"]
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
      category: "五、音色與物理",
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
        }
      ]
    },
    {
      category: "六、視覺音遊與演算法",
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
          name: "循環上升音樂",
          unitKey: "6-3",
          unitLabel: "6-3 薛帕德無限音階（Shepard Tone）",
          desc: "6 個八度層同餘爬升與鐘形音量濾鏡，含兩資料夾：1. 上升滑音、2. 上升半音",
          url: "https://www.desmos.com/calculator/mgwmtlv53l"
        },
        {
          name: "轉移矩陣與音樂",
          unitKey: "6-4",
          unitLabel: "6-4 演算法自動作曲（隨機取樣與機率轉移）",
          desc: "含兩資料夾：1. 五聲音階隨機作曲（發聲演奏）、2. 五階轉移矩陣（馬可夫鏈演化）",
          url: "https://www.desmos.com/calculator/a2aqrsf1gn"
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
    },
    {
      category: "延伸補充單元",
      items: [
        {
          name: "小星星",
          unitKey: "supp-theory",
          unitLabel: "補充 1 樂理基礎入門：音名、唱名、全半音與簡譜",
          desc: "包含 C 大調音符 (C 到 B) 與小星星三版本簡譜轉譯",
          url: "https://www.desmos.com/calculator/4actxqj5mj"
        },
        {
          name: "春日影(90小節)",
          unitKey: "supp-relay",
          unitLabel: "補充 3 循環低音伴奏與長曲分段接力架構",
          desc: "17 段接力長曲（L_111[t], L_112[t-72]...）與同餘循環低音",
          url: "https://www.desmos.com/calculator/eodq3asol4"
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
      status: "pending",
      desmosUrl: null,
      motivation: `
國中理化課學過聲音的三種特徵：音量、音調、音色。

這三件事剛好對應三個物理特徵：

1. **音量**：跟**振幅**有關（振幅越大聲音越大，反之越小）。
2. **音調（音高）**：跟**頻率、週期**有關（頻率越高聲音越尖，頻率越低越低沉）。
3. **音色**：跟**波形**有關（即使鋼琴和小提琴彈一樣的音高與音量，波形長相不同，耳朵就分得出來）。
      `,
      mathModel: `
在 Desmos 中，讓電腦發出聲音的語法：
$$\\operatorname{tone}(\\text{頻率}, \\text{音量})$$

- **最簡單發聲**：
  - $\\operatorname{tone}(440)$：只給頻率，預設音量(0.6)發出標準 A 音（$440\\text{Hz}$）。
- **指定音量**：
  - $\\operatorname{tone}(440, 0.5)$：第二個數字是音量（範圍 0~10，但通常0~1就以足夠）。
- **用滑桿控制**：
  - $\\operatorname{tone}(a, b)$：建立滑桿 $a$（頻率）與 $b$（音量），動態拉動調整。

**聽不到聲音的檢查步驟**：
1. 畫面最左上角的「揚聲器總開關」有沒有開啟？
2. 算式左側圓圈內的「音符小圖標」有沒有點亮（反灰代表靜音）？
      `,
      tasks: [
        "1. 左右分割畫面：左邊放講義，右邊放 Desmos 工作區。",
        "2. 登入存檔：在 Desmos 登入個人 Google 帳號，並將圖形命名為「01_聲音實驗」存檔。",
        "3. 第一個聲音：在第一行輸入 $\\operatorname{tone}(440)$ 聽聽看標準 A 音（可改 $\\operatorname{tone}(440, 0.5)$ 調整音量）。",
        "4. 建立滑桿：輸入 $\\operatorname{tone}(a, b)$ 並建立滑桿，設定 $a$ 範圍 $50 \\sim 2000$、$b$ 範圍 $0 \\sim 1$，拉拉看感受音高與音量變化。",
        "5. 手動定音：將音量 $b$ 固定在 $0.5$，手動拉動頻率 $a$，看看能否剛好停在 $440\\text{Hz}$。",
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
      status: "pending",
      desmosUrl: null,
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
        "1. 同時播放雙音：輸入 $\\operatorname{tone}([440, 880])$，聽聽看兩個音疊在一起的和聲。",
        "2. 建立旋律列表：自己輸入一個包含 5 個音的列表 $L = [440, 554, 659, 880, 440]$。",
        "3. 讓時間當唱針：輸入 $\\operatorname{tone}(L[t])$，新增時間滑桿 $t$（範圍 $1$ 到 $5$，步長 $1$），按下播放鍵聽旋律跑動。",
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
            solution: "課堂播放的 3 首旋律分別是：《春日影》、《我很好騙》與《Lemon》。\n在 Desmos 裡，只要把頻率存成列表 $L$，配上時間滑桿 $t$ 與 `tone(L[t])`，電腦就能依序讀取頻率，自動播出一整首歌。",
            formatAnswer: (ans) => `課堂猜歌成果：【${ans}】。\n解析：在 Desmos 中透過列表 L 與時間變數 t，電腦能依序讀出頻率發聲，自動演奏旋律。`
          },
          {
            id: "q2_list_syntax",
            title: "多音和弦與循序單音的語法差異",
            type: "textarea",
            prompt: "在 Desmos 中，`tone([440, 880])` 與 `tone(L[t])` 這兩種寫法聽起來有什麼不一樣？時間滑桿 $t$ 在裡面做什麼？",
            placeholder: "請說明：1. 中括號放多個數字聽起來如何？2. 加了 [t] 之後有何差別？滑桿 t 扮演什麼角色？",
            solution: "1. `tone([440, 880])`：列表內放多個頻率，電腦會「同時發聲」，形成和弦。\n2. `tone(L[t])`：加了索引 $[t]$，一次只拿出列表中第 $t$ 個音符發聲；隨滑桿 $t$ 往前跑，音符就「依序發聲」形成旋律。",
            formatAnswer: (ans) => `語法發聲差異說明：\n${ans}\n\n（解析：列表放多個頻率為同時發聲的和弦；配合索引 L[t] 與時間滑桿 t 則為依序發聲的旋律。）`
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
為什麼頻率差一點點，聲音就會忽大忽小？在 Desmos 裡把兩道聲波畫出來相加，就能看見波峰與波谷互相疊加或抵消的過程。
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
        "1. 和諧頻率比探索：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【和諧音】並播放 $\\operatorname{tone}([220, 220a])$。拖曳比例滑桿 $a$（$1$ 到 $4$），觀察停在 $a = 2$（頻率比 $1:2$）與 $a = 3$（頻率比 $1:3$）時的融合聽感。",
        "2. 人耳聽音盲測：展開第 2 個資料夾【人耳聲音分辨程度】。一人戴耳機閉眼，由同桌夥伴隨機個別播放 $\\operatorname{tone}(442)$ 與 $\\operatorname{tone}(442b)$。若能聽出高低差異，則將滑桿 $b$ 調小再測，記錄能分辨的最小比例 $b$。",
        "3. 微音差與拍頻現象：保持極小音差 $b$（例如 $b = 1.0004$），同時播放兩個聲音，聆聽微小音差如何轉化為週期性忽大忽小的音量起伏（拍頻 Beats）。",
        "4. 動態波形干涉實作：展開第 3 個資料夾【圖示為何會有此現象】（或直接操作上方內嵌畫布），按下時間滑桿 $t$ 的播放鍵 ⏵。觀察藍波 $y_1$ 與綠波 $y_2$ 疊加過程，確認紅線合成波 $y_3$ 在同相時振幅疊加、反相時振幅抵消的干涉現象，並拖曳滑桿 $f_2$ 觀察起伏節奏的變化。"
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
古希臘的畢達哥拉斯在研究琴弦時發現，把弦長減半（頻率比 $1:2$），兩個音聽起來就像同一個音（高八度），因此找音階的範圍可以鎖定在 $1 \\sim 2$ 之間。
下一個最簡單的整數比是 **$1:3$**。
但倍數 $3$ 已經大於 2、超出八度範圍了，所以除以 2 折回來，得到頻率比 **$1 : \\dfrac{3}{2}$**（純五度）。

**五度相生律的兩條計算規則**：
1. **規則一：從 1 開始，每次乘以 $\\dfrac{3}{2}$**。
2. **規則二：如果大於 2 就除以 2**（折回 1 ~ 2 的八度內）。

連續算五次，就能得到五聲音階（宮、商、角、徵、羽）的五個音。
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
        "1. 推導流程觀察：觀察上方生律圖解，確認「每次乘 $\\frac{3}{2}$、超過 $2$ 則除以 $2$」的運算步驟，並理解前 5 個音的比例由來（$1, \\frac{3}{2}, \\frac{9}{8}, \\frac{27}{16}, \\frac{81}{64}$）。",
        "2. 五聲音階階梯播放：開啟 Desmos 範本第一資料夾（基準音設為 $263\\text{Hz}$）。依序播放五個比值：$\\operatorname{tone}(263 \\cdot 1)$, $\\operatorname{tone}(263 \\cdot \\frac{9}{8})$, $\\operatorname{tone}(263 \\cdot \\frac{81}{64})$, $\\operatorname{tone}(263 \\cdot \\frac{3}{2})$, $\\operatorname{tone}(263 \\cdot \\frac{27}{16})$，聆聽由低到高的五聲音階（宮、商、角、徵、羽）。",
        "3. 《滄海一聲笑》旋律演奏：範本第二資料夾使用英文變數代表五個音（$C$=宮, $D$=商, $E$=角, $G$=徵, $A$=羽）。拉動滑桿 $t=0$ 播放陣列 $L$，觀察五聲音階由高到低倒序（羽、徵、角、商、宮）的旋律線條。",
        "4. 即興排列測試：隨意調整陣列 $L$ 中的音符順序，觀察五聲音階因避開相鄰半音碰撞，任意組合皆不易刺耳的聽覺特點。"
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
如果把「每次乘 $\\dfrac{3}{2}$，大於 2 就除以 2」這套規則繼續算下去，算到第 12 次時會得到：
$$
\\dfrac{3^{12}}{2^{19}} = \\dfrac{531441}{524288} \\approx \\mathbf{1.0136}
$$
因為 $3^{12} \\approx 2^{19}$（$531441 \\approx 524288$），這個數值跟起點 1 只差了**約 1.3%**。
單獨聽一個音時，人耳很難分辨這麼小的差距，因此古人便在算滿 12 個音時停下來，定出「十二律」。

但這在數學上也留下了一個問題：
$$
3^{12} \\neq 2^{19} \\quad (\\mathbf{\\text{奇數} \\neq \\text{偶數}})
$$
3 的次方永遠是奇數，2 的次方永遠是偶數，兩邊在數學上不可能相等。五度相生無法剛好回到起點，這多出來約 1.3% 的誤差，就稱為**「畢達哥拉斯音差」**。
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
        "1. 數值驗算：在 Desmos 算式欄輸入 `3^12 / 2^19`（即 $\\frac{3^{12}}{2^{19}}$），確認數值約為 $1.0136$，驗證相生 $12$ 次後極度接近起點 $1$。",
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
      moduleId: "module-supp",
      moduleName: "延伸補充單元",
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
        "1. 琴鍵全半音定位：觀察鍵盤圖解，確認 E-F 與 B-C 兩處無黑鍵相隔，相距僅 $1$ 個半音。",
        "2. 音名與唱名對應：練習簡譜數字 $1$ 到 $7$ 與音名字母（C, D, E, F, G, A, B）的快速對應。",
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
              "C 到 E 跨越 $4$ 個半音（$2$ 個全音）；E 到 F 跨越 $1$ 個半音",
              "C 到 E 跨越 $2$ 個半音；E 到 F 跨越 $2$ 個半音",
              "C 到 E 跨越 $3$ 個半音；E 到 F 跨越 $1$ 個半音",
              "C 到 E 跨越 $4$ 個半音；E 到 F 跨越 $2$ 個半音"
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
      moduleId: "module-supp",
      moduleName: "延伸補充單元",
      title: "純律（Just Intonation）：尋找最純淨的簡單整數比",
      conceptTitle: "畢氏律大三度與純律修正",
      modelTitle: "純律三和弦與轉調限制",
      status: "pending",
      desmosUrl: null,
      readTime: "5 分鐘",
      difficulty: "輕鬆體驗",
      motivation: `
畢達哥拉斯五度相生律推導出的純五度（$\\frac{3}{2}$）很和諧，但推算到大三度（例如 $C$ 到 $E$）時，連續乘 4 次五度再折回八度會得到：
$$
\\text{畢氏大三度} = \\left(\\frac{3}{2}\\right)^4 \\div 4 = \\frac{81}{64} \\approx 1.2656
$$
比值 $\\frac{81}{64}$ 的分子與分母較大，兩道聲波要經過較多週期才會重合，在 Desmos 裡同時播放 $C$ 與 $E$ 會聽見微弱的拍頻。

因此後來有人改用鄰近的簡單整數比 $\\dfrac{80}{64} = \\dfrac{5}{4} = 1.25$ 來代替，這就是「純律」。在純律下，大三和弦 $C - E - G$ 的頻率比為 $4 : 5 : 6$，消除了拍頻。
不過純律的相鄰音距不均勻，只能固定在同一個調彈奏，換調時就會走音。
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
        "1. 大三度聽感對比：在 Desmos 中分別播放 C-E 雙音（畢氏 $\\frac{81}{64}$ vs 純律 $\\frac{5}{4}$），比較兩者的拍頻與融合度。",
        "2. 4:5:6 和弦試聽：取消註解播放 `[C, E, G]`，聆聽純律大三和弦（$4:5:6$）的共鳴聽感。",
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
              "純律（$\\frac{5}{4}$）拍頻消除，聲音平穩融合；畢氏律（$\\frac{81}{64}$）可聽見微弱拍頻摩擦感",
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
              "因為電腦軟體無法計算分數 $\\frac{5}{4}$",
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
      conceptTitle: "相鄰半音等比與公比推導",
      modelTitle: "全學期公版發聲基準函數",
      status: "pending",
      desmosUrl: null,
      motivation: `
畢氏律和純律在實際演奏時，都有「轉調」的困難：因為相鄰半音的間距不完全相同，只要升 Key 或降 Key 換調彈奏，音階比例就會跑掉而走音。
要讓樂器可以在任何調性自由轉調，條件就是：
**「任兩個相鄰半音的頻率比必須相同。」**
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
每升高一個半音，頻率就乘上 $2^{\\frac{1}{12}} \\approx 1.059463$。這就是**「十二平均律」**。

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
        "1. 連乘約分計算：理解 12 個相鄰音分數相乘等於 $2$ 的過程，掌握 $x^{12} = 2$ 的由來。",
        "2. 公比數值驗算：在 Desmos 算式欄輸入 `2^(1/12)`（即 $2^{\\frac{1}{12}}$），計算數值約為 $1.059463$，確認等比數列公比。",
        "3. 建立公版發聲函數：輸入 `f(x) = 440 * 2^(x/12)`（即 $f(x) = 440 \\cdot 2^{\\frac{x}{12}}$），以標準音 A440 為原點，建立發聲基準。",
        "4. 定義常用音名變數：依序輸入 `C = f(-9), D = f(-7), E = f(-5), F = f(-4), G = f(-2), A = f(0), B = f(2)`，確認 E-F 與 B-C 的 $1$ 半音步長。",
        "5. 八度與純五度播放：計算 `2^(7/12)`（即 $2^{\\frac{7}{12}}$）確認五度的數值妥協，並播放 `tone([C, f(3)])` 聆聽兩倍八度音程。"
      ],
      formula: `// 1. 全學期公版發聲基準函數 (以國際標準音 A4 = 440Hz 為原點)\nf(x) = 440 \\cdot 2^{\\left(\\frac{x}{12}\\right)}\n\n// 2. 常用音名定義 (中央 C 主音區)\nC = f(-9)   // 中央 C (C4, 約 261.6Hz)\nD = f(-7)   // D4\nE = f(-5)   // E4\nF = f(-4)   // F4 (E-F 無黑鍵，只差 1 半音)\nG = f(-2)   // G4\nA = f(0)    // A4 (國際標準基準音 440Hz)\nB = f(2)    // B4\nC_5 = f(3)  // C5 (B-C 無黑鍵，只差 1 半音)\n\n// 3. 測試播放八度音程與純五度\n\\operatorname{tone}([C, C_5])   // 八度翻倍和諧\n\\operatorname{tone}([C, G])     // 十二平均律純五度 (2^(7/12))`,
      tips: `
- **連乘約分原理**：12 個相鄰分數連乘時，中間音符分子分母對角約分消去，只剩下 (高音C)/C = 2，因此 $x^{12} = 2 \\implies x = 2^{\\frac{1}{12}}$。
- **琴鍵位移規律**：往右一格（高半音）就是 $\\times 2^{\\frac{1}{12}}$（指數 $+1$）；往左一格（低半音）就是 $\\div 2^{\\frac{1}{12}}$（指數 $-1$）。
- **公版發聲基準**：後續所有樂曲與和弦單元，皆以 $f(x) = 440 \\cdot 2^{\\frac{x}{12}}$ 作為核心發聲函數。
      `,
      worksheet: {
        title: "學習單 2：十二平均律函數與琴鍵定位",
        questions: [
          {
            id: "q1_func_meaning",
            title: "連乘約分與 x^12 = 2 的推導由來",
            type: "text",
            prompt: "將 12 個相鄰半音的頻率比設為 $x$（即 $\\frac{C^\\sharp}{C} = \\frac{D}{C^\\sharp} = \\dots = \\frac{\\text{高音}C}{B} = x$）。\n請說明：\n1. 為什麼把這 12 個分數全部乘在一起時，右邊剛好會等於 $\\frac{\\text{高音}C}{C} = 2$？\n2. 為什麼等式左邊會變成 $x^{12}$，進而推導出公比 $x = 2^{\\frac{1}{12}}$？",
            placeholder: "請簡述：1. 分數連乘時分子分母有何約分規律？2. 等式左邊為什麼是 x^12？",
            solution: "1. 將 12 個相鄰音分數連乘時，每個中間音同時出現在前一項分子與後一項分母，形成連續約分，中間音符全數消去，僅剩頭尾的 $\\frac{\\text{高音}C}{C} = \\frac{2}{1} = 2$。\n2. 由於 12 個比值皆等於 $x$，相乘得 $x^{12}$。因此方程式為 $x^{12} = 2$，兩邊開 12 次方根得 $x = 2^{\\frac{1}{12}} \\approx 1.059463$。",
            formatAnswer: (ans) => `約分推導意涵：\n• 學生回答：${ans}\n• 核心解析：12 個相鄰音分數連乘產生對角約分，中間音符消去，留下頭尾八度比 (高音C)/C = 2；左式 12 個 x 連乘得 x^12 = 2，求得公比 x = 2^{\\frac{1}{12}} ≈ 1.05946。`
          },
          {
            id: "q2_find_csharp",
            title: "音名坐標計算：升 Do (C♯4)",
            type: "text",
            prompt: "在標準鋼琴鍵盤上，中央 C 的右側緊挨著黑鍵「升 Do（$C^\\sharp_4$）」。若以 $A_4 = 440\\text{Hz} = f(0)$ 為原點，請寫出：\n1. 升 Do 在公版函數中的自變數坐標 $x$ 應為多少？即 $C^\\sharp_4 = f(?)$？\n2. 它是如何從中央 C（$f(-9)$）推算出來的？",
            placeholder: "請填入答案與推導理由，格式範例：f(?)，因為從中央 C 往...",
            expected: "-8 | f(-8) | 1 | f(1)",
            solution: "1. 升 Do 的坐標為 $C^\\sharp_4 = f(-8)$。\n2. 推算方式：中央 C 為 $f(-9)$，升 Do 為其右側黑鍵，升高 1 個半音（往右 1 格），故為 $-9 + 1 = -8$，即 $f(-8)$。頻率約為 $440 \\cdot 2^{-\\frac{8}{12}} \\approx 277.18\\text{Hz}$。",
            formatAnswer: (ans) => `升 Do 半音坐標推導：\n• 學生回答：${ans}\n• 正確答案：C#4 = f(-8) ≈ 277.18 Hz。從中央 C f(-9) 向上移動 1 個半音（-9 + 1 = -8）。`
          },
          {
            id: "q3_find_re_octave",
            title: "音名坐標計算：高八度 Re (D5)",
            type: "text",
            prompt: "在演奏旋律時，若需要用到高音區的「高八度 Re（$D_5$）」。若已知中央 C 旁邊的標準 Re 為 $D_4 = f(-7)$：\n1. 請寫出高八度 Re 在公版函數中的自變數坐標，即 $D_5 = f(?)$？\n2. 它的頻率剛好是 $D_4$ 的幾倍？在數學指數律上如何體現？",
            placeholder: "請填入坐標與倍數，格式範例：f(?)，頻率剛好是幾倍...",
            expected: "5 | f(5) | 14 | f(14)",
            solution: "1. 高八度 Re 的坐標為 $D_5 = f(5)$。\n2. 推算方式：高八度即往上移動 12 個半音，故坐標為 $-7 + 12 = 5$。\n3. 頻率倍數：$f(5) = 440 \\cdot 2^{\\frac{5}{12}} = 440 \\cdot 2^{\\frac{-7+12}{12}} = 440 \\cdot 2^{-\\frac{7}{12}} \\cdot 2^1 = f(-7) \\cdot 2$，剛好為 2 倍。",
            formatAnswer: (ans) => `高八度 Re 半音坐標推導：\n• 學生回答：${ans}\n• 正確答案：D5 = f(5) ≈ 587.33 Hz。由 D4 (-7) 加上八度 12 個半音得 -7 + 12 = 5，頻率為 D4 的 2 倍。`
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
定義好音名變數之後，就能把簡譜轉換成列表，讓電腦照順序播出一整首歌。
以《小星星》為例：
- 簡譜：1 1 5 5 6 6 5 — 4 4 3 3 2 2 1 —
- 音名序列：C C G G A A G 0 F F E E D D C 0
其中的「0」代表休止符（頻率為 0，無聲停頓）。
把整首曲子寫成列表 $L$，配合時間滑桿 $t$ 與 $\\operatorname{tone}(L[t])$，電腦就能依序播放旋律。
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
- **休止符 $0$**：數字 $0$ 代表頻率為 $0\\text{Hz}$，呈現無聲停頓。
- **時間軸滑桿 $t$**：設定步長為 1，從 0 開始逐拍讀取陣列元素發聲。

---

**三、 課堂聽感觀察（預告第四章）**：
播放第一版本時可以注意聽：**連續兩個相同的音（如 $C\\;C$ 或 $G\\;G$）會連在一起，聽起來像一個長音**。
這是因為兩個音之間沒有斷開。如果手動在每個音中間塞 0 會讓列表變得太長，在第四章我們會利用週期函數與分類討論來做出斷音效果。
      `,
      tasks: [
        "1. 開啟範本：點擊右上角「開啟 Desmos 範本 ↗」，展開第 1 個資料夾【C大調音符】，確認 C 到 B 各音變數與時間滑桿 $t=0$。",
        "2. 建立旋律陣列：展開第 2 個資料夾【小星星第一版本】，觀察《小星星》42 拍音名陣列 $L$，注意換氣停頓處填入 $0$。",
        "3. 時間滑桿播放：設定時間滑桿 $t$ 範圍為 $0$ 到 $42$、步長 $1$，按下播放鍵 ⏵ 聆聽旋律依序演奏。",
        "4. 連續音聽感比對：留意連續播放相同音符（如 C C 或 G G）時連在一起的現象，思考如何讓同音之間斷開。"
      ],
      formula: `// 1. C 大調音名定義 (基準原點 C = 263Hz)\nf(x) = 263 \\cdot 2^{\\left(\\frac{x}{12}\\right)}\nC = f(0); D = f(2); E = f(4); F = f(5); G = f(7); A = f(9); B = f(11)\nt = 0\n\n// 2. 小星星第一版本 (42 拍完整旋律陣列，0 為休止符)\nL = [C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0, G, G, F, F, E, E, D, 0, G, G, F, F, E, E, D, 0, C, C, G, G, A, A, G, 0, F, F, E, E, D, D, C, 0]\n\n// 循序發聲\n\\operatorname{tone}(L[t])`,
      tips: `
- **Desmos 常見報錯檢查**（算式旁出現驚嘆號）：
  1. 陣列 L 還沒定義。
  2. 時間滑桿 t 還沒定義。
  3. 陣列 L 裡面有打錯的音名，或是兩個逗號連在一起（如 ,,）。
- **沒聲音檢查**：確認左上角喇叭與算式左側音符圖標已點亮；檢查時間滑桿 t 範圍（樂譜有 42 顆音，範圍可設為 0 到 42）。
- **播放速度調整**：點時間滑桿 t 左側的設定按鈕，可切換 0.5x、1x、2x 等播放速度。
      `,
      worksheet: {
        title: "學習單：簡譜轉譯與列表演奏原理",
        questions: [
          {
            id: "q1_score_to_array",
            title: "簡譜轉譯音名陣列",
            type: "text",
            prompt: "閱讀《小星星》前段簡譜：`1 1 5 5 | 6 6 5 -`。\n若在 Desmos 中要將這 8 拍寫成音名陣列，其中兩拍的長音以「音符 + 休止符 0」換氣留白：\n請寫出這段樂譜對應的 Desmos 陣列（格式如 `[C, C, ...]`）：",
            placeholder: "請填入中括號陣列格式，例如：[C, D, E, ...]",
            expected: "[C, C, G, G, A, A, G, 0] | [C,C,G,G,A,A,G,0] | C, C, G, G, A, A, G, 0 | C,C,G,G,A,A,G,0",
            solution: "在 C 大調中：1=C、5=G、6=A。兩拍的長音 5- 記為「音符 G 加上一拍休止符 0」換氣，因此陣列為 `[C, C, G, G, A, A, G, 0]`。",
            formatAnswer: (ans) => `簡譜轉譯陣列：\n• 學生答案：${ans}\n• 標準陣列：[C, C, G, G, A, A, G, 0]（長音以音符加 0 換氣留白）`
          },
          {
            id: "q2_tone_l_t_reflection",
            title: "第一版本播放觀察與同音相連現象",
            type: "textarea",
            prompt: "在 Desmos 播放小星星第一版本 `tone(L[t])` 時：\n1. 時間滑桿 $t$ 在這個算式中扮演了什麼角色？\n2. 連續播放兩個相同的音（例如 1 1 或 5 5）時，聽感上有什麼特點？為什麼？",
            placeholder: "請說明：1. 滑桿 t 的索引角色；2. 連續播放相同音符時聽到的連音現象...",
            solution: "1. 時間滑桿 $t$ 的角色：$t$ 作為列表索引，隨時間遞增依序取出列表 $L[t]$ 中對應拍點的頻率發聲。\n2. 同音相連現象：連續播放相同音符時，因為頻率相同且中間沒有靜音間隔，聽起來會合成一個較長的單音，不易聽出兩拍的界線。",
            formatAnswer: (ans) => `播放觀察與聽感分析：\n${ans}\n\n（解析：時間滑桿 t 作為索引依序讀取音符；連續同音因中間未中斷而連成單一長音。）`
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
      status: "pending",
      desmosUrl: null,
      motivation: `
如果整首歌都用 C, D, E 這些字母寫，想要換調（升降 Key）就得把每個音重新改過，比較花時間。
但如果把音符改記成「離中央 C 相差幾個半音」的數字陣列 $S$：
中央 C 是 0，D 是 2，E 是 4，F 是 5，G 是 7，A 是 9，B 是 11。
在 Desmos 裡，整個陣列可以直接放進指數次方計算：$F = 261.63 \\cdot 2^{\\frac{S}{12}}$。
如果想升降 Key，只要在次方加上一個滑桿 $k$：$F = 261.63 \\cdot 2^{\\frac{S+k}{12}}$，就能將整首曲子一起移調。
      `,
      mathModel: `
**向量廣播指數運算與平移移調**：
$$S = [0, 0, 7, 7, 9, 9, 7, 0, 5, 5, 4, 4, 2, 2, 0, 0, \\dots]$$

- **全曲頻率陣列生成（廣播映射）**：
  $$F = f_0 \\cdot 2^{\\frac{S}{12}} \\quad (f_0 = 261.63\\text{Hz})$$
- **全曲移調運算（$k$ 為平移半音數）**：
  $$F_{\\text{shift}} = f_0 \\cdot 2^{\\frac{S + k}{12}}, \\quad k \\in [-6, 6]$$
  向量中每個元素同時加上 $k$，各音頻率等比放大 $2^{\\frac{k}{12}}$ 倍。相對音程比例保持不變，達成整體移調。
      `,
      tasks: [
        "1. 半音向量輸入：將《小星星》以半音整數陣列 $S$ 輸入 Desmos（以 $C=0$ 為原點）。",
        "2. 陣列廣播運算：輸入 `F = 261.63 * 2^(S/12)`（即 $F = 261.63 \\cdot 2^{\\frac{S}{12}}$），觀察 Desmos 向量運算直接生成頻率陣列。",
        "3. 移調滑桿實作：新增滑桿 $k$（範圍 $-6$ 到 $+6$，步長 $1$），輸入 `F = 261.63 * 2^((S+k)/12)`（即 $F = 261.63 \\cdot 2^{\\frac{S+k}{12}}$），測試全曲升調與降調效果。",
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
            solution: "整體升高兩個半音（一個全音）後，調性轉為【D 大調】。\n音階轉變為：$D, E, F^\\#, G, A, B, C^\\#, D$（五線譜上 F 與 C 皆需升半音）。在 Desmos 中，透過向量運算 $F = f_0 \\cdot 2^{\\frac{S+2}{12}}$，即可實現全曲移調。",
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
      title: "動態音量",
      conceptTitle: "發聲函數的第二個參數",
      modelTitle: "動態音量與波形變化",
      status: "ready",
      desmosUrl: null,
      motivation: `
在第三章中，我們用陣列 $L[t]$ 排出樂譜，讓時間滑桿 $t$ 依序播放每一個音。
但那樣播出來每一顆音都一樣大聲，比較平淡。

這是因為我們只寫了發聲函數的第一個參數（頻率）：
$$\\operatorname{tone}(L[t])$$
回想第一章學過的發聲語法，它其實有兩個參數：
$$\\operatorname{tone}(\\text{頻率}, \\; \\text{音量})$$
第二個參數控制的是**「音量（大小聲）」**。
我們先不放樂譜陣列，直接用標準 A 音（$440\\text{Hz}$），看看把不同的函數放進第二個位置時，聲音會如何變化。
      `,
      mathModel: `
**一、 從單音 440 開始：正弦波與向上平移**：

**1. 負數音量的靜音現象**：
在 Desmos 輸入：
$$\\operatorname{tone}(440, \\; \\sin(t))$$
建立時間滑桿 $t$（範圍 $0 \\sim 10$）並按下播放。
- **聽感觀察**：聲音慢慢變大、慢慢變小，接著**有一段約 3 秒多的時間完全沒有聲音**。
- **圖形對照**：對照 $y = \\sin(t)$ 圖形，正弦波週期約為 $2\\pi \\approx 6.28$ 秒。在前半週期 $0 \\sim \\pi$（約 3.14 秒）數值大於 0，能正常發聲；但在後半週期 $\\pi \\sim 2\\pi$，數值小於 0。
- **規則**：**音量不能為負值**。當音量小於或等於 0 時，Desmos 會直接將它當作 0（靜音）。

---

**2. 消除靜音：向上平移 $+1$**：
為了不讓聲音在負半週中斷，將整個正弦波向上平移 1 單位：
$$\\operatorname{tone}(440, \\; \\sin(t) + 1)$$
- **數值範圍**：原本 $-1 \\le \\sin(t) \\le 1$，加上 1 之後變為：
  $$0 \\le \\sin(t) + 1 \\le 2$$
- **聽感效果**：負值消除後，聲音會在 0 到 2 之間連續大小聲起伏，不會再長時間中斷。

---

**3. 調整起伏速度：將週期改為 1 秒**：
$\\sin(t)$ 的週期是 $2\\pi \\approx 6.28$ 秒，變化較慢。如果希望音量「每秒起伏 1 次」，把自變數乘上 $2\\pi$：
$$\\operatorname{tone}(440, \\; \\sin(2\\pi t) + 1)$$
此時週期縮短為 $T = \\frac{2\\pi}{2\\pi} = 1$ 秒，聲音會每秒規律起伏一次（音樂上稱為震音 Tremolo）。

---

**二、 不同函數的音量變化：正切函數與高斯鋸齒波**：

把不同形狀的函數放進音量參數，可以聽出函數圖形的特徵：

**1. 正切函數 $\\operatorname{tone}(440, \\; \\tan(t))$：漸近線與急遽切斷**
- **聽感**：音量從小慢慢變大，接著迅速衝到很大聲，然後突然切斷變成無聲。
- **圖形對應**：對應正切函數在 $t = \\frac{\\pi}{2}$（約 $1.57$）的**垂直漸近線**。當 $t$ 接近漸近線時，$\\tan(t) \\to +\\infty$（很大聲），跨過漸近線後跳到 $-\\infty$（小於 0 靜音）。

---

**2. 高斯鋸齒波 $\\operatorname{tone}(440, \\; t - \\operatorname{floor}(t))$：線性漸強（Crescendo）**：

- **高斯取整記號 $[x] = \\operatorname{floor}(x)$**：
  在 Desmos 中輸入 \`floor(x)\`，代表「不大於 $x$ 的最大整數」（正數時就是無條件捨去小數點，只留整數）：
  - 例如：$[1.2] = 1, \\; [1.8] = 1, \\; [2.0] = 2, \\; [2.5] = 2$。

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/2fev0huixj?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：一段一段水平跳升的階梯圖形。

---

- **原時間減去整數：拍內小數鋸齒波 $y = x - \\operatorname{floor}(x)$**：
  用時間 $x$ 減去整數部分 $\\operatorname{floor}(x)$，留下來的就是「小數點後面的部分」：
  - $x = 1.0 \\implies 1.0 - 1 = 0$
  - $x = 1.4 \\implies 1.4 - 1 = 0.4$
  - $x = 1.9 \\implies 1.9 - 1 = 0.9$
  - 到達下一拍 $x = 2.0$ 時，整數變成 2，相減又回到 0（$2.0 - 2 = 0$）重新上升。

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/dm2eoyoon8?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵與聽感**：
- **圖形**：每 1 秒重複一次，在每一拍內由 0 等速上升到 1，形成鋸齒狀圖形。
- **聽感**：輸入 $\\operatorname{tone}(440, \\; t - \\operatorname{floor}(t))$，音量在每一秒內從無聲逐漸變大（漸強），一到整數秒就歸零重來。

---

**三、 套入小星星旋律**：
接著把單音 440 換成第三章的小星星樂譜陣列 $L[t]$：
$$\\operatorname{tone}(L[t], \\; \\sin(2\\pi t) + 1)$$
播放時間滑桿 $t$ 時，旋律就會一邊進行、一邊隨正弦波改變大小聲。

---

**四、 銜接下一單元（4-2）**：
正弦波能讓音量平滑起伏，但回想 3-1 小星星「連續同音連在一起」的問題——當連續出現兩個相同的音（如 1 1 或 5 5）時，需要的是**在每一拍開頭先將音量設為 0（靜音），接著再設為 1（發聲）的開關**。
下一單元「4-2 週期函數與構造斷音」，我們會討論如何寫出這種 0 與 1 的斷音開關。
      `,
      tasks: [
        "1. 單音正弦波音量測試：在空白 Desmos 中輸入 $\\operatorname{tone}(440, \\; \\sin(t))$，觀察負值產生的靜音區間；再改為 $\\operatorname{tone}(440, \\; \\sin(t) + 1)$，聽聽看向上平移消除負值後的變化。",
        "2. 調整起伏週期：輸入 $\\operatorname{tone}(440, \\; \\sin(2\\pi t) + 1)$，播放滑桿 $t$，聆聽每秒起伏 $1$ 次的音量變化。",
        "3. 測試正切與高斯鋸齒波：依序輸入 $\\operatorname{tone}(440, \\; \\tan(t))$ 與 $\\operatorname{tone}(440, \\; t - \\operatorname{floor}(t))$，比較兩種函數圖形對應的音量變化。",
        "4. 套入樂譜：將音量算式套入小星星旋律 $\\operatorname{tone}(L[t], \\; \\sin(2\\pi t) + 1)$，聽聽看整首曲子加上音量起伏的效果。"
      ],
      formula: `// 1. 單音正弦波音量變化 (基準音 440 Hz)
tone(440, sin(t))           // 負半週靜音 (約 3.14 秒無聲)
tone(440, sin(t) + 1)       // +1 向上平移消除負值
tone(440, sin(2*pi*t) + 1)  // 週期 1 秒，每秒起伏一次

// 2. 其他函數音量測試
tone(440, tan(t))           // 正切函數 (漸近線處急遽變大後切斷)
tone(440, t - floor(t))     // 高斯鋸齒波 (每拍線性漸強)

// 3. 套入小星星樂譜
// (需搭配小星星樂譜陣列 L 與時間滑桿 t)
tone(L[t], sin(2*pi*t) + 1)`,
      tips: `
- **tone 函數的雙參數規格**：語法為 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$。第二個參數可以直接放入隨時間變化的函數。
- **音量數值範圍規則**：音量為 0 時代表無聲，數值越大聲音越大。音量若小於或等於 0，Desmos 會將其視為 0（靜音）。
- **高斯取整記號**：$\\operatorname{floor}(t)$ 代表不大於 $t$ 的最大整數，$t - \\operatorname{floor}(t)$ 則是取出小數部分（數值介於 $0 \\le y < 1$）。
- **震音 (Tremolo)**：讓音量隨時間週期性大小聲變化的效果，在音樂上稱為 Tremolo（震音）。
      `,
      worksheet: {
        title: "學習單：動態音量與波形變化",
        questions: [
          {
            id: "q1_sin_negative_shift",
            title: "正弦波負半週靜音與向上平移",
            type: "textarea",
            prompt: "在 Desmos 播放單音算式 $\\operatorname{tone}(440, \\sin(t))$ 時：\n1. 為什麼有一段時間完全聽不到聲音？這段靜音時間大約幾秒？\n2. 為什麼改成 $\\operatorname{tone}(440, \\sin(t) + 1)$ 之後，聲音就能持續不中斷？",
            placeholder: "請從正弦波數值範圍與 Desmos 對音量小於 0 的判定說明...",
            solution: "1. 負半週靜音原因：正弦函數 $\\sin(t)$ 的數值範圍在 -1 到 1 之間。當 $\\sin(t) < 0$ 時，Desmos 將負值音量視為 0（靜音），因後半週期長達 $\\pi \\approx 3.14$ 秒，所以會安靜約 3.14 秒。\n2. 向上平移效果：加上 1 之後，圖形向上平移 1 單位，數值範圍變為 $0 \\le \\sin(t)+1 \\le 2$，消除了負數區間，使聲音在 0 到 2 之間連續變化。",
            formatAnswer: (ans) => `正弦波音量分析：\n${ans}\n\n（解析：正弦波在負半週數值小於 0 會被視為靜音；加上 1 向上平移可使數值保持大於等於 0。）`
          },
          {
            id: "q2_sawtooth_crescendo",
            title: "高斯鋸齒波 $t - \\operatorname{floor}(t)$ 的圖形與聽感",
            type: "textarea",
            prompt: "在聆聽 $\\operatorname{tone}(440, t - \\operatorname{floor}(t))$ 時：\n1. 聽到的聲音強弱變化有什麼特徵？（是漸強還是漸弱？何時歸零？）\n2. 請說明：為什麼原時間 $t$ 減去整數部分 $\\operatorname{floor}(t)$，會在每一秒內產生直線上升後歸零的鋸齒圖形？",
            placeholder: "請說明：1. 聽感上的漸強與切斷；2. 小數點後數字隨時間增加與整數秒歸零...",
            solution: "1. 聽感特徵：每一秒內聲音從無聲逐漸變大（漸強），到整數秒時歸零重來。\n2. 數學原理：$\\operatorname{floor}(t)$ 取出不大於 $t$ 的整數，相減後 $t - \\operatorname{floor}(t)$ 只保留小數部分。在每 1 秒內，小數從 0 等速增加到接近 1；進入下一整數秒時，小數部分歸零重新計算，形成鋸齒波。",
            formatAnswer: (ans) => `鋸齒波圖形與聽感分析：\n${ans}\n\n（解析：原數減整數保留小數部分，在每秒內由 0 等速上升至 1 產生漸強效果，並在整數秒歸零。）`
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
延續 3-1 小星星第一版本連續同音連在一起的問題：如果我們想讓每個音的前 $\\dfrac{1}{6}$（約 $0.167$ 拍）靜音、後 $\\dfrac{5}{6}$ 正常發聲，該怎麼做？

如果直接把每一拍拆成 6 格 \`[0, C, C, C, C, C]\` 並用 6 倍速播放，42 拍的樂譜會變成 252 個數字，不僅輸入麻煩，也很容易打錯。

比較省事的做法是利用 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 的第二個參數。
如果我們構造一個開關函數 $q$（需要靜音時數值為 $0$，發聲時數值為 $1$），放進第二個音量參數的位置：
$$\\operatorname{tone}(L[t], \\; q)$$
電腦就會在每一拍開頭自動把音量變為 0，做出斷音效果。這會用到**「週期函數」**與**「分類討論函數」**。
      `,
      mathModel: `
**一、 正弦波與水平門檻線**：

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/ymeb0xkzsz?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形線條與觀察重點**：
- 🔴 **紅色曲線**：$y = \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right)$。
- 🔵 **藍色水平線**：$y = \\frac{\\sqrt{3}}{2}$。
- **交點觀察**：
  - 點 $\\left(0, \\frac{\\sqrt{3}}{2}\\right)$ 與 $\\left(1, \\frac{\\sqrt{3}}{2}\\right)$（以及 $\\left(2, \\frac{\\sqrt{3}}{2}\\right)$）：橫坐標每相差 $1$ 就回到相同位置，代表這個正弦波的**週期為 1**（對應 1 拍）。
  - 點 $\\left(0, \\frac{\\sqrt{3}}{2}\\right)$ 到 $\\left(\\frac{1}{6}, \\frac{\\sqrt{3}}{2}\\right)$（約 $0.167$）：紅線高於藍線的區間，寬度剛好是 $\\frac{1}{6}$ 拍（對應前面想留白的 1/6 拍靜音長度）。

---

**二、 利用分類討論函數做成斷音開關**：
高一學過的絕對值定義，就是一種**分類討論**：
$$|x| = \\begin{cases}
\\ \\ \\ x, & \\text{在 } x \\ge 0 \\text{ 時} \\\\
-x, & \\text{在 } x < 0 \\text{ 時}
\\end{cases}$$

現在我們想控制音量：當正弦波大於等於 $\\frac{\\sqrt{3}}{2}$ 時設為 0（靜音），小於 $\\frac{\\sqrt{3}}{2}$ 時設為 1（發聲），寫成數學式也是分類討論：
$$y = \\begin{cases}
0, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2} \\text{ 時（靜音）} \\\\
1, & \\text{在 } \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2} \\text{ 時（發聲）}
\\end{cases}$$

在 Desmos 裡不能打上下兩行的大括號，所以改寫在同一行：
$$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}$$
*(也可以省略第二個條件，簡寫為：$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; 1\\right\\}$)*

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/exrboynk81?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形觀察**：
- 🟢 **綠色方波**：當紅色正弦波高於藍色水平線時，數值為 $0$（靜音）；其餘時間為 $1$（發聲）。
- 這樣每一拍開頭就會自動靜音 $\\frac{1}{6}$ 拍。

---

**三、 正弦波調整斷音時間的限制**：
在上面的正弦波中，高於 $\\frac{\\sqrt{3}}{2}$ 的區間剛好是每拍的 $\\frac{1}{6}$。
如果想改斷音比例，例如改成靜音 $20\\%$（$0.2$ 拍）或 $15\\%$（$0.15$ 拍）：
- 因為正弦波是彎曲的曲線，要改變區間寬度，就必須重新計算角度、水平線高度與平移量，調整起來比較麻煩。

---

**四、 用鋸齒波 $y = x - [x]$ 製作斷音開關**：

回想 4-1 學過的小數鋸齒波 $y = x - \\operatorname{floor}(x)$：
用時間 $x$ 減去整數部分 $\\operatorname{floor}(x)$，得到的就是每一拍內的「小數進度」：

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/dm2eoyoon8?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形特徵**：
- 週期為 1（每 1 拍重複一次）。
- 在每一拍內是一條從 0 等速上升到 1 的斜直線。

---

**用小數鋸齒波寫斷音開關**：
因為斜直線的高度直接等於拍內的時間比例（$0 \\sim 1$），不用換算角度。
如果想在每拍前 $20\\%$（$0.2$ 拍）靜音，分類討論寫法為：
$$q = \\begin{cases}
0, & \\text{在 } t - [t] < 0.2 \\text{ 時（靜音）} \\\\
1, & \\text{在 } t - [t] \\ge 0.2 \\text{ 時（發聲）}
\\end{cases}$$

在 Desmos 裡的單行寫法為：
$$q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; t - \\operatorname{floor}(t) \\ge 0.2: 1\\right\\}$$
*(同樣可簡寫為：$q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; 1\\right\\}$)*

<div class="desmos-embed-container">
  <iframe src="https://www.desmos.com/calculator/mq7ka30chq?embed" class="desmos-iframe" frameborder="0"></iframe>
</div>

**圖形觀察**：
- 在每拍開頭小於 $0.2$ 時開關為 0（靜音），大於等於 $0.2$ 時為 1（發聲）。
- 想改靜音比例時，要靜音 15% 就寫 \`< 0.15\`，要靜音 30% 就寫 \`< 0.3\`，直接改小數即可。

---

**五、 延伸思考與反三角函數簡介**：
1. **其他週期函數**：
   除了 $x - [x]$ 之外，其他週期函數也能做開關。例如右上角範本一的第二個資料夾【tan圖形】，用正切函數 $y = \\tan\\left(\\pi x - \\frac{\\pi}{2}\\right)$ 與水平線 $y = -1$ 做分類討論，也能做出週期開關。
2. **補充：如何用正弦波改斷音時間？（反三角函數）**：
   如果一定要用正弦波來設定任意斷音比例，需要用到**反三角函數**（如 $\\arcsin$）：
   - **一般三角函數**：輸入「角度」 $\\to$ 算出「比值」（例如 $\\sin(30^\\circ) = 0.5$）。
   - **反三角函數**：輸入「比值」 $\\to$ 反查「角度」（例如 $\\arcsin(0.5) = 30^\\circ$ 或弧度 $\\frac{\\pi}{6}$）。
   Desmos 內建有 \`arcsin\` 函數，雖然可以反推需要的門檻值與角度，但比直接用 $x - [x]$ 填小數複雜許多。

---

**六、 本單元整理**：
1. **拍內進度**：用 $t - \\operatorname{floor}(t)$ 產生每一拍從 $0$ 到 $1$ 的小數進度。
2. **斷音開關**：用分類討論 $q = \\left\\{t - \\operatorname{floor}(t) < 0.2: 0, \\; 1\\right\\}$ 設定何時為 0（靜音）、何時為 1（發聲）。
3. **套入發聲函數**：
   將開關 $q$ 放進 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 的第二個位置：
   $$\\operatorname{tone}(L[t], \\; q)$$
   - 每拍開頭 $t - [t] < 0.2$ 時，$q = 0$（靜音）。
   - 拍子後段 $t - [t] \\ge 0.2$ 時，$q = 1$（正常發聲）。
   這樣連續相同的音符之間就會自動斷開。
      `,
      tasks: [
        "1. 開啟右上角【範本一：三角週期開關 (l8nygbjy8e)】：觀察 $y = \\sin(2\\pi x + \\frac{\\pi}{3})$ 與 $y = \\frac{\\sqrt{3}}{2}$ 的交點 $(0, \\frac{\\sqrt{3}}{2})$ 與 $(1, \\frac{\\sqrt{3}}{2})$，確認週期為 $1$。",
        "2. 觀察分類討論開關：檢視 $y = \\{\\sin(2\\pi x + \\frac{\\pi}{3}) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; 1\\}$ 如何將高於門檻的區間設為 $0$、其餘設為 $1$。",
        "3. 畫出高斯取整與鋸齒波：輸入 $y = \\operatorname{floor}(x)$ 觀察整數階梯，再輸入 $y = x - \\operatorname{floor}(x)$ 觀察每拍從 $0$ 上升到 $1$ 的斜直線。",
        "4. 開啟右上角【範本二：高斯鋸齒波開關 (nvksl0vch6)】：檢視 $y = \\{x - \\operatorname{floor}(x) \\le 0.2: 0, \\; 1\\}$，並試著把 $0.2$ 改成 $0.15$ 或 $0.3$ 觀察方波寬度變化。",
        "5. 小星星斷音播放：在發聲算式填入開關 $\\operatorname{tone}(L[t], \\; q)$，播放滑桿 $t$ 聽聽看加上斷音後的效果。"
      ],
      formula: `// 1. 正弦波與水平門檻線 (Desmos 範本 l8nygbjy8e)
y_1 = \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right)
y_2 = \\frac{\\sqrt{3}}{2}
y_3 = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; \\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) < \\frac{\\sqrt{3}}{2}: 1\\right\\}

// 2. 拍內小數進度 (高斯鋸齒波)
y_4 = x - \\operatorname{floor}(x)

// 3. 構造斷音開關 q (前 0.2 拍靜音)
q = \\left\\{t - \\operatorname{floor}(t) \\le 0.2: 0, 1\\right\\}

// 4. 小星星斷音發聲
\\operatorname{tone}(L[t], q)`,
      tips: `
- **tone 函數的音量參數**：語法為 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$。將斷音開關 $q$ 放在第二個參數位置，數值 0 即為靜音、1 為正常發聲。
- **Desmos 分類討論格式**：語法為 \`{條件: 取值1, 取值2}\`，符合條件時輸出第一個值，不符合時輸出第二個值。
- **斷音比例調整**：在高斯鋸齒波開關中，修改小數即可直接調整斷音比例（例如 0.2 代表每拍前 20% 靜音）。
      `,
      worksheet: {
        title: "學習單：週期函數、分類討論與斷音開關",
        questions: [
          {
            id: "q1_manual_vs_mask",
            title: "手工切分陣列 vs 週期函數斷音開關",
            type: "textarea",
            prompt: "若想讓每個音的前 1/6 靜音：\n有人提議將每拍拆成 6 格 \`[0, C, C, C, C, C]\` 並開 6 倍速播放。比起這種做法，利用週期分類討論函數 $q$ 當開關有什麼好處？",
            placeholder: "請從樂譜長度、輸入時間與後續修改等方面說明...",
            solution: "1. 樂譜較短：旋律陣列 L 只需記錄原本的音名（例如小星星只需 42 個元素），不用擴充成 6 倍（252 個元素），比較不會打錯。\n2. 容易修改：若要調整靜音時間長短，只需改開關裡的門檻數字（例如 0.2 改成 0.15），整首歌就會一起改變，不用重改樂譜陣列。",
            formatAnswer: (ans) => `手工切分 vs 函數開關比較：\n${ans}\n\n（解析：手工切分會讓陣列變長 6 倍且容易打錯；用函數開關可保持樂譜簡短，且改一個數字就能調整全曲斷音比例。）`
          },
          {
            id: "q2_gauss_vs_sine",
            title: "正弦波門檻開關 vs 高斯鋸齒波 x - [x]",
            type: "textarea",
            prompt: "在課堂中我們認識了兩種做出斷音的方法：\n1. 正弦波門檻開關：$y = \\left\\{\\sin\\left(2\\pi x + \\frac{\\pi}{3}\\right) \\ge \\frac{\\sqrt{3}}{2}: 0, \\; 1\\right\\}$。\n2. 高斯鋸齒波開關：$y = \\{x - [x] \\le 0.2: 0, 1\\}$。\n請說明：為什麼如果想自由調整斷音比例（例如改成 20% 或 15%），用 $x - [x]$ 會比正弦波方便？",
            placeholder: "請從正弦波調整時需計算角度，與高斯鋸齒波直接對應小數進度的角度說明...",
            solution: "1. 正弦波是曲線：若要改變斷音時間長度，必須重新計算角度、平移量或用反三角函數求出對應的門檻值，計算較繁瑣。\n2. 高斯鋸齒波是斜直線：在每一拍內從 0 等速上升到 1，函數值直接等於時間比例。想靜音 20% 就設 0.2，想靜音 15% 就設 0.15，不用換算角度。",
            formatAnswer: (ans) => `正弦波 vs 高斯鋸齒波比較：\n${ans}\n\n（解析：正弦波改比例需重新換算角度；高斯鋸齒波每拍從 0 等速上升到 1，數值直接等於時間比例，直接填小數即可。）`
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
在 4-2 中，我們把斷音開關 $q$ 放在 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 的第二個參數位置，讓同音之間可以分開。
但因為開關只有 0 跟 1，每個音在響的時候音量都固定不變，聽起來比較像電子蜂鳴器。

真實的敲擊或撥弦樂器（如鋼琴、木琴、吉他）在剛彈下去的瞬間音量最大，接著聲音會慢慢變小（衰減）。
既然我們已經有每一拍從 0 跑到 1 的拍內小數 $u = t - \\operatorname{floor}(t)$，
只要把第二個音量參數換成「隨時間遞減的函數」，就能做出類似鋼琴或木琴的餘音效果。
      `,
      mathModel: `
**一、 一次函數線性漸弱（直線下降）**：
令拍內小數進度 $u = t - \\operatorname{floor}(t) \\in [0, 1)$。
若想讓每一拍的音量從 $1$ 等速降到 $0.5$：
$$g(t) = 1 - 0.5(t - \\operatorname{floor}(t))$$
- **拍頭** $u = 0 \\implies g(t) = 1$。
- **拍尾** $u = 1 \\implies g(t) = 0.5$。
- **聽感**：音量按直線等速變小，聽起來比較生硬，不太像真實樂器敲擊的聲音。

---

**二、 指數等比衰減（單音敲擊測試）**：
在物理上，琴弦或木片振動的能量損耗屬於「等比衰減」（每經過固定時間乘上固定比例）：
$$E(t) = (0.5)^{k(t - \\operatorname{floor}(t))}$$
先用單音 $440\\text{Hz}$ 測試：
$$\\operatorname{tone}(440, \\; (0.5)^{k(t - \\operatorname{floor}(t))})$$
調整**衰減係數滑桿 $k$**，比較不同 $k$ 值的聲音差異：
- **$k = 8 \\sim 12$**：聲音掉得很快，短促清脆，接近木琴或撥弦。
- **$k = 2 \\sim 3$**：聲音消散較慢，餘音較長，接近鋼琴。

---

**三、 套入小星星樂譜**：
接著把指數衰減函數放進小星星的發聲算式中：
$$\\operatorname{tone}(L[t], \\; E(t))$$
可以比較看看它跟 3-1（平音無斷開）、4-2（方波斷音）聽起來有什麼不同。

---

**四、 拍尾 15% 靜音處理**：
當 $k$ 設得比較小（如 $k=2$）時，到拍子結尾處還有約 $25\\%$ 的音量。為了避免跟下一拍的開頭混在一起，可以結合 4-2 的分類討論，在每拍最後 15% 將音量設為 0：
$$E(t) = \\left\\{t - \\operatorname{floor}(t) > 0.85: 0, \\; (0.5)^{k(t - \\operatorname{floor}(t))}\\right\\}$$
      `,
      tasks: [
        "1. 單音敲擊測試：在 Desmos 輸入 $\\operatorname{tone}\\left(440, \\; (0.5)^{k(t - \\operatorname{floor}(t))}\\right)$，建立滑桿 $k$（範圍 $1$ 到 $15$，步長 $0.5$），比較 $k=10$ 與 $k=2.5$ 的餘音長短。",
        "2. 套入小星星樂譜：將指數衰減套入小星星樂譜 $\\operatorname{tone}(L[t], \\; E(t))$ 播放聽聽看。",
        "3. 加入拍尾靜音：將算式改為 $E(t) = \\{t - \\operatorname{floor}(t) > 0.85: 0, \\; (0.5)^{k(t - \\operatorname{floor}(t))}\\}$，聽聽看拍尾留白的效果。"
      ],
      formula: `// 1. 拍內小數進度 (0 跑到 1)
u = t - floor(t)

// 2. 單音敲擊測試 (440Hz，拉動 k 比較餘音長短)
k = 3
tone(440, (0.5)^(k * u))

// 3. 指數衰減函數 (加入拍尾 15% 靜音)
E(t) = {t - floor(t) > 0.85: 0, (0.5)^(k * (t - floor(t)))}

// 4. 套入小星星樂譜 (需搭配樂譜陣列 L)
tone(L[t], E(t))`,
      tips: `
- **係數 $k$ 與曲線斜率**：底數為 $0.5 < 1$ 時，次方係數 $k$ 越大，指數曲線下降越快，聲音越短促；$k$ 越小，曲線越平緩，餘音越長。
- **拍尾歸零**：加上 \`{t - floor(t) > 0.85: 0}\` 可在每拍結束前先把音量歸零，讓下一拍開頭更清楚。
      `,
      worksheet: {
        title: "學習單：音量控制與指數衰減",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_damping_k",
            title: "係數 k 與餘音長短",
            type: "radio",
            prompt: "若想在 Desmos 中用指數衰減模型 $E(t) = (0.5)^{k(t - \\operatorname{floor}(t))}$ 模擬「聲音短促的木琴（敲擊後聲音很快消失）」，係數 $k$ 應該如何設定？",
            options: [
              "將 $k$ 調大（例如 $k = 10$），讓指數曲線快速下降",
              "將 $k$ 調小（例如 $k = 0.5$），讓曲線平緩下降",
              "將 $k$ 設為 $0$，讓音量保持不變",
              "$k$ 只會影響音高（頻率），與餘音長短無關"
            ],
            solution: "因為底數為 $0.5$（小於 1），當次方上的係數 $k$ 越大，數值下降得越快。\n- $k = 10$：音量在拍頭過後很快降下來，聲音短促，接近木琴。\n- $k = 2.5$：下降較慢，餘音較長，接近鋼琴。",
            formatAnswer: (ans) => `係數 k 選擇：【${ans}】\n解析：底數為 0.5 時，k 越大衰減越快，聲音越短促；k 較小時衰減較慢，餘音較長。`
          },
          {
            id: "q2_decay_half",
            title: "拍內音量衰減計算",
            type: "text",
            prompt: "考慮指數衰減算式 $E(u) = (0.5)^{k \\cdot u}$，其中 $u = t - \\operatorname{floor}(t)$ 代表拍內進度（$0 \\le u < 1$）。若設定 $k = 4$，請問當拍子進行到一半（$u = 0.5$）時，音量 $E(0.5)$ 會變成開頭（$u=0$ 時音量為 1）的幾分之幾？（請填小數或分數，如 0.25 或 1/4）：",
            placeholder: "請輸入小數或分數，範例：0.5 或 1/2",
            expected: "0.25 | 1/4",
            solution: "推導過程：\n將 $k = 4, u = 0.5$ 代入算式：\n$$E(0.5) = (0.5)^{4 \\times 0.5} = (0.5)^2 = 0.25 = \\frac{1}{4}$$\n因此在半拍時，音量變為原本的四分之一（$0.25$）。",
            formatAnswer: (ans) => `音量計算：${ans}（標準答案：0.25 或 1/4）\n計算說明：代入 E(0.5) = (0.5)^(4 × 0.5) = (0.5)^2 = 0.25 = 1/4。`
          },
          {
            id: "q3_linear_vs_exp",
            title: "一次線性漸弱 vs 指數等比衰減",
            type: "textarea",
            prompt: "在課堂上分別聽「一次函數線性漸弱 $g(u) = 1 - 0.5u$」與「指數等比衰減 $E(u) = (0.5)^{3u}$」，兩者聽起來有什麼差別？哪一種比較像真實樂器敲擊的聲音？",
            placeholder: "請描述兩種函數聽起來的差別...",
            solution: "1. 一次函數線性漸弱：音量以固定速率下降，聽起來比較平淡機械。\n2. 指數等比衰減：剛敲下去時音量快速下降，接著下降速度變慢、留下一點微弱餘音，比較符合真實樂器振動能量消散的過程。",
            formatAnswer: (ans) => `線性漸弱 vs 指數衰減聽感比較：\n${ans}\n\n（解析：線性漸弱等速下降；指數衰減則是先快後慢，留下微弱餘音，較接近真實樂器。）`
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
在 4-1 到 4-3 中，我們用拍內小數 $u = t - \\operatorname{floor}(t)$ 控制第二個參數（音量）。
如果把 $u$ 也放進**第一個參數（頻率）**裡，讓頻率在每一拍的 $0.2 \\sim 0.3$ 秒內跟著函數快速變化：
例如沿著二次拋物線上升、沿著指數曲線下降，或是加上正弦波快速震動，就能做出各種復古電玩音效與鼓聲。
      `,
      mathModel: `
以下算式都使用拍內小數 $u = t - \\operatorname{floor}(t) \\in [0, 1)$，並在第二個音量參數限制發聲時間：

**一、 大鼓 Kick Drum（頻率快速下降 ＋ 音量指數衰減）**：
- **原理**：鼓棒打到鼓皮的瞬間頻率較高，接著鼓皮張力放鬆、頻率在短時間內降到低頻，同時音量快速衰減。
- **算式**：
  $$\\operatorname{tone}\\left(40 + 110 \\cdot (0.5)^{25u}, \\; \\left\\{u > 0.3: 0, \\; (0.5)^{12u}\\right\\}\\right)$$
  - 頻率：從 $40 + 110 = 150\\text{Hz}$ 快速降到接近 $40\\text{Hz}$。
  - 音量：前 $0.3$ 秒指數衰減，之後設為 0。

---

**二、 起跳音效 Mario Jump（二次拋物線頻率上升）**：
- **原理**：音高在短時間內隨二次函數加速往上升。
- **算式**：
  $$\\operatorname{tone}\\left(400 + 800u^2, \\; \\{u \\le 0.3: 0.5, \\; 0\\}\\right)$$
  - 頻率：沿著拋物線 $400 + 800u^2$，在 $0.3$ 秒內從 $400\\text{Hz}$ 上升到 $472\\text{Hz}$。
  - 音量：只在 $u \\le 0.3$ 時發聲，超過即設為 0。

---

**三、 雷射音效 Laser Gun（頻率指數下降）**：
- **原理**：頻率從高音沿指數曲線快速往下降。
- **算式**：
  $$\\operatorname{tone}\\left(1500 \\cdot (0.5)^{10u}, \\; \\{u \\le 0.4: 0.5, \\; 0\\}\\right)$$
  - 頻率：從 $1500\\text{Hz}$ 按指數快速往下降。

---

**四、 吃金幣 / 道具音效 Power-up（正弦波改變頻率）**：
- **原理**：在固定頻率上加上快速震盪的正弦波。
- **算式**：
  $$\\operatorname{tone}\\left(600 + 200\\sin(30u), \\; \\{u \\le 0.3: 0.5, \\; 0\\}\\right)$$
  - 頻率在 $400 \\sim 800\\text{Hz}$ 之間快速上下震動。

---

**五、 延伸練習：大鼓伴奏加上小星星旋律**：
<details class="formula-details" style="margin-top: 1rem;">
  <summary class="formula-summary" style="cursor: pointer; padding: 0.6rem 1rem; font-weight: 600;">查看延伸練習：大鼓伴奏與小星星合奏算式</summary>
  <div style="padding: 1rem 1.25rem; font-size: 0.95rem; line-height: 1.8;">
    在 Desmos 裡，多個 <code>tone</code> 算式可以同時開啟發聲。<br>
    利用同餘 <code>mod</code> 判斷奇數拍與偶數拍，可以讓大鼓每兩拍打一次，同時播放小星星旋律：
    <pre style="margin-top: 0.5rem; background: var(--bg-card); padding: 0.75rem; border-radius: var(--radius-sm); overflow-x: auto;"><code>// 拍內小數
u = t - floor(t)

// 第一軌：每隔一拍打一次大鼓
tone(40 + 110 * (0.5)^(25u), {mod(floor(t), 2) = 0: {u > 0.3: 0, (0.5)^(12u)}, 0})

// 第二軌：小星星旋律
tone(L[t], {u > 0.85: 0, (0.5)^(3u)})</code></pre>
  </div>
</details>
      `,
      tasks: [
        "1. 測試大鼓音效：在 Desmos 輸入大鼓算式，按下時間滑桿 $t$ 播放，聽聽看頻率快速下降產生的鼓聲。",
        "2. 測試拋物線起跳：輸入起跳算式，試著改動二次項係數（如 $800$ 改為 $2000$）或加上負號（改成 $-800$），聽聽看音高變化。",
        "3. 測試雷射與道具音效：依序輸入指數下降與正弦波調頻算式，比較不同函數放在頻率位置的效果。",
        "4. 修改參數自訂音效：挑一個算式修改裡面的數字或函數，調出一個自己的音效。"
      ],
      formula: `// 1. 拍內小數進度
u = t - floor(t)

// 2. 大鼓 Kick (頻率下降 + 音量衰減)
tone(40 + 110 * (0.5)^(25u), {u > 0.3: 0, (0.5)^(12u)})

// 3. 起跳音效 (二次拋物線頻率上升)
tone(400 + 800 * u^2, {u <= 0.3: 0.5, 0})

// 4. 雷射音效 (頻率指數下降)
tone(1500 * (0.5)^(10u), {u <= 0.4: 0.5, 0})

// 5. 道具音效 (正弦波改變頻率)
tone(600 + 200 * sin(30u), {u <= 0.3: 0.5, 0})`,
      tips: `
- **鼓聲的組成**：鼓聲通常在 $0.1 \\sim 0.3$ 秒內完成，特徵是「頻率快速下降」加上「音量指數衰減」。
- **拋物線正負號**：二次項係數為正時（$+800u^2$），開口向上，音高往上跑；係數為負時（$-800u^2$），開口向下，音高往下掉。
- **時間門檻位置**：把發聲時間條件寫在第二個音量參數 \`{u <= 0.3: 0.5, 0}\`，超過時間自動設為靜音 0。
      `,
      worksheet: {
        title: "學習單：電玩音效與函數參數調整",
        requireDesmosLink: true,
        questions: [
          {
            id: "q1_parabola_jump",
            title: "拋物線開口方向與音高變化",
            type: "radio",
            prompt: "在起跳音效算式 $\\operatorname{tone}(400 + 800u^2, \\; \\{u \\le 0.3: 0.5, 0\\})$ 中：\n若把二次項係數改成負數，例如改成 $400 - 800u^2$：\n1. 二次函數圖形的開口方向會如何改變？\n2. 聽到的聲音會有什麼變化？",
            options: [
              "圖形開口向下，頻率從 $400$ 往下降，聽起來像往下掉的音效",
              "圖形開口向上，頻率上升得更快，聽起來音高更高",
              "開口方向不變，但音量會變大兩倍",
              "頻率會固定在 $400\\text{Hz}$，沒有音高變化"
            ],
            solution: "解析：\n1. 圖形：二次項係數由正數（$+800$）改為負數（$-800$）時，拋物線開口由向上變為向下。\n2. 聲音：隨著時間 $u$ 增加，頻率 $400 - 800u^2$ 會從 $400\\text{Hz}$ 往下降，產生音高向下滑落的音效。",
            formatAnswer: (ans) => `拋物線正負變換分析：【${ans}】\n解析：二次項係數為負時拋物線開口向下，頻率隨時間下滑。`
          },
          {
            id: "q2_custom_sound_design",
            title: "自訂音效算式與說明",
            type: "textarea",
            prompt: "請在 Desmos 中挑選一個函數（或修改上面四個音效的數字），做一個自己的音效。\n請填寫：\n1. 你的音效算式（例如：`tone(...)`）\n2. 這個音效聽起來像什麼情境（例如：跳躍、掉落、發射、警報等）\n3. 你改了哪個數字或函數？",
            placeholder: "請填寫：1. 算式；2. 音效情境；3. 修改的參數說明...",
            solution: "參考範例：\n1. 算式：`tone(800 * (0.5)^(15u) + 300 * sin(40u), {u <= 0.25: 0.6, 0})`\n2. 情境：發射雷射光。\n3. 說明：結合指數下降與正弦波震動，並讓聲音在 0.25 秒結束。",
            formatAnswer: (ans) => `自訂音效紀錄：\n${ans}`
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
      title: "物理駐波與管樂器邊界條件",
      conceptTitle: "從音樂謎團出發：長笛與豎笛的音色差異",
      modelTitle: "駐波形成機制、對稱管與單邊閉管分析",
      status: "ready",
      desmosUrl: null,
      motivation: `
在管弦樂團中，長笛與豎笛（單簧管）即使吹出完全一樣的音高（例如都是 $A_4 = 440\\text{Hz}$），音量也調到一樣大，耳朵依然可以輕易分辨：
- **長笛**：聲音明亮、開闊、通透。
- **豎笛**：聲音較為低沉、中空，帶有濃郁的木質鼻音。

為什麼音高相同的兩個音，音色會有如此巨大的差別？
因為樂器在發出基音時，管壁內的空氣柱同時伴隨著整數倍頻率的振動（稱為**諧音**或**泛音**）。
更特別的是：
- **長笛**的內部包含了 $1, 2, 3, 4, 5, 6\\dots$ **全部的整數倍諧音**（包含奇數與偶數倍）。
- **豎笛**的內部卻**只有 $1, 3, 5, 7\\dots$ 奇數倍諧音，偶數倍諧音（$2, 4, 6, 8\\dots$）幾乎完全消失**。

為什麼樂器內部的空氣振動會自動「挑選」特定倍數？這完全取決於空氣在管子兩端形成的**「駐波（Standing Wave）」**物理邊界條件。
      `,
      mathModel: `
### 一、 如何形成駐波？
當兩道**振幅相同、頻率相同、但傳播方向相反**的行進波（例如管內的入射聲波與管端反射回來的聲波）重疊干涉時，波形不再向前移動，而是在原地規律上下振動，稱為**駐波**。

駐波具有兩個最核心的物理特徵：
1. **波節（Node，簡稱 N）**：兩道波完全抵消、位移恆為 $0$（完全不動）的位置。
2. **波腹（Antinode，簡稱 A）**：兩道波完全疊加、振動幅度最大（上下擺幅最大）的位置。

**關鍵物理幾何間距**：
- 兩個相鄰波節（或相鄰波腹）之間的距離，剛好等於**半個波長（$\\frac{\\lambda}{2}$）**。
- 相鄰的一個波節與一個波腹之間的距離，剛好等於**四分之一波長（$\\frac{\\lambda}{4}$）**。

---

### 二、 兩端對稱管（兩端皆封閉 vs 兩端皆開放）
在物理上，邊界處的空氣狀態取決於管口結構：
- **封閉端（如琴弦兩端固定、管底堵住）**：空氣受阻無法移動，**必為位移波節（N）**。
- **開放端（如管口大開接觸大氣）**：空氣進出最自由、振動最大，**必為位移波腹（A）**。

#### (A) 兩端封閉管（吉他弦、鋼琴弦，兩端皆為波節 N-N）
管長 $L$ 兩端都被固定（$x=0$ 與 $x=L$ 皆為波節），因此管長內**必須剛好容納半波長（$\\frac{\\lambda}{2}$）的整數倍**：
- **第 1 階（基音）**：$L = 1 \\cdot \\frac{\\lambda_1}{2} \\implies \\lambda_1 = 2L$（頻率為 $f_0$）
- **第 2 階**：$L = 2 \\cdot \\frac{\\lambda_2}{2} \\implies \\lambda_2 = L$（頻率為 $2f_0$）
- **第 3 階**：$L = 3 \\cdot \\frac{\\lambda_3}{2} \\implies \\lambda_3 = \\frac{2}{3}L$（頻率為 $3f_0$）

#### (B) 兩端開放管（長笛，兩端皆為波腹 A-A）
長笛吹孔與管尾皆為開口，兩端空氣皆為波腹。因為**兩端狀態對稱**，管長內所容納的波長關係與兩端封閉完全相同，依然滿足 $L = n \\cdot \\frac{\\lambda}{2}$：
- 基音：頻率為 $1f_0$
- 後續階數：頻率依序為 $2f_0, 3f_0, 4f_0, 5f_0\\dots$

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
    <text x="350" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#45403a">【駐波圖解一】兩端固定／對稱管：管長 L = n · (λ/2)，所有整數倍頻率皆成立</text>
    <line x1="150" y1="30" x2="150" y2="335" class="sw-wall" />
    <line x1="550" y1="30" x2="550" y2="335" class="sw-wall" />
    <text x="150" y="350" class="sw-tag">端點 x = 0 (波節 N)</text>
    <text x="550" y="350" class="sw-tag">端點 x = L (波節 N)</text>

    <!-- Row 1: n = 1 -->
    <line x1="150" y1="68" x2="550" y2="68" class="sw-axis" />
    <path d="M 150 68 C 294 28, 406 28, 550 68 C 406 108, 294 108, 150 68 Z" class="sw-lobe" />
    <path d="M 150 68 C 294 28, 406 28, 550 68" class="sw-solid" />
    <path d="M 150 68 C 294 108, 406 108, 550 68" class="sw-dash" />
    <circle cx="150" cy="68" r="5" class="sw-node" />
    <circle cx="550" cy="68" r="5" class="sw-node" />
    <text x="350" y="62" class="sw-tag" fill="#456854">波腹 A</text>
    <text x="20" y="64" class="sw-label-l">n = 1（基音）</text>
    <text x="20" y="82" class="sw-label-sub">長度 L = ½λ</text>
    <text x="568" y="73" class="sw-label-r">第一諧音 (1f₀)</text>

    <!-- Row 2: n = 2 -->
    <line x1="150" y1="142" x2="550" y2="142" class="sw-axis" />
    <path d="M 150 142 C 222 102, 278 102, 350 142 C 422 182, 478 182, 550 142 C 478 102, 422 102, 350 142 C 278 182, 222 182, 150 142 Z" class="sw-lobe" />
    <path d="M 150 142 C 222 102, 278 102, 350 142 C 422 182, 478 182, 550 142" class="sw-solid" />
    <path d="M 150 142 C 222 182, 278 182, 350 142 C 422 102, 478 102, 550 142" class="sw-dash" />
    <circle cx="150" cy="142" r="5" class="sw-node" />
    <circle cx="350" cy="142" r="5" class="sw-node" />
    <circle cx="550" cy="142" r="5" class="sw-node" />
    <text x="350" y="130" class="sw-tag">N</text>
    <text x="20" y="138" class="sw-label-l">n = 2（第一泛音）</text>
    <text x="20" y="156" class="sw-label-sub">長度 L = 1λ</text>
    <text x="568" y="147" class="sw-label-r">第二諧音 (2f₀)</text>

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
    <text x="20" y="212" class="sw-label-l">n = 3（第二泛音）</text>
    <text x="20" y="230" class="sw-label-sub">長度 L = ³⁄₂λ</text>
    <text x="568" y="221" class="sw-label-r">第三諧音 (3f₀)</text>

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
    <text x="20" y="286" class="sw-label-l">n = 4（第三泛音）</text>
    <text x="20" y="304" class="sw-label-sub">長度 L = 2λ</text>
    <text x="568" y="295" class="sw-label-r">第四諧音 (4f₀)</text>
  </svg>
</div>

**名稱名詞對照（兩端對稱管）**：
- **基音（Fundamental）** ＝ **第一諧音**（頻率 $1f_0$）
- **第一泛音（1st Overtone）** ＝ **第二諧音**（頻率 $2f_0$）
- **第二泛音（2nd Overtone）** ＝ **第三諧音**（頻率 $3f_0$）
- **第三泛音（3rd Overtone）** ＝ **第四諧音**（頻率 $4f_0$）
> **名詞區分口訣**：
> - **諧音（Harmonics）**：包含基音，頻率是幾倍就是第幾諧音（$1f_0$ 是第一諧音、$2f_0$ 是第二諧音）。
> - **泛音（Overtone）**：不含基音，基音「之上」第幾個冒出來的聲音，就叫第幾泛音（$2f_0$ 是第一泛音）。

---

### 三、 一端封閉、一端開放管（單邊閉管，如豎笛／單簧管）
豎笛吹奏時，吹嘴端被嘴唇緊含阻擋空氣移動（**波節 N**），喇叭口端則為開放大氣（**波腹 A**）。
邊界條件被打破：**一端必為波節，另一端必為波腹**。

從波節到波腹，最短的距離只需要 **四分之一波長（$\\frac{\\lambda}{4}$）**！
後續能同時滿足「左端波節、右端波腹」的駐波狀態，每次必須多容納半個波長（$\\frac{2}{4}\\lambda$）：
1. **第 1 個狀態（$n=1$）**：$L = 1 \\cdot \\frac{\\lambda_1}{4} \\implies \\lambda_1 = 4L \\implies$ 頻率為 **$1f_0$（基音／第一諧音）**
2. **第 2 個狀態（$n=3$）**：$L = 3 \\cdot \\frac{\\lambda_3}{4} \\implies \\lambda_3 = \\frac{4}{3}L \\implies$ 頻率為 **$3f_0$（第一泛音／第三諧音）**
3. **第 3 個狀態（$n=5$）**：$L = 5 \\cdot \\frac{\\lambda_5}{4} \\implies \\lambda_5 = \\frac{4}{5}L \\implies$ 頻率為 **$5f_0$（第二泛音／第五諧音）**
4. **第 4 個狀態（$n=7$）**：$L = 7 \\cdot \\frac{\\lambda_7}{4} \\implies \\lambda_7 = \\frac{4}{7}L \\implies$ 頻率為 **$7f_0$（第三泛音／第七諧音）**

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
    <text x="350" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#45403a">【駐波圖解二】單邊封閉管（閉管）：左端必為波節 (N)、右端管口必為波腹 (A)</text>

    <!-- Row 1: n = 1 (1/4 lambda) -->
    <path d="M 550 40 L 150 40 L 150 96 L 550 96" class="cp-pipe" />
    <line x1="150" y1="68" x2="550" y2="68" class="cp-axis" />
    <path d="M 150 68 C 294 42, 420 42, 550 42 L 550 94 C 420 94, 294 94, 150 68 Z" class="cp-lobe" />
    <path d="M 150 68 C 294 42, 420 42, 550 42" class="cp-solid" />
    <path d="M 150 68 C 294 94, 420 94, 550 94" class="cp-dash" />
    <circle cx="150" cy="68" r="5" class="cp-node" />
    <text x="542" y="64" class="cp-tag" fill="#456854">波腹 A</text>
    <text x="20" y="64" class="cp-label-l">n = 1（基音）</text>
    <text x="20" y="82" class="cp-label-sub">管長 L = ¼λ</text>
    <text x="565" y="73" class="cp-label-ok">✓ 第一諧音 (1f₀)</text>

    <!-- Row 2: n = 2 (Invalid!) -->
    <path d="M 550 120 L 150 120 L 150 176 L 550 176" class="cp-pipe" stroke-opacity="0.45" />
    <line x1="150" y1="148" x2="550" y2="148" class="cp-axis" />
    <path d="M 150 148 C 294 114, 406 114, 550 148 C 406 182, 294 182, 150 148 Z" class="cp-bad-lobe" />
    <path d="M 150 148 C 294 114, 406 114, 550 148" class="cp-bad-solid" />
    <path d="M 150 148 C 294 182, 406 182, 550 148" class="cp-bad-solid" opacity="0.5" />
    <circle cx="150" cy="148" r="5" class="cp-node" />
    <circle cx="550" cy="148" r="5" fill="#b85d43" stroke="#fff" stroke-width="1.5" />
    <text x="20" y="144" class="cp-label-l" fill="#b85d43">n = 2（偶數倍）</text>
    <text x="20" y="162" class="cp-label-sub">管長 L = ½λ</text>
    <text x="565" y="145" class="cp-label-ng">✕ 第二諧音 (2f₀) 不存在</text>
    <text x="565" y="163" class="cp-label-sub">（管口變成波節，違反物理邊界）</text>

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
    <text x="20" y="224" class="cp-label-l">n = 3（第一泛音）</text>
    <text x="20" y="242" class="cp-label-sub">管長 L = ¾λ</text>
    <text x="565" y="233" class="cp-label-ok">✓ 第三諧音 (3f₀)</text>

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
    <text x="20" y="304" class="cp-label-l">n = 5（第二泛音）</text>
    <text x="20" y="322" class="cp-label-sub">管長 L = ⁵⁄₄λ</text>
    <text x="565" y="313" class="cp-label-ok">✓ 第五諧音 (5f₀)</text>

    <text x="150" y="356" class="cp-tag">左端封閉吹嘴 (波節 N)</text>
    <text x="530" y="356" class="cp-tag" fill="#456854">右端開放管口 (波腹 A)</text>
  </svg>
</div>

**為什麼閉管沒有偶數諧音（如 $2f_0, 4f_0$）？**
若頻率為 $2f_0$，波長 $\\lambda = 2L$，管長 $L = \\frac{1}{2}\\lambda$。
從左端波節出發經過半個波長，右端開口處剛好會落在位移為 $0$ 的**波節**。但管口向大氣完全開放，空氣分子在此處必須自由振動（波腹）；若管口變成波節動彈不得，兩波反射後會互相抵消抹平，因此偶數倍頻率在物理上無法穩定共振發聲。

**名稱名詞對照（單邊閉管）**：
- **基音（Fundamental）** ＝ **第一諧音**（頻率 $1f_0$）
- **第一泛音（1st Overtone）** ＝ **第三諧音**（頻率 $3f_0$；注意第二諧音缺失）
- **第二泛音（2nd Overtone）** ＝ **第五諧音**（頻率 $5f_0$；注意第四諧音缺失）
- **第三泛音（3rd Overtone）** ＝ **第七諧音**（頻率 $7f_0$；注意第六諧音缺失）

---

### 四、 兩種管樂器的音色總結與聽覺印證

<div class="scale-table-wrap">
  <table class="scale-table">
    <thead>
      <tr>
        <th>管樂器類型</th>
        <th>代表樂器</th>
        <th>兩端邊界條件</th>
        <th>存在的諧音倍數</th>
        <th>聽覺音色特徵</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>兩端開放（開管）</strong></td>
        <td><strong>長笛</strong></td>
        <td>兩端皆波腹（對稱）</td>
        <td><strong>全部整數倍</strong>（$1, 2, 3, 4, 5, 6\\dots$）</td>
        <td>明亮、通透、開闊</td>
      </tr>
      <tr>
        <td><strong>單邊封閉（閉管）</strong></td>
        <td><strong>豎笛（單簧管）</strong></td>
        <td>左端波節、右端波腹（不對稱）</td>
        <td><strong>僅奇數倍</strong>（$1, 3, 5, 7\\dots$）</td>
        <td>溫潤、中空、帶有微啞鼻音</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      tasks: [
        "1. 兩端對稱管（全諧音）試聽：在 Desmos 輸入 $\\operatorname{tone}\\left([1, 2, 3, 4, 5, 6] \\cdot 220, \\; [0.4, 0.35, 0.25, 0.15, 0.08, 0.04]\\right)$，仔細聆聽包含偶數諧音時長笛般的明亮開闊音色。",
        "2. 單邊閉管（奇數諧音）試聽：改輸入 $\\operatorname{tone}\\left([1, 3, 5, 7] \\cdot 220, \\; [0.45, 0.35, 0.2, 0.1]\\right)$，仔細聆聽缺少偶數諧音時豎笛般的空心中空鼻音。",
        "3. 盲聽對比：在兩個算式左側反覆切換點亮音符開關，感受兩者截然不同的物理音色本質。"
      ],
      formula: `// 1. 兩端對稱管（長笛／開管）：包含全部整數倍諧音 (1, 2, 3, 4, 5, 6...)
\\operatorname{tone}([1, 2, 3, 4, 5, 6] \\cdot 220, [0.4, 0.35, 0.25, 0.15, 0.08, 0.04])

// 2. 單邊封閉管（豎笛／閉管）：僅含奇數倍諧音 (1, 3, 5, 7...)，偶數諧音缺失
\\operatorname{tone}([1, 3, 5, 7] \\cdot 220, [0.45, 0.35, 0.2, 0.1])`,
      tips: `
- **諧音與泛音的辨析口訣**：
  - 諧音（Harmonics）算基音：頻率為幾倍就是第幾諧音。
  - 泛音（Overtone）不算基音：基音之上冒出的第幾個音，就是第幾泛音。
- **長笛也是開管**：長笛吹孔處雖然嘴唇貼著，但吹孔並未被完全封死，空氣依然可以由吹孔兩側進出，因此在聲學上兩端皆視為開放波腹。
      `,
      worksheet: {
        title: "學習單：物理駐波、管樂器邊界條件與諧音結構",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_standing_wave_boundary",
            title: "兩端對稱管的諧音生成規律",
            type: "radio",
            prompt: "兩端皆為波節（如吉他弦）或兩端皆為波腹（如長笛）的對稱管，為什麼能夠產生 $1, 2, 3, 4, 5\\dots$ 全部正整數倍的諧音？",
            options: [
              "因為兩端狀態對稱，管長 $L$ 只要能剛好塞進半波長（$\\frac{\\lambda}{2}$）的整數倍，就能形成穩定的駐波共振",
              "因為 Desmos 軟體限制只能輸入整數",
              "因為管內空氣只能以固定的單一波長前進",
              "因為偶數倍諧音在任何樂器中都會被空氣自然吸收"
            ],
            solution: "解析：\n兩端狀態對稱時（兩端皆為節點或皆為腹點），相鄰兩節點（或兩腹點）距離為半個波長（λ/2）。只要管長 L 滿足 L = n · (λ/2)（n 為任意正整數），兩端就能同時符合邊界條件形成駐波，因此產生所有正整數倍諧音。",
            formatAnswer: (ans) => `兩端對稱管諧音規律：【${ans}】`
          },
          {
            id: "q2_closed_pipe_harmonics",
            title: "單邊閉管（豎笛）的諧音與泛音對應",
            type: "radio",
            prompt: "豎笛（單簧管）屬於「吹嘴端封閉（波節）、管口開放（波腹）」的單邊閉管樂器。關於豎笛能產生的聲音，下列敘述何者正確？",
            options: [
              "豎笛只產生奇數倍諧音（第一、第三、第五、第七諧音），其第一泛音為第三諧音（$3f_0$）",
              "豎笛只產生偶數倍諧音（第二、第四、第六諧音），其第一泛音為第二諧音（$2f_0$）",
              "豎笛的所有諧音倍數與長笛完全相同，沒有任何差異",
              "豎笛的第一泛音是第五諧音（$5f_0$）"
            ],
            solution: "解析：\n單邊閉管一端為波節、另一端為波腹，管長滿足 L = (2m-1) · (λ/4)，因此只會產生奇數倍諧音（1, 3, 5, 7 倍頻率）。\n在基音（第一諧音 1f₀）之後第一個出現的聲音是 3 倍頻率，因此豎笛的第一泛音即為第三諧音（3f₀）。",
            formatAnswer: (ans) => `單邊閉管諧音與泛音分析：【${ans}】`
          }
        ]
      }
    },

    "5-2": {
      id: "5-2",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "自然泛音列與樂器音色合成",
      conceptTitle: "全諧音 vs 奇數諧音：長笛與豎笛的音色調配",
      modelTitle: "樂器諧音比例、高次衰減與時間包絡模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/msxzmo955w",
      motivation: `
在單元 5-1 中，我們從物理駐波邊界推導出兩個核心規律：
1. **兩端開放管（如長笛）**：兩端狀態對稱，能產生 $1, 2, 3, 4, 5, 6\\dots$ **全部的整數倍諧音**（包含奇數與偶數倍）。
2. **單邊閉管（如豎笛／單簧管）**：吹嘴端為波節、管口為波腹，**僅能產生 $1, 3, 5, 7\\dots$ 奇數倍諧音**，偶數倍諧音缺失。

當這些不同倍數的諧音跟基音 $1f_0$ 同時發聲時，耳朵會將它們融合成「同一個音高」，但**各個諧音的強弱比例**與**音量隨時間的變化（第 4 章）**，便決定了樂器最終的「音色」。
      `,
      mathModel: `
### 一、 長笛（全諧音）vs 豎笛（奇數諧音）音色合成
點擊右上角「開啟 Desmos 範本 ↗」（\`msxzmo955w\`，標題：**不同音色**），範本內有兩個資料夾，分別演示兩種真實樂器的諧音比例：

#### 1. 📁 資料夾一【長笛】（奇數與偶數諧音皆明顯，$k_1 = 440\\text{Hz}$）
- 點開第一行單音 $\\operatorname{tone}(440, 0.16)$：只有單一頻率的正弦純音。
- 關閉單音，改點開下方的 $\\operatorname{tone}(F_1, V_1)$：
  $$F_1 = [k_1, 2k_1, 3k_1, 4k_1, 5k_1, 6k_1, 7k_1, 8k_1, \\dots]$$
  $$V_1 = 0.16 \\cdot [\\mathbf{0.65}, \\; \\mathbf{1.00}, \\; \\mathbf{0.70}, \\; \\mathbf{0.35}, \\; 0.16, 0.08, 0.04, 0.02, \\dots]$$
- **數據觀察**：
  - 看前 4 個諧音的音量比例 $[0.65, \\; 1.00, \\; 0.70, \\; 0.35]$：**第二諧音（$2k_1$，比例 $1.00$）與第四諧音（$4k_1$，比例 $0.35$）等偶數倍數值都很大**。
  - 豐富的偶數諧音讓長笛聽起來明亮、清澈且通透。

#### 2. 📁 資料夾二【豎笛／單簧管】（奇數諧音強、偶數諧音微弱，$k_2 = 294\\text{Hz}$）
- 同樣先聽單音 $\\operatorname{tone}(294, 0.18)$，再點開下方的 $\\operatorname{tone}(F_2, V_2)$：
  $$F_2 = [k_2, 2k_2, 3k_2, 4k_2, 5k_2, 6k_2, 7k_2, 8k_2, \\dots]$$
  $$V_2 = 0.18 \\cdot [\\mathbf{1.00}, \\; 0.06, \\; \\mathbf{0.85}, \\; 0.10, \\; \\mathbf{0.45}, \\; 0.06, \\; \\mathbf{0.25}, \\; 0.04, \\dots]$$
- **數據觀察**：
  - **奇數諧音（第 1, 3, 5, 7 諧音）**：音量為 $\\mathbf{1.00, \\; 0.85, \\; 0.45, \\; 0.25}$（數值顯著）。
  - **偶數諧音（第 2, 4, 6, 8 諧音）**：音量僅為 $0.06, \\; 0.10, \\; 0.06, \\; 0.04$（極度微弱、接近 $0$）。
  - 偶數諧音的缺失使得豎笛聽起來具備明顯的中空感與溫潤木管鼻音。

> **範本細節說明**：
> 1. **陣列尾端的微差頻率（$k \\pm 3$）**：利用 2-1 學過的拍頻，在頻率加減 $3\\text{Hz}$ 產生微幅波動，模擬真實吹奏時的氣流顫音。
> 2. **外層係數 \`0.16\` 與 \`0.18\`**：避免多個諧音疊加後總振幅超過上限而破音。

---

### 二、 調整高次諧音比例（音色明暗與幾何波形）
我們也可以用**等比數列公比 $b$** 一次控制高次諧音衰減的速度，並在坐標平面觀察正弦波疊合後的幾何形狀：
$$N = [1 \\dots 8], \\quad \\operatorname{tone}\\left(N \\cdot 220, \\; 0.25 \\cdot b^{N - 1}\\right)$$
$$y = \\sum_{n=1}^{8} b^{n-1} \\sin(nx)$$
- **當 $b = 0$**：高次諧音全部消失，只剩下基音 $1f_0$，波形是標準平滑正弦波，聲音最純、最柔。
- **當 $b$ 逐漸調大到 $0.8$**：高次諧音能量增強，合成波形變得陡峭、轉折分明，聲音聽起來變得更亮、更尖銳。

---

### 三、 結合第四章的時間包絡函數（持續吹奏 vs 敲擊衰減）
諧音比例決定了樂器的靜態波形；若再乘上**第四章的時間音量函數**，就能決定樂器如何發聲。

以【長笛】諧音陣列 $F_1, V_1$ 為例（滑桿 $t=0$，令拍內進度 $u = t - \\operatorname{floor}(t)$）：
1. **持續音量 $\\operatorname{tone}(F_1, \\; V_1)$**：
   音量整拍維持定值，模擬管樂器持續吹氣的聲音。
2. **乘上 4-3 的指數衰減 $\\operatorname{tone}\\left(F_1, \\; V_1 \\cdot (0.5)^{4u}\\right)$**：
   諧音比例完全沒變，但每拍開頭最大聲、隨即快速衰減，聲音立刻從吹奏管樂器轉變成敲擊或撥弦樂器（如鋼琴、古箏）。
3. **乘上 4-1 的鋸齒波 $\\operatorname{tone}\\left(F_1, \\; V_1 \\cdot u\\right)$**：
   每拍音量從 $0$ 均勻爬升，產生由弱漸強（Crescendo）的弓弦推奏效果。

> **聲音合成的三個基本維度**：
> 1. **基音頻率 $f_0$（第 1~3 章）**：決定**音高**。
> 2. **諧音比例 $V$（第 5 章）**：決定**合成波形與音色本質**。
> 3. **時間函數 $E(t)$（第 4 章）**：決定**發聲動態與起音衰減**。
      `,
      tasks: [
        "1. 長笛與豎笛諧音對照：點擊右上角「開啟 Desmos 範本 ↗」，分別在【長笛】與【豎笛】資料夾中對照單純基音與多諧音合成的音色，並觀察 $V_1$（偶數諧音顯著）與 $V_2$（偶數諧音接近 $0$）的數值差別。",
        "2. 高次諧音強弱實驗：在 Desmos 輸入 $N = [1\\dots 8]$、$\\operatorname{tone}\\left(N \\cdot 220, \\; 0.25 \\cdot b^{N-1}\\right)$ 與 $y = \\sum_{n=1}^8 b^{n-1}\\sin(nx)$，拉動滑桿 $b$（$0$ 到 $0.85$），觀察波形陡峭度與聲音明暗變化。",
        "3. 時間音量函數疊加：在範本中新增時間滑桿 $t = 0$ 與 $u = t - \\operatorname{floor}(t)$，將長笛音量陣列乘上指數衰減 $\\operatorname{tone}\\left(F_1, \\; V_1 \\cdot (0.5)^{4u}\\right)$，體會管樂音色如何瞬間轉為撥弦敲擊感。"
      ],
      formula: `// 1. 長笛全諧音合成：奇數與偶數諧音皆明顯 (Desmos 範本 msxzmo955w)
tone(440, 0.16)   // 單純 440Hz 基音
k_1 = 440
F_1 = [k_1, 2k_1, 3k_1, 4k_1, 5k_1, 6k_1, 7k_1, 8k_1, k_1-3, k_1+3, 2k_1-6, 2k_1+6, 3k_1-9, 3k_1+9]
V_1 = 0.16 * [0.65, 1.00, 0.70, 0.35, 0.16, 0.08, 0.04, 0.02, 0.05, 0.05, 0.08, 0.08, 0.05, 0.05]
tone(F_1, V_1)

// 2. 豎笛／單簧管：閉管特性，奇數諧音 (1,3,5,7) 顯著、偶數諧音 (2,4,6,8) 接近 0
tone(294, 0.18)   // 單純 294Hz 基音
k_2 = 294
F_2 = [k_2, 2k_2, 3k_2, 4k_2, 5k_2, 6k_2, 7k_2, 8k_2, k_2-2, k_2+2, 3k_2-6, 3k_2+6]
V_2 = 0.18 * [1.00, 0.06, 0.85, 0.10, 0.45, 0.06, 0.25, 0.04, 0.04, 0.04, 0.03, 0.03]
tone(F_2, V_2)

// 3. 用等比數列控制高次諧音強弱與波形
N = [1...8]
b = 0.5   // 滑桿範圍 0 到 0.85
tone(N * 220, 0.25 * b^(N - 1))

// 4. 結合第四章指數衰減
t = 0
u = t - floor(t)
tone(F_1, V_1 * (0.5)^(4 * u))`,
      tips: `
- **5-1 與 5-2 的對齊**：長笛為兩端對稱開管，V_1 中包含強烈的偶數諧音（如第二諧音 1.00）；豎笛為單邊閉管，V_2 中偶數諧音（0.06, 0.10...）幾乎缺失。
- **防止音量溢位破音**：多個諧音同時發聲時振幅會相加，因此在陣列外層乘上 0.16 或 0.18 的衰減係數，保持耳機聆聽安全舒適。
      `,
      worksheet: {
        title: "學習單：奇偶諧音比例與音量包絡實驗",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_flute_vs_clarinet_harmonics",
            title: "長笛與豎笛的奇偶諧音差異",
            type: "radio",
            prompt: "觀察 Desmos 範本中【長笛】的音量陣列 $V_1$（前四階為 $0.65, 1.00, 0.70, 0.35$）與【豎笛】的音量陣列 $V_2$（前八階為 $1.00, 0.06, 0.85, 0.10, 0.45, 0.06, 0.25, 0.04$），為什麼豎笛的第 2、4、6、8 諧音（偶數倍頻率）數值都特別小？",
            options: [
              "因為豎笛屬於「單邊封閉、單邊開放」的閉管樂器，由 5-1 駐波條件可知只有奇數倍諧音（第一、第三、第五、第七諧音）能形成波腹共鳴",
              "因為豎笛的基音頻率 $294\\text{Hz}$ 是偶數，所以不能有偶數倍諧音",
              "因為人耳聽不到偶數倍的頻率",
              "因為長笛和豎笛的諧音比例其實完全相同，只是音量大小不同"
            ],
            solution: "解析：\n承接 5-1 的駐波物理邊界：豎笛（單簧管）吹嘴端為封閉波節、喇叭口端為開放波腹，管長僅能容納四分之一波長的奇數倍，因此能量集中在第 1, 3, 5, 7 奇數諧音，偶數倍諧音在物理上無法穩定共振。",
            formatAnswer: (ans) => `長笛與豎笛諧音分析：【${ans}】`
          },
          {
            id: "q2_brightness_and_envelope",
            title: "高次諧音強弱與指數衰減觀察",
            type: "textarea",
            prompt: "在課堂操作中：\n1. 當把高次諧音調強（調大滑桿 $b$）時，坐標平面上的「疊合波形」與聽起來的「聲音明暗」有什麼變化？\n2. 當把長笛音量陣列 `V_1` 乘上第四章的指數衰減 $(0.5)^{4(t - \\operatorname{floor}(t))}$ 後，聽起來跟原本持續吹奏有什麼不同？",
            placeholder: "請說明：1. 高次諧音對疊合波形與聲音明暗的影響；2. 持續音量 vs 指數衰減的聽感差別...",
            solution: "解析：\n1. 高次諧音影響：滑桿 b 調大時，合成波形變得更加陡峭、出現更多微細轉折，聽覺上聲音變得更亮、更具穿透感。\n2. 指數衰減影響：原本持續吹奏的管樂聲，加入指數衰減後在每拍開頭爆發並快速消散，聲音聽起來會轉變成鋼琴、木琴或古箏般的敲擊撥弦質感。",
            formatAnswer: (ans) => `波形與時間音量觀察：\n${ans}`
          }
        ]
      }
    },

    "5-3": {
      id: "5-3",
      moduleId: "module-5",
      moduleName: "五、音色與物理",
      title: "傅立葉合成三大經典波形",
      conceptTitle: "用正弦波疊加出方波、鋸齒波與三角波",
      modelTitle: "方波、鋸齒波與三角波的傅立葉級數（Σ 疊加）",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/i17uj3bcsy",
      motivation: `
在 5-1 與 5-2 中，我們看到樂器諧音結構可以分成「奇數與偶數諧音皆有」（對稱開管／弦樂器）以及「僅含奇數諧音」（單邊閉管／豎笛）兩種物理組合。

數學家**傅立葉（Joseph Fourier）**發現：
**任何週期性的波形——包含直角轉折的「方波」、斜線上升垂直掉落的「鋸齒波」、以及直線折返的「三角波」——都可以用不同頻率與振幅的正弦波 $\\sin(nx)$ 疊加出來。**

這三種波形也是電子合成器與早期電玩音樂常用的基本波形。打開 Desmos 範本拉動項數滑桿 $m$，可以同時觀察幾何圖形變化並試聽它們的音色差異。
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`i17uj3bcsy\`），最上方有一個共用滑桿 **$m$（疊加的項數）**，下方三個資料夾 \`1\`、\`2\`、\`3\` 分別對應三種波形（每次請點開一個資料夾的圖形與喇叭測試）：

---

### 一、 📁 資料夾 1：方波（Square Wave）—— 奇數諧音 ＋ $\\frac{1}{n}$ 衰減
- **算式結構**：只取**奇數倍諧音** $N_1 = 1, 3, 5, 7 \\dots (2n-1)$，且第 $N_1$ 諧音的振幅為倒數 $\\frac{1}{N_1}$：
  $$N_1 = 2\\cdot[1\\dots m] - 1$$
  $$y_1 = \\sum_{n=1}^{m} \\frac{1}{2n-1}\\sin\\big((2n-1)x\\big) = \\sin(x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{5}\\sin(5x) + \\frac{1}{7}\\sin(7x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_1, \\; \\frac{0.25}{N_1}\\right)$$
- **圖形與聽感**：
  - 當 $m = 1$ 時是單一基音正弦波；把 $m$ 慢慢拉大（$1 \\to 3 \\to 10 \\to 20$），波峰中央會漸漸變平、兩側變陡，越來越接近**方波**。
  - 因為它和 5-1 的閉管樂器（豎笛）一樣**僅含奇數諧音**，聽起來有類似木管與紅白機 8-bit 電玩的空心中空音色。

---

### 二、 📁 資料夾 2：鋸齒波（Sawtooth Wave）—— 奇偶全諧音 ＋ $\\frac{1}{n}$ 衰減
- **算式結構**：包含**所有整數倍諧音** $N_2 = 1, 2, 3, 4, 5 \\dots$（奇數與偶數諧音都有），振幅同樣按倒數 $\\frac{1}{n}$ 遞減：
  $$N_2 = [1\\dots m]$$
  $$y_2 = \\sum_{n=1}^{m} \\frac{1}{n}\\sin(nx) = \\sin(x) + \\frac{1}{2}\\sin(2x) + \\frac{1}{3}\\sin(3x) + \\frac{1}{4}\\sin(4x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_2, \\; \\frac{0.2}{N_2}\\right)$$
- **圖形與聽感**：
  - 隨著 $m$ 拉大，圖形會趨近「斜直線上升、垂直下降」的**鋸齒波**。
  - 因為**奇數與偶數諧音皆完整具備**，高頻能量更密集，聽起來比方波更亮、更具穿透力與金屬感（類似弦樂或銅管樂器）。

---

### 三、 📁 資料夾 3：三角波（Triangle Wave）—— 奇數諧音 ＋ $\\frac{1}{n^2}$ 平方反比衰減
- **算式結構**：同樣只取**奇數倍諧音** $N_3 = 1, 3, 5, 7 \\dots$，但振幅以**平方倒數** $\\frac{1}{(2n-1)^2}$（即 $1, \\frac{1}{9}, \\frac{1}{25}, \\frac{1}{49}\\dots$）衰減，且正負號交替 $(-1)^{n-1}$：
  $$N_3 = 2\\cdot[1\\dots m] - 1$$
  $$y_3 = \\sum_{n=1}^{m} \\frac{(-1)^{n-1}}{(2n-1)^2}\\sin\\big((2n-1)x\\big) = \\sin(x) - \\frac{1}{9}\\sin(3x) + \\frac{1}{25}\\sin(5x) - \\frac{1}{49}\\sin(7x) + \\dots$$
  $$\\operatorname{tone}\\left(220\\cdot N_3, \\; \\frac{0.4}{N_3^2}\\right)$$
- **圖形與聽感**：
  - 只要把 $m$ 拉到 $3$ 或 $4$，圖形就已經非常接近折返的**三角形**，因為高次諧音縮小得極快（第 3 諧音只剩 $\\frac{1}{9}$）。
  - 由於高次諧音極弱，聽起來比方波與鋸齒波柔和圓潤許多，接近純淨正弦波。

---

### 四、 三種波形比較表

<div class="scale-table-wrap">
  <table class="scale-table">
    <thead>
      <tr>
        <th>波形名稱</th>
        <th>諧音倍數 $N$</th>
        <th>第 $N$ 諧音振幅衰減</th>
        <th>圖形幾何特徵</th>
        <th>聽感與物理對應</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. 方波（Square）</strong></td>
        <td><strong>僅奇數倍</strong>（$1, 3, 5, 7\\dots$）</td>
        <td>$\\frac{1}{N}$（$1, \\frac{1}{3}, \\frac{1}{5}\\dots$）</td>
        <td>波峰壓平、兩側垂直陡峭</td>
        <td>對應單邊閉管（豎笛），中空鼻音、8-bit 電玩音色</td>
      </tr>
      <tr>
        <td><strong>2. 鋸齒波（Sawtooth）</strong></td>
        <td><strong>奇偶皆有</strong>（$1, 2, 3, 4\\dots$）</td>
        <td>$\\frac{1}{N}$（$1, \\frac{1}{2}, \\frac{1}{3}\\dots$）</td>
        <td>斜線上升、垂直掉落</td>
        <td>對應全諧音對稱管／擦弦樂，明亮尖銳、穿透感強</td>
      </tr>
      <tr>
        <td><strong>3. 三角波（Triangle）</strong></td>
        <td><strong>僅奇數倍</strong>（$1, 3, 5, 7\\dots$）</td>
        <td>$\\frac{1}{N^2}$（$1, \\frac{1}{9}, \\frac{1}{25}\\dots$）</td>
        <td>$m=3$ 即接近直線折角</td>
        <td>高次極速衰減，音色溫和圓潤、接近純音</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      tasks: [
        "1. 方波（資料夾 1）：點開 Desmos 範本（i17uj3bcsy）的資料夾 1，將滑桿 $m$ 從 $1$ 拉到 $20$，觀察奇數諧音正弦波如何疊加成方波並試聽聲音。",
        "2. 鋸齒波（資料夾 2）：關閉資料夾 1、點開資料夾 2，拉動滑桿 $m$，觀察奇偶諧音全備疊加出的鋸齒圖形，比較它與方波的聲音差異。",
        "3. 三角波（資料夾 3）：關閉資料夾 2、點開資料夾 3，觀察為何 $m$ 只拉到 $3$ 或 $4$ 圖形就已經接近三角形，並試聽平方反比 $\\frac{1}{N^2}$ 的柔和聲音。"
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
- **Desmos 乘法寫法**：在 Desmos 中寫數字乘以列表時，要加上乘號 \`2 \\cdot [1...m] - 1\`，否則 \`2[1...m]\` 會被當成對數字 2 取索引而報錯。
- **波形陡峭度與高次諧音**：方波與鋸齒波有垂直跳躍的邊緣，需要較多 $\\frac{1}{n}$ 的高頻諧音疊加；三角波沒有垂直跳躍，高頻諧音按 $\\frac{1}{n^2}$ 快速縮小，因此聲音比較柔和。
      `,
      worksheet: {
        title: "學習單：傅立葉級數與三種合成波形",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_fourier_three_waves",
            title: "三種波形的諧音倍數與振幅規律",
            type: "radio",
            prompt: "比較 Desmos 範本中「方波 $y_1$」、「鋸齒波 $y_2$」與「三角波 $y_3$」的算式，下列關於三者諧音組成的敘述何者正確？",
            options: [
              "方波與三角波都只含「奇數倍諧音（$1, 3, 5\\dots$）」，但方波振幅按 $\\frac{1}{N}$ 衰減、三角波按 $\\frac{1}{N^2}$ 衰減；鋸齒波則包含「所有整數倍諧音（$1, 2, 3\\dots$）」",
              "三種波形都包含所有奇數與偶數倍諧音，只是基音頻率不同",
              "鋸齒波只含偶數倍諧音（$2, 4, 6\\dots$），完全沒有基音",
              "三角波的高次諧音振幅比方波還要大，因此聽起來最刺耳"
            ],
            solution: "解析：\n1. **方波（資料夾 1）**：$N_1 = 2[1\\dots m]-1 = [1, 3, 5\\dots]$（僅奇數諧音），振幅為 $\\frac{1}{N_1}$。\n2. **鋸齒波（資料夾 2）**：$N_2 = [1\\dots m] = [1, 2, 3, 4\\dots]$（奇偶全諧音），振幅為 $\\frac{1}{N_2}$。\n3. **三角波（資料夾 3）**：$N_3 = 2[1\\dots m]-1 = [1, 3, 5\\dots]$（僅奇數諧音），振幅為平方反比 $\\frac{1}{N_3^2}$（$1, \\frac{1}{9}, \\frac{1}{25}\\dots$）。",
            formatAnswer: (ans) => `三種波形諧音結構分析：【${ans}】\n解析：方波（奇數倍、1/N）與三角波（奇數倍、1/N^2）皆僅含奇數諧音，鋸齒波（所有整數倍、1/N）則含奇偶全部諧音。`
          },
          {
            id: "q2_fourier_convergence_timbre",
            title: "疊加項數 m 與音色聽感觀察",
            type: "textarea",
            prompt: "在 Desmos 範本中拉動滑桿 $m$（從 $1$ 拉到 $20$）並輪流試聽三個資料夾：\n1. 當 $m$ 越來越大時，方波與鋸齒波的幾何圖形與聲音有什麼變化？\n2. 為什麼「三角波（資料夾 3）」在 $m=3$ 時圖形就已經接近三角形，而且聽起來比方波、鋸齒波柔和？請從分母的次方（$\\frac{1}{N}$ vs $\\frac{1}{N^2}$）說明原因。",
            placeholder: "請描述：1. m 增加時的圖形與聲音變化；2. 從 1/N 與 1/N^2 解釋三角波收斂快且聲音柔和的原因...",
            solution: "1. 當 $m$ 越大時，加入的高頻正弦波諧音越多，方波與鋸齒波的邊緣變得更陡，聲音也變得更亮、更尖銳。\n2. 三角波的振幅分母有平方 $(2n-1)^2$，第 3、5、7 諧音的音量只剩下 $\\frac{1}{9} \\approx 0.11$、$\\frac{1}{25} = 0.04$、$\\frac{1}{49} \\approx 0.02$，縮小得比方波的 $\\frac{1}{3}, \\frac{1}{5}, \\frac{1}{7}$ 快很多。因此前 3 項就已經接近三角形，且高頻諧音極其微弱，聽起來比較溫和圓潤。",
            formatAnswer: (ans) => `傅立葉級數項數 m 與音色觀察：\n${ans}\n\n（解析：m 越大高頻諧音越多、波形越陡、聲音越亮；三角波因振幅按 1/N^2 縮小，高次諧音微弱，圖形很快接近三角形且聲音較溫和。）`
          }
        ]
      }
    },

    "supp-relay": {
      id: "補充 3",
      moduleId: "module-supp",
      moduleName: "延伸補充單元",
      title: "循環低音伴奏與長曲分段接力架構",
      conceptTitle: "同餘循環伴奏與分段接力播放",
      modelTitle: "同餘查表循環與分段時間平移",
      status: "pending",
      desmosUrl: null,
      motivation: `
如果想在期末專題製作比較長的流行歌或動漫曲目（例如 90 小節的《春日影》），通常會遇到兩個問題：

1. **怎麼加上重複的低音伴奏？**
   很多歌曲的低音伴奏是幾個音一直重複循環（例如 $C \\to G \\to A \\to F$）。使用同餘運算「$\\operatorname{mod}$」，可以讓列表索引固定在 $1, 2, 3, 4$ 之間循環，不用手動複製貼上好幾十次。
2. **整首歌有好幾百拍，全放在同一個列表會卡頓怎麼辦？**
   如果把幾百顆音符塞進同一個列表 $L$，除了找錯音很花時間，瀏覽器也容易變慢。比較好的做法是把長曲分成好幾段（例如每段 $72$ 拍），再用時間平移 $t - 72$、$t - 144$ 依序接力播放。
      `,
      mathModel: `
**一、 同餘循環低音伴奏（$\\operatorname{mod}$ 循環查表）**：
定義 4 拍低音陣列（以半音位移為例）：
$$C_{\\text{bass}} = [-12, -5, -3, -8] \\quad (C \\to G \\to A \\to F)$$
搭配同餘運算 $\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1$：
$$B(t) = C_{\\text{bass}}\\big[\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1\\big]$$
$$\\operatorname{tone}\\big(f(B(t)), \\; 0.3\\big)$$
- 因為 $\\operatorname{mod}(\\operatorname{floor}(t), 4)$ 的餘數只會是 $0, 1, 2, 3$，加 $1$ 後就會循環取出陣列的第 $1, 2, 3, 4$ 個音，和主旋律共用時間滑桿 $t$ 就能一起播放。

---

**二、 長曲多段接力架構（以《春日影》範本 \`eodq3asol4\` 為例）**：
在範本總覽開啟《春日影》（\`eodq3asol4\`），打開【聲音】與【上聲調音符】資料夾，可以看到分段接力的寫法：
$$t = 0$$
$$\\operatorname{tone}\\left(L_{111}[t], \\; T_{111}[t]\\right)$$
$$\\operatorname{tone}\\left(L_{112}[t - 72], \\; T_{112}[t - 72]\\right)$$
$$\\operatorname{tone}\\left(L_{113}[t - 144], \\; T_{113}[t - 144]\\right)$$
$$\\operatorname{tone}\\left(L_{114}[t - 216], \\; T_{114}[t - 216]\\right)$$
$$\\dots$$
- **分段平移方式**：
  - 第一段 $L_{111}$ 有 $72$ 拍，在 $t = 1 \\sim 72$ 時發聲；當 $t > 72$ 超出列表長度時，Desmos 會自動靜音。
  - 第二段 $L_{112}[t - 72]$ 把索引減去 $72$：在 $t \\le 72$ 時索引 $\\le 0$ 不會發聲；當時間走到 $t = 73$ 時，$73 - 72 = 1$，剛好從 $L_{112}$ 的第 $1$ 顆音開始接下去播。
  - 後面每一段減去的數字（$72, 144, 216, 288\\dots$），就是前面各段拍數的累加。
      `,
      tasks: [
        "1. 測試同餘循環伴奏：在空白 Desmos 輸入 $C_{\\text{bass}} = [-12, -5, -3, -8]$ 與 $B = C_{\\text{bass}}[\\operatorname{mod}(\\operatorname{floor}(t), 4) + 1]$，拉動 $t$ 觀察數值如何在 4 個低音之間循環。",
        "2. 查看《春日影》分段接力寫法：在範本總覽開啟《春日影》（`eodq3asol4`），展開【聲音】資料夾，觀察 $L_{111}[t]$、$L_{112}[t-72]$、$L_{113}[t-144]$ 的索引偏移。",
        "3. 資料夾收合與播放順暢度：按下時間 $t$ 播放《春日影》，比較「將音符列表資料夾展開」與「將資料夾收合」時的播放順暢度。"
      ],
      formula: `t=0

C_{bass}=\\left[-12,-5,-3,-8\\right]
B=C_{bass}\\left[\\operatorname{mod}\\left(\\operatorname{floor}\\left(t\\right),4\\right)+1\\right]
\\operatorname{tone}\\left(440\\cdot2^{\\frac{B}{12}},0.3\\right)

\\operatorname{tone}\\left(L_{111}\\left[t\\right],T_{111}\\left[t\\right]\\right)
\\operatorname{tone}\\left(L_{112}\\left[t-72\\right],T_{112}\\left[t-72\\right]\\right)
\\operatorname{tone}\\left(L_{113}\\left[t-144\\right],T_{113}\\left[t-144\\right]\\right)`,
      tips: `
- **播放長曲時收合資料夾**：當資料夾展開時，瀏覽器要即時排版列表中上百個數字，容易造成播放卡頓；把長列表放進資料夾並收合起來，播放就會順暢許多。
- **同餘索引 +1**：Desmos 的 \`mod(x, 4)\` 輸出範圍是 \`0, 1, 2, 3\`，而列表從第 \`1\` 項開始編號，所以後面要加上 \`+ 1\`。
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
      conceptTitle: "旋律的線對稱變換：正向、反向（逆行）與倒影",
      modelTitle: "旋律陣列的水平翻轉與鉛直翻轉模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/keqwpyt1lw",
      motivation: `
如果把一段旋律的「拍子 $X$」當作橫坐標、「半音高度 $S_1$」當作縱坐標，整首曲子就是坐標平面上的一組點 $(X, S_1)$。
既然旋律可以畫成坐標點，我們就可以對它做「左右水平翻轉」與「上下鉛直翻轉」。

巴哈（J. S. Bach）在《音樂的奉獻》中寫過一首《螃蟹卡農（Crab Canon）》：
同一份樂譜，第一個人從左往右正著彈（正向），第二個人從最後一個音往左倒著彈（反向／逆行），兩條旋律同時合奏時，每一拍剛好都能構成協和的雙聲部和聲。
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
- **正反雙軌合奏**：同時打開【正向】與【反向】兩個資料夾的喇叭並播放 $t$（將 $t$ 範圍設為 $1 \\sim 16$，步長 $1$），可以看到兩個游標一左一右在中央 $t = 8, 9$ 交會，並聽見正反兩條旋律合奏出的雙聲部。

---

**三、 📁 資料夾【倒影】：上下鉛直翻轉（Inversion，$12 - S_1$）**
- **數學原理**：畫出水平對稱軸 **$y = 6$**，將原本的音高對 $y = 6$ 做上下鏡射（滿足 $\\frac{S_1 + S_3}{2} = 6 \\implies S_3 = 12 - S_1$）：
  $$y = 6, \\quad S_3 = 12 - S_1$$
  $$\\left(X, S_3\\right), \\quad \\left(t, S_3[t]\\right)$$
  $$\\operatorname{tone}\\left(f\\left(S_3[t]\\right), \\; 0.3\\right)$$
- **聽覺與幾何效果**：原本往上爬升的音階變成往下走，原本的高音變成低音，形成上下對稱的旋律。
      `,
      tasks: [
        "1. 視覺化折線設定：點開 Desmos 範本（`keqwpyt1lw`），將滑桿 $t$ 的範圍設為 $1$ 到 $16$（步長 $1$），並長按 $(X, S_1)$、$(X, S_2)$、$(X, S_3)$ 左側圓圈打開「線條（Lines）」，觀察三條旋律折線的對稱關係。",
        "2. 螃蟹卡農正反合奏：同時開啟【正向】與【反向】資料夾的發聲開關（暫時關閉【倒影】），按下 $t$ 播放，觀察兩顆發聲點如何左右交會、同時聆聽正反合奏。",
        "3. 上下倒影鏡射實驗：切換開啟【倒影】資料夾，觀察綠色直線 $y = 6$ 如何作為 $(X, S_1)$ 與 $(X, S_3)$ 的上下對稱軸，並聆聽旋律上下翻轉後的聽感變化。"
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
- **打開折線連線**：在 Desmos 中長按點陣 \`(X, S_1)\` 左側的顏色圓圖示，把「線條（Lines）」開關打開，16 顆音符就會連成旋律折線圖。
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
              "因為當 $t = 1$ 時，$17 - 1 = 16$ 才能剛好取到最後一項（第 16 項）；當 $t = 16$ 時，$17 - 16 = 1$ 才能剛好取到第 1 項",
              "因為這首歌有 17 個音符",
              "因為 17 是質數，聲音比較好聽",
              "寫 $16 - t$ 與 $17 - t$ 取出來的音符完全一模一樣"
            ],
            solution: "解析：\n對於長度為 $N$（編號 $1 \\sim N$）的列表，第 $1$ 項與第 $N$ 項對稱、第 $2$ 項與第 $N-1$ 項對稱，對稱的兩項編號相加恆等於 **$N + 1$**。\n此處 $N = 16$，故 $t$ 的對稱項為 $16 + 1 - t = 17 - t$（若寫成 $16 - t$，當 $t=16$ 時會變成第 $0$ 項而無定義靜音）。",
            formatAnswer: (ans) => `逆行索引 17 - t 推導分析：【${ans}】`
          },
          {
            id: "q2_inversion_axis",
            title: "鉛直翻轉（倒影）的對稱軸與中點公式",
            type: "text",
            prompt: "在【倒影】資料夾中，我們以水平線 $y = 6$ 作為上下翻轉的對稱軸，因此新音高寫成 $S_3 = 12 - S_1$（因為 $\\frac{S_1 + S_3}{2} = 6$）。\n如果今天我們想改以水平線 $y = 5$ 作為上下對稱軸，請問算式 $S_3 = K - S_1$ 中的常數 $K$ 應該改成多少？（請填整數）：",
            placeholder: "請輸入整數，例如：8",
            expected: "10",
            solution: "推導過程：\n原點 $(x, S_1)$ 與對稱點 $(x, S_3)$ 以水平線 $y = 5$ 為對稱軸，代表兩點縱坐標的中點在 $y = 5$ 上：\n$$\\frac{S_1 + S_3}{2} = 5 \\implies S_1 + S_3 = 10 \\implies S_3 = 10 - S_1$$\n因此常數 $K = 10$。",
            formatAnswer: (ans) => `鉛直翻轉對稱軸常數計算：${ans}（標準答案：10）`
          }
        ]
      }
    },

    "6-2": {
      id: "6-2",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "Desmos Audio Trace（Alt + T）函數圖形音訊追蹤",
      conceptTitle: "使用內建音訊追蹤（Audio Trace）播放函數圖形",
      modelTitle: "Desmos 聽圖音域規約與高斯階梯樂譜映射",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/oiamjxssnc",
      motivation: `
前面五章我們都是用 $\\operatorname{tone}(\\text{頻率}, \\text{音量})$ 讓 Desmos 發聲。
除此之外，Desmos 內建了一個為視障學習者設計的無障礙功能——**「聽取圖像（Audio Trace）」**。
點選任何一條函數算式，按下鍵盤的 **\`Alt + T\`**（Mac 為 **\`Option + T\`**），再按下 **\`H\`**（Hear Graph），Desmos 就會從左到右掃描整條函數曲線，根據 $y$ 坐標的高低發出對應的音高。

搭配第四章學過的高斯取整函數 $\\operatorname{floor}(x)$，就可以把階梯函數圖形直接當成樂譜來播放。
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`oiamjxssnc\`，標題：**聲音基礎(可視化函數)**），依序探索三個資料夾：

---

**一、 📁 資料夾 (一) 圖案的聲音：基本函數聽感與 $E_3 \\sim E_4$ 音域規約**
1. **聽聽看各種函數圖形的聲音**（點選算式後按 \`Alt + T\` $\\to$ 按 \`H\`）：
   - $y = x$：斜直線上升，音高均勻往上滑音。
   - $y = \\sin x$：平滑波浪，音高上下擺盪。
   - $y = \\frac{3}{\\sin x}$：遇到漸近線時衝向高音與低音邊界。
   - $y = 2^x$：指數曲線，前半段平緩低音，後半段快速升高。
   - $y = |2 - |2 - |2 - |2 - |2 - x|||||$：連續絕對值折線，音高規律上下折返。
   - $y = \\sin\\left(x^{\\frac{x}{6}}\\right)$：頻率越來越密集的加速震盪波。
2. **Desmos 聽圖的音域對應規則**：
   - 經實測，Desmos 聽取圖像的可見縱軸音域固定對應為 **$E_3 \\sim E_4$（剛好一個八度，共 12 個半音）**。
   - 因此，只要打開右上角扳手設定，將顯示出來的 **$y$ 軸上下邊界設為 $0$ 到 $12$**（分成 12 等分），**每 $1$ 單位高度就剛好代表 $1$ 個半音**：
     $$0=E, \\; 1=F, \\; 2=F^\\sharp, \\; 3=G, \\; 4=G^\\sharp, \\; 5=A, \\; 6=A^\\sharp, \\; 7=B, \\; 8=C, \\; 9=C^\\sharp, \\; 10=D, \\; 11=D^\\sharp, \\; 12=E$$
   - 例如 $E$ 大調音階 $E, F^\\sharp, G^\\sharp, A, B, C^\\sharp, D^\\sharp, E$ 對應的高度正好就是 $[0, 2, 4, 5, 7, 9, 11, 12]$。

---

**二、 📁 資料夾 (二) 利用高斯函數（$\\operatorname{floor}$）做一般音階**
- 一般連續曲線播放出來是連續滑音，要唱出一顆一顆分明的音符，必須讓 $y$ 保持水平階梯狀：
  $$y = m \\cdot \\operatorname{floor}(nx)$$
- 其中 **$n$ 是音符寬度的倒數**：把 $n$ 調大（例如 $n = 12$ 或 $16$），每一階水平線就會變窄，同一個螢幕寬度內就能容納更多顆音符。

---

**三、 📁 資料夾 (三) 音樂範例欣賞：階梯函數查表演奏**
將半音高度存成列表 $a, b, c$，再把高斯函數 $\\operatorname{floor}(16x)$ 當作列表索引：
$$y = a\\big[\\operatorname{floor}(16x)\\big]$$
- 範本內建三首曲子，點選對應的 $y$ 算式後按 \`Alt + T\` $\\to$ \`H\` 即可聆聽：
  1. **$y = a[\\operatorname{floor}(16x)]$**：《rickroll》
  2. **$y = b[\\operatorname{floor}(16x)]$**：《殘酷天使的行動綱領》
  3. **$y = c[\\operatorname{floor}(12x)]$**：陳奕迅《淘汰》
- **斷音與休止符做法（$t = -1000$）**：
  - 在陣列中穿插變數 $t$，當設定 **$t = -1000$** 時，該拍的函數值會落在畫面底部可見範圍（$0 \\sim 12$）之外，Audio Trace 掃描到畫面外就會自動靜音，產生斷音與休止符的效果。
  - 可以試著把範本裡的 $t = 1$ 改為 $t = -1000$，比較兩種設定的聽感差別。
      `,
      tasks: [
        "1. 體驗函數曲線的聲音：開啟 Desmos 範本（`oiamjxssnc`），展開資料夾 (一)，點選 $y = \\sin(x)$ 或連續絕對值算式，按鍵盤 `Alt + T`（Mac 按 `Option + T`）再按 `H` 鍵，聽聽看函數圖形的聲音。",
        "2. 測試高斯階梯密度 $n$：展開資料夾 (二)，點選 $m \\cdot \\operatorname{floor}(nx)$ 並調整滑桿 $n$，觀察 $n$ 變大時螢幕內階梯數量的變化。",
        "3. 曲目聽圖與 $t = -1000$ 斷音實驗：展開資料夾 (三)，確認右上角扳手設定的 Y 軸範圍切齊 $0 \\le y \\le 12$。將 $t = 1$ 改為 $t = -1000$，分別點選 rickroll (a)、殘酷天使 (b)、淘汰 (c) 的 $y$ 算式，按 `Alt + T` 再按 `H` 聆聽。"
      ],
      formula: `y=a\\left[\\operatorname{floor}\\left(16x\\right)\\right]
t=-1000
a=\\left[3,t,5,t,8,t,5,t,12,12,12,t,12,12,12,10,10,t,t,t,t,3,t,5,t,8,t,5,t,10,10,10,t,10,10,10,t,8,8,t,t,t,t,3,t,5,t,8,t,5,t,8,8,8,8,t,10,10,t,7,7,7,t,5,t,3,t,3,t,10,10,10,10,t,8,8,8,8,8,8,8,8\\right]`,
      tips: `
- **畫面視窗 Y 軸需對齊 0 到 12**：Audio Trace 是根據「目前螢幕顯示的上下邊界」來決定音高的。請點右上角扳手（圖形設定），將 Y 軸設為 \`0 <= y <= 12\`、X 軸設為 \`0 <= x <= 6\`，音高才會對準半音。
- **快捷鍵操作**：點一下要聽的函數算式 $\\to$ 按 \`Alt + T\`（Mac 為 \`Option + T\`）開啟音訊追蹤面板 $\\to$ 按 \`H\` 開始播放。
      `,
      worksheet: {
        title: "學習單：Desmos Audio Trace 聽圖規約與階梯函數映射",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_audio_trace_y_axis",
            title: "Y 軸 0 到 12 的半音對應規約",
            type: "radio",
            prompt: "在 Desmos 的 Audio Trace（`Alt + T`）聽圖功能中，畫面可見的縱軸（Y 軸）音域剛好跨越一個八度（$E_3 \\sim E_4$，共 12 個半音）。為什麼我們要把右上角設定中的 Y 軸範圍切齊在 $0 \\le y \\le 12$？",
            options: [
              "因為把一個八度（12 個半音）剛好分成 12 等分，每 1 單位的整數高度（$0, 1, 2\\dots 12$）就正好對應鋼琴上的 1 個半音，不會走音",
              "因為 Desmos 的 Y 軸最大只能輸入到 12",
              "因為 12 是偶數，電腦比較好畫圖",
              "Y 軸放大或縮小完全不會影響聽圖出來的音高"
            ],
            solution: "解析：\nDesmos 的 Audio Trace 會將「目前畫布視窗的下邊界到上邊界」線性對應到 $E_3 \\sim E_4$ 的一個八度（12 個半音）。\n因此當我們把 Y 軸上下限鎖定為 $0$ 到 $12$ 時，高度差 $1$ 單位就剛好等於 $1$ 個半音：$0=E, 1=F, 2=F^\\sharp, 3=G \\dots 12=E$。",
            formatAnswer: (ans) => `Audio Trace Y 軸 0~12 設定原理解析：【${ans}】`
          },
          {
            id: "q2_audio_trace_floor_and_mute",
            title: "高斯階梯參數 n 與 t = -1000 斷音做法",
            type: "textarea",
            prompt: "觀察資料夾 (三) 的算式 $y = a[\\operatorname{floor}(16x)]$ 與變數 $t$：\n1. 為什麼在括號裡面要把 $x$ 乘上 $16$（寫成 $\\operatorname{floor}(16x)$），而不是只寫 $\\operatorname{floor}(x)$？\n2. 把陣列中的 $t$ 設為 $-1000$（對比設為 $t = 1$），為什麼能產生「斷音與休止符」的效果？",
            placeholder: "請說明：1. 乘上 16 對階梯寬度與螢幕容納音符數的影響；2. t = -1000 超出畫面範圍時的發聲變化...",
            solution: "1. 若只寫 $\\operatorname{floor}(x)$，每 $1$ 單位寬度才換一顆音，螢幕寬度 $0 \\sim 6$ 只能放下 $6$ 顆音；乘上 $16$ 後，水平壓縮為原本的 $\\frac{1}{16}$，每 $1$ 單位寬度就能容納 $16$ 顆音符，整段旋律都能放進同一個畫面裡一次播完。\n2. 當 $t = -1000$ 時，函數值低於畫面下邊界（$y = 0$），Audio Trace 掃描到超出畫面可見範圍的點時會自動靜音，因此能做出斷音與休止符；若設為 $t = 1$，則該拍會發出 $y=1$（$F$ 音）的聲音。",
            formatAnswer: (ans) => `階梯壓縮係數與畫面外靜音做法觀察：\n${ans}`
          }
        ]
      }
    },

    "6-3": {
      id: "6-3",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "薛帕德無限音階（Shepard Tone）",
      conceptTitle: "循環上升的聽覺錯覺：薛帕德音階",
      modelTitle: "同餘八度循環與鐘形包絡濾鏡模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/mgwmtlv53l",
      motivation: `
在電影《全面啟動》、《敦克爾克大行動》或《超級瑪利歐 64》的無盡樓梯場景中，常使用一種聽起來不斷往上升高、卻不會超出音域上限的背景音效。

這種聽覺錯覺稱為**「薛帕德音階（Shepard Tone）」**，做法如下：
1. 用向量同時建立 $6$ 個相隔八度的音層，隨時間一起往上移動。
2. 套上一條**「對稱的鐘形音量曲線 $g(x)$」**：當最高音升到右側邊界時，音量跟著曲線漸弱至 $0$，並在無聲狀態下折返到左側低音區重新爬升。
因為人耳主要注意到中間音量最大的音層，就會產生音高持續上升的聽感。
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`mgwmtlv53l\`，標題：**循環上升音樂**），外層設定了時間滑桿 $t=0$、6 個八度層向量 $K$，以及鐘形音量曲線 $g(x)$：
$$t = 0$$
$$K = [0, 1, 2, 3, 4, 5]$$
$$g(x) = 0.35 \\cdot (0.5)^{\\frac{(x - 36)^2}{90}}$$
- **鐘形音量曲線 $g(x)$**：最高點在 $x = 36$（中央 $A_4$ 音高附近，音量最大 $0.35$），往左（$x \\to 0$ 低音）與往右（$x \\to 72$ 高音）音量逐漸衰減至接近 $0$。

範本內有兩個資料夾，分別演示「連續滑音」與「半音階梯」：

---

**一、 📁 資料夾【上升滑音】：連續滑音循環爬升**
$$X_1 = \\operatorname{mod}(t + 12\\cdot K, \\; 72)$$
$$\\left(X_1, \\; g(X_1)\\right)$$
$$\\operatorname{tone}\\left(55 \\cdot 2^{\\frac{X_1}{12}}, \\; g(X_1)\\right)$$
- **幾何觀察**：坐標平面上可以看到 $6$ 顆動態游標點 $(X_1, g(X_1))$ 沿著鐘形曲線向右移動。當最右側的點移到 $X_1 = 72$ 時，其音量 $g(72) \\approx 0$，接著透過 $\\operatorname{mod}(\\dots, 72)$ 回到最左側 $X_1 = 0$ 重新往右移動。

---

**二、 📁 資料夾【上升半音】：高斯取整半音階梯爬升**
$$X_2 = \\operatorname{mod}\\big(\\operatorname{floor}(t) + 12\\cdot K, \\; 72\\big)$$
$$\\left(X_2, \\; g(X_2)\\right)$$
$$\\operatorname{tone}\\left(55 \\cdot 2^{\\frac{X_2}{12}}, \\; g(X_2)\\right)$$
- **聽覺特徵**：加入 $\\operatorname{floor}(t)$ 後，連續滑音變成一拍一拍的半音階梯上升。
      `,
      tasks: [
        "1. 觀察鐘形曲線與 6 顆音符游標：點開 Desmos 範本（`mgwmtlv53l`），在坐標平面觀察鐘形函數 $g(x)$ 的對稱形態，以及 6 顆動態點 $(X, g(X))$ 的間距（相隔 12 個半音，即一個八度）。",
        "2. 連續滑音聽覺體驗：展開【上升滑音】資料夾，打開喇叭並按下時間 $t$ 播放，觀察游標移動與音高持續上升的聽覺效果。",
        "3. 階梯半音 vs 連續滑音對比：關閉【上升滑音】、展開【上升半音】資料夾，聆聽高斯取整 $\\operatorname{floor}(t)$ 如何把連續滑音轉換為一階一階的半音上升。"
      ],
      formula: `t=0
K=\\left[0,1,2,3,4,5\\right]
g\\left(x\right)=0.35\\cdot\\left(0.5\\right)^{\\frac{\\left(x-36\right)^{2}}{90}}

X_{1}=\\operatorname{mod}\\left(t+12\\cdot K,72\right)
\\left(X_{1},g\\left(X_{1}\right)\right)
\\operatorname{tone}\\left(55\\cdot2^{\\frac{X_{1}}{12}},g\\left(X_{1}\right)\right)

X_{2}=\\operatorname{mod}\\left(\\operatorname{floor}\\left(t\right)+12\\cdot K,72\right)
\\left(X_{2},g\\left(X_{2}\right)\right)
\\operatorname{tone}\\left(55\\cdot2^{\\frac{X_{2}}{12}},g\\left(X_{2}\right)\right)`,
      tips: `
- **滑桿循環方向設定**：在 Desmos 播放時間滑桿 $t$ 時，請確認滑桿左側圖示為「單向循環（向右箭頭 →）」，且範圍上限設為 72 的整數倍（如 72 或 720），才能維持連續循環播放。
- **錯覺產生的原因**：人耳對中頻率（音量最大處）最敏感；由於各發聲器相隔八度，聽起來會融合成同一個音色，因此注意力會集中在中間正在上升的音層，而不會注意到兩端低音量處的折返。
      `,
      worksheet: {
        title: "學習單：薛帕德無限音階與鐘形音量濾鏡實驗",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_shepard_octave_spacing",
            title: "多聲部向量 K 的八度間距原理",
            type: "radio",
            prompt: "在 6-3 薛帕德音階算式 $X_1 = \\operatorname{mod}(t + 12\\cdot K, \\; 72)$ 中，向量 $K = [0, 1, 2, 3, 4, 5]$ 前面的係數為什麼必須乘上 $12$？",
            options: [
              "因為一個八度正好有 12 個半音，各發聲器相隔 12 個半音（剛好是完全八度音程），人耳會將它們聽成同一個音的不同八度層，融合度最高",
              "因為一年有 12 個月",
              "因為 Desmos 的列表長度上限是 12",
              "如果改成乘 $7$（純五度），聲音聽起來完全一模一樣"
            ],
            solution: "解析：\n十二平均律中一個八度為 12 個半音。將 $K$ 乘上 $12$（$12K = [0, 12, 24, 36, 48, 60]$），代表 6 個發聲器彼此剛好都相隔一整個八度。因為八度音的頻率比為 2 倍，人耳會將它們融合成同一個音，才不會聽成互不相關的多個單音。",
            formatAnswer: (ans) => `八度間距 12K 原理解析：【${ans}】`
          },
          {
            id: "q2_bell_curve_attenuation",
            title: "鐘形包絡曲線 g(x) 的音量控制機制",
            type: "textarea",
            prompt: "在 Desmos 觀察鐘形函數 $g(x) = 0.35 \\cdot (0.5)^{\\frac{(x - 36)^2}{90}}$ 的圖形與 6 顆動態點 $(X, g(X))$：\n請說明：這條「中間高、兩邊低」的鐘形曲線，是如何在「最高音到達右邊界」與「最低音從左邊界重新進場」時避免聽出斷裂感的？",
            placeholder: "請從中央音量最大 vs 兩側邊界音量衰減接近 0 的角度說明...",
            solution: "解析：\n1. 中頻音量最大：當音符位於曲線中央（$x = 36$ 附近）時，音量最大，人耳的注意力集中在中間往上爬升的音層。\n2. 兩端無聲交接：當最高音升到右側高頻邊界（$x \\to 72$）時，音量被鐘形曲線衰減至接近 0，隨後在無聲狀態下折返到左側低頻邊界（$x = 0$）；同時左側低頻的音符在極小音量下慢慢往上升起。因為折返與進場都在接近無聲的兩端完成，所以聽不出接縫。",
            formatAnswer: (ans) => `鐘形音量曲線控制機制說明：\n${ans}`
          }
        ]
      }
    },

    "6-4": {
      id: "6-4",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "演算法自動作曲（隨機取樣與機率轉移）",
      conceptTitle: "從隨機抽籤到馬可夫轉移矩陣",
      modelTitle: "五聲音階隨機抽樣、二階手算與五階轉移矩陣模型",
      status: "ready",
      desmosUrl: "https://www.desmos.com/calculator/a2aqrsf1gn",
      motivation: `
1787 年，莫札特設計過《音樂骰子遊戲》（*Musikalisches Würfelspiel*）：
準備一張 $11 \\times 16$ 的小節對照表，每小節擲兩顆骰子（點數 $2 \\sim 12$），依點數拼湊樂譜，總共能組合出 $11^{16} \\approx 4.6 \\times 10^{16}$ 首小步舞曲。

在電腦中自動生成旋律時，常見三種做法：
1. **十二半音完全隨機盲抽**：在所有 12 個半音中等機率隨機抽取，容易頻繁出現小二度（差 1 半音）與三全音（差 6 半音），聽起來不協和。
2. **五聲音階隨機抽取**：將音符候選池限制在五聲音階（宮、商、角、徵、羽），因為沒有半音與三全音音程，隨機抽取排列時較容易保持協和。
3. **馬可夫鏈（轉移矩陣）**：讓「下一個音出現的機率」取決於「目前的音符」，也就是高二下數 A 的轉移矩陣。
      `,
      mathModel: `
點擊右上角「開啟 Desmos 範本 ↗」（\`a2aqrsf1gn\`，標題：**轉移矩陣與音樂**），範本內分為兩個資料夾：

---

### 一、 📁 資料夾【一、五聲音階隨機作曲（發聲演奏）】：獨立隨機抽樣
1. **五聲音階候選列表**：
   $$P = [0, 2, 4, 7, 9, 12] \\quad (\\text{Do, Re, Mi, Sol, La, 高音 Do})$$
   五個音之間沒有小二度（$1$ 個半音）與三全音（$6$ 個半音），最小音程為大二度（$2$ 半音）與小三度（$3$ 半音）。
2. **偽隨機數種子機制**：
   - 時間滑桿 $t=0$，種子滑桿 $s=1$（$1 \\le s \\le 100$）。
   - 隨機抽取 16 顆五聲音符：
     $$I = \\operatorname{floor}\\big(6 \\cdot \\operatorname{random}(16, s)\\big) + 1$$
     $$S = P[I]$$
3. **視覺鋼琴捲軸與動態發聲**：
   - 當前演奏拍數 $p$ 與音高 $n$：
     $$p = \\operatorname{mod}\\big(\\operatorname{floor}(t), 16\\big) + 1$$
     $$n = S[p]$$
     $$\\operatorname{tone}\\left(261.63 \\cdot 2^{\\frac{n}{12}}, \\; 0.35\\right)$$
   - 繪製 16 拍點陣 $(B, S)$ 與動態紅點游標 $(p, n)$，按下 $t$ 播放鍵即可播放，拉動種子 $s$ 可切換不同隨機旋律。

---

### 二、 課綱二階轉移矩陣（Do 與 Sol 兩狀態）
假設音樂只有兩個狀態：
- **狀態 1**：$D$（主音 $\\text{Do}$）
- **狀態 2**：$S$（五度音 $\\text{Sol}$）

定義轉移矩陣 $T_{2\\times 2}$（每一直行機率和為 $1$）：
$$T_{2\\times 2} = \\begin{bmatrix} 0.8 & 0.7 \\\\ 0.2 & 0.3 \\end{bmatrix}$$
*(代表目前在 Do 時有 $80\\%$ 機率留在 Do；目前在 Sol 時有 $70\\%$ 機率回到 Do)*

**【手算求穩定狀態（平穩分佈）】**：
$$\\begin{bmatrix} 0.8 & 0.7 \\\\ 0.2 & 0.3 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} x \\\\ y \\end{bmatrix} \\quad \\text{且} \\quad x + y = 1$$
展開第一式：
$$0.8x + 0.7y = x \\implies 0.7y = 0.2x \\implies 2x = 7y$$
代入 $x + y = 1$ 解得：
$$x = \\frac{7}{9} \\approx 77.8\\%, \\quad y = \\frac{2}{9} \\approx 22.2\\%$$

---

### 三、 📁 資料夾【二、五階轉移矩陣（馬可夫鏈演化）】：Desmos Matrix 實作
利用 Desmos 的 \`matrix\` 功能，將模型擴展為五聲音階的五階轉移矩陣。
5 個狀態分別為：$1 \\to \\text{Do}, \\; 2 \\to \\text{Re}, \\; 3 \\to \\text{Mi}, \\; 4 \\to \\text{Sol}, \\; 5 \\to \\text{La}$。

1. **五階轉移矩陣 $T$**（每一直行和為 $1$）：
   $$T = \\begin{bmatrix}
   0.1 & 0.3 & 0.1 & 0.2 & 0.4 \\\\
   0.4 & 0.1 & 0.3 & 0.1 & 0.1 \\\\
   0.1 & 0.4 & 0.1 & 0.2 & 0.1 \\\\
   0.3 & 0.1 & 0.4 & 0.1 & 0.3 \\\\
   0.1 & 0.1 & 0.1 & 0.4 & 0.1
   \\end{bmatrix}$$
2. **起始狀態向量 $X_0$**（從 Do 出發）：
   $$X_0 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix}$$
3. **矩陣冪次與穩定狀態**（步數滑桿 $k \\in [1, 20]$）：
   $$X_k = T^k \\cdot X_0$$
   - 取出 5 個音符在第 $k$ 步的機率：
     $$Y_k = \\left[X_k[1; 1], X_k[2; 1], X_k[3; 1], X_k[4; 1], X_k[5; 1]\\right]$$
     $$X = [1, 2, 3, 4, 5]$$
     $$(X, Y_k)$$
   - 拉動 $k$，觀察 5 顆機率點在 $k \\ge 8$ 後逐漸趨近穩定狀態。
      `,
      tasks: [
        "1. 五聲隨機發聲：在 Desmos 展開【一、五聲音階隨機作曲（發聲演奏）】，按下時間 $t$ 播放鍵聆聽 16 拍旋律，並拉動種子 $s$（$1 \\sim 100$）切換隨機旋律。",
        "2. 二階手算驗證：手算求解 $T = \\begin{bmatrix} 0.8 & 0.7 \\\\ 0.2 & 0.3 \\end{bmatrix}$ 之穩定狀態機率分佈 $(x, y)$，驗證極限值 $x = \\frac{7}{9} \\approx 77.8\\%$。",
        "3. 五階矩陣收斂觀察：在 Desmos 展開【二、五階轉移矩陣（馬可夫鏈演化）】，拉動步數滑桿 $k$（$1 \\sim 20$），觀察 5 顆音符機率點 $(X, Y_k)$ 收斂至穩定狀態的過程。"
      ],
      formula: `// 📁 資料夾【一、五聲音階隨機作曲（發聲演奏）】
t = 0
s = 1
P = \\left[0, 2, 4, 7, 9, 12\\right]
I = \\operatorname{floor}\\left(6 \\cdot \\operatorname{random}\\left(16, s\\right)\\right) + 1
S = P\\left[I\\right]

p = \\operatorname{mod}\\left(\\operatorname{floor}\\left(t\\right), 16\\right) + 1
n = S\\left[p\\right]
\\operatorname{tone}\\left(261.63 \\cdot 2^{\\frac{n}{12}}, 0.35\\right)

B = \\left[1...16\\right]
\\left(B, S\\right)
\\left(p, n\\right)

// 📁 資料夾【二、五階轉移矩陣（馬可夫鏈演化）】
T = \\begin{bmatrix}0.1&0.3&0.1&0.2&0.4\\\\0.4&0.1&0.3&0.1&0.1\\\\0.1&0.4&0.1&0.2&0.1\\\\0.3&0.1&0.4&0.1&0.3\\\\0.1&0.1&0.1&0.4&0.1\\end{bmatrix}
X_{0} = \\begin{bmatrix}1\\\\0\\\\0\\\\0\\\\0\\end{bmatrix}
k = 1
X_{k} = T^{k} \\cdot X_{0}

Y_{k} = \\left[X_{k}\\left[1;1\\right], X_{k}\\left[2;1\\right], X_{k}\\left[3;1\\right], X_{k}\\left[4;1\\right], X_{k}\\left[5;1\\right]\\right]
X = \\left[1, 2, 3, 4, 5\\right]
\\left(X, Y_{k}\\right)`,
      tips: `
- **轉移矩陣行和為 1**：在轉移矩陣中，每一「行（Column）」代表從該狀態出發轉移到各狀態的機率，其總和必須等於 1。
- **種子滑桿 s 的作用**：random(N, s) 中的種子能固定隨機數列，相同種子會產生相同的隨機旋律。
- **穩定狀態與起始點無關**：對於正則轉移矩陣，無論起始向量 $X_0$ 如何設定，隨步數 $k \\to \\infty$，極限狀態 $X_\\infty$ 都會收斂至同一組穩定分佈。
      `,
      worksheet: {
        title: "學習單：演算法自動作曲、隨機約束與轉移矩陣",
        requireDesmosLink: false,
        questions: [
          {
            id: "q1_pentatonic_algorithm_constraint",
            title: "五聲音階的音程特性",
            type: "radio",
            prompt: "在 6-4 演算法作曲中，為什麼讓電腦在「五聲音階 $P = [0, 2, 4, 7, 9]$」中隨機抽籤，旋律聽起來較為協和；但在「十二半音階」中完全隨機抽籤卻容易聽起來刺耳？",
            options: [
              "因為五聲音階去除了「小二度（1個半音）」與「三全音（6個半音）」的不協和音程，最小間隔為大二度與小三度",
              "因為電腦程式只認得 5 個數字，超過 5 個數字記憶體會溢位",
              "因為五聲音階的頻率都是整數，十二平均律的頻率都是無理數",
              "這純粹是心理暗示，聽起來其實完全沒有分別"
            ],
            solution: "解析：\n五聲音階（宮商角徵羽）在十二平均律中對應半音差為 $[0, 2, 4, 7, 9]$，其中沒有小二度（1 個半音）與三全音（6 個半音），相鄰音程皆為大二度或小三度，因此隨機排列時不會出現半音或三全音的強烈拍頻摩擦。",
            formatAnswer: (ans) => `五聲音階音程特性：【${ans}】`
          },
          {
            id: "q2_two_by_two_markov_hand_calculation",
            title: "二階轉移矩陣穩定狀態手算驗證",
            type: "textarea",
            prompt: "考慮課本二階轉移矩陣 $T = \\begin{bmatrix} 0.8 & 0.7 \\\\ 0.2 & 0.3 \\end{bmatrix}$，設長期穩定狀態機率向量為 $X_\\infty = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$（滿足 $T X_\\infty = X_\\infty$ 且 $x + y = 1$）。\n請寫出手算聯立方程的化簡過程，並求出 $x$ 與 $y$ 的分數值與百分比。",
            placeholder: "請寫出：聯立方程式展開、化簡關係式、代入 x+y=1 之求解過程...",
            solution: "解析：\n依穩定狀態定義：\n[0.8, 0.7; 0.2, 0.3] [x; y] = [x; y]\n展開第一列：0.8x + 0.7y = x\n移項得：0.7y = 0.2x  =>  2x = 7y  =>  x = (7/2)y\n代入 x + y = 1：\n(7/2)y + y = 1  =>  (9/2)y = 1  =>  y = 2/9 ≈ 22.2%\n反代求得：x = 7/9 ≈ 77.8%\n結論：長期演化下，音符出現在 Do 的機率為 7/9 (約 77.8%)，出現在 Sol 的機率為 2/9 (約 22.2%)。",
            formatAnswer: (ans) => `二階轉移矩陣手算推導過程：\n${ans}`
          },
          {
            id: "q3_five_by_five_matrix_convergence",
            title: "Desmos 五階矩陣動態收斂觀察",
            type: "textarea",
            prompt: "在 Desmos 範本中觀察五階轉移矩陣 $T$ 與步數滑桿 $k$：\n1. 為什麼轉移矩陣 $T$ 的每一直行（Column）數字相加一定要等於 1？\n2. 當你拉動滑桿 $k$ 從 1 增加到 15 時，圖形上的 5 顆機率點 $(X, Y_k)$ 發生了什麼變化？這代表什麼數學意義？",
            placeholder: "請說明：行和為1的機率意義，以及拉動 k 時機率點的變化與收斂現象...",
            solution: "解析：\n1. 行和等於 1 的意義：轉移矩陣中，第 j 行代表「當前音符為狀態 j 時，下一步轉移到各音符的機率分佈」。因為下一步必定會轉移到某一個音符（或留在原音），所有可能情況的機率總和必須等於 1。\n2. 收斂現象：在 k 較小時（如 k=1, 2, 3），5 顆機率點的位置隨步數改變；當 k 增加到約 8~10 以上時，5 顆點的高度幾乎不再改變，停留在固定位置，代表馬可夫鏈已收斂至穩定狀態（Stationary Distribution）。",
            formatAnswer: (ans) => `Desmos 五階矩陣收斂觀察：\n${ans}`
          }
        ]
      }
    },

    "6-5": {
      id: "6-5",
      moduleId: "module-6",
      moduleName: "六、視覺音遊與演算法",
      title: "對數琴鍵映射與參數式下落音遊【期末專題】",
      conceptTitle: "期末專題：對數反函數、下落式參數點陣與音遊實作",
      modelTitle: "對數琴鍵映射反函數、等速時間下落與判定線同步模型",
      status: "pending",
      desmosUrl: null,
      motivation: `
在這個單元中，我們要把前面學過的指數頻率、對數反函數、高斯取整與多段接力結合起來，在 Desmos 裡製作下落式音樂遊戲（Rhythm Game）。

下落式音遊的畫面與聲音由三個部分構成：
- **發聲端**：用**指數函數** $f = f_0 \\cdot 2^{\\frac{n}{12}}$ 計算頻率。
- **橫坐標 $X$**：用指數的反函數——**對數函數 $\\log_2$**，把頻率轉回等距排列的琴鍵橫坐標 $X$。
- **縱坐標 $Y$**：用參數式 $\\frac{M - t}{3}$ 讓音符隨時間 $t$ 等速往下移動，當音符落到判定線 $Y=0$ 時剛好發聲。
      `,
      mathModel: `
下落音遊可參考三個範本（可由「範本總覽」開啟）：\`lp4hwddbnf\`《**rickroll**》、\`jsesxbjozc\`《**魷魚遊戲**》、\`eodq3asol4\`《**春日影**》。

下落音遊的算式分為三個部分：

---

### 一、 橫坐標 $X$：用對數反函數將頻率轉回琴鍵位置
在十二平均律中，頻率 $L$ 與半音階數 $n$ 的關係是指數函數：$L = 440 \\cdot 2^{\\frac{n}{12}}$。
鋼琴琴鍵在畫面上是等距排列的，為了把頻率轉回琴鍵的水平位置，我們取對數反函數：
$$n = 12 \\cdot \\log_2\\left(\\frac{L}{440}\\right)$$
在 Desmos 範本中，橫坐標算式寫為：
$$X = 24 \\cdot \\log_2\\left(\\frac{L + 1}{442}\\right) + 1$$

- **為什麼係數乘以 $24$？**
  因為 $12 \\times 2 = 24$，代表每個半音在橫軸上分配到 $2$ 個單位的寬度，讓不同音高的音符在畫面上水平拉開。
- **為什麼要在頻率加上 $+1$（$\\log_2(L + 1)$）？**
  在樂曲列表中，休止符（無聲）通常以頻率 $L = 0$ 表示。
  如果算式直接寫 $\\log_2(0)$，因為 $\\log_2(0)$ 無定義，Desmos 會無法計算。
  加上 $+1$ 之後，當遇到休止符 $L = 0$ 時，內部變成 $\\log_2(1/442)$，為有限實數，可避免出現無定義錯誤，並將所有休止符固定在畫面左側邊界外。

---

### 二、 縱坐標 $Y$：等速下落與判定線同步
每個音符從上方往下移動的縱坐標算式：
$$Y = \\frac{M - t + \\text{offset}}{3}$$
- **節奏向量 $M = [1 \\dots 80]$**：代表當前段落中每一拍的拍數編號。
- **時間滑桿 $t$**：隨播放時間等速增加。
- **到達判定線 $Y = 0$ 的時刻**：
  判定線設在底部的橫軸 **$Y = 0$**。
  當時間走到 $t = M + \\text{offset}$ 時：
  $$Y = \\frac{(M + \\text{offset}) - (M + \\text{offset})}{3} = 0$$
  此時音符剛好落到判定線 $Y=0$ 上，同時發聲算式 $\\operatorname{tone}(L_k[\\operatorname{floor}(t)], 0.3)$ 播出該拍的音高。
- **分母除以 $3$ 的作用**：調整音符下落的視覺速度。分母越小，畫面中音符間距越開、下落越快；分母越大，下落越慢。

---

### 三、 二維參數點陣與分段接力
將橫、縱坐標寫成二維點陣 $(X, Y)$，每段分配 80 拍時間偏移：
$$\\left(24\\log_{2}\\left(\\frac{L_{1}+1}{442}\\right)+1, \\; \\frac{M-t}{3}\\right)$$
$$\\left(24\\log_{2}\\left(\\frac{L_{2}+1}{442}\\right)+1, \\; \\frac{M-t+80}{3}\\right)$$
$$\\left(24\\log_{2}\\left(\\frac{L_{3}+1}{440}\\right)+1, \\; \\frac{M-t+160}{3}\\right)$$
$$\\left(24\\log_{2}\\left(\\frac{L_{4}+1}{440}\\right)+1, \\; \\frac{M-t+240}{3}\\right)$$
透過每段加上 $80$ 的倍數偏移，可以將長曲目分成多段接力顯示與播放。
      `,
      tasks: [
        "1. 觀察範本：在 Desmos 開啟《rickroll》或《魷魚遊戲》，按播放鍵觀察音符下落與到達 $Y = 0$ 判定線發聲的同步方式。",
        "2. 算式拆解：理解對數琴鍵反函數 $24\\log_2\\left(\\frac{L+1}{442}\\right)+1$ 的半音等距性質，以及休止符 $L = 0$ 時加上 $+1$ 避免 $\\log_2(0)$ 無定義的做法。",
        "3. 期末專題實作：挑選一首歌曲，利用下落音遊範本編寫自己的 Desmos 下落式音遊，並將作品連結填入下方學習單。"
      ],
      formula: `// 🎹 下落式音遊核心參數式與分段接力
M = [1 ... 80]

// 第一段（0~80 拍）
\\left(24\\log_{2}\\left(\\frac{L_{1}+1}{442}\\right)+1, \\frac{M-t}{3}\\right)

// 第二段（80~160 拍，時間軸偏移 +80）
\\left(24\\log_{2}\\left(\\frac{L_{2}+1}{442}\\right)+1, \\frac{M-t+80}{3}\\right)

// 第三段（160~240 拍，時間軸偏移 +160）
\\left(24\\log_{2}\\left(\\frac{L_{3}+1}{440}\\right)+1, \\frac{M-t+160}{3}\\right)

// 第四段（240~320 拍，時間軸偏移 +240）
\\left(24\\log_{2}\\left(\\frac{L_{4}+1}{440}\\right)+1, \\frac{M-t+240}{3}\\right)`,
      tips: `
- **對數琴鍵映射**：利用對數反函數 log2 把指數頻率轉回等距的琴鍵橫坐標。
- **避免 log2(0) 無定義**：log2((L+1)/442) 中的 +1 是為了讓休止符（頻率 L = 0）能正常計算而不出錯。
- **儲存分享連結**：完成專題後，可點選 Desmos 右上角的分享按鈕產生連結，貼入下方學習單儲存。
      `,
      worksheet: {
        title: "期末專題學習單：對數琴鍵映射、下落音遊原理與個人專題展示",
        requireDesmosLink: true,
        questions: [
          {
            id: "q1_log_keyboard_and_plus_one",
            title: "對數反函數琴鍵映射與 +1 的作用",
            type: "radio",
            prompt: "在下落音遊算式 $X = 24\\log_2\\left(\\frac{L + 1}{442}\\right) + 1$ 中，為什麼不能直接寫 $X = 24\\log_2(L / 440)$，而要在頻率 $L$ 後面加上 $+1$？",
            options: [
              "因為樂譜中的「休止符」通常以頻率 $L = 0$ 表示；若沒有 $+1$，$\\log_2(0)$ 無定義（趨近 $-\\infty$），會導致 Desmos 無法繪製該點",
              "因為每個音符在演奏時都會自帶一個泛音",
              "因為 Desmos 的坐標原點被強制規定不能是 0",
              "加上 1 可以讓聲音音量自動變大兩倍"
            ],
            solution: "解析：\n對數函數在零點處無定義（$\\lim_{x \\to 0^+} \\log_2(x) = -\\infty$）。在音樂列表中，休止符（靜音）通常記錄為頻率 $L = 0$。如果沒有加上 $+1$，遇到休止符時 $\\log_2(0)$ 無定義；加上 $+1$ 後，當 $L = 0$ 時 $\\log_2((0+1)/442) = \\log_2(1/442)$ 為有限實數，可正常計算並將休止符移至畫面左側。",
            formatAnswer: (ans) => `對數反函數與 +1 作用解析：【${ans}】`
          },
          {
            id: "q2_hit_line_timing_condition",
            title: "下落縱坐標與判定線同步條件",
            type: "textarea",
            prompt: "在縱坐標等速下落算式 $Y = \\frac{M - t + \\text{offset}}{3}$ 中（其中 $M$ 為節奏拍數向量，$t$ 為時間滑桿）：\n1. 判定線設在橫軸 $Y = 0$ 代表什麼位置？\n2. 當時間 $t$ 走到什麼數值時，音符點陣會落到判定線上並同時發聲？",
            placeholder: "請說明：Y=0 的幾何位置，以及當 t 推進到何值時 Y 剛好等於 0...",
            solution: "解析：\n1. $Y = 0$ 是琴鍵所在的水平判定線。當 $Y > 0$ 時音符還在上方下落；當 $Y = 0$ 時代表音符落到琴鍵上。\n2. 令 $Y = 0$，得 $\\frac{M - t + \\text{offset}}{3} = 0 \\implies t = M + \\text{offset}$。當時間滑桿 $t$ 走到拍數 $M + \\text{offset}$ 時，$Y = 0$，同時發聲算式讀取該拍頻率發聲。",
            formatAnswer: (ans) => `下落縱坐標與判定線同步分析：\n${ans}`
          },
          {
            id: "q3_capstone_project_submission",
            title: "期末專題：Desmos 下落式音遊作品說明",
            type: "textarea",
            prompt: "請在此填寫你製作的期末專題作品說明（上方「Desmos 檔案連結」欄位請填寫你個人儲存的 Desmos 圖形分享連結）：\n1. 你選擇改編或創作的曲目名稱是什麼？\n2. 在製作過程中，你用到了哪些本學期學過的算式（如頻率指數與對數、分段接力、半音移調、高斯取整等）？\n3. 實作過程中有遇到什麼問題、是如何解決的？",
            placeholder: "請簡要說明：1. 曲目名稱、2. 用到的算式、3. 遇到的問題與解決方式...",
            solution: "填寫範例：\n1. 曲目名稱：《春日影》片段。\n2. 用到的算式：以十二平均律指數算式計算頻率，用對數反函數 X = 24*log2((L+1)/442)+1 計算琴鍵橫坐標，並以 Y = (M-t)/3 與 +80 分段接力讓音符等速下落。\n3. 問題與解決：一開始休止符設為 0 時位置跑掉，確認對數內的 +1 與畫面視窗範圍後修正完成。",
            formatAnswer: (ans) => `期末專題作品說明：\n${ans}`
          }
        ]
      }
    }
  }
};
