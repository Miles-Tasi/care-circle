/**
 * 照護圈 (Care Circle) - 整合相容腳本 (app.bundle.js)
 * 支援雙擊 index.html (file://) 與本機伺服器 (http://localhost:8000) 零 CORS 跨域限制運作
 */

// --- 1. 花語與卡片主題模組 ---
/**
 * 照護圈 (Care Circle) - 花語與卡背主題資料庫 (30 組完整花語典藏版)
 * 符合 PRD 16 ~ 18 章節規範與浮雕勳章美學：
 * 1. 美式復古手繪植物插畫風格 (American Vintage Botanical Style)
 * 2. 完整 30 組固定花朵資料 + 官方權威花語
 * 3. 具備立體浮雕勳章視覺效果 (Bas-Relief Embossed Art)
 * 4. Card Theme 抽象架構 (第一階段 FLOWER，預留 ZODIAC, GALAXY, MRT, LANDMARK)
 */

const FLOWER_THEMES = {
  DAISY: {
    id: 'DAISY',
    name: '雛菊',
    englishName: 'Daisy',
    scientificName: 'Bellis perennis',
    language: '希望・純真・新的開始',
    description: '小巧堅韌的花瓣迎向清晨的第一道陽光，象徵平凡日子裡最純真的陪伴與全新的喜悅。',
    season: '春季・全年',
    icon: '🌼',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="13" stroke-width="2.2" fill="#F6E05E" fill-opacity="0.35"/>
      <path d="M50 37 C52 22, 48 22, 50 12 C52 22, 48 22, 50 37" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M50 63 C52 78, 48 78, 50 88 C52 78, 48 78, 50 63" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M37 50 C22 52, 22 48, 12 50 C22 52, 22 48, 37 50" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M63 50 C78 52, 78 48, 88 50 C78 52, 78 48, 63 50" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M41 41 C30 30, 33 27, 23 23 C27 33, 30 30, 41 41" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M59 59 C70 70, 67 73, 77 77 C73 67, 70 70, 59 59" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M59 41 C70 30, 67 27, 77 23 C73 33, 70 30, 59 41" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M41 59 C30 70, 33 73, 23 77 C27 67, 30 70, 41 59" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="4" stroke-width="1" stroke-dasharray="1 1"/>
    </svg>`,
    matchedCategories: ['散步', '戶外', '踏青', '伸展', '公園']
  },

  SUNFLOWER: {
    id: 'SUNFLOWER',
    name: '向日葵',
    englishName: 'Sunflower',
    scientificName: 'Helianthus annuus',
    language: '光芒・敬愛・永恆的希望',
    description: '永遠昂首追隨太陽的明媚步伐，象徵家庭如陽光般和煦的照拂與長輩爽朗的精神。',
    season: '盛夏',
    icon: '🌻',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="16" stroke-width="2.5" stroke-dasharray="2 2" fill="#D97706" fill-opacity="0.3"/>
      <circle cx="50" cy="50" r="9" stroke-width="1.5" stroke-dasharray="1.5 1.5"/>
      <path d="M50 34 C54 20, 46 20, 50 10 C54 20, 46 20, 50 34" stroke-width="1.8"/>
      <path d="M50 66 C54 80, 46 80, 50 90 C54 80, 46 80, 50 66" stroke-width="1.8"/>
      <path d="M34 50 C20 54, 20 46, 10 50 C20 54, 20 46, 34 50" stroke-width="1.8"/>
      <path d="M66 50 C80 54, 80 46, 90 50 C80 54, 80 46, 66 50" stroke-width="1.8"/>
      <path d="M39 39 C27 27, 24 31, 18 18 C31 24, 27 27, 39 39" stroke-width="1.8"/>
      <path d="M61 61 C73 73, 76 69, 82 82 C69 76, 73 73, 61 61" stroke-width="1.8"/>
      <path d="M61 39 C73 27, 76 31, 82 18 C69 24, 73 27, 61 39" stroke-width="1.8"/>
      <path d="M39 61 C27 73, 24 69, 18 82 C31 76, 27 73, 39 61" stroke-width="1.8"/>
    </svg>`,
    matchedCategories: ['運動', '跑跳', '活力', '戶外陽光', '歡笑']
  },

  GINKGO: {
    id: 'GINKGO',
    name: '銀杏',
    englishName: 'Ginkgo Biloba',
    scientificName: 'Ginkgo biloba L.',
    language: '堅韌・沉著・歲月的沈澱與長壽',
    description: '如摺扇般的金黃葉脈穿越億萬年時光，象徵長輩崇高的人生智慧與歲月沉靜之美。',
    season: '深秋',
    icon: '🍂',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 86 Q50 66 50 56" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 56 C34 50 18 34 28 16 C38 8 48 28 50 34 C52 28 62 8 72 16 C82 34 66 50 50 56 Z" stroke-width="2" fill="#EAB308" fill-opacity="0.25"/>
      <path d="M50 56 L36 24 M50 56 L43 18 M50 56 L50 34 M50 56 L57 18 M50 56 L64 24" stroke-width="1.2" stroke-opacity="0.7"/>
    </svg>`,
    matchedCategories: ['象棋', '下棋', '書法', '認知', '長輩回憶', '棋藝']
  },

  OSMANTHUS: {
    id: 'OSMANTHUS',
    name: '桂花',
    englishName: 'Sweet Osmanthus',
    scientificName: 'Osmanthus fragrans',
    language: '吉祥・幽香・生活的回甘與圓滿',
    description: '小簇金黃暗香浮動，不爭春光卻在秋涼時送來甘甜暖意，象徵親情細水長流的默契。',
    season: '金秋',
    icon: '🌾',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 Q48 55 52 22" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="42" cy="35" r="4.5" stroke-width="1.6" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="50" cy="28" r="4.5" stroke-width="1.6" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="56" cy="36" r="4.5" stroke-width="1.6" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="48" cy="43" r="4.5" stroke-width="1.6" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="58" cy="56" r="4" stroke-width="1.5" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="65" cy="50" r="4" stroke-width="1.5" fill="#F59E0B" fill-opacity="0.4"/>
      <circle cx="68" cy="58" r="4" stroke-width="1.5" fill="#F59E0B" fill-opacity="0.4"/>
      <path d="M50 66 Q28 62 24 50 Q36 46 50 62" stroke-width="1.8" fill="#10B981" fill-opacity="0.2"/>
      <path d="M50 46 Q72 40 76 28 Q64 26 50 42" stroke-width="1.8" fill="#10B981" fill-opacity="0.2"/>
    </svg>`,
    matchedCategories: ['品茗', '喝茶', '烘焙', '料理', '家庭日常', '客廳']
  },

  CAMELLIA: {
    id: 'CAMELLIA',
    name: '山茶花',
    englishName: 'Camellia',
    scientificName: 'Camellia japonica',
    language: '謙遜・深沉之愛・理想之光',
    description: '在萬物斂藏的寒冬靜靜綻放端莊典雅的花容，象徵家庭照護中細緻、無私的默默守候。',
    season: '冬季・初春',
    icon: '🌺',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="6" stroke-width="2" fill="#EF4444" fill-opacity="0.35"/>
      <path d="M44 44 C36 38 36 28 44 28 C52 28 52 38 44 44 Z" stroke-width="1.8"/>
      <path d="M56 44 C64 38 64 28 56 28 C48 28 48 38 56 44 Z" stroke-width="1.8"/>
      <path d="M56 56 C64 62 64 72 56 72 C48 72 48 62 56 56 Z" stroke-width="1.8"/>
      <path d="M44 56 C36 62 36 72 44 72 C52 72 52 62 44 56 Z" stroke-width="1.8"/>
      <path d="M44 50 C36 44 26 44 26 50 C26 56 36 56 44 50 Z" stroke-width="1.8"/>
      <path d="M56 50 C64 44 74 44 74 50 C74 56 64 56 56 50 Z" stroke-width="1.8"/>
      <circle cx="50" cy="50" r="2.5" fill="#F59E0B"/>
    </svg>`,
    matchedCategories: ['溫馨', '撫慰', '血壓量測', '健康照護', '長照']
  },

  LAVENDER: {
    id: 'LAVENDER',
    name: '薰衣草',
    englishName: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    language: '寧靜・守候・心靈的舒緩與沉澱',
    description: '淡紫微風攜帶著草本清香，撫平一整天的疲憊與焦慮，象徵恬淡安心的家庭避風港。',
    season: '初夏',
    icon: '🪻',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 20" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="45" cy="30" rx="3.5" ry="6" transform="rotate(-25 45 30)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="55" cy="30" rx="3.5" ry="6" transform="rotate(25 55 30)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="44" cy="45" rx="4" ry="7" transform="rotate(-25 44 45)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="56" cy="45" rx="4" ry="7" transform="rotate(25 56 45)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="45" cy="60" rx="4" ry="7" transform="rotate(-25 45 60)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="55" cy="60" rx="4" ry="7" transform="rotate(25 55 60)" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.3"/>
      <ellipse cx="50" cy="18" rx="3" ry="5" stroke-width="1.5" fill="#8B5CF6" fill-opacity="0.4"/>
    </svg>`,
    matchedCategories: ['睡眠', '放鬆', '泡腳', '芳療', '平靜', '休息']
  },

  CHERRY_BLOSSOM: {
    id: 'CHERRY_BLOSSOM',
    name: '櫻花',
    englishName: 'Cherry Blossom',
    scientificName: 'Prunus serrulata',
    language: '韶華・熱烈・珍惜生命的美好當下',
    description: '滿樹繁花如雲似霞，在最好的春光裡盡情綻放，提醒我們珍惜與至親相處的每一刻光陰。',
    season: '仲春',
    icon: '🌸',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 50 C45 36 32 30 42 20 C48 24 50 36 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 50 C55 36 68 30 58 20 C52 24 50 36 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 50 C64 45 70 32 80 42 C76 48 64 50 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 50 C64 55 70 68 80 58 C76 52 64 50 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 50 C55 64 48 78 40 72 C42 64 48 56 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 50 C36 64 22 58 28 50 C36 50 44 50 50 50" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <circle cx="50" cy="50" r="4" stroke-width="1.5" fill="#FB7185"/>
    </svg>`,
    matchedCategories: ['賞花', '春天', '拍照', '出遊', '紀念']
  },

  DANDELION: {
    id: 'DANDELION',
    name: '蒲公英',
    englishName: 'Dandelion',
    scientificName: 'Taraxacum officinale',
    language: '勇敢探索・童真無邪・停不了的愛',
    description: '輕輕吹散的小傘隨風飛揚，乘載著童年純淨的夢想與種子隨遇而安的生命韌性。',
    season: '春季・夏季',
    icon: '🌱',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 50" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="48" r="4" fill="#C59B27"/>
      <line x1="50" y1="48" x2="28" y2="26" stroke-width="1.5"/>
      <line x1="50" y1="48" x2="72" y2="26" stroke-width="1.5"/>
      <line x1="50" y1="48" x2="50" y2="16" stroke-width="1.5"/>
      <line x1="50" y1="48" x2="18" y2="48" stroke-width="1.5"/>
      <line x1="50" y1="48" x2="82" y2="48" stroke-width="1.5"/>
      <line x1="50" y1="48" x2="30" y2="65" stroke-width="1.2"/>
      <line x1="50" y1="48" x2="70" y2="65" stroke-width="1.2"/>
      <circle cx="28" cy="26" r="2.5" stroke-width="1"/>
      <circle cx="72" cy="26" r="2.5" stroke-width="1"/>
      <circle cx="50" cy="16" r="2.5" stroke-width="1"/>
      <circle cx="18" cy="48" r="2.5" stroke-width="1"/>
      <circle cx="82" cy="48" r="2.5" stroke-width="1"/>
    </svg>`,
    matchedCategories: ['幼兒', '繪本', '草地', '童年趣味', '自然尋寶', '溜滑梯']
  },

  JASMINE: {
    id: 'JASMINE',
    name: '茉莉花',
    englishName: 'Jasmine',
    scientificName: 'Jasminum sambac',
    language: '純潔・質樸・親切怡人的清芬',
    description: '素白小花淡雅幽遠，如家人親切而溫暖的叮嚀，在炎炎夏夜裡送上一抹沁人心脾的清涼。',
    season: '夏秋',
    icon: '🤍',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="5" stroke-width="1.8" fill="#E2E8F0"/>
      <path d="M50 45 C48 30, 52 30, 50 18 C48 30, 52 30, 50 45" stroke-width="1.8"/>
      <path d="M50 55 C48 70, 52 70, 50 82 C48 70, 52 70, 50 55" stroke-width="1.8"/>
      <path d="M45 50 C30 48, 30 52, 18 50 C30 48, 30 52, 45 50" stroke-width="1.8"/>
      <path d="M55 50 C70 48, 70 52, 82 50 C70 48, 70 52, 55 50" stroke-width="1.8"/>
      <path d="M46 46 C36 34, 40 30, 26 26 C30 40, 34 36, 46 46" stroke-width="1.5"/>
      <path d="M54 54 C64 66, 60 70, 74 74 C70 60, 66 64, 54 54" stroke-width="1.5"/>
    </svg>`,
    matchedCategories: ['清香', '茶點', '寧靜', '懷舊故事']
  },

  ROSE: {
    id: 'ROSE',
    name: '玫瑰',
    englishName: 'Rose',
    scientificName: 'Rosa rugosa',
    language: '愛意・真摯・溫馨的家庭之愛',
    description: '重重疊疊的花瓣裹著深沉熾熱的情意，無論歲月如何流轉，家人彼此相惜的愛永不凋褪。',
    season: '全年',
    icon: '🌹',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 46 A4 4 0 0 1 54 50 A4 4 0 0 1 50 54 A4 4 0 0 1 46 50 A4 4 0 0 1 50 46" stroke-width="1.8" fill="#FDA4AF" fill-opacity="0.4"/>
      <path d="M47 47 C42 42, 58 38, 56 46 C54 54, 44 54, 42 46" stroke-width="1.8"/>
      <path d="M40 42 C34 32, 66 32, 60 42 C56 58, 36 60, 38 46" stroke-width="1.8"/>
      <path d="M36 36 C26 24, 74 24, 64 36 C60 68, 30 70, 32 46" stroke-width="1.8"/>
      <path d="M50 72 Q48 85 52 92" stroke-width="2" stroke-linecap="round"/>
      <path d="M49 80 Q38 78 35 72 Q45 72 49 79" stroke-width="1.5" fill="#10B981" fill-opacity="0.2"/>
    </svg>`,
    matchedCategories: ['親情', '溫馨', '節日慶祝', '紀念日', '感謝']
  },

  TULIP: {
    id: 'TULIP',
    name: '鬱金香',
    englishName: 'Tulip',
    scientificName: 'Tulipa gesneriana',
    language: '典雅・關懷・體貼與溫暖祝福',
    description: '亭亭玉立的杯狀花姿端莊高雅，如體貼入微的關愛，溫柔呵護著家庭成員的心靈。',
    season: '春季',
    icon: '🌷',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 88 L50 50" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M50 52 C35 50 25 32 35 20 C42 32 48 42 50 52 Z" stroke-width="2" fill="#F87171" fill-opacity="0.3"/>
      <path d="M50 52 C65 50 75 32 65 20 C58 32 52 42 50 52 Z" stroke-width="2" fill="#F87171" fill-opacity="0.3"/>
      <path d="M40 24 C46 16 54 16 60 24 C56 36 44 36 40 24 Z" stroke-width="1.8" fill="#FCA5A5" fill-opacity="0.5"/>
      <path d="M50 75 Q32 72 26 58 Q40 64 50 70" stroke-width="1.8" fill="#10B981" fill-opacity="0.2"/>
    </svg>`,
    matchedCategories: ['賞花', '溫暖', '陪伴', '陽光漫步']
  },

  CARNATION: {
    id: 'CARNATION',
    name: '康乃馨',
    englishName: 'Carnation',
    scientificName: 'Dianthus caryophyllus',
    language: '感恩・慈愛・母愛與深情守護',
    description: '細碎波浪般的花瓣層層簇擁，傾注著對父母長輩無盡的感激與溫暖厚實的寸草春暉。',
    season: '春夏',
    icon: '💐',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 88 L50 55" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M44 58 C42 48, 58 48, 56 58 Z" stroke-width="2" fill="#10B981" fill-opacity="0.4"/>
      <path d="M30 46 Q35 40 40 44 Q45 38 50 42 Q55 36 60 42 Q65 38 70 46 C66 54 34 54 30 46 Z" stroke-width="1.8" fill="#FB7185" fill-opacity="0.35"/>
      <path d="M34 38 Q40 30 46 34 Q50 28 54 34 Q60 30 66 38 C62 46 38 46 34 38 Z" stroke-width="1.8" fill="#F43F5E" fill-opacity="0.25"/>
      <path d="M40 30 Q45 22 50 26 Q55 22 60 30 Z" stroke-width="1.8" fill="#FDA4AF" fill-opacity="0.5"/>
    </svg>`,
    matchedCategories: ['感恩', '孝親', '母親節', '日常談心', '回饋']
  },

  HYDRANGEA: {
    id: 'HYDRANGEA',
    name: '繡球花',
    englishName: 'Hydrangea',
    scientificName: 'Hydrangea macrophylla',
    language: '團聚・圓滿・希望與包容',
    description: '百千小花緊緊簇擁成錦繡球形，象徵全家人緊扣心手、同舟共濟的和諧與美滿。',
    season: '初夏',
    icon: '💠',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="28" stroke-width="1.5" stroke-dasharray="3 3" fill="#60A5FA" fill-opacity="0.15"/>
      <!-- 十字小花團 -->
      <g transform="translate(50, 36) scale(0.7)">
        <path d="M0 -10 L0 10 M-10 0 L10 0" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="3" fill="#93C5FD"/>
      </g>
      <g transform="translate(36, 48) scale(0.7)">
        <path d="M0 -10 L0 10 M-10 0 L10 0" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="3" fill="#93C5FD"/>
      </g>
      <g transform="translate(64, 48) scale(0.7)">
        <path d="M0 -10 L0 10 M-10 0 L10 0" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="3" fill="#93C5FD"/>
      </g>
      <g transform="translate(50, 60) scale(0.7)">
        <path d="M0 -10 L0 10 M-10 0 L10 0" stroke-width="3" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="3" fill="#93C5FD"/>
      </g>
      <path d="M50 78 L50 90" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    matchedCategories: ['團聚', '聚餐', '家族旅行', '合照', '包容']
  },

  LOTUS: {
    id: 'LOTUS',
    name: '荷花',
    englishName: 'Lotus',
    scientificName: 'Nelumbo nucifera',
    language: '清心・高潔・平靜安祥的心境',
    description: '出淤泥而不染，清漣濯足而幽香四溢，映照著長輩澄澈無染的晚年修養與寧靜心境。',
    season: '盛夏',
    icon: '🪷',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 68 C38 65 24 50 36 34 C44 45 48 58 50 68 Z" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 68 C62 65 76 50 64 34 C56 45 52 58 50 68 Z" stroke-width="1.8" fill="#F472B6" fill-opacity="0.25"/>
      <path d="M50 68 C44 55 42 35 50 20 C58 35 56 55 50 68 Z" stroke-width="2" fill="#FB7185" fill-opacity="0.4"/>
      <path d="M22 75 Q50 68 78 75" stroke-width="2" stroke-linecap="round"/>
      <path d="M30 82 Q50 78 70 82" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    matchedCategories: ['冥想', '散心', '公園水塘', '心靈安祥', '園藝']
  },

  NARCISSUS: {
    id: 'NARCISSUS',
    name: '水仙花',
    englishName: 'Narcissus',
    scientificName: 'Narcissus tazetta',
    language: '萬事如意・吉祥・純潔思念',
    description: '翠綠葉叢中托出金盞銀台，清冽香氣報迎新春，象徵長輩生活事事如意、福壽康寧。',
    season: '隆冬・新春',
    icon: '🪴',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 56" stroke-width="2"/>
      <circle cx="50" cy="46" r="8" stroke-width="2" fill="#FBBF24" fill-opacity="0.5"/>
      <path d="M50 38 C48 24 52 24 50 16 C48 24 52 24 50 38" stroke-width="1.8"/>
      <path d="M50 54 C48 68 52 68 50 76 C48 68 52 68 50 54" stroke-width="1.8"/>
      <path d="M42 46 C28 44 28 48 20 46 C28 44 28 48 42 46" stroke-width="1.8"/>
      <path d="M58 46 C72 44 72 48 80 46 C72 44 72 48 58 46" stroke-width="1.8"/>
      <path d="M44 40 C32 30 35 26 26 22 C30 35 34 32 44 40" stroke-width="1.8"/>
      <path d="M56 52 C68 62 65 66 74 70 C70 57 66 60 56 52" stroke-width="1.8"/>
    </svg>`,
    matchedCategories: ['過年', '迎新', '吉祥', '喜慶', '家庭團圓']
  },

  ORCHID: {
    id: 'ORCHID',
    name: '蘭花',
    englishName: 'Orchid',
    scientificName: 'Orchidaceae',
    language: '高雅・君子之德・幽谷長香',
    description: '幽居深谷不為人知而自芳，象徵堅貞高潔的長者德行與經得起歲月考驗的品格。',
    season: '全年',
    icon: '🌿',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 50 C38 40 32 20 46 16 C50 26 50 40 50 50 Z" stroke-width="1.8" fill="#C084FC" fill-opacity="0.3"/>
      <path d="M50 50 C62 40 68 20 54 16 C50 26 50 40 50 50 Z" stroke-width="1.8" fill="#C084FC" fill-opacity="0.3"/>
      <path d="M50 50 C34 56 20 66 26 78 C36 72 44 60 50 50 Z" stroke-width="1.8" fill="#E879F9" fill-opacity="0.25"/>
      <path d="M50 50 C66 56 80 66 74 78 C64 72 56 60 50 50 Z" stroke-width="1.8" fill="#E879F9" fill-opacity="0.25"/>
      <path d="M46 52 C46 64 54 64 54 52 Z" stroke-width="2" fill="#F59E0B" fill-opacity="0.6"/>
      <circle cx="50" cy="50" r="3" fill="#D97706"/>
    </svg>`,
    matchedCategories: ['國畫', '書法', '園藝修剪', '文藝陶冶', '品味']
  },

  CHRYSANTHEMUM: {
    id: 'CHRYSANTHEMUM',
    name: '菊花',
    englishName: 'Chrysanthemum',
    scientificName: 'Chrysanthemum morifolium',
    language: '延年益壽・清雅高潔・恬淡長壽',
    description: '霜落千林而此花獨盛，歷經風霜愈顯風骨，自古為長輩延年益壽與豁達養生之象徵。',
    season: '深秋',
    icon: '🏵️',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="8" stroke-width="2" fill="#FBBF24" fill-opacity="0.4"/>
      <!-- 細長多層放射花瓣 -->
      <path d="M50 42 C48 22 52 22 50 12" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M50 58 C48 78 52 78 50 88" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M42 50 C22 48 22 52 12 50" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M58 50 C78 48 78 52 88 50" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M44 44 C30 30 34 26 24 20" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M56 56 C70 70 66 74 76 80" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M56 44 C70 30 66 26 76 20" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M44 56 C30 70 34 74 24 80" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    matchedCategories: ['長壽', '重陽', '養生茶', '散步賞秋', '健行']
  },

  PEONY: {
    id: 'PEONY',
    name: '牡丹',
    englishName: 'Peony',
    scientificName: 'Paeonia suffruticosa',
    language: '富貴吉祥・圓滿繁盛・端莊大器',
    description: '百花之王冠絕群芳，儀態萬千、雍容華貴，代表家族繁榮昌盛與晚年福澤深厚。',
    season: '暮春',
    icon: '👑',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <circle cx="50" cy="50" r="10" stroke-width="2" fill="#F43F5E" fill-opacity="0.4"/>
      <path d="M40 45 C30 35 45 25 55 30 C65 25 80 35 70 48 C78 60 62 72 50 70 C38 72 22 60 30 48 Z" stroke-width="1.8" fill="#FB7185" fill-opacity="0.2"/>
      <path d="M45 42 C38 36 50 30 55 34 C60 30 72 36 65 44 C70 52 58 60 50 58 C42 60 30 52 35 44 Z" stroke-width="1.8" fill="#FDA4AF" fill-opacity="0.3"/>
      <circle cx="50" cy="50" r="4" fill="#F59E0B"/>
    </svg>`,
    matchedCategories: ['喜慶', '大家庭', '聚會', '壽宴', '吉祥如意']
  },

  LILY: {
    id: 'LILY',
    name: '百合',
    englishName: 'Lily',
    scientificName: 'Lilium brownii',
    language: '純潔莊嚴・百年好合・心想事成',
    description: '潔白喇叭花姿端莊聖潔，蘊含著家庭和睦、萬事順遂與心意相通的美好祝願。',
    season: '初夏',
    icon: '🪽',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 54 C40 38 28 26 40 16 C48 24 50 38 50 54" stroke-width="2" fill="#F8FAFC" fill-opacity="0.3"/>
      <path d="M50 54 C60 38 72 26 60 16 C52 24 50 38 50 54" stroke-width="2" fill="#F8FAFC" fill-opacity="0.3"/>
      <path d="M50 54 C34 58 18 64 24 76 C36 74 46 64 50 54" stroke-width="2" fill="#F8FAFC" fill-opacity="0.3"/>
      <path d="M50 54 C66 58 82 64 76 76 C64 74 54 64 50 54" stroke-width="2" fill="#F8FAFC" fill-opacity="0.3"/>
      <line x1="50" y1="54" x2="50" y2="90" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="50" cy="30" r="2.5" fill="#D97706"/>
    </svg>`,
    matchedCategories: ['和睦', '平靜', '純潔', '溫馨對談']
  },

  LILY_OF_THE_VALLEY: {
    id: 'LILY_OF_THE_VALLEY',
    name: '鈴蘭',
    englishName: 'Lily of the Valley',
    scientificName: 'Convallaria majalis',
    language: '幸福歸來・純潔・純真的祝福',
    description: '弓形花莖上垂掛著串串白色小風鈴，風吹響幸福的旋律，象徵平安回到身邊的喜悅。',
    season: '暮春',
    icon: '🔔',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M40 90 Q38 45 68 20" stroke-width="2.2" stroke-linecap="round"/>
      <!-- 下垂小鈴鐺 -->
      <path d="M58 26 C52 26 50 34 54 36 C58 36 60 32 58 26" stroke-width="1.8" fill="#F1F5F9" fill-opacity="0.5"/>
      <path d="M50 38 C44 38 42 46 46 48 C50 48 52 44 50 38" stroke-width="1.8" fill="#F1F5F9" fill-opacity="0.5"/>
      <path d="M44 52 C38 52 36 60 40 62 C44 62 46 58 44 52" stroke-width="1.8" fill="#F1F5F9" fill-opacity="0.5"/>
      <path d="M40 90 Q65 75 75 50 Q55 60 40 90" stroke-width="1.8" fill="#10B981" fill-opacity="0.2"/>
    </svg>`,
    matchedCategories: ['幸福', '康復', '出院慶祝', '祝福', '孫兒陪伴']
  },

  GARDENIA: {
    id: 'GARDENIA',
    name: '梔子花',
    englishName: 'Gardenia',
    scientificName: 'Gardenia jasminoides',
    language: '永恆的約定・喜悅・守候一生的承諾',
    description: '素雅白花散發醇厚醉人的甜香，綠葉常青不謝，象徵家庭長輩一生相濡以沫的真情約定。',
    season: '初夏',
    icon: '🕊️',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 48 A3 3 0 0 1 53 51 A3 3 0 0 1 50 54 A3 3 0 0 1 47 51 A3 3 0 0 1 50 48" stroke-width="1.8"/>
      <path d="M46 44 C42 36 58 34 56 44" stroke-width="1.8"/>
      <path d="M40 40 C32 28 68 28 60 40" stroke-width="1.8"/>
      <path d="M34 36 C24 20 76 20 66 36" stroke-width="1.8"/>
      <path d="M50 68 L50 88" stroke-width="2"/>
      <path d="M48 76 Q30 72 26 62 Q38 60 48 72" stroke-width="1.8" fill="#10B981" fill-opacity="0.25"/>
    </svg>`,
    matchedCategories: ['回憶', '老照片', '舊時光', '夫妻情深', '花園']
  },

  MORNING_GLORY: {
    id: 'MORNING_GLORY',
    name: '牽牛花',
    englishName: 'Morning Glory',
    scientificName: 'Ipomoea nil',
    language: '朝氣蓬勃・堅持不懈・晨光的希望',
    description: '伴隨清晨第一縷微光攀援而上，喇叭花向陽綻放，展現滿滿的生命朝氣與踏實邁進。',
    season: '夏季',
    icon: '🌅',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <ellipse cx="50" cy="38" rx="26" ry="16" stroke-width="2" fill="#818CF8" fill-opacity="0.3"/>
      <path d="M26 38 Q50 60 50 82" stroke-width="1.8"/>
      <path d="M74 38 Q50 60 50 82" stroke-width="1.8"/>
      <circle cx="50" cy="38" r="6" stroke-width="1.5" fill="#FEF08A"/>
      <!-- 藤蔓卷鬚 -->
      <path d="M50 82 Q56 88 64 86 Q72 82 70 76" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,
    matchedCategories: ['晨間散步', '晨操', '早起好習慣', '元氣運動']
  },

  WISTERIA: {
    id: 'WISTERIA',
    name: '紫藤',
    englishName: 'Wisteria',
    scientificName: 'Wisteria sinensis',
    language: '依戀・深情・溫柔的家庭守護',
    description: '紫雲如瀑般垂懸於長廊花架下，交織著深厚的親情依託與歲月沈澱的溫柔眷戀。',
    season: '暮春',
    icon: '🍇',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M20 20 Q50 25 80 20" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 下垂紫藤小花簇串 -->
      <circle cx="50" cy="30" r="4.5" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="44" cy="40" r="4" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="56" cy="40" r="4" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="46" cy="50" r="3.8" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="54" cy="50" r="3.8" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="50" cy="60" r="3.5" stroke-width="1.5" fill="#A855F7" fill-opacity="0.4"/>
      <circle cx="50" cy="70" r="3" stroke-width="1.5" fill="#C084FC" fill-opacity="0.5"/>
      <circle cx="50" cy="78" r="2.5" stroke-width="1.5" fill="#C084FC" fill-opacity="0.5"/>
    </svg>`,
    matchedCategories: ['涼亭談天', '長廊散步', '家族聚會', '溫柔守護']
  },

  ROSEMARY: {
    id: 'ROSEMARY',
    name: '迷迭香',
    englishName: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    language: '永恆記憶・提神喚醒・珍貴的回憶',
    description: '針狀綠葉輕輕揉搓即散發醒腦草本香，自古為記憶之草，守護著長輩珍藏一生的美好歲月。',
    season: '全年',
    icon: '🌲',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 20" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="50" y1="35" x2="32" y2="28" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="35" x2="68" y2="28" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="30" y2="44" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="70" y2="44" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="65" x2="32" y2="60" stroke-width="2" stroke-linecap="round"/>
      <line x1="50" y1="65" x2="68" y2="60" stroke-width="2" stroke-linecap="round"/>
      <!-- 淡紫小花 -->
      <circle cx="34" cy="30" r="3" stroke-width="1.2" fill="#93C5FD"/>
      <circle cx="66" cy="46" r="3" stroke-width="1.2" fill="#93C5FD"/>
    </svg>`,
    matchedCategories: ['記憶訓練', '芳香精油', '認知益智', '烹飪調味']
  },

  IRIS: {
    id: 'IRIS',
    name: '鳶尾花',
    englishName: 'Iris',
    scientificName: 'Iris tectorum',
    language: '信任・希望・吉祥與勇氣',
    description: '似藍紫彩蝶飛舞於春風之中，帶來春日好消息，象徵人與人之間無可動搖的信賴與守護。',
    season: '春末',
    icon: '🦋',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 50 C44 38 46 22 50 14 C54 22 56 38 50 50 Z" stroke-width="2" fill="#6366F1" fill-opacity="0.3"/>
      <path d="M50 50 C38 52 22 56 20 68 C32 68 44 60 50 50 Z" stroke-width="1.8" fill="#818CF8" fill-opacity="0.25"/>
      <path d="M50 50 C62 52 78 56 80 68 C68 68 56 60 50 50 Z" stroke-width="1.8" fill="#818CF8" fill-opacity="0.25"/>
      <path d="M50 50 L50 88" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="3" fill="#FBBF24"/>
    </svg>`,
    matchedCategories: ['希望', '信心', '步態訓練', '自信生活']
  },

  WINTER_JASMINE: {
    id: 'WINTER_JASMINE',
    name: '迎春花',
    englishName: 'Winter Jasmine',
    scientificName: 'Jasminum nudiflorum',
    language: '相映成趣・報春・生命的活力',
    description: '在冰雪尚未消融時率先綻放明黃花瓣，向大地宣告春回人間，帶給生命無窮的朝氣。',
    season: '早春',
    icon: '💛',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M30 85 Q45 50 75 25" stroke-width="2" stroke-linecap="round"/>
      <circle cx="48" cy="48" r="4.5" stroke-width="1.8" fill="#FBBF24" fill-opacity="0.6"/>
      <circle cx="65" cy="34" r="4.5" stroke-width="1.8" fill="#FBBF24" fill-opacity="0.6"/>
      <circle cx="36" cy="68" r="4.5" stroke-width="1.8" fill="#FBBF24" fill-opacity="0.6"/>
      <path d="M48 43 L48 38 M53 48 L58 48 M48 53 L48 58 M43 48 L38 48" stroke-width="1.5"/>
    </svg>`,
    matchedCategories: ['踏青', '初春', '早晨運動', '活力煥發']
  },

  BALLOON_FLOWER: {
    id: 'BALLOON_FLOWER',
    name: '桔梗',
    englishName: 'Balloon Flower',
    scientificName: 'Platycodon grandiflorus',
    language: '永恆不變的愛・誠實・溫暖長伴',
    description: '含苞時若飽滿的青藍小氣球，盛開時為優美五角星，代表一生忠實不渝的深切陪伴。',
    season: '夏秋',
    icon: '🔮',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <!-- 五角星花冠 -->
      <polygon points="50,18 58,38 78,38 62,50 68,70 50,58 32,70 38,50 22,38 42,38" stroke-width="2" fill="#6366F1" fill-opacity="0.25"/>
      <circle cx="50" cy="46" r="6" stroke-width="1.5" fill="#C7D2FE"/>
      <line x1="50" y1="62" x2="50" y2="88" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    matchedCategories: ['長久陪伴', '誠摯守候', '安心生活', '家人深情']
  },

  MAPLE: {
    id: 'MAPLE',
    name: '楓葉',
    englishName: 'Maple Leaf',
    scientificName: 'Acer palmatum',
    language: '歲月沈澱・溫暖思念・成熟與豐盛',
    description: '掌狀紅葉飽飲秋霜更顯深紅燦爛，象徵長輩走過大半生後沈澱出的成熟智慧與晚年豐盛。',
    season: '深秋',
    icon: '🍁',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 88 L50 62" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 62 L50 20 L44 32 L34 26 L38 38 L24 40 L34 50 L28 58 L42 56 L50 62 Z" stroke-width="1.8" fill="#DC2626" fill-opacity="0.25"/>
      <path d="M50 62 L50 20 L56 32 L66 26 L62 38 L76 40 L66 50 L72 58 L58 56 L50 62 Z" stroke-width="1.8" fill="#DC2626" fill-opacity="0.25"/>
      <line x1="50" y1="62" x2="36" y2="38" stroke-width="1.2" stroke-opacity="0.7"/>
      <line x1="50" y1="62" x2="64" y2="38" stroke-width="1.2" stroke-opacity="0.7"/>
    </svg>`,
    matchedCategories: ['散步賞楓', '金秋風情', '老友敘舊', '成熟智慧']
  },

  MINT: {
    id: 'MINT',
    name: '薄荷',
    englishName: 'Mint',
    scientificName: 'Mentha spicata',
    language: '清新愉悅・美德・重獲生機',
    description: '清涼氣息令人精神一振，頑強的生命力隨處生長，象徵照護生活中重煥神采的喜悅。',
    season: '全年',
    icon: '🍃',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 25" stroke-width="2.2" stroke-linecap="round"/>
      <!-- 對生鋸齒葉片 -->
      <path d="M50 40 Q25 35 22 24 Q35 20 50 36" stroke-width="1.8" fill="#10B981" fill-opacity="0.3"/>
      <path d="M50 40 Q75 35 78 24 Q65 20 50 36" stroke-width="1.8" fill="#10B981" fill-opacity="0.3"/>
      <path d="M50 60 Q20 55 18 42 Q32 38 50 56" stroke-width="1.8" fill="#10B981" fill-opacity="0.3"/>
      <path d="M50 60 Q80 55 82 42 Q68 38 50 56" stroke-width="1.8" fill="#10B981" fill-opacity="0.3"/>
      <ellipse cx="50" cy="20" rx="6" ry="8" stroke-width="1.8" fill="#10B981" fill-opacity="0.35"/>
    </svg>`,
    matchedCategories: ['清爽', '伸展操', '早晨醒腦', '園藝香草', '健康飲水']
  },

  BABYS_BREATH: {
    id: 'BABYS_BREATH',
    name: '滿天星',
    englishName: "Baby's Breath",
    scientificName: 'Gypsophila paniculata',
    language: '守護・思念・平凡中的溫暖陪伴',
    description: '蓬鬆如薄霧般的無數素白星斗，甘當配角默默襯托，正如照護者恆久無聲的體貼與守候。',
    season: '全年',
    icon: '✨',
    symbolSvg: `<svg viewBox="0 0 100 100" class="embossed-svg-art stroke-current fill-none">
      <path d="M50 90 L50 65 L35 45 M50 65 L65 45 M35 45 L25 30 M35 45 L45 30 M65 45 L55 30 M65 45 L75 30" stroke-width="1.6" stroke-linecap="round"/>
      <!-- 細小白色繁星點點 -->
      <circle cx="25" cy="28" r="3.2" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="45" cy="28" r="3.2" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="55" cy="28" r="3.2" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="75" cy="28" r="3.2" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="50" cy="18" r="3.5" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="34" cy="16" r="3" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
      <circle cx="66" cy="16" r="3" stroke-width="1.2" fill="#F8FAFC" fill-opacity="0.7"/>
    </svg>`,
    matchedCategories: ['守護', '細心照料', '無聲陪伴', '關懷日誌', '日常點滴']
  }
};

/**
 * 智慧花語配對解析引擎
 * 依據活動分類 (Category) 與備註/標題 (Notes/Title) 智慧推薦最適配之花卉
 */
function getFlowerForActivity(category = '', notes = '') {
  const allFlowers = Object.values(FLOWER_THEMES);
  const text = (category + ' ' + notes).toLowerCase();
  
  for (const flower of allFlowers) {
    if (flower.matchedCategories && flower.matchedCategories.some(tag => text.includes(tag.toLowerCase()))) {
      return flower;
    }
  }
  // 預設花卉 (若皆未命中)
  return FLOWER_THEMES.DAISY;
}

/**
 * 卡片主題策略集 (Card Theme Strategy)
 * 符合 PRD 架構：第一階段實作 FLOWER (花語)，預留未來擴充 ZODIAC, LANDMARK, GALAXY
 */
const CARD_THEMES = {
  FLOWER: {
    id: 'FLOWER',
    name: '美式復古花語圖鑑 (Flower Almanac)',
    badge: '🌸 30 款植物浮雕徽章',
    resolver: getFlowerForActivity
  },
  ZODIAC: {
    id: 'ZODIAC',
    name: '星象星語 (Zodiac)',
    badge: '♈ 未來擴充',
    resolver: () => ({ id: 'STAR', name: '守護星', language: '星光引路・願望成真' })
  },
  LANDMARK: {
    id: 'LANDMARK',
    name: '城市地標 (City & MRT)',
    badge: '🏛️ 未來擴充',
    resolver: () => ({ id: 'TAIPEI_101', name: '都會地標', language: '繁華記憶・步履常新' })
  }
};


// --- 2. 初始種子資料模組 ---
/**
 * 照護圈 (Care Circle) - 預設示範種子資料
 * 涵蓋長輩照護圈與可擴展的幼兒照護圈、活動池、抽卡推薦、多重身分與歷史活動卡
 */

const INITIAL_DATA = {
  // 登入者基本狀態
  currentUser: {
    id: 'user-001',
    name: '王小敏',
    email: 'min.wang@carecircle.tw',
    avatar: '👩‍💼',
    activeRole: 'FAMILY', // 'FAMILY' | 'CAREGIVER'
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
    {
      id: 'act-001',
      recipientId: 'rec-001',
      title: '陪王奶奶去大安森林公園散步',
      category: '戶外・散步',
      scheduledDate: '2026-09-12',
      scheduledTime: '15:00–16:00',
      location: '大安森林公園生態池',
      leadCompanion: '女兒 王小敏',
      coParticipants: ['孫子 阿宇'],
      notes: '穿著防滑布鞋，備薄圍巾防風。',
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


// --- 3. 核心業務邏輯與狀態機 ---
/**
 * 照護圈 (Care Circle) - 核心業務邏輯與狀態控制器
 * 實踐 PRD 全部 48 項規格與長輩/幼兒雙照護圈擴展架構
 */


// ============================================================================
// 0. 原生音效合成 (Web Audio API) 與 Canvas 慶祝金粉粒子系統 (Zero Install)
// ============================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  // 卡片洗牌與抽起沙沙聲 (Card slide & shuffle)
  playCardShuffle() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.22);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.22);
      
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, this.ctx.currentTime + 0.22);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {}
  }
  // 揭曉時的清脆清雅金光和弦音 (Celebratory arpeggio chime: C5 -> E5 -> G5 -> C6)
  playRevealChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.55);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.55);
      });
    } catch (e) {}
  }
}

class ConfettiParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas ? canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
  }
  burst() {
    if (!this.canvas || !this.ctx) return;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.particles = [];
    const colors = ['#F59E0B', '#D97736', '#EAB308', '#4A7C59', '#FDE68A', '#FFFFFF'];
    const count = 45;
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 - 20;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
      const speed = Math.random() * 7 + 3;
      this.particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 0.95,
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 10
      });
    }
    if (this.animId) cancelAnimationFrame(this.animId);
    this.render();
  }
  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let activeCount = 0;

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // 輕微重力
      p.vx *= 0.98;
      p.alpha *= p.life;
      p.rotation += p.vr;

      if (p.alpha > 0.02) {
        activeCount++;
        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }
    });

    if (activeCount > 0) {
      this.animId = requestAnimationFrame(() => this.render());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ============================================================================
// 1. 狀態管理 (State Management with LocalStorage)
// ============================================================================
const STORAGE_KEY = 'CARE_CIRCLE_STATE_V3';

class Store {
  constructor() {
    this.state = this.load();
    this.listeners = [];
  }

  load() {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {
      console.warn('載入快取失敗，重設為預設種子資料', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('儲存快取失敗', e);
    }
    this.notify();
  }

  reset() {
    this.state = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.save();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  // 取得當前選定照護對象
  getActiveRecipient() {
    const defaultRec = this.state.recipients[0];
    const rec = this.state.recipients.find(r => r.id === (this.state.activeRecipientId || 'rec-001'));
    return rec || defaultRec;
  }

  // 寫入審計日誌
  logAudit(action, target) {
    const newLog = {
      id: 'log-' + Date.now(),
      operator: this.state.currentUser.name,
      role: this.state.currentUser.activeRole === 'FAMILY' ? '家庭照護者' : '照護夥伴',
      action,
      target,
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' ')
    };
    this.state.auditLogs.unshift(newLog);
    if (this.state.auditLogs.length > 30) this.state.auditLogs.pop();
  }
}

const store = new Store();

// ============================================================================
// 2. UI 渲染與事件綁定主程式
// ============================================================================
class CareCircleApp {
  constructor() {
    this.currentTab = 'tab-home';
    this.currentSubTab = 'cards'; // 'cards' | 'memorybook'
    this.currentDrawnActivity = null; // 當前抽中的活動
    this.selectedActivityForAccompany = null; // 準備選擇誰陪的活動
    this.cardModalFlipped = false;
    this.soundFX = new SoundFX();
    this.confetti = null;

    this.initElements();
    this.bindEvents();
    this.renderAll();

    // 監聽 Store 變動
    store.subscribe(() => {
      this.renderAll();
    });
  }

  initElements() {
    // 頂部
    this.headerAvatar = document.getElementById('header-recipient-avatar');
    this.headerName = document.getElementById('header-recipient-name');
    this.headerTypeBadge = document.getElementById('header-recipient-type-badge');
    this.btnRecipientSelector = document.getElementById('btn-recipient-selector');
    this.btnToggleRole = document.getElementById('btn-toggle-role');
    this.roleBadgeIcon = document.getElementById('role-badge-icon');
    this.roleBadgeText = document.getElementById('role-badge-text');
    this.btnResetDemo = document.getElementById('btn-reset-demo');
    this.btnOpenAi = document.getElementById('btn-open-ai');

    // 導覽 Tab 按鈕
    this.navBtns = document.querySelectorAll('.nav-tab-btn');
    this.tabSections = {
      'tab-home': document.getElementById('tab-home'),
      'tab-activity': document.getElementById('tab-activity'),
      'tab-collection': document.getElementById('tab-collection'),
      'tab-my': document.getElementById('tab-my')
    };

    // 首頁 Elements
    this.homeWeatherInsight = document.getElementById('home-weather-insight');
    this.btnDrawCardTrigger = document.getElementById('btn-draw-card-trigger');
    this.previewActTitle = document.getElementById('preview-act-title');
    this.previewActCategory = document.getElementById('preview-act-category');
    this.previewActReason = document.getElementById('preview-act-reason');
    this.btnPreviewAccept = document.getElementById('btn-preview-accept');
    this.companionFamilyName = document.getElementById('companion-family-name');
    this.btnStartFamilyAccompany = document.getElementById('btn-start-family-accompany');
    this.btnRequestCaregiverOpen = document.getElementById('btn-request-caregiver-open');
    this.homeTodayActivitiesList = document.getElementById('home-today-activities-list');
    this.homeRecentCardsCarousel = document.getElementById('home-recent-cards-carousel');
    this.btnGoToActivities = document.getElementById('btn-go-to-activities');
    this.btnGoToCollection = document.getElementById('btn-go-to-collection');

    // 活動 Tab Elements
    this.activityFilterBtns = document.querySelectorAll('.activity-filter-btn');
    this.activityFullList = document.getElementById('activity-full-list');
    this.btnCreateActivityOpen = document.getElementById('btn-create-activity-open');

    // 圖鑑 Tab Elements
    this.btnSubtabCards = document.getElementById('btn-subtab-cards');
    this.btnSubtabMemorybook = document.getElementById('btn-subtab-memorybook');
    this.viewCollectionGrid = document.getElementById('view-collection-grid');
    this.viewMemoryBook = document.getElementById('view-memory-book');
    this.selectCardRecipient = document.getElementById('select-card-recipient');
    this.selectCardSeason = document.getElementById('select-card-season');

    // 我的 Tab Elements
    this.btnSwitchRoleProminent = document.getElementById('btn-switch-role-prominent');
    this.roleSwitchLabel = document.getElementById('role-switch-label');
    this.caregiverWorkspace = document.getElementById('caregiver-workspace-container');
    this.familyWorkspace = document.getElementById('family-workspace-container');
    this.caregiverRequestsPool = document.getElementById('caregiver-requests-pool');
    this.caregiverActiveServiceBox = document.getElementById('caregiver-active-service-box');
    this.myRecipientsList = document.getElementById('my-recipients-list');
    this.myCircleMembersList = document.getElementById('my-circle-members-list');
    this.myHandoffRecent = document.getElementById('my-handoff-recent');
    this.myAuditLogs = document.getElementById('my-audit-logs');
    this.btnAddRecipientOpen = document.getElementById('btn-add-recipient-open');
    this.btnInviteMember = document.getElementById('btn-invite-member');
    this.btnAddHandoffOpen = document.getElementById('btn-add-handoff-open');
    this.btnApplyCaregiverOpen = document.getElementById('btn-apply-caregiver-open');

    // Modals
    this.modalCardDetail = document.getElementById('modal-card-detail');
    this.cardInnerElement = document.getElementById('card-inner-element');
    this.btnCloseCardModal = document.getElementById('btn-close-card-modal');
    this.btnFlipCardAction = document.getElementById('btn-flip-card-action');
    this.btnShareCardAction = document.getElementById('btn-share-card-action');

    this.modalDrawCard = document.getElementById('modal-draw-card');
    this.btnCloseDrawModal = document.getElementById('btn-close-draw-modal');
    this.btnDrawAccept = document.getElementById('btn-draw-accept');
    this.btnDrawReroll = document.getElementById('btn-draw-reroll');
    this.btnDrawSettingsOpen = document.getElementById('btn-draw-settings-open');
    this.drawRerollBadge = document.getElementById('draw-reroll-badge');
    this.rerollRemainNum = document.getElementById('reroll-remain-num');

    // 抽卡 3D 舞台與動畫元素
    this.drawDeckStage = document.getElementById('draw-deck-stage');
    this.drawResultStage = document.getElementById('draw-result-stage');
    this.interactiveCardDeck = document.getElementById('interactive-card-deck');
    this.deckFanLeft = document.getElementById('deck-fan-left');
    this.deckFanRight = document.getElementById('deck-fan-right');
    this.btnTriggerDraw = document.getElementById('btn-trigger-draw-animation');
    this.drawnCardInner = document.getElementById('drawn-card-inner');
    this.drawnCardFlipBox = document.getElementById('drawn-card-flip-box');
    this.drawConfettiCanvas = document.getElementById('draw-confetti-canvas');
    this.confetti = new ConfettiParticleSystem(this.drawConfettiCanvas);

    this.modalWhoAccompany = document.getElementById('modal-who-accompany');
    this.btnCloseWhoModal = document.getElementById('btn-close-who-modal');
    this.btnChooseFamilyPath = document.getElementById('btn-choose-family-path');
    this.btnChooseCaregiverPath = document.getElementById('btn-choose-caregiver-path');
    this.whoAccompanySubtitle = document.getElementById('who-accompany-subtitle');

    this.modalSelectRecipient = document.getElementById('modal-select-recipient');
    this.btnCloseRecipientModal = document.getElementById('btn-close-recipient-modal');
    this.recipientsSelectionList = document.getElementById('recipients-selection-list');
    this.btnOpenAddRecipientModal = document.getElementById('btn-open-add-recipient-modal');

    // AI Drawer
    this.drawerAi = document.getElementById('drawer-ai-assistant');
    this.btnCloseAi = document.getElementById('btn-close-ai');
    this.aiChatMessages = document.getElementById('ai-chat-messages');
    this.aiInputText = document.getElementById('ai-input-text');
    this.btnAiSend = document.getElementById('btn-ai-send');
    this.aiPromptChips = document.querySelectorAll('.ai-prompt-chip');

    this.toastContainer = document.getElementById('toast-container');
  }

  bindEvents() {
    // 導覽列 Tab 切換
    this.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    // 身分切換 (家庭 / 夥伴)
    const toggleRole = () => {
      const newRole = store.state.currentUser.activeRole === 'FAMILY' ? 'CAREGIVER' : 'FAMILY';
      store.state.currentUser.activeRole = newRole;
      store.logAudit('切換角色身分', `切換為 ${newRole === 'FAMILY' ? '家庭照護模式' : '照護夥伴模式'}`);
      store.save();
      this.showToast(`已切換為「${newRole === 'FAMILY' ? '🏠 家庭照護模式' : '🤝 照護夥伴工作台'}」`);
    };
    this.btnToggleRole.addEventListener('click', toggleRole);
    this.btnSwitchRoleProminent.addEventListener('click', toggleRole);

    // 重設示範資料
    this.btnResetDemo.addEventListener('click', () => {
      if (confirm('確定要將所有照護紀錄、活動卡與對象重置為示範種子資料嗎？')) {
        store.reset();
        this.showToast('已重置為初始示範資料！');
      }
    });

    // 照護對象選擇器
    this.btnRecipientSelector.addEventListener('click', () => {
      this.openRecipientModal();
    });
    this.btnCloseRecipientModal.addEventListener('click', () => {
      this.modalSelectRecipient.classList.add('hidden');
    });

    // 新增照護對象
    this.btnOpenAddRecipientModal.addEventListener('click', () => {
      this.promptAddRecipient();
    });
    this.btnAddRecipientOpen.addEventListener('click', () => {
      this.promptAddRecipient();
    });

    // 抽卡按鈕與 3D 動畫觸發
    this.btnDrawCardTrigger.addEventListener('click', () => {
      this.openDrawCardModal();
    });
    this.btnCloseDrawModal.addEventListener('click', () => {
      this.modalDrawCard.classList.add('hidden');
    });
    this.interactiveCardDeck?.addEventListener('click', () => {
      this.executeCardDrawAnimation();
    });
    this.btnTriggerDraw?.addEventListener('click', () => {
      this.executeCardDrawAnimation();
    });
    this.drawnCardInner?.addEventListener('click', () => {
      if (!this.isDrawingCard) {
        this.drawnCardInner.classList.toggle('is-flipped');
      }
    });
    this.btnDrawReroll.addEventListener('click', () => {
      this.rerollCard();
    });
    this.btnDrawAccept.addEventListener('click', () => {
      this.modalDrawCard.classList.add('hidden');
      this.openWhoAccompanyModal(this.currentDrawnActivity);
    });
    this.btnPreviewAccept.addEventListener('click', () => {
      const rec = store.getActiveRecipient();
      const matched = store.state.inspirationPool.find(p => p.targetType === rec.type) || store.state.inspirationPool[0];
      this.openWhoAccompanyModal(matched);
    });

    // 今天誰陪 Modal
    this.btnCloseWhoModal.addEventListener('click', () => {
      this.modalWhoAccompany.classList.add('hidden');
    });
    this.btnChooseFamilyPath.addEventListener('click', () => {
      this.executeFamilyAccompanyPath();
    });
    this.btnChooseCaregiverPath.addEventListener('click', () => {
      this.executeCaregiverPath();
    });

    // 首頁按鈕連動
    this.btnStartFamilyAccompany.addEventListener('click', () => {
      this.switchTab('tab-activity');
    });
    this.btnRequestCaregiverOpen.addEventListener('click', () => {
      const rec = store.getActiveRecipient();
      const matched = store.state.inspirationPool.find(p => p.targetType === rec.type) || store.state.inspirationPool[0];
      this.openWhoAccompanyModal(matched);
    });
    this.btnGoToActivities.addEventListener('click', () => this.switchTab('tab-activity'));
    this.btnGoToCollection.addEventListener('click', () => this.switchTab('tab-collection'));

    // 活動 Tab 篩選
    this.activityFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.activityFilterBtns.forEach(b => {
          b.classList.remove('active', 'bg-brand-terracotta', 'text-white');
          b.classList.add('bg-white', 'text-gray-600');
        });
        btn.classList.add('active', 'bg-brand-terracotta', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600');
        this.renderActivities(btn.dataset.filter);
      });
    });

    // 新增活動手動彈窗
    this.btnCreateActivityOpen.addEventListener('click', () => {
      this.promptCreateActivity();
    });

    // 圖鑑 Sub-tab 切換 (Cards vs Memory Book)
    this.btnSubtabCards.addEventListener('click', () => {
      this.currentSubTab = 'cards';
      this.btnSubtabCards.classList.add('bg-white', 'text-[#2C241E]', 'shadow-2xs');
      this.btnSubtabCards.classList.remove('text-gray-600');
      this.btnSubtabMemorybook.classList.remove('bg-white', 'text-[#2C241E]', 'shadow-2xs');
      this.btnSubtabMemorybook.classList.add('text-gray-600');
      this.viewCollectionGrid.classList.remove('hidden');
      this.viewMemoryBook.classList.add('hidden');
    });

    this.btnSubtabMemorybook.addEventListener('click', () => {
      this.currentSubTab = 'memorybook';
      this.btnSubtabMemorybook.classList.add('bg-white', 'text-[#2C241E]', 'shadow-2xs');
      this.btnSubtabMemorybook.classList.remove('text-gray-600');
      this.btnSubtabCards.classList.remove('bg-white', 'text-[#2C241E]', 'shadow-2xs');
      this.btnSubtabCards.classList.add('text-gray-600');
      this.viewCollectionGrid.classList.add('hidden');
      this.viewMemoryBook.classList.remove('hidden');
      this.renderMemoryBook();
    });

    this.selectCardRecipient.addEventListener('change', () => this.renderCollectionCards());
    this.selectCardSeason.addEventListener('change', () => this.renderCollectionCards());

    // 3D 卡片 Modal
    this.btnCloseCardModal.addEventListener('click', () => {
      this.modalCardDetail.classList.add('hidden');
    });
    this.cardInnerElement.addEventListener('click', () => {
      this.toggleCardFlip();
    });
    this.btnFlipCardAction.addEventListener('click', () => {
      this.toggleCardFlip();
    });
    this.btnShareCardAction.addEventListener('click', () => {
      this.showToast('✅ 卡片已產生專屬分享連結，已複製至剪貼簿！');
    });

    // 照護夥伴入駐引導
    this.btnApplyCaregiverOpen.addEventListener('click', () => {
      alert('【成為照護夥伴申請引導】\n您好！本平台歡迎具備熱忱、護理背景或長照照顧服務員證照之夥伴。\n申請流程：\n1. 填寫基本履歷\n2. 上傳三個月內良民證\n3. 平台專人審核\n審核通過即可開通接單權限！');
    });

    // 邀請家庭成員
    this.btnInviteMember.addEventListener('click', () => {
      const inviteUrl = 'https://carecircle.tw/join/circle-001?code=FAMILY99';
      navigator.clipboard?.writeText(inviteUrl);
      alert(`【邀請家庭成員】\n已複製邀請連結：\n${inviteUrl}\n\n將連結傳送給長輩的其他子女或親友，加入後即可共同查看長輩日常與交班！`);
      this.showToast('已複製家庭邀請連結！');
    });

    // 撰寫交班
    this.btnAddHandoffOpen.addEventListener('click', () => {
      this.promptAddHandoff();
    });

    // 抽卡設定
    this.btnDrawSettingsOpen.addEventListener('click', () => {
      alert('【抽卡設定】\n您可以在此設定長輩的日常喜好：\n☑ 散步  ☑ 喝茶  ☑ 象棋  ☑ 懷舊相簿\n排除：❌ 劇烈爬坡梯級\n每日抽卡推薦將依此加權！');
    });

    // AI 抽屜
    this.btnOpenAi.addEventListener('click', () => {
      this.drawerAi.classList.remove('translate-x-full');
    });
    this.btnCloseAi.addEventListener('click', () => {
      this.drawerAi.classList.add('translate-x-full');
    });
    this.btnAiSend.addEventListener('click', () => {
      this.handleAiSubmit();
    });
    this.aiInputText.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleAiSubmit();
    });
    this.aiPromptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.aiInputText.value = chip.textContent.trim();
        this.handleAiSubmit();
      });
    });
  }

  // ==========================================================================
  // 3. Tab 切換與視圖控制
  // ==========================================================================
  switchTab(tabId) {
    this.currentTab = tabId;

    // 更新導覽列樣式
    this.navBtns.forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active', 'text-brand-terracotta');
        btn.classList.remove('text-gray-400');
      } else {
        btn.classList.remove('active', 'text-brand-terracotta');
        btn.classList.add('text-gray-400');
      }
    });

    // 顯示對應 Section
    Object.keys(this.tabSections).forEach(key => {
      if (key === tabId) {
        this.tabSections[key].classList.remove('hidden');
      } else {
        this.tabSections[key].classList.add('hidden');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.renderAll();
  }

  // ==========================================================================
  // 4. 全局渲染 (Render All)
  // ==========================================================================
  renderAll() {
    const isCaregiver = store.state.currentUser.activeRole === 'CAREGIVER';
    const activeRec = store.getActiveRecipient();

    // 更新 Body 樣式 (照護夥伴工作台色系)
    if (isCaregiver) {
      document.body.classList.add('caregiver-mode');
      this.roleBadgeIcon.textContent = '🤝';
      this.roleBadgeText.textContent = '夥伴工作台';
      this.btnToggleRole.className = 'flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition shadow-xs bg-[#D8E5DC] text-[#1C2E24] border-[#B2CBBF]';
      this.roleSwitchLabel.textContent = '切換回家庭模式';
      this.caregiverWorkspace.classList.remove('hidden');
      this.familyWorkspace.classList.add('hidden');
    } else {
      document.body.classList.remove('caregiver-mode');
      this.roleBadgeIcon.textContent = '🏠';
      this.roleBadgeText.textContent = '家庭模式';
      this.btnToggleRole.className = 'flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold border transition shadow-xs bg-[#EFE9DE] text-[#2C241E] border-[#D6C8B4]';
      this.roleSwitchLabel.textContent = '切換至夥伴模式';
      this.caregiverWorkspace.classList.add('hidden');
      this.familyWorkspace.classList.remove('hidden');
    }

    // 頂部長輩/幼兒 Header
    this.headerAvatar.textContent = activeRec.avatar;
    this.headerName.textContent = activeRec.name;
    const typeStr = activeRec.type === 'CHILD' ? '幼兒照護圈' : '長輩照護圈';
    this.headerTypeBadge.textContent = `${typeStr} · ${activeRec.age}歲`;
    if (activeRec.type === 'CHILD') {
      this.headerTypeBadge.className = 'text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded-sm font-medium';
    } else {
      this.headerTypeBadge.className = 'text-[10px] text-brand-terracotta bg-[#FBEFE6] px-1.5 py-0.2 rounded-sm font-medium';
    }

    // 渲染各模組
    this.renderHome();
    this.renderActivities('ALL');
    this.renderCollectionCards();
    this.renderMyWorkspace();

    // 重新載入 Lucide Icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // ==========================================================================
  // 5. 首頁模組渲染 (Home Tab)
  // ==========================================================================
  renderHome() {
    const rec = store.getActiveRecipient();

    // 生活情報
    if (rec.type === 'CHILD') {
      this.homeWeatherInsight.innerHTML = `<strong>${rec.name}</strong> 今日活力充沛！下午天氣晴朗溫和，適合至鄰近草坪進行大自然落葉尋寶與奔跑活動。`;
    } else {
      this.homeWeatherInsight.innerHTML = `<strong>${rec.name}</strong> 最近 8 天沒有去戶外公園，今天氣溫 24°C 微風舒適，下午 15:30 適合安排輕度散步曬曬太陽。`;
    }

    // 抽卡預覽推薦
    const pool = store.state.inspirationPool.filter(item => item.targetType === rec.type);
    const topPick = pool[0] || store.state.inspirationPool[0];
    this.previewActTitle.textContent = topPick.title;
    this.previewActCategory.textContent = topPick.category;
    this.previewActReason.textContent = topPick.reasonBullets.map(r => '✓ ' + r).join('　');

    // 今日誰陪狀態卡
    this.companionFamilyName.textContent = `女兒 ${store.state.currentUser.name}`;

    // 今日活動清單
    const todayStr = '2026-09-12';
    const todayActs = store.state.activities.filter(a => a.recipientId === rec.id || a.scheduledDate === todayStr);
    
    if (todayActs.length === 0) {
      this.homeTodayActivitiesList.innerHTML = `
        <div class="text-center py-6 text-gray-400 text-xs">
          <p>📅 今日尚未排定任何陪伴活動</p>
          <button id="btn-home-quick-draw" class="mt-2 text-brand-terracotta font-bold hover:underline">
            點此抽一張，給長輩一個期待 →
          </button>
        </div>
      `;
      document.getElementById('btn-home-quick-draw')?.addEventListener('click', () => this.openDrawCardModal());
    } else {
      this.homeTodayActivitiesList.innerHTML = todayActs.map(act => {
        let badge = '<span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">排程中</span>';
        if (act.status === 'COMPLETED') badge = '<span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">已完成</span>';
        if (act.status === 'IN_PROGRESS') badge = '<span class="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium animate-pulse">進行中</span>';

        return `
          <div class="p-3 bg-[#FAF6ED] rounded-xl border border-[#E8DFD3] flex items-center justify-between">
            <div class="space-y-0.5">
              <div class="flex items-center space-x-2">
                <span class="font-bold text-xs text-[#2C241E]">${act.title}</span>
                ${badge}
              </div>
              <p class="text-[11px] text-gray-500">🕒 ${act.scheduledTime} · 📍 ${act.location}</p>
              <p class="text-[10px] text-gray-400">陪伴人：${act.leadCompanion}</p>
            </div>
            <div class="flex items-center space-x-1.5">
              ${act.status !== 'COMPLETED' ? `
                <button class="btn-quick-finish text-xs bg-brand-terracotta text-white font-bold px-2.5 py-1.5 rounded-lg shadow-2xs hover:bg-brand-terracotta-dark" data-act-id="${act.id}">
                  完成陪伴
                </button>
              ` : `
                <button class="btn-view-card-from-act text-xs bg-white text-gray-700 border border-[#D6C8B4] font-medium px-2 py-1 rounded-lg" data-card-id="${act.cardId}">
                  查看卡片
                </button>
              `}
            </div>
          </div>
        `;
      }).join('');

      // 綁定按鈕事件
      this.homeTodayActivitiesList.querySelectorAll('.btn-quick-finish').forEach(b => {
        b.addEventListener('click', () => this.completeActivityFlow(b.dataset.actId));
      });
      this.homeTodayActivitiesList.querySelectorAll('.btn-view-card-from-act').forEach(b => {
        b.addEventListener('click', () => this.openCardModal(b.dataset.cardId));
      });
    }

    // 最近完成的活動卡輪播
    const cards = store.state.activityCards;
    if (cards.length === 0) {
      this.homeRecentCardsCarousel.innerHTML = `
        <div class="w-full text-center py-6 text-gray-400 text-xs">
          完成第一次陪伴活動，即可生成專屬生活圖鑑卡！
        </div>
      `;
    } else {
      this.homeRecentCardsCarousel.innerHTML = cards.map(c => {
        const flower = FLOWER_THEMES[c.flowerKey] || FLOWER_THEMES.DAISY;
        return `
          <div class="min-w-[160px] max-w-[160px] bg-[#FAF6ED] rounded-xl p-2.5 border border-[#EADFCF] cursor-pointer hover:border-brand-terracotta transition shadow-2xs flex flex-col justify-between btn-carousel-card" data-card-id="${c.id}">
            <div>
              <div class="w-full h-24 rounded-lg overflow-hidden relative mb-1.5 bg-gray-200">
                <img src="${c.coverPhoto}" alt="${c.title}" class="w-full h-full object-cover">
                <span class="absolute top-1 right-1 bg-white/80 backdrop-blur-xs text-[9px] px-1.5 py-0.5 rounded font-bold text-[#2C241E]">
                  ${flower.name}
                </span>
              </div>
              <h4 class="font-bold text-xs text-[#2C241E] line-clamp-1">${c.title}</h4>
              <p class="text-[10px] text-brand-terracotta line-clamp-1 mt-0.5 font-medium">${flower.language}</p>
            </div>
            <div class="mt-2 pt-1 border-t border-[#E8DFD3] flex items-center justify-between text-[9px] text-gray-400">
              <span>${c.dateStr}</span>
              <span class="text-brand-terracotta font-semibold">翻面 ↻</span>
            </div>
          </div>
        `;
      }).join('');

      this.homeRecentCardsCarousel.querySelectorAll('.btn-carousel-card').forEach(cardEl => {
        cardEl.addEventListener('click', () => this.openCardModal(cardEl.dataset.cardId));
      });
    }
  }

  // ==========================================================================
  // 6. 活動模組渲染 (Activity Tab)
  // ==========================================================================
  renderActivities(filter = 'ALL') {
    let acts = [...store.state.activities];
    if (filter !== 'ALL') {
      acts = acts.filter(a => a.status === filter);
    }

    if (acts.length === 0) {
      this.activityFullList.innerHTML = `
        <div class="text-center py-12 bg-white rounded-2xl border border-dashed border-[#E8DFD3] text-gray-400 text-xs space-y-2">
          <p>暫無符合該狀態的活動</p>
          <button id="btn-empty-add-act" class="px-4 py-2 bg-brand-terracotta text-white font-bold rounded-xl text-xs">
            + 建立新活動
          </button>
        </div>
      `;
      document.getElementById('btn-empty-add-act')?.addEventListener('click', () => this.promptCreateActivity());
      return;
    }

    this.activityFullList.innerHTML = acts.map(act => {
      const rec = store.state.recipients.find(r => r.id === act.recipientId) || store.getActiveRecipient();
      let statusBadge = '<span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">待開始</span>';
      if (act.status === 'IN_PROGRESS') statusBadge = '<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">進行中</span>';
      if (act.status === 'COMPLETED') statusBadge = '<span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">已完成</span>';
      if (act.status === 'CANCELLED') statusBadge = '<span class="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-full">已取消</span>';

      const modeBadge = act.mode === 'CAREGIVER'
        ? '<span class="text-[10px] bg-[#D8E5DC] text-brand-sage px-1.5 py-0.5 rounded font-semibold">照護夥伴委託</span>'
        : '<span class="text-[10px] bg-[#FBEFE6] text-brand-terracotta px-1.5 py-0.5 rounded font-semibold">家庭自陪</span>';

      return `
        <div class="bg-white rounded-2xl p-4 border border-[#E8DFD3] shadow-xs space-y-2.5">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-2">
              <span class="text-xl p-1.5 bg-[#FAF6ED] rounded-lg">${rec.avatar}</span>
              <div>
                <div class="flex items-center space-x-1.5">
                  <h3 class="font-bold text-sm text-[#2C241E]">${act.title}</h3>
                  ${statusBadge}
                </div>
                <div class="flex items-center space-x-2 text-[11px] text-gray-400 mt-0.5">
                  <span>${rec.name} (${rec.relationship})</span>
                  <span>·</span>
                  ${modeBadge}
                </div>
              </div>
            </div>
            <span class="text-xs font-semibold text-gray-500">${act.category}</span>
          </div>

          <div class="text-xs text-gray-600 bg-[#FAF6ED] p-2.5 rounded-xl space-y-1">
            <div class="flex items-center justify-between">
              <span>📅 日期時間：${act.scheduledDate} · ${act.scheduledTime}</span>
              <span>📍 ${act.location}</span>
            </div>
            <p>👥 陪伴責任人：${act.leadCompanion} ${act.coParticipants?.length ? `(共同參與: ${act.coParticipants.join('、')})` : ''}</p>
            ${act.notes ? `<p class="text-gray-500 italic">備註：${act.notes}</p>` : ''}
          </div>

          <!-- 動作按鈕區 -->
          <div class="flex items-center justify-end space-x-2 pt-1 border-t border-[#F2EBE1]">
            ${act.status === 'SCHEDULED' ? `
              <button class="btn-start-act text-xs bg-brand-sage text-white font-bold px-3 py-1.5 rounded-lg hover:bg-brand-sage-dark shadow-2xs" data-act-id="${act.id}">
                開始陪伴打卡
              </button>
              ${act.careRequestId ? `
                <button class="btn-cancel-care-fallback text-xs text-red-600 hover:underline px-2" data-act-id="${act.id}">
                  取消找夥伴 (改家人陪)
                </button>
              ` : ''}
            ` : ''}

            ${act.status === 'IN_PROGRESS' ? `
              <button class="btn-finish-act text-xs bg-brand-terracotta text-white font-bold px-3 py-1.5 rounded-lg hover:bg-brand-terracotta-dark shadow-2xs" data-act-id="${act.id}">
                完成活動並生成卡片
              </button>
            ` : ''}

            ${act.status === 'COMPLETED' ? `
              <button class="btn-view-card text-xs bg-white text-brand-terracotta border border-brand-terracotta font-bold px-3 py-1.5 rounded-lg hover:bg-[#FAF6ED]" data-card-id="${act.cardId}">
                🎴 翻看生活活動卡
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    // 綁定事件
    this.activityFullList.querySelectorAll('.btn-start-act').forEach(b => {
      b.addEventListener('click', () => {
        const act = store.state.activities.find(a => a.id === b.dataset.actId);
        if (act) {
          act.status = 'IN_PROGRESS';
          store.logAudit('開始陪伴活動', act.title);
          store.save();
          this.showToast(`已開始「${act.title}」！陪伴結束記得拍照生成紀念卡。`);
        }
      });
    });

    this.activityFullList.querySelectorAll('.btn-finish-act').forEach(b => {
      b.addEventListener('click', () => this.completeActivityFlow(b.dataset.actId));
    });

    this.activityFullList.querySelectorAll('.btn-view-card').forEach(b => {
      b.addEventListener('click', () => this.openCardModal(b.dataset.cardId));
    });

    this.activityFullList.querySelectorAll('.btn-cancel-care-fallback').forEach(b => {
      b.addEventListener('click', () => {
        const act = store.state.activities.find(a => a.id === b.dataset.actId);
        if (act && confirm('確定要取消外部夥伴需求，改由家人自己陪伴嗎？（活動將保留為待開始狀態）')) {
          const req = store.state.careRequests.find(r => r.id === act.careRequestId);
          if (req) req.status = 'CANCELLED';
          act.mode = 'FAMILY';
          act.careRequestId = null;
          act.leadCompanion = `女兒 ${store.state.currentUser.name}`;
          store.logAudit('取消照護需求 (改家人自陪)', act.title);
          store.save();
          this.showToast('已取消照護夥伴需求，活動已改由家人自己陪伴！');
        }
      });
    });
  }

  // ==========================================================================
  // 7. 生活圖鑑模組渲染 (Collection & Memory Book)
  // ==========================================================================
  renderCollectionCards() {
    const selectedRecId = this.selectCardRecipient.value;
    const selectedSeason = this.selectCardSeason.value;

    let cards = [...store.state.activityCards];
    if (selectedRecId !== 'ALL') {
      cards = cards.filter(c => c.recipientId === selectedRecId);
    }
    if (selectedSeason !== 'ALL') {
      cards = cards.filter(c => c.season.includes(selectedSeason));
    }

    if (cards.length === 0) {
      this.viewCollectionGrid.innerHTML = `
        <div class="col-span-2 text-center py-16 bg-white rounded-2xl border border-dashed border-[#E8DFD3] text-gray-400 text-xs">
          🎴 尚無符合條件的生活活動卡<br>
          <span class="text-gray-300">完成日常陪伴即可收集專屬花語！</span>
        </div>
      `;
      return;
    }

    this.viewCollectionGrid.innerHTML = cards.map(c => {
      const flower = FLOWER_THEMES[c.flowerKey] || FLOWER_THEMES.DAISY;
      const rec = store.state.recipients.find(r => r.id === c.recipientId);

      return `
        <div class="vintage-card-border rounded-2xl p-3 bg-[#FAF6ED] cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 group card-grid-item" data-card-id="${c.id}">
          <div class="vintage-inner-frame p-2 rounded-xl flex flex-col justify-between h-full space-y-2">
            <div>
              <div class="flex items-center justify-between text-[10px] text-gray-400 pb-1 border-b border-[#EADFCF]">
                <span class="font-serif tracking-wider font-bold">${c.cardNumber}</span>
                <span>${c.dateStr}</span>
              </div>
              <div class="w-full h-32 rounded-lg overflow-hidden mt-1.5 relative border border-[#E8DFD3]">
                <img src="${c.coverPhoto}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <span class="absolute bottom-1 left-1 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-full font-medium">
                  ${flower.name} · ${c.complimentTag}
                </span>
              </div>
              <h4 class="font-bold text-xs text-[#2C241E] mt-2 line-clamp-1">${c.title}</h4>
              <p class="text-[10px] text-brand-terracotta line-clamp-1 font-serif mt-0.5">${flower.language}</p>
            </div>
            <div class="pt-1.5 border-t border-dashed border-[#D6C8B4] flex items-center justify-between text-[10px] text-gray-500">
              <span>${rec ? rec.name : '長輩'}</span>
              <span class="text-brand-terracotta font-semibold group-hover:underline">3D 翻面 ↻</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.viewCollectionGrid.querySelectorAll('.card-grid-item').forEach(el => {
      el.addEventListener('click', () => this.openCardModal(el.dataset.cardId));
    });
  }

  renderMemoryBook() {
    const rec = store.getActiveRecipient();
    const cards = store.state.activityCards.filter(c => c.recipientId === rec.id);

    this.viewMemoryBook.innerHTML = `
      <div class="bg-gradient-to-br from-[#FAF6ED] to-[#F1E7D8] rounded-3xl p-6 border-2 border-[#D6C8B4] shadow-md space-y-5">
        
        <!-- 回憶之書封面標題 -->
        <div class="text-center border-b border-[#D6C8B4] pb-4 space-y-1">
          <span class="text-[10px] uppercase tracking-widest text-brand-terracotta font-bold">Memory Book Story · 生活誌</span>
          <h3 class="text-xl font-bold font-serif text-[#2C241E]">${rec.name} · 2026 金秋回憶冊</h3>
          <p class="text-xs text-gray-500">已累積收錄 ${cards.length} 張生活活動卡 · 走過大安森林、客廳與茶香時光</p>
        </div>

        <!-- 統計快照 -->
        <div class="grid grid-cols-3 gap-2.5 text-center text-xs">
          <div class="bg-white/80 p-2.5 rounded-xl border border-[#E8DFD3]">
            <span class="text-lg font-bold text-brand-terracotta">${cards.length}</span>
            <p class="text-[10px] text-gray-500 mt-0.5">解鎖花語</p>
          </div>
          <div class="bg-white/80 p-2.5 rounded-xl border border-[#E8DFD3]">
            <span class="text-lg font-bold text-brand-sage">120+</span>
            <p class="text-[10px] text-gray-500 mt-0.5">陪伴分鐘</p>
          </div>
          <div class="bg-white/80 p-2.5 rounded-xl border border-[#E8DFD3]">
            <span class="text-lg font-bold text-brand-amber">100%</span>
            <p class="text-[10px] text-gray-500 mt-0.5">笑容滿分</p>
          </div>
        </div>

        <!-- 時間軸故事卡 -->
        <div class="space-y-4">
          <div class="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center space-x-1">
            <span>📖</span>
            <span>歲月故事軌跡 (Timeline Highlights)</span>
          </div>

          ${cards.map((c, idx) => {
            const flower = FLOWER_THEMES[c.flowerKey] || FLOWER_THEMES.DAISY;
            return `
              <div class="bg-white rounded-2xl p-4 border border-[#E8DFD3] shadow-xs flex space-x-3.5 items-start">
                <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#E8DFD3]">
                  <img src="${c.coverPhoto}" alt="${c.title}" class="w-full h-full object-cover">
                </div>
                <div class="space-y-1 text-xs flex-1">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-[#2C241E] text-sm">${c.title}</span>
                    <span class="text-[10px] text-gray-400">${c.dateStr}</span>
                  </div>
                  <p class="text-[11px] text-brand-terracotta font-serif">🌸 解鎖花語：${flower.name}（${flower.language}）</p>
                  <p class="text-gray-600 line-clamp-2 italic bg-[#FAF6ED] p-1.5 rounded text-[11px]">
                    「${c.notes}」
                  </p>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- 30 款美式復古植物花語全景典藏圖章 -->
        <div class="space-y-3 bg-white/80 p-4 rounded-2xl border border-[#E8DFD3]">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1.5 text-xs font-bold text-[#2C241E]">
              <span>🌸</span>
              <span>美式植物圖鑑 · 30 款花語全集</span>
            </div>
            <span class="text-[10px] bg-[#EFE9DE] px-2.5 py-0.5 rounded-full text-brand-terracotta font-semibold">
              已解鎖 ${new Set(cards.map(c => c.flowerKey)).size} / 30 款
            </span>
          </div>
          <div class="grid grid-cols-5 sm:grid-cols-6 gap-2 text-center">
            ${Object.values(FLOWER_THEMES).map(f => {
              const unlocked = cards.some(c => c.flowerKey === f.id);
              return `
                <div class="p-1.5 rounded-xl border ${unlocked ? 'bg-[#FAF6ED] border-[#C59B27] shadow-2xs text-[#2C241E]' : 'bg-gray-50/70 border-gray-200 opacity-40 text-gray-400'} flex flex-col items-center justify-center space-y-0.5" title="${f.name}：${f.language}">
                  <span class="text-xl">${f.icon}</span>
                  <span class="text-[9px] font-bold truncate max-w-full">${f.name}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="text-center pt-2">
          <button id="btn-export-memory-book" class="bg-brand-terracotta text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs hover:bg-brand-terracotta-dark transition">
            📥 一鍵匯出數位紀念冊 (PDF)
          </button>
        </div>

      </div>
    `;

    document.getElementById('btn-export-memory-book')?.addEventListener('click', () => {
      alert('已開始編排數位回憶冊！系統將整合精選照片、陪伴花語與長輩語錄，生成排版優美的數位 PDF。');
      this.showToast('回憶冊已成功編排！');
    });
  }

  // ==========================================================================
  // 8. 我的 (My / Workspace & Circle)
  // ==========================================================================
  renderMyWorkspace() {
    const isCaregiver = store.state.currentUser.activeRole === 'CAREGIVER';

    if (isCaregiver) {
      // 照護夥伴模式渲染
      const openRequests = store.state.careRequests.filter(r => r.status === 'OPEN' || r.status === 'MATCHED');
      this.caregiverRequestsPool.innerHTML = openRequests.map(req => {
        const rec = store.state.recipients.find(r => r.id === req.recipientId);
        const isMatchedWithMe = req.selectedCaregiverId === 'cg-001';

        return `
          <div class="p-3 bg-[#F4F7F5] rounded-xl border border-[#CFDFD6] flex items-center justify-between">
            <div class="space-y-0.5">
              <div class="flex items-center space-x-1.5">
                <span class="font-bold text-xs text-[#1C2E24]">${req.title}</span>
                <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-semibold">${req.careType}</span>
              </div>
              <p class="text-[11px] text-gray-500">🕒 ${req.serviceDate} · ${req.timeSlot}</p>
              <p class="text-[11px] text-gray-500">📍 ${req.location} | 報酬：NT$ ${req.totalBudget}</p>
            </div>
            <div>
              ${isMatchedWithMe ? `
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-300">
                  已媒合您接單
                </span>
              ` : `
                <button class="btn-caregiver-accept-request text-xs bg-brand-sage text-white font-bold px-3 py-1.5 rounded-lg hover:bg-brand-sage-dark shadow-2xs" data-req-id="${req.id}">
                  立即接單
                </button>
              `}
            </div>
          </div>
        `;
      }).join('');

      this.caregiverRequestsPool.querySelectorAll('.btn-caregiver-accept-request').forEach(b => {
        b.addEventListener('click', () => {
          const req = store.state.careRequests.find(r => r.id === b.dataset.reqId);
          if (req) {
            req.status = 'MATCHED';
            req.selectedCaregiverId = 'cg-001';
            store.logAudit('照護夥伴接單成功', req.title);
            store.save();
            this.showToast(`接單成功！已媒合「${req.title}」，請依約定時間抵達打卡。`);
          }
        });
      });

      // 進行中打卡狀態模擬
      this.caregiverActiveServiceBox.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-[#1C2E24]">目前履約：王奶奶 心臟科回診陪同</span>
            <span class="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold animate-pulse">服務中</span>
          </div>
          <p class="text-gray-600">服務地點：台大醫院西址門診部 | GPS 定位偏差 12m（範圍內）</p>
          <div class="flex items-center space-x-2 pt-1">
            <button id="btn-caregiver-checkin" class="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition">
              📍 抵達現場打卡
            </button>
            <button id="btn-caregiver-checkout" class="flex-1 py-1.5 bg-white text-gray-700 border border-gray-300 font-bold rounded-lg text-xs hover:bg-gray-50 transition">
              📝 簽退並提交交班
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-caregiver-checkin')?.addEventListener('click', () => {
        this.showToast('✅ GPS 定位驗證通過（半徑 12m）！已向家屬推播：照護員已抵達開始服務。');
      });

      document.getElementById('btn-caregiver-checkout')?.addEventListener('click', () => {
        const act = store.state.activities.find(a => a.id === 'act-005');
        if (act) {
          act.status = 'COMPLETED';
          act.completedAt = '2026-09-15 11:30';
          act.cardId = 'card-001';
          store.logAudit('照護夥伴完成履約簽退', act.title);
          store.save();
          this.showToast('✅ 服務已圓滿結束，簽退成功並已將門診醫囑同步至家庭交班！');
        }
      });

    } else {
      // 家庭模式渲染

      // 照護對象名單 (長輩 + 幼兒)
      this.myRecipientsList.innerHTML = store.state.recipients.map(r => {
        const isCurrent = r.id === store.getActiveRecipient().id;
        const tagColor = r.type === 'CHILD' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-800';

        return `
          <div class="p-3 bg-[#FAF6ED] rounded-xl border ${isCurrent ? 'border-brand-terracotta shadow-xs' : 'border-[#E8DFD3]'} flex items-center justify-between cursor-pointer btn-select-my-rec" data-rec-id="${r.id}">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">${r.avatar}</span>
              <div>
                <div class="flex items-center space-x-1">
                  <span class="font-bold text-xs text-[#2C241E]">${r.name}</span>
                  ${isCurrent ? '<span class="text-[9px] bg-brand-terracotta text-white px-1.5 py-0.2 rounded-full font-semibold">當前</span>' : ''}
                </div>
                <span class="text-[10px] ${tagColor} px-1.5 py-0.2 rounded font-medium">${r.type === 'CHILD' ? '幼兒' : '長輩'} · ${r.relationship}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      this.myRecipientsList.querySelectorAll('.btn-select-my-rec').forEach(b => {
        b.addEventListener('click', () => {
          store.state.activeRecipientId = b.dataset.recId;
          store.save();
          this.showToast(`已切換目前照顧對象為：${store.getActiveRecipient().name}`);
        });
      });

      // 家庭成員清單
      this.myCircleMembersList.innerHTML = store.state.careCircle.members.map(m => {
        let roleBadge = '<span class="text-[10px] bg-brand-terracotta text-white px-2 py-0.5 rounded-full font-bold">照護管理者</span>';
        if (m.role === 'MEMBER') roleBadge = '<span class="text-[10px] bg-[#EAE2D5] text-[#55473E] px-2 py-0.5 rounded-full font-medium">家庭照護成員</span>';
        if (m.role === 'VIEWER') roleBadge = '<span class="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">關懷親友</span>';

        return `
          <div class="p-2.5 bg-[#FAF6ED] rounded-xl border border-[#E8DFD3] flex items-center justify-between text-xs">
            <div class="flex items-center space-x-2.5">
              <span class="text-xl p-1 bg-white rounded-lg">${m.avatar}</span>
              <div>
                <span class="font-bold text-[#2C241E]">${m.name} ${m.isMe ? '(我)' : ''}</span>
                <p class="text-[10px] text-gray-500">${m.relation} · ${m.phone}</p>
              </div>
            </div>
            ${roleBadge}
          </div>
        `;
      }).join('');

      // 今日交班日誌
      const latestHandoff = store.state.handoffLogs[0];
      if (latestHandoff) {
        this.myHandoffRecent.innerHTML = `
          <div class="flex items-center justify-between text-[11px] text-gray-500 border-b border-[#E8DFD3] pb-1">
            <span>📅 ${latestHandoff.date} · 紀錄人：${latestHandoff.recordedBy}</span>
            <span class="text-brand-terracotta font-semibold">${latestHandoff.moodScore}</span>
          </div>
          <p class="text-gray-700 mt-1">🥗 飲食作息：${latestHandoff.dietNotes}</p>
          <p class="text-gray-700">💊 用藥紀錄：${latestHandoff.medicationStatus}</p>
          <p class="text-gray-500 italic mt-0.5">⚠️ 特別叮嚀：${latestHandoff.specialReminders}</p>
        `;
      }

      // 審計日誌
      this.myAuditLogs.innerHTML = store.state.auditLogs.slice(0, 5).map(l => `
        <div class="flex items-center justify-between border-b border-gray-100 pb-0.5">
          <span>[${l.timestamp.slice(5)}] ${l.operator} (${l.action}): ${l.target}</span>
        </div>
      `).join('');
    }
  }

  // ==========================================================================
  // 9. 抽卡互動 (Contextual Draw & Re-roll)
  // ==========================================================================
  openDrawCardModal() {
    this.isDrawingCard = false;
    // 重設舞台：顯示抽牌牌堆舞台，隱藏結果卡片舞台
    if (this.drawDeckStage) this.drawDeckStage.classList.remove('hidden');
    if (this.drawResultStage) this.drawResultStage.classList.add('hidden');
    // 卡片內層先維持背面朝上
    if (this.drawnCardInner) this.drawnCardInner.classList.add('is-flipped');
    if (this.drawnCardFlipBox) {
      this.drawnCardFlipBox.classList.remove('animate-card-lift', 'animate-card-shuffle-left');
    }

    const rec = store.getActiveRecipient();
    // 依長輩或幼兒過濾
    const pool = store.state.inspirationPool.filter(item => item.targetType === rec.type);
    const pick = pool[Math.floor(Math.random() * pool.length)] || store.state.inspirationPool[0];
    this.currentDrawnActivity = pick;

    this.renderDrawnCardDetails(pick);
    this.modalDrawCard.classList.remove('hidden');
  }

  executeCardDrawAnimation() {
    if (this.isDrawingCard) return;
    this.isDrawingCard = true;

    // 播放洗牌與抽牌音效
    this.soundFX.playCardShuffle();

    // 牌堆展開展開扇形特效
    if (this.deckFanLeft) this.deckFanLeft.classList.add('-rotate-45', '-translate-x-8');
    if (this.deckFanRight) this.deckFanRight.classList.add('rotate-45', 'translate-x-8');

    setTimeout(() => {
      // 切換至結果舞台
      if (this.drawDeckStage) this.drawDeckStage.classList.add('hidden');
      if (this.drawResultStage) this.drawResultStage.classList.remove('hidden');

      // 重置牌堆樣式
      if (this.deckFanLeft) this.deckFanLeft.classList.remove('-rotate-45', '-translate-x-8');
      if (this.deckFanRight) this.deckFanRight.classList.remove('rotate-45', 'translate-x-8');

      // 向上抽起卡片動畫 (Card Lift)
      if (this.drawnCardFlipBox) {
        this.drawnCardFlipBox.classList.remove('animate-card-lift', 'animate-card-shuffle-left');
        void this.drawnCardFlipBox.offsetWidth; // 強制重繪觸發動畫
        this.drawnCardFlipBox.classList.add('animate-card-lift');
      }

      // 卡片 3D 翻轉 180° 揭曉正面
      setTimeout(() => {
        if (this.drawnCardInner) {
          this.drawnCardInner.classList.remove('is-flipped');
        }
        // 揭曉慶祝琶音音效 (C5 -> E5 -> G5 -> C6)
        this.soundFX.playRevealChime();
        // 噴灑金粉與星星粒子 (Canvas Confetti)
        this.confetti?.burst();
        this.isDrawingCard = false;
      }, 450);
    }, 400);
  }

  rerollCard() {
    const settings = store.state.drawSettings;
    if (settings.dailyReRollCount >= settings.maxReRolls) {
      alert('今日再抽一次次數已達 3 次上限！系統建議您直接挑選適合的活動，或手動建立自訂陪伴。');
      return;
    }

    if (this.isDrawingCard) return;
    this.isDrawingCard = true;

    settings.dailyReRollCount += 1;
    store.save();

    const rec = store.getActiveRecipient();
    const pool = store.state.inspirationPool.filter(item => item.targetType === rec.type);
    let nextPick = pool[Math.floor(Math.random() * pool.length)];
    // 盡量抽到不同張
    if (pool.length > 1 && nextPick.id === this.currentDrawnActivity?.id) {
      nextPick = pool.find(p => p.id !== this.currentDrawnActivity.id) || nextPick;
    }

    // 播放洗牌音效
    this.soundFX.playCardShuffle();

    // 先翻轉回背面
    if (this.drawnCardInner) {
      this.drawnCardInner.classList.add('is-flipped');
    }
    if (this.drawnCardFlipBox) {
      this.drawnCardFlipBox.classList.remove('animate-card-lift');
      this.drawnCardFlipBox.classList.add('animate-card-shuffle-left');
    }

    setTimeout(() => {
      this.currentDrawnActivity = nextPick;
      this.renderDrawnCardDetails(nextPick);

      if (this.drawnCardFlipBox) {
        this.drawnCardFlipBox.classList.remove('animate-card-shuffle-left');
        void this.drawnCardFlipBox.offsetWidth;
        this.drawnCardFlipBox.classList.add('animate-card-lift');
      }

      setTimeout(() => {
        if (this.drawnCardInner) {
          this.drawnCardInner.classList.remove('is-flipped');
        }
        this.soundFX.playRevealChime();
        this.confetti?.burst();
        this.showToast(`已為您重新推薦！(今日剩餘 ${settings.maxReRolls - settings.dailyReRollCount} 次)`);
        this.isDrawingCard = false;
      }, 450);
    }, 400);
  }

  renderDrawnCardDetails(act) {
    const settings = store.state.drawSettings;
    const remaining = settings.maxReRolls - settings.dailyReRollCount;
    this.drawRerollBadge.textContent = `今日已使用 ${settings.dailyReRollCount} / ${settings.maxReRolls} 次再抽一張`;
    this.rerollRemainNum.textContent = Math.max(0, remaining);

    const flower = act.flowerKey ? FLOWER_THEMES[act.flowerKey] : getFlowerForActivity(act.category);

    const catEl = document.getElementById('draw-act-category');
    if (catEl) catEl.textContent = act.category;

    const timeEl = document.getElementById('draw-act-time');
    if (timeEl) timeEl.textContent = `建議時間：${act.suggestedTime}`;

    const titleEl = document.getElementById('draw-act-title');
    if (titleEl) titleEl.textContent = act.title;

    const locEl = document.getElementById('draw-act-location');
    if (locEl) locEl.textContent = `📍 ${act.location}`;

    const iconEl = document.getElementById('draw-act-icon');
    if (iconEl) iconEl.textContent = flower ? flower.icon : (act.icon || '🌸');

    const reasonsEl = document.getElementById('draw-act-reasons');
    if (reasonsEl && act.reasonBullets) {
      reasonsEl.innerHTML = act.reasonBullets.map(r => `<li>✓ ${r}</li>`).join('');
    }
  }

  // ==========================================================================
  // 10. 今天誰陪？雙軌分流 (Dual-track Companionship)
  // ==========================================================================
  openWhoAccompanyModal(act) {
    this.selectedActivityForAccompany = act;
    this.whoAccompanySubtitle.textContent = `已選定活動：${act.title}`;
    this.modalWhoAccompany.classList.remove('hidden');
  }

  // 路徑 A: 我和家人陪
  executeFamilyAccompanyPath() {
    this.modalWhoAccompany.classList.add('hidden');
    const actData = this.selectedActivityForAccompany;
    const rec = store.getActiveRecipient();

    const newActivity = {
      id: 'act-' + Date.now(),
      recipientId: rec.id,
      title: actData.title,
      category: actData.category,
      scheduledDate: '2026-09-12',
      scheduledTime: actData.suggestedTime.replace('今日 ', '') + '–16:30',
      location: actData.location,
      leadCompanion: `女兒 ${store.state.currentUser.name}`,
      coParticipants: ['家人'],
      notes: actData.supplies ? `攜帶工具：${actData.supplies.join('、')}` : '',
      status: 'SCHEDULED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: []
    };

    store.state.activities.unshift(newActivity);
    store.logAudit('建立家庭自陪活動', newActivity.title);
    store.save();

    this.showToast(`✅ 已排入「我和家人陪」！已自動建立活動排程。`);
    this.switchTab('tab-activity');
  }

  // 路徑 B: 找照護夥伴
  executeCaregiverPath() {
    this.modalWhoAccompany.classList.add('hidden');
    const actData = this.selectedActivityForAccompany;
    const rec = store.getActiveRecipient();

    // 建立 Care Request
    const newReq = {
      id: 'req-' + Date.now(),
      recipientId: rec.id,
      title: `${actData.title} (尋找陪伴夥伴)`,
      careType: actData.category,
      serviceDate: '2026-09-12',
      timeSlot: `${actData.suggestedTime.replace('今日 ', '')} (約2小時)`,
      location: actData.location,
      hourlyRate: 450,
      totalBudget: 900,
      specialNeeds: `${rec.name}，${rec.healthNotes || '陪伴散步聊聊天'}`,
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
          proposedRate: 450,
          appliedAt: '剛剛',
          message: '時間完全沒問題！我很樂意前來陪伴長輩。'
        }
      ]
    };

    // 同步建立 Activity (綁定 careRequestId)
    const newActivity = {
      id: 'act-' + Date.now(),
      recipientId: rec.id,
      title: actData.title,
      category: actData.category,
      scheduledDate: '2026-09-12',
      scheduledTime: actData.suggestedTime.replace('今日 ', ''),
      location: actData.location,
      leadCompanion: '待媒合照護夥伴',
      coParticipants: [],
      notes: '已發布需求，等待夥伴接單中',
      status: 'SCHEDULED',
      mode: 'CAREGIVER',
      careRequestId: newReq.id,
      photos: []
    };

    store.state.careRequests.unshift(newReq);
    store.state.activities.unshift(newActivity);
    store.logAudit('發布照護夥伴陪伴需求', newReq.title);
    store.save();

    this.showToast('🤝 已成功發布陪伴需求！系統已自動推播給大安區認證照護夥伴。');
    this.switchTab('tab-activity');
  }

  // ==========================================================================
  // 11. 活動完成與生活活動卡生成 (Activity Completed -> Card Generation)
  // ==========================================================================
  completeActivityFlow(activityId) {
    const act = store.state.activities.find(a => a.id === activityId);
    if (!act) return;

    const userNote = prompt('請輸入今日陪伴隨筆或長輩的心聲一句話：', `${act.title}很順利，長輩精神特別好，露出了燦爛的笑容！`);
    if (userNote === null) return; // 使用者取消

    // 匹配對應花語
    const flower = getFlowerForActivity(act.category, act.notes + ' ' + userNote);
    const rec = store.state.recipients.find(r => r.id === act.recipientId) || store.getActiveRecipient();

    const newCard = {
      id: 'card-' + Date.now(),
      activityId: act.id,
      recipientId: rec.id,
      cardNumber: `NO. 2026-${String(store.state.activityCards.length + 1).padStart(4, '0')}`,
      title: act.title,
      category: act.category,
      dateStr: new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      season: '秋季',
      themeType: 'FLOWER',
      flowerKey: flower.id,
      coverPhoto: act.photos[0] || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
      complimentTag: '幸福笑容・溫暖相伴',
      participants: [rec.name, act.leadCompanion],
      notes: userNote,
      metrics: '活動時長 40 分鐘 · 身心放鬆',
      privacy: 'FAMILY_ONLY'
    };

    act.status = 'COMPLETED';
    act.cardId = newCard.id;
    act.completedAt = new Date().toISOString().slice(0, 16).replace('T', ' ');

    store.state.activityCards.unshift(newCard);
    store.logAudit('完成活動並解鎖生活圖鑑卡', `${act.title} (解鎖 ${flower.name})`);
    store.save();

    this.showToast(`🎉 恭喜完成陪伴！已為您生成專屬【${flower.name}】生活圖鑑卡！`);
    // 直接彈出 3D 卡片檢視
    this.openCardModal(newCard.id);
  }

  // ==========================================================================
  // 12. 3D 卡片 Modal 與翻面控制 (Flip Interaction)
  // ==========================================================================
  openCardModal(cardId) {
    const card = store.state.activityCards.find(c => c.id === cardId);
    if (!card) return;

    const flower = FLOWER_THEMES[card.flowerKey] || FLOWER_THEMES.DAISY;

    // 正面填充
    document.getElementById('modal-card-number').textContent = card.cardNumber;
    document.getElementById('modal-card-season-badge').textContent = `${card.season} · ${flower.name}花語`;
    document.getElementById('modal-card-cover-img').src = card.coverPhoto;
    document.getElementById('modal-card-compliment').textContent = card.complimentTag;
    document.getElementById('modal-card-front-title').textContent = card.title;
    document.getElementById('modal-card-front-date').textContent = `${card.dateStr} · 陪伴人：${card.participants?.join('、')}`;

    // 背面填充 (美式復古植物插畫風格)
    document.getElementById('modal-flower-name').textContent = flower.name;
    document.getElementById('modal-flower-english').textContent = flower.englishName;
    document.getElementById('modal-flower-svg-container').innerHTML = flower.symbolSvg;
    document.getElementById('modal-flower-language').textContent = flower.language;
    document.getElementById('modal-flower-desc').textContent = flower.description;
    document.getElementById('modal-card-back-participants').textContent = `👥 ${card.participants?.join('、')}`;
    document.getElementById('modal-card-back-metrics').textContent = `⏱️ ${card.metrics}`;
    document.getElementById('modal-card-back-notes').textContent = `「${card.notes}」`;

    // 初始正面重置
    this.cardModalFlipped = false;
    this.cardInnerElement.classList.remove('is-flipped');

    this.modalCardDetail.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  toggleCardFlip() {
    this.cardModalFlipped = !this.cardModalFlipped;
    if (this.cardModalFlipped) {
      this.cardInnerElement.classList.add('is-flipped');
    } else {
      this.cardInnerElement.classList.remove('is-flipped');
    }
  }

  // ==========================================================================
  // 13. 照護對象管理 (Elderly & Child Switch & Add)
  // ==========================================================================
  openRecipientModal() {
    const currentId = store.getActiveRecipient().id;
    this.recipientsSelectionList.innerHTML = store.state.recipients.map(r => {
      const isSelected = r.id === currentId;
      const typeBadge = r.type === 'CHILD'
        ? '<span class="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">幼兒照護圈</span>'
        : '<span class="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">長輩照護圈</span>';

      return `
        <div class="p-3 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between ${isSelected ? 'border-brand-terracotta bg-[#FAF6ED]' : 'border-gray-200 hover:border-gray-300'} btn-select-rec-item" data-rec-id="${r.id}">
          <div class="flex items-center space-x-3">
            <span class="text-3xl p-1.5 bg-white rounded-xl shadow-2xs">${r.avatar}</span>
            <div>
              <div class="flex items-center space-x-2">
                <span class="font-bold text-sm text-[#2C241E]">${r.name}</span>
                <span class="text-xs text-gray-500">(${r.relationship})</span>
              </div>
              <p class="text-[11px] text-gray-500 mt-0.5">年齡：${r.age} 歲 · ${r.statusTags?.slice(0, 2).join('、')}</p>
            </div>
          </div>
          <div class="text-right space-y-1">
            ${typeBadge}
            ${isSelected ? '<div class="text-brand-terracotta font-bold text-xs">✓ 當前使用</div>' : ''}
          </div>
        </div>
      `;
    }).join('');

    this.recipientsSelectionList.querySelectorAll('.btn-select-rec-item').forEach(el => {
      el.addEventListener('click', () => {
        store.state.activeRecipientId = el.dataset.recId;
        store.save();
        this.modalSelectRecipient.classList.add('hidden');
        this.showToast(`已切換為：${store.getActiveRecipient().name}`);
      });
    });

    this.modalSelectRecipient.classList.remove('hidden');
  }

  promptAddRecipient() {
    const isChild = confirm('是否要新增【幼兒照護圈】成員？\n點擊「確定」新增幼兒；點擊「取消」新增長輩。');
    const type = isChild ? 'CHILD' : 'ELDERLY';
    const defaultName = isChild ? '糖糖' : '陳阿公';
    const defaultRel = isChild ? '女兒' : '外公';
    const defaultAge = isChild ? 5 : 79;
    const defaultAvatar = isChild ? '👧' : '👴';

    const name = prompt(`請輸入照護對象暱稱：`, defaultName);
    if (!name) return;

    const rel = prompt(`與登入者的關係稱謂：`, defaultRel) || defaultRel;
    const age = parseInt(prompt(`年齡：`, defaultAge)) || defaultAge;

    const newRec = {
      id: 'rec-' + Date.now(),
      type,
      name,
      relationship: rel,
      avatar: defaultAvatar,
      age,
      careLevel: 'INDEPENDENT',
      statusTags: [type === 'CHILD' ? '幼兒日常' : '銀髮健康', '溫馨照護'],
      interests: type === 'CHILD' ? ['繪本', '積木', '公園'] : ['散步', '品茗', '音樂'],
      mobilityScore: 4,
      healthNotes: '注重水分補充與生活作息規律。',
      location: '台北市大安區',
      isDefault: false
    };

    store.state.recipients.push(newRec);
    store.state.activeRecipientId = newRec.id;
    store.logAudit('新增照護對象', `${name} (${type === 'CHILD' ? '幼兒' : '長輩'})`);
    store.save();

    this.modalSelectRecipient.classList.add('hidden');
    this.showToast(`已成功新增 ${type === 'CHILD' ? '幼兒' : '長輩'}【${name}】！全站已同步切換。`);
  }

  promptCreateActivity() {
    const rec = store.getActiveRecipient();
    const title = prompt(`請輸入活動名稱：`, `陪${rec.name}散步喝下午茶`);
    if (!title) return;

    const category = prompt(`活動類型 (如: 戶外・散步 / 休閒・品茗 / 認知・益智)：`, '休閒・品茗') || '休閒・品茗';
    const time = prompt(`時間段：`, '15:00–16:00') || '15:00–16:00';
    const location = prompt(`地點：`, '客廳陽台') || '客廳陽台';

    const newAct = {
      id: 'act-' + Date.now(),
      recipientId: rec.id,
      title,
      category,
      scheduledDate: '2026-09-12',
      scheduledTime: time,
      location,
      leadCompanion: `女兒 ${store.state.currentUser.name}`,
      coParticipants: [],
      notes: '自主手動建立的溫馨生活陪伴',
      status: 'SCHEDULED',
      mode: 'FAMILY',
      careRequestId: null,
      photos: []
    };

    store.state.activities.unshift(newAct);
    store.logAudit('手動建立新活動', title);
    store.save();

    this.showToast(`已建立活動「${title}」！`);
    this.renderActivities('ALL');
  }

  promptAddHandoff() {
    const rec = store.getActiveRecipient();
    const diet = prompt('請輸入飲食與水分狀況：', '午餐半碗清淡魚湯，水分攝取累計 1,200cc，食慾佳。');
    if (diet === null) return;
    const med = prompt('請輸入用藥與作息：', '13:00 已服用降血壓藥。') || '正常完成。';
    const reminders = prompt('特別叮嚀注意事項：', '長輩主訴腰部微痠，建議晚餐後協助熱敷。') || '無特殊異常。';

    const newHandoff = {
      id: 'ho-' + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      recipientId: rec.id,
      recordedBy: `${store.state.currentUser.name}`,
      recordedAt: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' }),
      dietNotes: diet,
      medicationStatus: med,
      moodScore: '😄 精神安穩',
      specialReminders: reminders
    };

    store.state.handoffLogs.unshift(newHandoff);
    store.logAudit('撰寫家庭交班日誌', `${rec.name} 交班紀錄`);
    store.save();

    this.showToast('✅ 今日交班已順利同步至家庭照護圈！');
  }

  // ==========================================================================
  // 14. AI 照護協作員「小照」對話引擎 (AI Assistant Engine)
  // ==========================================================================
  handleAiSubmit() {
    const text = this.aiInputText.value.trim();
    if (!text) return;

    this.aiInputText.value = '';
    this.appendAiMessage('user', text);

    setTimeout(() => {
      const reply = this.generateAiResponse(text);
      this.appendAiMessage('ai', reply.text, reply.actions);
    }, 600);
  }

  appendAiMessage(sender, content, actions = null) {
    const isAi = sender === 'ai';
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex items-start space-x-2 ${isAi ? '' : 'flex-row-reverse space-x-reverse'}`;

    msgDiv.innerHTML = `
      <span class="text-xl">${isAi ? '🤖' : '👩‍💼'}</span>
      <div class="${isAi ? 'bg-[#FAF6ED] border border-[#EADFCF] rounded-tl-none' : 'bg-brand-terracotta text-white rounded-tr-none'} p-3 rounded-2xl text-[#2C241E] max-w-[85%] leading-relaxed">
        <p class="${isAi ? 'text-[#2C241E]' : 'text-white'}">${content}</p>
        ${actions ? `<div class="mt-2 pt-2 border-t border-[#E8DFD3] flex flex-wrap gap-1.5">${actions}</div>` : ''}
      </div>
    `;

    this.aiChatMessages.appendChild(msgDiv);
    this.aiChatMessages.scrollTop = this.aiChatMessages.scrollHeight;

    // 綁定 action 按鈕
    msgDiv.querySelectorAll('.btn-ai-action').forEach(b => {
      b.addEventListener('click', () => {
        if (b.dataset.action === 'CREATE_ACT') {
          const rec = store.getActiveRecipient();
          this.openWhoAccompanyModal({
            title: b.dataset.title || '陪媽媽外出採買',
            category: '生活・採買',
            suggestedTime: '明天 14:30',
            location: '傳統市場',
            reasonBullets: ['長輩想買當季新鮮水果', '適度走動舒活筋骨']
          });
        } else if (b.dataset.action === 'CREATE_REQ') {
          this.executeCaregiverPath();
        }
      });
    });
  }

  generateAiResponse(query) {
    const rec = store.getActiveRecipient();
    const q = query.toLowerCase();

    if (q.includes('做什麼') || q.includes('推薦') || q.includes('靈感')) {
      if (rec.type === 'CHILD') {
        return {
          text: `推薦陪伴 ${rec.name} 進行【植物園落葉尋寶】：今天戶外陽光柔和，可以引導孩子收集 3 種不同形狀的樹葉，鍛鍊自然觀察力！`,
          actions: `<button class="btn-ai-action text-[11px] bg-brand-terracotta text-white font-bold px-2.5 py-1 rounded-lg" data-action="CREATE_ACT" data-title="植物園落葉尋寶">一鍵建立此活動</button>`
        };
      } else {
        return {
          text: `今天台北天氣涼爽微風，${rec.name} 已經 8 天沒去戶外，小照推薦下午 15:30 安排【大安森林公園散步】：穿著防滑布鞋，散步 30 分鐘曬曬背部，有助維生素 D 吸收！`,
          actions: `<button class="btn-ai-action text-[11px] bg-brand-terracotta text-white font-bold px-2.5 py-1 rounded-lg" data-action="CREATE_ACT" data-title="大安森林公園散步">一鍵建立此活動</button>`
        };
      }
    }

    if (q.includes('買菜') || q.includes('陪媽媽') || q.includes('散步')) {
      return {
        text: `收到！我已幫您將這段口語整理為結構化活動：\n• 對象：${rec.name}\n• 事項：陪同外出採買生活新鮮食材\n• 時間：明天下午 14:30\n• 預估耗時：40 分鐘`,
        actions: `<button class="btn-ai-action text-[11px] bg-brand-terracotta text-white font-bold px-2.5 py-1 rounded-lg" data-action="CREATE_ACT" data-title="陪長輩市場採買">確認建立活動</button>`
      };
    }

    if (q.includes('回診') || q.includes('找人') || q.includes('夥伴') || q.includes('沒空')) {
      return {
        text: `沒問題！當您時間抽不開身時，小照能為您發布需求給半徑 3 公里內已通過良民證審查的認證照護夥伴：\n• 需求：台大醫院門診陪同與推輪椅\n• 建議預算：NT$ 450/hr\n是否立即幫您建立 Care Request？`,
        actions: `<button class="btn-ai-action text-[11px] bg-brand-sage text-white font-bold px-2.5 py-1 rounded-lg" data-action="CREATE_REQ">確認發布照護需求</button>`
      };
    }

    if (q.includes('交班') || q.includes('摘要') || q.includes('本週')) {
      return {
        text: `【📊 ${rec.name} · 本週生活與交班摘要】\n• 散步次數：3 次\n• 象棋與認知益智：1 次\n• 飲食狀況：食慾均良好，每日平均飲水 1,400cc\n• 用藥狀況：晨間降壓藥準時完成率 100%\n• 新增生活圖鑑卡：3 張 (已解鎖桂花、銀杏、向日葵)！`,
        actions: null
      };
    }

    return {
      text: `收到您的訊息！小照隨時守護在您身邊。您可以試著對我說「今天可以做什麼？」、「明天下午想陪媽媽散步」，我會自動為您排程與整理！`,
      actions: null
    };
  }

  // ==========================================================================
  // 15. Toast 輕量提示組件
  // ==========================================================================
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'bg-[#2C241E]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-xl text-xs font-medium flex items-center space-x-2 border border-white/10 animate-card-reveal';
    toast.innerHTML = `<span>🌸</span><span>${message}</span>`;

    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

// 頁面載入後實體化 (支援已載入與 DOMContentLoaded)
function startCareCircleApp() {
  if (!window.app) {
    window.app = new CareCircleApp();
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startCareCircleApp);
} else {
  startCareCircleApp();
}

