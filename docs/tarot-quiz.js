// Tarot Card Data
// 塔羅牌將直接從 JSON 加載
// 塔羅牌資料庫 - 編號從01到78
const tarotCards = [
    {
        name: "愚者",
        number: "01",
        keywords: ["冒險", "開始", "無憂無慮", "自由", "創造力", "衝動", "天真", "自發性", "無限可能", "旅行"],
        meaning: "愚者代表新的開始、冒險精神和無限可能。它象徵著純真、自由和對未知的勇敢探索。這張牌鼓勵你拋開恐懼，以開放和好奇的心態迎接生命的旅程。"
    },
    {
        name: "魔術師",
        number: "02",
        keywords: ["創造", "力量", "行動", "表達", "集中", "資源掌握", "溝通", "意志", "成就", "潛能"],
        meaning: "魔術師代表個人力量、創造力和實現目標的能力。它象徵著將想法轉化為現實的技巧，強調意志力、資源運用和有效溝通的重要性。"
    },
    {
        name: "女祭司",
        number: "03",
        keywords: ["直覺", "潛意識", "神秘", "靜默", "智慧", "內在探索", "保密", "靈性", "洞察", "隱藏事實"],
        meaning: "女祭司象徵直覺、潛意識與內在智慧。她提醒我們留心內心聲音，尋求隱藏的真理，並保持靜默與謙遜。"
    },
    {
        name: "皇后",
        number: "04",
        keywords: ["豐饒", "愛", "育成", "創造力", "自然", "美", "慈愛", "母性", "滋養", "成長"],
        meaning: "皇后象徵豐饒與滋養，是愛與創造力的源泉。她帶來成長、安慰和自然的美好力量。"
    },
    {
        name: "皇帝",
        number: "05",
        keywords: ["權威", "統治", "穩定", "結構", "規則", "領導", "父性", "責任", "計劃", "紀律"],
        meaning: "皇帝代表權威與秩序，強調規則、責任和穩定。他提醒我們要有計劃和紀律，才能達到目標。"
    },
    {
        name: "教皇",
        number: "06",
        keywords: ["傳統", "教導", "指引", "信仰", "慣例", "精神啟發", "社會秩序", "文化", "規範", "慷慨"],
        meaning: "教皇象徵傳統與精神指引，他提醒我們尊重文化與信仰，尋求智慧與啟發。"
    },
    {
        name: "戀人",
        number: "07",
        keywords: ["愛情", "選擇", "合一", "親密", "和諧", "承諾", "吸引力", "夥伴關係", "平衡", "誘惑"],
        meaning: "戀人代表愛情、選擇與和諧。他提醒我們珍惜關係、做出對心靈成長有益的選擇。"
    },
    {
        name: "戰車",
        number: "08",
        keywords: ["勝利", "意志力", "掌控", "目標", "前進", "決心", "動力", "自律", "勇氣", "成就"],
        meaning: "戰車象徵勝利與掌控，提醒我們要有意志力和決心，才能達到目標與成就。"
    },
    {
        name: "力量",
        number: "09",
        keywords: ["勇氣", "毅力", "自信", "忍耐", "同理心", "克服恐懼", "內在力量", "愛心", "堅毅", "包容"],
        meaning: "力量象徵內在勇氣與同理心，提醒我們用溫柔而堅定的方式面對挑戰。"
    },
    {
        name: "隱者",
        number: "10",
        keywords: ["內省", "智慧", "獨處", "尋找真理", "反思", "導師", "靜默", "精神探索", "導引", "靜心"],
        meaning: "隱者象徵內省與智慧，他提醒我們透過獨處與反思，尋求更高的真理。"
    },
    {
        name: "命運之輪",
        number: "11",
        keywords: ["命運", "循環", "改變", "機會", "幸運", "轉折", "意外", "成長", "命運之輪", "進展"],
        meaning: "命運之輪象徵變化與循環，提醒我們接受生命的轉折，抓住機會並順應變化。"
    },
    {
        name: "正義",
        number: "12",
        keywords: ["公平", "平衡", "真理", "調和", "法律", "責任", "誠實", "正義", "判斷", "公正"],
        meaning: "正義象徵公平與真理，她提醒我們負責任地行事，並維護正義和平衡。"
    },
    {
        name: "倒吊人",
        number: "13",
        keywords: ["犧牲", "靜止", "視角轉換", "讓步", "接納", "停滯", "放手", "放慢", "深思", "覺悟"],
        meaning: "倒吊人象徵犧牲與視角轉換，他提醒我們學會放手、靜下來重新審視人生。"
    },
    {
        name: "死亡",
        number: "14",
        keywords: ["結束", "轉變", "更新", "重生", "放下", "無常", "新開始", "蛻變", "解脫", "重組"],
        meaning: "死亡象徵結束與重生，提醒我們接受改變，並迎接更新與蛻變的機會。"
    },
    {
        name: "節制",
        number: "15",
        keywords: ["節制", "平衡", "和諧", "中庸", "沉著", "混合", "流動", "協調", "耐心", "調整"],
        meaning: "節制象徵平衡與和諧，他提醒我們在生活中找到適度與協調，保持冷靜與耐心。"
    },
    {
        name: "惡魔",
        number: "16",
        keywords: ["束縛", "執著", "誘惑", "成癮", "欺騙", "控制", "慾望", "物質主義", "黑暗面", "依賴"],
        meaning: "惡魔象徵束縛與執著，他提醒我們警覺內在的慾望與依賴，學會解脫。"
    },
    {
        name: "高塔",
        number: "17",
        keywords: ["突變", "崩潰", "突破", "驚醒", "瓦解", "意外", "危機", "重建", "覺醒", "轉折"],
        meaning: "高塔象徵劇變與覺醒，提醒我們接受突如其來的挑戰，並從中重建與成長。"
    },
    {
        name: "星星",
        number: "18",
        keywords: ["希望", "靈感", "平靜", "癒合", "指引", "樂觀", "再生", "信念", "寬慰", "願景"],
        meaning: "星星象徵希望與靈感，她提醒我們保持樂觀，相信指引與未來的可能性。"
    },
    {
        name: "月亮",
        number: "19",
        keywords: ["幻象", "潛意識", "不安", "迷惘", "夢境", "隱藏", "感性", "疑慮", "情緒混亂", "直覺"],
        meaning: "月亮象徵幻象與迷惘，她提醒我們信任直覺，穿越不安與混亂。"
    },
    {
        name: "太陽",
        number: "20",
        keywords: ["快樂", "成就", "喜悅", "光明", "活力", "自信", "正向", "幸福", "清晰", "熱情"],
        meaning: "太陽象徵喜悅與成功，他提醒我們擁抱快樂，展現自信與正向的能量。"
    },
    {
        name: "審判",
        number: "21",
        keywords: ["覺醒", "審視", "更新", "寬恕", "重生", "決定", "釋懷", "轉變", "靈魂呼喚", "反省"],
        meaning: "審判象徵覺醒與重生，他提醒我們釋懷過去，迎向更新與蛻變的未來。"
    },
    {
        name: "世界",
        number: "22",
        keywords: ["完成", "圓滿", "成就", "旅行", "統合", "結束", "新旅程", "滿足", "轉化", "永恆"],
        meaning: "世界象徵圓滿與完成，她提醒我們慶祝成就，準備開啟新旅程。"
    },
    {
        name: "權杖一",
        number: "23",
        keywords: ["創意", "熱情", "靈感", "開端", "動力", "行動", "機會", "野心", "冒險", "潛能"],
        meaning: "權杖一象徵創意與新開始，提醒我們擁抱靈感與熱情，啟動嶄新的冒險。"
    },
    {
        name: "權杖二",
        number: "24",
        keywords: ["計劃", "決定", "預視", "探索", "可能性", "目標", "野心", "選擇", "領域", "擴展"],
        meaning: "權杖二象徵計劃與探索新可能性，提醒我們做出有遠見的選擇並積極開拓未來。"
    },
    {
        name: "權杖三",
        number: "25",
        keywords: ["進展", "擴張", "機遇", "前景", "成長", "預期", "展望", "冒險", "貿易", "期待"],
        meaning: "權杖三象徵成長與前景，提醒我們期待冒險並迎接新的機遇。"
    },
    {
        name: "權杖四",
        number: "26",
        keywords: ["慶祝", "穩定", "歸屬", "家庭", "團結", "愉悅", "成果", "夥伴", "幸福", "自豪"],
        meaning: "權杖四象徵慶祝與穩定，提醒我們珍惜團體和家庭帶來的歸屬感。"
    },
    {
        name: "權杖五",
        number: "27",
        keywords: ["競爭", "衝突", "挑戰", "磨合", "混亂", "爭執", "緊張", "活力", "對抗", "分歧"],
        meaning: "權杖五象徵挑戰與競爭，提醒我們學會在混亂中找到共識。"
    },
    {
        name: "權杖六",
        number: "28",
        keywords: ["勝利", "成就", "認可", "公開讚賞", "榮耀", "成功", "領導", "進展", "自信", "光榮"],
        meaning: "權杖六象徵成功與榮耀，提醒我們為努力的成果感到自豪。"
    },
    {
        name: "權杖七",
        number: "29",
        keywords: ["防衛", "堅持", "挑戰", "勇氣", "保護", "立場", "克服對手", "耐力", "保衛", "抵抗"],
        meaning: "權杖七象徵防衛與堅持，提醒我們堅守立場，勇敢面對挑戰。"
    },
    {
        name: "權杖八",
        number: "30",
        keywords: ["快速", "發展", "動能", "前進", "通訊", "進展", "機會", "活力", "衝刺", "結束"],
        meaning: "權杖八象徵迅速進展，提醒我們把握時機並全力衝刺。"
    },
    {
        name: "權杖九",
        number: "31",
        keywords: ["防禦", "持續", "堅持", "疲憊", "耐力", "警惕", "防範", "預備", "謹慎", "經驗"],
        meaning: "權杖九象徵防禦與堅韌，提醒我們持續奮戰，即使感到疲憊。"
    },
    {
        name: "權杖十",
        number: "32",
        keywords: ["負擔", "壓力", "責任", "重擔", "勞累", "負荷", "承擔", "耗竭", "任務", "完成"],
        meaning: "權杖十象徵承擔與壓力，提醒我們適時釋放重擔，避免過度勞累。"
    },
    {
        name: "權杖侍者",
        number: "33",
        keywords: ["靈感", "探索", "熱情", "創造", "學習", "傳訊", "冒險", "熱忱", "開端", "成長"],
        meaning: "權杖侍者象徵靈感與學習，提醒我們保持好奇心並擁抱新體驗。"
    },
    {
        name: "權杖騎士",
        number: "34",
        keywords: ["冒險", "熱情", "衝動", "行動", "決心", "活力", "前進", "勇氣", "轉變", "挑戰"],
        meaning: "權杖騎士象徵冒險與行動力，提醒我們勇敢前進，迎接轉變。"
    },
    {
        name: "權杖皇后",
        number: "35",
        keywords: ["自信", "熱情", "創造", "力量", "激勵", "領導", "魅力", "母性", "勇氣", "感性"],
        meaning: "權杖皇后象徵自信與創造力，她鼓勵我們用熱情和魅力影響他人。"
    },
    {
        name: "權杖國王",
        number: "36",
        keywords: ["權威", "領導", "靈感", "熱情", "決策", "統御", "自信", "野心", "成就", "影響力"],
        meaning: "權杖國王象徵權威與領導力，他提醒我們用熱情與智慧達成目標。"
    },
    {
        name: "聖杯一",
        number: "37",
        keywords: ["愛", "情感", "新關係", "滿足", "靈感", "同理心", "喜悅", "開端", "接納", "滋養"],
        meaning: "聖杯一象徵愛與新開始，提醒我們擁抱情感並滋養心靈。"
    },
    {
        name: "聖杯二",
        number: "38",
        keywords: ["夥伴", "合作", "愛情", "聯盟", "平衡", "連結", "協調", "情感交流", "承諾", "調和"],
        meaning: "聖杯二象徵情感連結與合作，提醒我們珍惜關係與承諾。"
    },
    {
        name: "聖杯三",
        number: "39",
        keywords: ["慶祝", "友誼", "社交", "團體", "幸福", "團聚", "愉悅", "支持", "成果", "歡樂"],
        meaning: "聖杯三象徵慶祝與友誼，提醒我們享受團體中的快樂與支持。"
    },
    {
        name: "聖杯四",
        number: "40",
        keywords: ["沉思", "無聊", "不滿", "冥想", "錯失機會", "冷漠", "疲倦", "內省", "厭倦", "靜觀"],
        meaning: "聖杯四象徵沉思與不滿，提醒我們打開心扉看見新機會。"
    },
    {
        name: "聖杯五",
        number: "41",
        keywords: ["失落", "哀傷", "悲痛", "後悔", "失望", "沮喪", "情感打擊", "放手", "接納", "釋懷"],
        meaning: "聖杯五象徵失落與接納，提醒我們從悲傷中學習與成長。"
    },
    {
        name: "聖杯六",
        number: "42",
        keywords: ["回憶", "懷舊", "善意", "天真", "禮物", "關懷", "溫暖", "童年", "回顧", "舒適"],
        meaning: "聖杯六象徵回憶與懷舊，提醒我們懷抱善意與單純的喜悅。"
    },
    {
        name: "聖杯七",
        number: "43",
        keywords: ["幻想", "選擇", "誘惑", "迷惘", "混亂", "幻影", "空想", "不切實際", "機會", "想像"],
        meaning: "聖杯七象徵幻想與選擇，提醒我們看清現實，做出明智的決定。"
    },
    {
        name: "聖杯八",
        number: "44",
        keywords: ["離開", "放下", "探索", "尋找", "放棄", "成長", "尋求", "靜心", "改變", "超越"],
        meaning: "聖杯八象徵離開與探索，提醒我們放下不再有益的事物，尋找新方向。"
    },
    {
        name: "聖杯九",
        number: "45",
        keywords: ["滿足", "願望成真", "成就", "愉悅", "享受", "成果", "滿意", "自豪", "幸福", "豐盛"],
        meaning: "聖杯九象徵願望成真與滿足，提醒我們感恩當下的幸福。"
    },
    {
        name: "聖杯十",
        number: "46",
        keywords: ["幸福", "圓滿", "家庭", "喜悅", "和諧", "歸屬", "愛", "滿足", "成就", "幸福結局"],
        meaning: "聖杯十象徵圓滿與家庭幸福，提醒我們珍惜愛與歸屬感。"
    },
    {
        name: "聖杯侍者",
        number: "47",
        keywords: ["情感", "消息", "新開始", "靈感", "學習", "夢想", "直覺", "溫柔", "成長", "善意"],
        meaning: "聖杯侍者象徵情感與新開始，提醒我們保持柔軟與開放。"
    },
    {
        name: "聖杯騎士",
        number: "48",
        keywords: ["浪漫", "追求", "愛", "情感流動", "魅力", "想像力", "提議", "表達感情", "動情", "同理心"],
        meaning: "聖杯騎士象徵浪漫與追求，提醒我們勇於表達感情。"
    },
    {
        name: "聖杯皇后",
        number: "49",
        keywords: ["同理心", "靈性", "關懷", "體貼", "愛心", "接納", "柔軟", "直覺", "理解", "情感豐富"],
        meaning: "聖杯皇后象徵同理心與靈性，提醒我們用愛心滋養自己與他人。"
    },
    {
        name: "聖杯國王",
        number: "50",
        keywords: ["情感穩定", "智慧", "同理", "領導", "包容", "安撫", "支持", "靜定", "沉著", "情感成熟"],
        meaning: "聖杯國王象徵情感穩定與智慧，提醒我們以成熟穩健的方式領導與支持。"
    },
    {
        name: "寶劍一",
        number: "51",
        keywords: ["清晰", "真相", "勝利", "智慧", "決斷", "力量", "新開始", "洞察", "突破", "理性"],
        meaning: "寶劍一象徵清晰與突破，提醒我們用理性與智慧迎接新挑戰。"
    },
    {
        name: "寶劍二",
        number: "52",
        keywords: ["平衡", "抉擇", "拉鋸", "矛盾", "封閉", "內心掙扎", "猶豫", "壓抑", "謹慎", "沉思"],
        meaning: "寶劍二象徵抉擇與平衡，提醒我們勇敢面對內心矛盾。"
    },
    {
        name: "寶劍三",
        number: "53",
        keywords: ["心碎", "悲傷", "失落", "傷痛", "背叛", "哀悼", "難過", "分離", "痛苦", "誤會"],
        meaning: "寶劍三象徵心碎與悲傷，提醒我們正視傷痛並尋求療癒。"
    },
    {
        name: "寶劍四",
        number: "54",
        keywords: ["休息", "靜養", "沉思", "修復", "停止", "反省", "放下", "安靜", "療癒", "重整"],
        meaning: "寶劍四象徵休息與修復，提醒我們停下腳步、重整身心。"
    },
    {
        name: "寶劍五",
        number: "55",
        keywords: ["衝突", "勝利（代價高）", "操控", "挑戰", "爭執", "自私", "不公平", "不擇手段", "戰敗", "優勢"],
        meaning: "寶劍五象徵衝突與代價，提醒我們審視勝利背後的真意。"
    },
    {
        name: "寶劍六",
        number: "56",
        keywords: ["過渡", "移動", "離開", "改變", "修復", "新旅程", "適應", "前行", "平靜", "釋放"],
        meaning: "寶劍六象徵過渡與療癒，提醒我們接受改變，邁向新旅程。"
    },
    {
        name: "寶劍七",
        number: "57",
        keywords: ["詭計", "欺騙", "試探", "偷竊", "機智", "隱藏", "狡猾", "策略", "自私", "隱秘行動"],
        meaning: "寶劍七象徵詭計與機智，提醒我們保持警覺，運用策略。"
    },
    {
        name: "寶劍八",
        number: "58",
        keywords: ["受困", "受限", "無力", "阻礙", "困惑", "束縛", "挫折", "恐懼", "無助", "迷失"],
        meaning: "寶劍八象徵受困與迷惘，提醒我們尋找解脫與突破之道。"
    },
    {
        name: "寶劍九",
        number: "59",
        keywords: ["焦慮", "擔憂", "不安", "失眠", "內疚", "恐懼", "夢魘", "懊悔", "壓力", "痛苦"],
        meaning: "寶劍九象徵焦慮與壓力，提醒我們正視內心恐懼，尋求支持。"
    },
    {
        name: "寶劍十",
        number: "60",
        keywords: ["結束", "崩潰", "背叛", "完結", "痛苦", "災難", "絕望", "放下", "結局", "解脫"],
        meaning: "寶劍十象徵結束與解脫，提醒我們在終點中找到新生的契機。"
    },
    {
        name: "寶劍侍者",
        number: "61",
        keywords: ["警覺", "好奇", "覺察", "學習", "觀察", "情報", "尋找真相", "探索", "思考", "新訊息"],
        meaning: "寶劍侍者象徵警覺與學習，提醒我們保持好奇、追尋真理。"
    },
    {
        name: "寶劍騎士",
        number: "62",
        keywords: ["衝動", "決心", "行動", "挑戰", "勇氣", "果斷", "前進", "爭取", "戰鬥", "爭辯"],
        meaning: "寶劍騎士象徵行動與決心，提醒我們勇敢追求目標，不畏挑戰。"
    },
    {
        name: "寶劍皇后",
        number: "63",
        keywords: ["理智", "獨立", "客觀", "清晰", "公正", "果斷", "洞察", "明辨是非", "公開坦誠", "智慧"],
        meaning: "寶劍皇后象徵理智與智慧，提醒我們保持冷靜，明辨是非。"
    },
    {
        name: "寶劍國王",
        number: "64",
        keywords: ["權威", "智慧", "決策", "公正", "理性", "分析", "領導", "判斷", "思考", "掌控"],
        meaning: "寶劍國王象徵權威與理性，提醒我們用智慧作決策。"
    },
    {
        name: "錢幣一",
        number: "65",
        keywords: ["機會", "財富", "實現", "穩定", "資源", "收益", "新開始", "物質豐盛", "計畫成功", "繁榮"],
        meaning: "錢幣一象徵機會與繁榮，提醒我們把握機會，創造穩定的未來。"
    },
    {
        name: "錢幣二",
        number: "66",
        keywords: ["平衡", "適應", "靈活", "彈性", "應變", "多工", "平衡生活", "優先順序", "調整", "計劃"],
        meaning: "錢幣二象徵平衡與適應，提醒我們靈活應對生活中的多重挑戰。"
    },
    {
        name: "錢幣三",
        number: "67",
        keywords: ["合作", "技術", "團隊", "協作", "工藝", "項目成就", "合作關係", "專業", "貢獻", "發展"],
        meaning: "錢幣三象徵合作與專業，提醒我們團隊合作的重要性。"
    },
    {
        name: "錢幣四",
        number: "68",
        keywords: ["保守", "穩固", "安全", "執著", "控制", "積蓄", "節儉", "保護", "防範", "擁有感"],
        meaning: "錢幣四象徵穩固與保守，提醒我們平衡安全感與開放性。"
    },
    {
        name: "錢幣五",
        number: "69",
        keywords: ["貧困", "損失", "困境", "窘迫", "挫折", "排斥", "需要幫助", "挑戰", "生病", "財務危機"],
        meaning: "錢幣五象徵困境與挑戰，提醒我們尋求幫助，堅持下去。"
    },
    {
        name: "錢幣六",
        number: 70,
        keywords: ["慷慨", "分享", "施與受", "平衡", "捐贈", "資源分配", "互助", "支持", "獎勵", "慈善"],
        meaning: "錢幣六象徵分享與平衡，提醒我們樂於給予，也願意接受幫助。"
    },
    {
        name: "錢幣七",
        number: 71,
        keywords: ["耐心", "評估", "耕耘", "收成", "評估進度", "耐性", "反思", "規劃", "投資", "預期"],
        meaning: "錢幣七象徵耐心與評估，提醒我們細心規劃，等待成果。"
    },
    {
        name: "錢幣八",
        number: 72,
        keywords: ["勤奮", "技巧", "專注", "努力", "學習", "完善", "工藝", "精進", "持續進步", "培養"],
        meaning: "錢幣八象徵勤奮與專注，提醒我們努力學習並持續進步。"
    },
    {
        name: "錢幣九",
        number: 73,
        keywords: ["獨立", "成就", "物質豐盛", "自豪", "自主", "安逸", "獨享生活", "財務自由", "優雅"],
        meaning: "錢幣九象徵獨立與豐盛，提醒我們享受努力帶來的成果。"
    },
    {
        name: "錢幣十",
        number: 74,
        keywords: ["財富", "家族", "遺產", "成就", "永續", "安全", "社會地位", "團圓", "穩定", "圓滿"],
        meaning: "錢幣十象徵成就與穩定，提醒我們珍惜家族與社群的連結。"
    },
    {
        name: "錢幣侍者",
        number: 75,
        keywords: ["機會", "學習", "投資", "計畫", "勤奮", "目標", "新方向", "實踐", "成長", "探索"],
        meaning: "錢幣侍者象徵機會與學習，提醒我們踏實努力，累積成長。"
    },
    {
        name: "錢幣騎士",
        number: 76,
        keywords: ["責任", "勤奮", "穩健", "堅持", "規劃", "努力", "穩重", "執行", "耐心", "目標導向"],
        meaning: "錢幣騎士象徵責任與穩健，提醒我們腳踏實地，持續前進。"
    },
    {
        name: "錢幣皇后",
        number: 77,
        keywords: ["豐饒", "照顧", "實際", "培養", "安全", "繁榮", "溫暖", "滋養", "管理", "成熟"],
        meaning: "錢幣皇后象徵豐饒與照顧，提醒我們用實際行動創造安全與繁榮。"
    },
    {
        name: "錢幣國王",
        number: 78,
        keywords: ["財富", "穩定", "領導", "實際", "成就", "慷慨", "規劃", "資源掌握", "慎重", "成功"],
        meaning: "錢幣國王象徵財富與領導，提醒我們用智慧管理資源，實現成功。"
    }
    
    
    // 可以繼續添加更多塔羅牌
];

// 初始化函數
document.addEventListener('DOMContentLoaded', () => {
    fetch('tarot_cards.json')
        .then(response => response.json())
        .then(tarotCards => {
            const tarotQuiz = new TarotQuiz(tarotCards);
            const startButton = document.getElementById('start-button');
            const quizContainer = document.getElementById('quiz-container');
            const resultContainer = document.getElementById('result-container');

            startButton.addEventListener('click', () => {
                quizContainer.style.display = 'block';
                resultContainer.style.display = 'none';
                tarotQuiz.start();
            });
        })
        .catch(error => {
            console.error('Error loading tarot cards:', error);
        });
});

class TarotQuiz {
    constructor(cards) {
        this.cards = cards;
        this.totalQuestions = 0;
        this.currentCard = null;
        this.cardImageEl = document.getElementById('card-image');
        this.cardNameEl = document.getElementById('card-name');
        this.textQuestionEl = document.getElementById('text-question');
        this.optionsEl = document.getElementById('options');
        this.feedbackEl = document.getElementById('feedback');
        this.textQuestionTemplates = [
            '這張牌代表什麼意義？',
            '這張牌在塔羅牌中有什麼特別的含義？',
            '這張牌想要傳達什麼訊息？'
        ];
        
        // 初始化随机种子，保证每次刷新页面随机性不同
        Math.seedrandom(new Date().getTime());
    }

    // Fisher-Yates 洗牌算法
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateRandomOptions(correctCard) {
        // 從 correctCard 的 keywords 中隨機選擇一個關鍵字作為正確答案
        const correctKeyword = correctCard.keywords[Math.floor(Math.random() * correctCard.keywords.length)];

        // 過濾掉當前牌，得到其他牌組成的陣列
        const remainingCards = this.cards.filter(card => card !== correctCard);

        // 準備錯誤選項
        const wrongKeywords = [];
        while (wrongKeywords.length < 3) {
            // 隨機選擇一張牌
            const randomCard = remainingCards[Math.floor(Math.random() * remainingCards.length)];
            // 從該牌的 keywords 中隨機選擇一個
            const randomKeyword = randomCard.keywords[Math.floor(Math.random() * randomCard.keywords.length)];

            // 確保不重複
            if (!wrongKeywords.includes(randomKeyword)) {
                wrongKeywords.push(randomKeyword);
            }
        }

        // 組合選項
        const options = [correctKeyword, ...wrongKeywords];

        // 隨機排序
        return this.shuffleArray(options);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    displayQuestion() {
        // 保存当前卡片的全局变量，以便在回调中使用
        const self = this;

        // 定义图片加载失败的回调函数
        function handleImageLoadError() {
            console.error('图片加载失败：', self.currentCard);
            // 重新选择卡片
            self.displayQuestion();
        }

        // 定义图片加载成功的回调函数
        function handleImageLoadSuccess() {
            console.log('图片加载成功：', self.currentCard);
        }

        // 随机选择一张卡牌
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        this.currentCard = this.cards[randomIndex];
        this.totalQuestions++;

        // 特殊处理某些卡牌的名称映射
        const cardNameMap = {
            '皇后': '皇后',
            '皇帝': '皇帝',
            '教皇': '教皇',
            '戀人': '戀人',
            '戰車': '戰車',
            '命運之輪': '命運之輪',
            '正義': '正義',
            '倒吊人': '倒吊人',
            '死亡': '死亡',
            '節制': '節制',
            '惡魔': '惡魔'
        };

        const mappedName = cardNameMap[this.currentCard.name] || this.currentCard.name;
        const expectedImagePath = `images/${this.currentCard.number}_${mappedName}.jpg`;
        console.log('Loading Random Image:', expectedImagePath);
        console.log('Current Random Card:', this.currentCard);
        
        // 设置图片加载事件监听器
        this.cardImageEl.onload = handleImageLoadSuccess;
        this.cardImageEl.onerror = handleImageLoadError;
        this.cardImageEl.src = expectedImagePath;

        this.cardNameEl.textContent = this.currentCard.name;
        this.feedbackEl.textContent = '';

        // 隨機選擇題目類型，但保持與當前卡片一致
        const questionTypes = [
            (card) => `${card.name}的核心意義是什麼？`,
            (card) => `在${card.name}的關鍵詞中，哪一個最能代表牌的本質？`,
            (card) => `${card.name}想要傳達的最重要訊息是什麼？`,
            (card) => `${card.name}在塔羅牌中代表什麼樣的能量？`,
            (card) => `當${card.name}出現時，它通常暗示什麼？`
        ];

        // 使用當前卡片選擇題目
        const questionTemplate = questionTypes[Math.floor(Math.random() * questionTypes.length)](this.currentCard);
        this.textQuestionEl.textContent = questionTemplate;

        const options = this.generateRandomOptions(this.currentCard);
        this.optionsEl.innerHTML = options.map(option => 
            `<div class="option" data-correct="${this.currentCard.keywords.includes(option)}">${option}</div>`
        ).join('');

        // 重新啟用選項
        this.optionsEl.querySelectorAll('.option').forEach(optionEl => {
            optionEl.style.pointerEvents = 'auto';
            optionEl.classList.remove('correct', 'incorrect');
            
            optionEl.addEventListener('click', () => {
                // 移除所有先前的高亮
                this.optionsEl.querySelectorAll('.option').forEach(el => {
                    el.classList.remove('correct', 'incorrect');
                });

                const isCorrect = optionEl.dataset.correct === 'true';
                
                // 高亮點選的選項
                optionEl.classList.add(isCorrect ? 'correct' : 'incorrect');
                
                // 找出正確答案並高亮
                const correctOptionEl = Array.from(this.optionsEl.children).find(el => el.dataset.correct === 'true');
                if (correctOptionEl) {
                    correctOptionEl.classList.add('correct');
                }

                // 更新反饋文字
                this.feedbackEl.textContent = isCorrect 
                    ? '太棒了！你答對了！' 
                    : `這次沒猜對，正確答案是「${correctOptionEl.textContent}」`;

                // 禁用選項，防止重複點選
                this.optionsEl.querySelectorAll('.option').forEach(el => {
                    el.style.pointerEvents = 'none';
                });

                // 延遲顯示下一題
                setTimeout(() => {
                    this.displayQuestion();
                }, 2000);
            });

        });
    }

    handleAnswer(event) {
        const selectedOption = event.target;
        const isCorrect = selectedOption.dataset.correct === 'true';

        this.optionsEl.querySelectorAll('.option').forEach(el => {
            el.classList.remove('correct', 'incorrect');
            el.removeEventListener('click', this.handleAnswer);
        });

        if (isCorrect) {
            selectedOption.classList.add('correct');
            this.score++;
            this.feedbackEl.textContent = '答對了！';
        } else {
            selectedOption.classList.add('incorrect');
            const correctKeyword = this.currentCard.keywords.find(keyword => 
                this.optionsEl.querySelector('.option[data-correct="true"]').textContent === keyword
            );
            this.feedbackEl.textContent = `答錯了。正確答案是：${correctKeyword}`;
        }

        setTimeout(() => this.displayQuestion(), 2000);
    }

    start() {
        this.displayQuestion();
    }
}

// 初始化並開始測驗
const quiz = new TarotQuiz(tarotCards);
quiz.start();
