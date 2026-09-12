/**
 * 照護圈 (Care Circle) - 花語與卡背主題資料庫 (30 組完整花語典藏版)
 * 符合 PRD 16 ~ 18 章節規範與浮雕勳章美學：
 * 1. 美式復古手繪植物插畫風格 (American Vintage Botanical Style)
 * 2. 完整 30 組固定花朵資料 + 官方權威花語
 * 3. 具備立體浮雕勳章視覺效果 (Bas-Relief Embossed Art)
 * 4. Card Theme 抽象架構 (第一階段 FLOWER，預留 ZODIAC, GALAXY, MRT, LANDMARK)
 */

export const FLOWER_THEMES = {
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
export function getFlowerForActivity(category = '', notes = '') {
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
export const CARD_THEMES = {
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
