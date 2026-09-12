/**
 * 照護圈 (Care Circle) - 預設示範種子資料
 * 涵蓋長輩照護圈與可擴展的幼兒照護圈、活動池、抽卡推薦、多重身分與歷史活動卡
 */

export const INITIAL_DATA = {
  // 登入者基本狀態
  currentUser: {
    id: 'user-001',
    name: '王小敏',
    email: 'min.wang@carecircle.tw',
    avatar: '👩‍💼',
    activeRole: 'KANBAN', // 'KANBAN' | 'FAMILY' | 'CAREGIVER'
    phone: '0912-345-678',
    isCaregiverApproved: true
  },

  // 照護對象：長輩 (ELDERLY) 與 幼兒 (CHILD)
  recipients: [
    {
      id: 'rec-001',
      type: 'ELDERLY',
      name: '王奶奶',
      relationship: '母親',
      avatar: '👵',
      age: 82,
      birthdate: '1944-05-18',
      careLevel: 'NEED_ASSIST',
      statusTags: ['行動需單杖', '喜愛園藝散步', '晨間血壓藥'],
      interests: ['散步', '品茗', '烹飪', '植物園藝'],
      mobilityScore: 3,
      healthNotes: '上午體力較佳，步速需放慢；有高血壓病史，記得攜帶溫水壺與毛巾。',
      location: '台北市大安區新生南路',
      isDefault: true
    },
    {
      id: 'rec-002',
      type: 'ELDERLY',
      name: '王爺爺',
      relationship: '父親',
      avatar: '👴',
      age: 85,
      birthdate: '1941-11-03',
      careLevel: 'INDEPENDENT',
      statusTags: ['象棋高手', '書法大師', '每日量血糖'],
      interests: ['下棋', '書法', '歷史老歌', '茶道'],
      mobilityScore: 4,
      healthNotes: '聽力稍弱，對話請面對面注視；下午 15:00 習慣量一次血糖。',
      location: '台北市大安區信義路二段',
      isDefault: false
    },
    {
      id: 'rec-003',
      type: 'ELDERLY',
      name: '林阿姨',
      relationship: '姑姑',
      avatar: '🧓',
      age: 76,
      birthdate: '1950-08-22',
      careLevel: 'NEED_ASSIST',
      statusTags: ['輕度健忘', '手作編織', '喜愛聽日語歌'],
      interests: ['手作', '老歌', '編織', '散步'],
      mobilityScore: 4,
      healthNotes: '偶爾會重複詢問時間與地點，請以溫和肯定語氣回應。',
      location: '新北市板橋區縣民大道',
      isDefault: false
    },
    {
      id: 'rec-004',
      type: 'CHILD',
      name: '小宇',
      relationship: '兒子 (幼兒照護圈)',
      avatar: '👦',
      age: 4,
      birthdate: '2022-04-12',
      careLevel: 'INDEPENDENT',
      statusTags: ['幼兒園中班', '恐龍迷', '草地跑跳', '好奇寶寶'],
      interests: ['恐龍', '積木', '繪本共讀', '公園溜滑梯'],
      mobilityScore: 5,
      healthNotes: '對花生微過敏；戶外活動需注意防蚊防曬與適度補充水分。',
      location: '台北市大安區新生南路',
      isDefault: false
    },
    {
      id: 'rec-005',
      type: 'CHILD',
      name: '糖糖',
      relationship: '女兒 (幼兒照護圈)',
      avatar: '👧',
      age: 6,
      birthdate: '2020-09-28',
      careLevel: 'INDEPENDENT',
      statusTags: ['大班升小一', '繪畫達人', '睡前故事'],
      interests: ['水彩畫', '童話故事', '烘焙餅乾', '跳繩'],
      mobilityScore: 5,
      healthNotes: '傍晚眼睛較易疲倦，繪畫手作時間建議不超過 40 分鐘。',
      location: '台北市大安區新生南路',
      isDefault: false
    },
    {
      id: 'rec-006',
      type: 'ELDERLY',
      name: '林爺爺',
      relationship: '鄰里長輩 (社區照護圈)',
      avatar: '👴',
      age: 78,
      birthdate: '1948-02-14',
      careLevel: 'NEED_ASSIST',
      statusTags: ['社區互助圈', '需要防跌看護', '喜愛公園散步'],
      interests: ['散步', '聽廣播', '泡茶'],
      mobilityScore: 3,
      healthNotes: '行動稍緩，戶外散步需放慢速度並定期提醒補充水分。',
      location: '台北市大安區建國南路二段',
      isDefault: false
    }
  ],

  // 抽卡靈感活動池 (Inspiration Activity Pool)
  inspirationPool: [
    // 長輩活動
    {
      id: 'insp-001',
      targetType: 'ELDERLY',
      title: '大安森林公園綠意散步',
      suggestedTime: '今日 15:30',
      durationMinutes: 45,
      category: '戶外・散步',
      location: '大安森林公園 (生態池步道)',
      reasonBullets: ['今日氣溫 24°C 微風宜人', '長輩最近 8 天未到戶外公園', '適合輕度關節伸展'],
      supplies: ['溫水壺', '折疊拐杖', '遮陽薄外套'],
      flowerKey: 'DAISY',
      tags: ['散步', '戶外', '大自然']
    },
    {
      id: 'insp-002',
      targetType: 'ELDERLY',
      title: '初秋金萱桂花茶會',
      suggestedTime: '今日 14:00',
      durationMinutes: 30,
      category: '休閒・品茗',
      location: '客廳陽台茶几',
      reasonBullets: ['午後時光適合安靜談天', '長輩最喜歡手沖烏龍與桂花香', '喚起舊時眷村品茗記憶'],
      supplies: ['紫砂壺', '乾燥桂花', '微甜綠豆糕'],
      flowerKey: 'OSMANTHUS',
      tags: ['喝茶', '品茗', '家庭時光']
    },
    {
      id: 'insp-003',
      targetType: 'ELDERLY',
      title: '楚河漢界象棋友誼對弈',
      suggestedTime: '今日 16:00',
      durationMinutes: 40,
      category: '認知・益智',
      location: '客廳棋盤桌',
      reasonBullets: ['鍛鍊腦力與空間認知', '王爺爺最拿手的當頭炮佈局', '互動熱絡增進家庭笑語'],
      supplies: ['實木象棋一副', '老花眼鏡', '薄茶一杯'],
      flowerKey: 'GINKGO',
      tags: ['象棋', '下棋', '益智認知']
    },
    {
      id: 'insp-004',
      targetType: 'ELDERLY',
      title: '時光老相簿記憶猜謎',
      suggestedTime: '今日 19:30',
      durationMinutes: 30,
      category: '懷舊・心理',
      location: '家庭起居室沙發',
      reasonBullets: ['喚醒長期記憶與榮譽感', '長輩講述年輕創業老故事', '祖孫三代溫馨互動'],
      supplies: ['黑白照片冊', '放大鏡', '錄音筆記本'],
      flowerKey: 'CAMELLIA',
      tags: ['老歌', '相簿', '懷舊回憶']
    },
    {
      id: 'insp-005',
      targetType: 'ELDERLY',
      title: '溫熱草本舒緩足浴',
      suggestedTime: '今晚 20:30',
      durationMinutes: 25,
      category: '健康・放鬆',
      location: '臥室休閒椅旁',
      reasonBullets: ['促進末梢微血管循環', '搭配薰衣草精油助眠', '深層舒緩一日關節疲倦'],
      supplies: ['恆溫泡腳桶', '天然艾草浴包', '吸水保暖大浴巾'],
      flowerKey: 'LAVENDER',
      tags: ['放鬆', '休養', '足浴']
    },

    // 幼兒活動
    {
      id: 'insp-101',
      targetType: 'CHILD',
      title: '植物園落葉松果大尋寶',
      suggestedTime: '今日 10:00',
      durationMinutes: 40,
      category: '幼兒・自然探索',
      location: '植物園林蔭小徑',
      reasonBullets: ['引導觀察四季落葉顏色變換', '刺激五感觸覺與大肌肉發育', '滿足小宇旺盛好奇心'],
      supplies: ['採集小竹籃', '兒童放大鏡', '防蚊液'],
      flowerKey: 'DANDELION',
      tags: ['自然尋寶', '草地', '童年趣味']
    },
    {
      id: 'insp-102',
      targetType: 'CHILD',
      title: '暴龍大冒險彩繪黏土手作',
      suggestedTime: '今日 14:30',
      durationMinutes: 35,
      category: '幼兒・藝術啟蒙',
      location: '兒童遊戲角手作桌',
      reasonBullets: ['小宇今天一直哼著恐龍歌', '訓練手部細部小肌肉捏塑', '專注力提升成就滿分'],
      supplies: ['無毒彩色超輕黏土', '黏土滾輪工具', '保護桌墊'],
      flowerKey: 'SUNFLOWER',
      tags: ['恐龍', '手作', '繪畫']
    }
  ],

  // 活動清單 (Activities)
  activities: [
    // 🌅 早上：家庭模式 (帶小孩去幼稚園)
    {
      id: 'act-today-morning',
      recipientId: 'rec-004',
      title: '送小宇去向日葵幼兒園 (交接水壺與聯絡簿)',
      category: '家庭・幼兒送托',
      timeSlot: 'MORNING',
      scheduledDate: '2026-09-12',
      scheduledTime: '08:00–09:00',
      location: '向日葵市立幼兒園 (大安分班)',
      leadCompanion: '媽媽 王小敏 (家庭模式)',
      coParticipants: [],
      notes: '準備水壺與換洗衣物袋，與幼兒園導師交接晨間體溫與今日叮嚀事項。',
      status: 'COMPLETED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: []
    },
    // ☀️ 下午：夥伴模式 (陪伴其他照護圈支持處理)
    {
      id: 'act-today-afternoon',
      recipientId: 'rec-006',
      title: '陪伴其他照護圈支持處理 (社區照護夥伴散步看護)',
      category: '社區・夥伴陪伴',
      timeSlot: 'AFTERNOON',
      scheduledDate: '2026-09-12',
      scheduledTime: '14:00–16:00',
      location: '大安森林公園生態步道 / 鄰里樂齡中心',
      leadCompanion: '認證照護夥伴 王小敏 (夥伴模式)',
      coParticipants: ['社區志工隊'],
      notes: '受委託支援長輩日常陪伴與步行防跌看護，定時補充溫開水。預估獲得報酬 NT$ 750。',
      status: 'IN_PROGRESS',
      mode: 'CAREGIVER',
      reward: 750,
      careRequestId: 'cr-001',
      photos: []
    },
    // 🌙 晚上：家庭模式 (帶媽媽去醫院看診)
    {
      id: 'act-today-evening',
      recipientId: 'rec-001',
      title: '帶媽媽去醫院心臟科看診 (慢性病追蹤與慢籤領藥)',
      category: '醫療・陪同就醫',
      timeSlot: 'EVENING',
      scheduledDate: '2026-09-12',
      scheduledTime: '18:30–20:30',
      location: '台大醫院西址門診部 心臟內科第 32 診',
      leadCompanion: '女兒 王小敏 (家庭模式)',
      coParticipants: [],
      notes: '攜帶健保卡、近期血壓日誌與連續處方箋，夜間外出請為長輩穿戴薄圍巾保暖。',
      status: 'SCHEDULED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: []
    },
    {
      id: 'act-002',
      recipientId: 'rec-001',
      title: '陽台金萱桂花品茗會',
      category: '休閒・品茗',
      scheduledDate: '2026-09-10',
      scheduledTime: '14:30–15:15',
      location: '家中客廳南面陽台',
      leadCompanion: '女兒 王小敏',
      coParticipants: ['兒子 王大偉'],
      notes: '奶奶今天精神好，喝了兩小杯桂花茶。',
      status: 'COMPLETED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: ['https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'],
      completedAt: '2026-09-10 15:20',
      cardId: 'card-001'
    },
    {
      id: 'act-003',
      recipientId: 'rec-002',
      title: '客廳楚河漢界象棋大對決',
      category: '認知・益智',
      scheduledDate: '2026-09-08',
      scheduledTime: '16:00–16:45',
      location: '書房棋盤桌',
      leadCompanion: '兒子 王大偉',
      coParticipants: [],
      notes: '爺爺中盤連環馬連環得手，笑得合不攏嘴。',
      status: 'COMPLETED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: ['https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&auto=format&fit=crop&q=80'],
      completedAt: '2026-09-08 16:50',
      cardId: 'card-002'
    },
    {
      id: 'act-004',
      recipientId: 'rec-004',
      title: '小宇的草地吹泡泡追逐賽',
      category: '幼兒・自然探索',
      scheduledDate: '2026-09-06',
      scheduledTime: '10:00–10:45',
      location: '社區綠光草坪',
      leadCompanion: '媽媽 王小敏',
      coParticipants: ['爸爸'],
      notes: '追著彩色泡泡跑了好多圈，中午胃口大開吃了一整碗飯！',
      status: 'COMPLETED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: ['https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&auto=format&fit=crop&q=80'],
      completedAt: '2026-09-06 10:50',
      cardId: 'card-003'
    },
    {
      id: 'act-005',
      recipientId: 'rec-001',
      title: '台大醫院心臟內科定期回診',
      category: '醫療・陪診',
      scheduledDate: '2026-09-15',
      scheduledTime: '09:00–11:30',
      location: '台大醫院西址門診部 2 樓',
      leadCompanion: '照護夥伴 張雅婷',
      coParticipants: [],
      notes: '攜帶健保卡、慢箋藥單與血壓記錄本。',
      status: 'SCHEDULED',
      mode: 'CAREGIVER',
      careRequestId: 'req-001',
      photos: []
    }
  ],

  // 生活圖鑑活動卡 (Activity Cards)
  activityCards: [
    {
      id: 'card-001',
      activityId: 'act-002',
      recipientId: 'rec-001',
      cardNumber: 'NO. 2026-0910',
      title: '陽台金萱桂花品茗會',
      category: '休閒・品茗',
      dateStr: '2026.09.10',
      season: '秋季',
      themeType: 'FLOWER',
      flowerKey: 'OSMANTHUS',
      coverPhoto: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
      complimentTag: '神采奕奕・甘甜暖心',
      participants: ['王奶奶', '女兒 小敏', '兒子 大偉'],
      notes: '秋意微涼的午後，在陽台泡了王奶奶最心心念念的手工桂花茶，老人家說這味道跟五十年前外婆泡的一模一樣，眼角滿是溫柔的笑意。',
      metrics: '活動時長 45 分鐘・血壓正常 122/78',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-002',
      activityId: 'act-003',
      recipientId: 'rec-002',
      cardNumber: 'NO. 2026-0908',
      title: '客廳楚河漢界象棋大對決',
      category: '認知・益智',
      dateStr: '2026.09.08',
      season: '秋季',
      themeType: 'FLOWER',
      flowerKey: 'GINKGO',
      coverPhoto: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&auto=format&fit=crop&q=80',
      complimentTag: '棋力深厚・寶刀未老',
      participants: ['王爺爺', '兒子 大偉'],
      notes: '大偉本想讓子，結果被爺爺的雙炮連環將死！爺爺得意地說：「年輕人手速快，但老薑終究還是辣的！」書房滿是祖孫歡笑。',
      metrics: '活動時長 40 分鐘・步數 800 步',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-003',
      activityId: 'act-004',
      recipientId: 'rec-004',
      cardNumber: 'NO. 2026-0906',
      title: '小宇的草地吹泡泡追逐賽',
      category: '幼兒・自然探索',
      dateStr: '2026.09.06',
      season: '初秋',
      themeType: 'FLOWER',
      flowerKey: 'DANDELION',
      coverPhoto: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&auto=format&fit=crop&q=80',
      complimentTag: '童真爛漫・元氣滿滿',
      participants: ['小宇 (4歲)', '媽媽 小敏'],
      notes: '小宇今天第一次學會自己吹出巨大七彩泡泡，在陽光草地上踩著小腳步狂奔，高興地大喊自己是會飛的翼龍！',
      metrics: '活動時長 45 分鐘・跑動步數 3,200 步',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-004',
      activityId: 'act-005',
      recipientId: 'rec-001',
      cardNumber: 'NO. 2026-0903',
      title: '王奶奶初秋大安森林步道漫步',
      category: '戶外・散步',
      dateStr: '2026.09.03',
      season: '秋季',
      themeType: 'FLOWER',
      flowerKey: 'DAISY',
      coverPhoto: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80',
      complimentTag: '步履穩健・如沐春風',
      participants: ['王奶奶', '女兒 小敏'],
      notes: '微風徐徐，牽著媽媽的手在生態池畔慢慢走，觀察小松鼠跳躍。媽媽說很久沒曬到這麼舒服的太陽，精神大好！',
      metrics: '活動時長 50 分鐘・步數 2,100 步',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-005',
      activityId: 'act-006',
      recipientId: 'rec-001',
      cardNumber: 'NO. 2026-0828',
      title: '夏末池畔荷香觀魚散心',
      category: '心靈・沉澱',
      dateStr: '2026.08.28',
      season: '夏季',
      themeType: 'FLOWER',
      flowerKey: 'LOTUS',
      coverPhoto: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80',
      complimentTag: '心如止水・怡然自得',
      participants: ['王奶奶', '照護夥伴 張雅婷'],
      notes: '雅婷推著輪椅帶奶奶在涼亭旁看錦鯉翻滾，涼風陣陣伴隨荷香。奶奶說心裡特別平靜，整個人放鬆了許多。',
      metrics: '活動時長 60 分鐘・身心評估 優秀',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-006',
      activityId: 'act-007',
      recipientId: 'rec-001',
      cardNumber: 'NO. 2026-0820',
      title: '晚安薰衣草溫熱足浴芳療',
      category: '健康・放鬆',
      dateStr: '2026.08.20',
      season: '夏季',
      themeType: 'FLOWER',
      flowerKey: 'LAVENDER',
      coverPhoto: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80',
      complimentTag: '身心舒緩・安穩好眠',
      participants: ['王奶奶', '女兒 小敏'],
      notes: '洗完澡後幫媽媽準備了薰衣草足浴包，微熱的水溫讓小腿水腫改善不少，當晚媽媽睡得十分香甜，沒有夜咳。',
      metrics: '活動時長 30 分鐘・睡眠評分 95分',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-007',
      activityId: 'act-008',
      recipientId: 'rec-005',
      cardNumber: 'NO. 2026-0815',
      title: '糖糖水彩向日葵自然寫生',
      category: '幼兒・藝術啟蒙',
      dateStr: '2026.08.15',
      season: '盛夏',
      themeType: 'FLOWER',
      flowerKey: 'SUNFLOWER',
      coverPhoto: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop&q=80',
      complimentTag: '天馬行空・巧奪天工',
      participants: ['糖糖 (6歲)', '媽媽 小敏'],
      notes: '糖糖用大膽鮮黃的水彩畫了一整片向日葵花田，還在太陽旁邊畫了王奶奶牽著她的小手，溫馨無比！',
      metrics: '手作時長 40 分鐘・創作完成 1幅',
      privacy: 'FAMILY_ONLY'
    },
    {
      id: 'card-008',
      activityId: 'act-009',
      recipientId: 'rec-002',
      cardNumber: 'NO. 2026-0810',
      title: '王爺爺書房幽蘭墨香水墨課',
      category: '文藝・陶冶',
      dateStr: '2026.08.10',
      season: '夏季',
      themeType: 'FLOWER',
      flowerKey: 'ORCHID',
      coverPhoto: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
      complimentTag: '筆力遒勁・儒雅風範',
      participants: ['王爺爺', '孫子 小宇'],
      notes: '爺爺握著小宇肉嘟嘟的小手一筆一劃教他勾勒幽蘭葉片，墨香在書房靜靜飄散，文化與親情在筆尖無聲傳承。',
      metrics: '時長 45 分鐘・作品收藏至生活誌',
      privacy: 'FAMILY_ONLY'
    }
  ],

  // 找照護夥伴需求 (Care Requests)
  careRequests: [
    {
      id: 'req-001',
      recipientId: 'rec-001',
      title: '台大醫院心臟科回診陪同與推輪椅',
      careType: '就醫陪診・輪椅移位',
      serviceDate: '2026-09-15',
      timeSlot: '09:00–11:30 (2.5小時)',
      location: '台大醫院西址門診部 2 樓',
      hourlyRate: 450,
      totalBudget: 1125,
      specialNeeds: '長輩步速較慢，需自備輪椅；回診後請拍照醫囑單並傳送至家庭交班。',
      status: 'MATCHED',
      selectedCaregiverId: 'cg-001',
      applicants: [
        {
          caregiverId: 'cg-001',
          name: '張雅婷',
          avatar: '👩‍⚕️',
          badge: '長照居服員專任 / 良民證查驗',
          rating: 4.9,
          serviceCount: 58,
          proposedRate: 450,
          appliedAt: '2026-09-11 10:20',
          message: '您好，我常陪同長輩至台大西址看診，熟悉動線與檢驗室位置，細心有耐心！'
        }
      ]
    },
    {
      id: 'req-002',
      recipientId: 'rec-001',
      title: '週末午後公園散步與輪椅伴走',
      careType: '生活陪伴・戶外散步',
      serviceDate: '2026-09-13',
      timeSlot: '15:00–17:00 (2小時)',
      location: '台北市大安區新生南路長輩住家',
      hourlyRate: 400,
      totalBudget: 800,
      specialNeeds: '女兒當日下午需參加公司緊急培訓，懇請夥伴陪同王奶奶至鄰近公園散步曬太陽。',
      status: 'OPEN',
      selectedCaregiverId: null,
      applicants: [
        {
          caregiverId: 'cg-001',
          name: '張雅婷',
          avatar: '👩‍⚕️',
          badge: '長照居服員專任 / 良民證查驗',
          rating: 4.9,
          serviceCount: 58,
          proposedRate: 400,
          appliedAt: '2026-09-12 08:30',
          message: '時間完全配合！很樂意陪伴王奶奶去公園賞花散步。'
        }
      ]
    }
  ],

  // 照護夥伴 (Caregivers)
  caregivers: [
    {
      id: 'cg-001',
      name: '張雅婷',
      title: '長照專任照護夥伴',
      avatar: '👩‍⚕️',
      badges: ['照顧服務員單一級', '警察良民證認證', '急救認證 CPR+AED'],
      rating: 4.9,
      completedJobs: 58,
      hourlyRateRange: 'NT$ 400 ~ 500',
      serviceArea: '台北市大安區、中正區、信義區',
      bio: '具有 5 年長照據點與居家陪伴經驗，善於傾聽長輩往事，能以流利台語、國語溝通。為人親切溫暖，視長輩如家人。',
      skills: ['就醫陪診', '輪椅上下坡防護', '失智症溫和引導', '日常用藥點核'],
      isTrusted: true
    }
  ],

  // 家庭照護圈成員 (Care Circle)
  careCircle: {
    id: 'circle-001',
    name: '王家幸福照護圈',
    members: [
      {
        userId: 'user-001',
        name: '王小敏',
        role: 'OWNER',
        relation: '女兒 / 媽媽',
        avatar: '👩‍💼',
        phone: '0912-345-678',
        isMe: true
      },
      {
        userId: 'user-002',
        name: '王大偉',
        role: 'MEMBER',
        relation: '兒子 / 舅舅',
        avatar: '👨‍💻',
        phone: '0933-888-999',
        isMe: false
      },
      {
        userId: 'user-003',
        name: '阿宇',
        role: 'VIEWER',
        relation: '外孫 / 大學生',
        avatar: '🧑‍🎓',
        phone: '0955-123-456',
        isMe: false
      }
    ]
  },

  // 每日交班日誌 (Handoff Daily Logs)
  handoffLogs: [
    {
      id: 'ho-001',
      date: '2026-09-12',
      recipientId: 'rec-001',
      recordedBy: '女兒 王小敏',
      recordedAt: '08:45',
      dietNotes: '早餐：燕麥芝麻糊 1 碗 + 溫水 300cc，食慾佳。',
      medicationStatus: '已於 08:30 順利服用晨間降血壓藥物。',
      moodScore: '😄 精神抖擻',
      specialReminders: '今日陽光好，下午已安排森林公園散步；提醒注意長輩右膝貼布更換。'
    },
    {
      id: 'ho-002',
      date: '2026-09-11',
      recipientId: 'rec-001',
      recordedBy: '兒子 王大偉',
      recordedAt: '18:30',
      dietNotes: '午餐：青菜清蒸鱈魚半份，晚餐：雞湯麵線一碗，飲水總計 1,500cc。',
      medicationStatus: '午晚藥物皆如期完成。',
      moodScore: '😌 平靜愉悅',
      specialReminders: '睡前習慣塗抹腳踝甘油保濕乳液。'
    }
  ],

  // 抽卡設定
  drawSettings: {
    interests: ['散步', '公園', '喝茶', '美食', '音樂', '手作'],
    activityTypes: ['戶外', '室內', '休閒', '益智'],
    timeSlot: '今天',
    location: '台北市・大安區',
    dailyReRollCount: 1,
    maxReRolls: 3
  },

  // 操作日誌
  auditLogs: [
    {
      id: 'log-001',
      operator: '王小敏',
      role: '家庭照護管理者',
      action: '建立活動',
      target: '陪王奶奶去大安森林公園散步',
      timestamp: '2026-09-12 09:15'
    },
    {
      id: 'log-002',
      operator: '王小敏',
      role: '家庭照護管理者',
      action: '發布照護需求',
      target: '台大醫院心臟科回診陪同 (媒合中)',
      timestamp: '2026-09-11 09:30'
    }
  ]
};
