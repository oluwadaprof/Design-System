import { defineSemanticTokens, defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
  transparent: {
    value: 'transparent'
  },
  white: {
    value: 'rgba(255, 255, 255, 1)'
  },
  offWhite: {
    value: 'rgb(251, 251, 251)'
  },
  black: {
    value: 'rgba(0, 0, 0, 1)'
  },
  darkModeBg: {
    value: 'rgba(0, 0, 0, 0.95)'
  },
  lightModeBg: {
    value: 'rgba(255, 255, 255, 0.95)'
  },

  orangePrimary: {
    1: {
      value: 'rgba(255, 165, 0, 1)' // Example for a bright orange
    },
    2: {
      value: 'rgba(255, 140, 0, 1)' // Darker shade of orange
    },
    3: {
      value: 'rgba(255, 120, 0, 1)' // Another shade of orange
    },
    4: {
      value: 'rgba(255, 100, 0, 1)' // Another shade of orange
    },
    5: {
      value: 'rgba(255, 80, 0, 1)' // Another shade of orange
    },
    6: {
      value: 'rgba(255, 60, 0, 1)' // Another shade of orange
    },
    7: {
      value: 'rgba(255, 40, 0, 1)' // Another shade of orange
    },
    8: {
      value: 'rgba(255, 20, 0, 1)' // Another shade of orange
    },
    9: {
      value: 'rgba(255, 10, 0, 1)' // Another shade of orange
    },
    10: {
      value: 'rgba(255, 5, 0, 1)' // Another shade of orange
    },
    11: {
      value: 'rgba(200, 0, 0, 1)' // A reddish-orange
    },
    12: {
      value: 'rgba(150, 0, 0, 1)' // A darker reddish-orange
    }
  },
  orangePrimaryAlpha: {
    1: {
      value: 'rgba(255, 165, 0, 0.01)'
    },
    2: {
      value: 'rgba(255, 140, 0, 0.03)'
    },
    3: {
      value: 'rgba(255, 120, 0, 0.06)'
    },
    4: {
      value: 'rgba(255, 100, 0, 0.1)'
    },
    5: {
      value: 'rgba(255, 80, 0, 0.15)'
    },
    6: {
      value: 'rgba(255, 60, 0, 0.22)'
    },
    7: {
      value: 'rgba(255, 40, 0, 0.32)'
    },
    8: {
      value: 'rgba(255, 20, 0, 0.44)'
    },
    9: {
      value: 'rgba(255, 10, 0, 0.72)'
    },
    10: {
      value: 'rgba(255, 5, 0, 0.76)'
    },
    11: {
      value: 'rgba(200, 0, 0, 0.84)'
    },
    12: {
      value: 'rgba(150, 0, 0, 0.91)'
    }
  },
  darkOrangePrimary: {
    1: {
      value: 'rgba(255, 100, 0, 1)' // Darker shade of orange
    },
    2: {
      value: 'rgba(255, 80, 0, 1)' // Another darker shade
    },
    3: {
      value: 'rgba(255, 60, 0, 1)' // Another darker shade
    },
    4: {
      value: 'rgba(255, 40, 0, 1)' // Another darker shade
    },
    5: {
      value: 'rgba(255, 20, 0, 1)' // Another darker shade
    },
    6: {
      value: 'rgba(255, 10, 0, 1)' // Another darker shade
    },
    7: {
      value: 'rgba(200, 0, 0, 1)' // A reddish-orange
    },
    8: {
      value: 'rgba(150, 0, 0, 1)' // A darker reddish-orange
    },
    9: {
      value: 'rgba(100, 0, 0, 1)' // A very dark reddish-orange
    },
    10: {
      value: 'rgba(50, 0, 0, 1)' // A very dark reddish-orange
    },
    11: {
      value: 'rgba(25, 0, 0, 1)' // A very dark reddish-orange
    },
    12: {
      value: 'rgba(10, 0, 0, 1)' // A very dark reddish-orange
    }
  },
  darkOrangePrimaryAlpha: {
    1: {
      value: 'rgba(255, 100, 0, 0.03)'
    },
    2: {
      value: 'rgba(255, 80, 0, 0.07)'
    },
    3: {
      value: 'rgba(255, 60, 0, 0.15)'
    },
    4: {
      value: 'rgba(255, 40, 0, 0.21)'
    },
    5: {
      value: 'rgba(255, 20, 0, 0.26)'
    },
    6: {
      value: 'rgba(255, 10, 0, 0.35)'
    },
    7: {
      value: 'rgba(200, 0, 0, 0.5)'
    },
    8: {
      value: 'rgba(150, 0, 0, 0.81)'
    },
    9: {
      value: 'rgba(100, 0, 0, 0.89)'
    },
    10: {
      value: 'rgba(50, 0, 0, 0.94)'
    },
    11: {
      value: 'rgba(25, 0, 0, 1)'
    },
    12: {
      value: 'rgba(10, 0, 0, 1)'
    }
  },

  //Tailwind inspired color pallete
  rose: {
    50: {
      value: '#fff1f2'
    },
    100: {
      value: '#ffe4e6'
    },
    200: {
      value: '#fecdd3'
    },
    300: {
      value: ' #fda4af'
    },
    400: {
      value: '#fb7185'
    },
    500: {
      value: '#f43f5e'
    },
    600: {
      value: '#e11d48'
    },
    700: {
      value: '#be123c'
    },
    800: {
      value: '#9f1239'
    },
    900: {
      value: '#881337'
    },
    950: {
      value: '#4c0519'
    }
  },
  pink: {
    50: {
      value: '#fdf2f8'
    },
    100: {
      value: '#fce7f3'
    },
    200: {
      value: '#fbcfe8'
    },
    300: {
      value: ' #f9a8d4'
    },
    400: {
      value: '#f472b6'
    },
    500: {
      value: '#ec4899'
    },
    600: {
      value: '#db2777'
    },
    700: {
      value: '#be185d'
    },
    800: {
      value: '#9d174d'
    },
    900: {
      value: '#831843'
    },
    950: {
      value: '#500724'
    }
  },
  fuchisa: {
    50: {
      value: '#fdf4ff'
    },
    100: {
      value: '#fae8ff'
    },
    200: {
      value: '#f5d0fe'
    },
    300: {
      value: ' #f0abfc'
    },
    400: {
      value: '#e879f9'
    },
    500: {
      value: '#d946ef'
    },
    600: {
      value: '#c026d3'
    },
    700: {
      value: '#a21caf'
    },
    800: {
      value: '#86198f'
    },
    900: {
      value: '#701a75'
    },
    950: {
      value: '#4a044e'
    }
  },
  purple: {
    50: {
      value: '#faf5ff'
    },
    100: {
      value: '#f3e8ff'
    },
    200: {
      value: '#e9d5ff'
    },
    300: {
      value: ' #d8b4fe'
    },
    400: {
      value: '#c084fc'
    },
    500: {
      value: '#a855f7'
    },
    600: {
      value: '#9333ea'
    },
    700: {
      value: '#7e22ce'
    },
    800: {
      value: '#6b21a8'
    },
    900: {
      value: '#581c87'
    },
    950: {
      value: '#3b0764'
    }
  },
  violet: {
    50: {
      value: '#f5f3ff'
    },
    100: {
      value: '#ede9fe'
    },
    200: {
      value: '#ddd6fe'
    },
    300: {
      value: ' #c4b5fd'
    },
    400: {
      value: '#a78bfa'
    },
    500: {
      value: '#8b5cf6'
    },
    600: {
      value: '#7c3aed'
    },
    700: {
      value: '#6d28d9'
    },
    800: {
      value: '#5b21b6'
    },
    900: {
      value: '#4c1d95'
    },
    950: {
      value: '#2e1065'
    }
  },
  indigo: {
    50: {
      value: '#eef2ff'
    },
    100: {
      value: '#e0e7ff'
    },
    200: {
      value: '#c7d2fe'
    },
    300: {
      value: ' #a5b4fc'
    },
    400: {
      value: '#818cf8'
    },
    500: {
      value: '#6366f1'
    },
    600: {
      value: '#4f46e5'
    },
    700: {
      value: '#4338ca'
    },
    800: {
      value: '#3730a3'
    },
    900: {
      value: '#312e81'
    },
    950: {
      value: '#1e1b4b'
    }
  },
  blue: {
    50: {
      value: '#eff6ff'
    },
    100: {
      value: '#dbeafe'
    },
    200: {
      value: '#bfdbfe'
    },
    300: {
      value: ' #93c5fd'
    },
    400: {
      value: '#60a5fa'
    },
    500: {
      value: '#3b82f6'
    },
    600: {
      value: '#2563eb'
    },
    700: {
      value: '#1d4ed8'
    },
    800: {
      value: '#1e40af'
    },
    900: {
      value: '#1e3a8a'
    },
    950: {
      value: '#172554'
    }
  },
  sky: {
    50: {
      value: '#f0f9ff'
    },
    100: {
      value: '#e0f2fe'
    },
    200: {
      value: '#bae6fd'
    },
    300: {
      value: ' #7dd3fc'
    },
    400: {
      value: '#38bdf8'
    },
    500: {
      value: '#0ea5e9'
    },
    600: {
      value: '#0284c7'
    },
    700: {
      value: '#0369a1'
    },
    800: {
      value: '#075985'
    },
    900: {
      value: '#0c4a6e'
    },
    950: {
      value: '#082f49'
    }
  },
  cyan: {
    50: {
      value: '#ecfeff'
    },
    100: {
      value: '#cffafe'
    },
    200: {
      value: '#a5f3fc'
    },
    300: {
      value: ' #67e8f9'
    },
    400: {
      value: '#22d3ee'
    },
    500: {
      value: '#06b6d4'
    },
    600: {
      value: '#0891b2'
    },
    700: {
      value: '#0e7490'
    },
    800: {
      value: '#155e75'
    },
    900: {
      value: '#164e63'
    },
    950: {
      value: '#083344'
    }
  },
  teal: {
    50: {
      value: '#f0fdfa'
    },
    100: {
      value: '#ccfbf1'
    },
    200: {
      value: '#99f6e4'
    },
    300: {
      value: ' #5eead4'
    },
    400: {
      value: '#2dd4bf'
    },
    500: {
      value: '#14b8a6'
    },
    600: {
      value: '#0d9488'
    },
    700: {
      value: '#0f766e'
    },
    800: {
      value: '#115e59'
    },
    900: {
      value: '#134e4a'
    },
    950: {
      value: '#042f2e'
    }
  },
  emerald: {
    50: {
      value: '#ecfdf5'
    },
    100: {
      value: '#d1fae5'
    },
    200: {
      value: '#a7f3d0'
    },
    300: {
      value: ' #6ee7b7'
    },
    400: {
      value: '#34d399'
    },
    500: {
      value: '#10b981'
    },
    600: {
      value: '#059669'
    },
    700: {
      value: '#047857'
    },
    800: {
      value: '#065f46'
    },
    900: {
      value: '#064e3b'
    },
    950: {
      value: '#022c22'
    }
  },
  green: {
    50: {
      value: '#f0fdf4'
    },
    100: {
      value: '#dcfce7'
    },
    200: {
      value: '#bbf7d0'
    },
    300: {
      value: ' #86efac'
    },
    400: {
      value: '#4ade80'
    },
    500: {
      value: '#22c55e'
    },
    600: {
      value: '#16a34a'
    },
    700: {
      value: '#15803d'
    },
    800: {
      value: '#166534'
    },
    900: {
      value: '#14532d'
    },
    950: {
      value: '#052e16'
    }
  },
  lime: {
    50: {
      value: '#f7fee7'
    },
    100: {
      value: '#ecfccb'
    },
    200: {
      value: '#d9f99d'
    },
    300: {
      value: ' #bef264'
    },
    400: {
      value: '#a3e635'
    },
    500: {
      value: '#84cc16'
    },
    600: {
      value: '##65a30d'
    },
    700: {
      value: '#4d7c0f'
    },
    800: {
      value: '#3f6212'
    },
    900: {
      value: '#365314'
    },
    950: {
      value: '#1a2e05'
    }
  },
  yellow: {
    50: {
      value: '#fefce8'
    },
    100: {
      value: '#fef9c3'
    },
    200: {
      value: '#fef08a'
    },
    300: {
      value: ' #fde047'
    },
    400: {
      value: '#facc15'
    },
    500: {
      value: '#eab308'
    },
    600: {
      value: '#ca8a04'
    },
    700: {
      value: '#a16207'
    },
    800: {
      value: '#854d0e'
    },
    900: {
      value: '#713f12'
    },
    950: {
      value: '#422006'
    }
  },
  amber: {
    50: {
      value: '#fffbeb'
    },
    100: {
      value: '#fef3c7'
    },
    200: {
      value: '#fde68a'
    },
    300: {
      value: ' #fcd34d'
    },
    400: {
      value: '#fbbf24'
    },
    500: {
      value: '#f59e0b'
    },
    600: {
      value: '#d97706'
    },
    700: {
      value: '#b45309'
    },
    800: {
      value: '#92400e'
    },
    900: {
      value: '#78350f'
    },
    950: {
      value: '#451a03'
    }
  },
  orange: {
    50: {
      value: '#fff7ed'
    },
    100: {
      value: '#ffedd5'
    },
    200: {
      value: '#fed7aa'
    },
    300: {
      value: ' #fdba74'
    },
    400: {
      value: '#fb923c'
    },
    500: {
      value: '#f97316'
    },
    600: {
      value: '#ea580c'
    },
    700: {
      value: '#c2410c'
    },
    800: {
      value: '#9a3412'
    },
    900: {
      value: '#7c2d12'
    },
    950: {
      value: '#431407'
    }
  },
  red: {
    50: {
      value: '#fef2f2'
    },
    100: {
      value: '#fee2e2'
    },
    200: {
      value: '#fecaca'
    },
    300: {
      value: ' #fca5a5'
    },
    400: {
      value: '#f87171'
    },
    500: {
      value: '#ef4444'
    },
    600: {
      value: '#dc2626'
    },
    700: {
      value: '#b91c1c'
    },
    800: {
      value: '#991b1b'
    },
    900: {
      value: '#7f1d1d'
    },
    950: {
      value: '#450a0a'
    }
  },
  neutral: {
    50: {
      value: '#fafafa'
    },
    100: {
      value: '#f5f5f5'
    },
    200: {
      value: '#e5e5e5'
    },
    300: {
      value: ' #d4d4d4'
    },
    400: {
      value: '#a3a3a3'
    },
    500: {
      value: '#737373'
    },
    600: {
      value: '#525252'
    },
    700: {
      value: '#404040'
    },
    800: {
      value: '#262626'
    },
    900: {
      value: '#171717'
    },
    950: {
      value: '#0a0a0a'
    }
  },
  stone: {
    50: {
      value: '#fafaf9'
    },
    100: {
      value: '#f5f5f4'
    },
    200: {
      value: '#e7e5e4'
    },
    300: {
      value: '#d6d3d1'
    },
    400: {
      value: '#a8a29e'
    },
    500: {
      value: '#78716c'
    },
    600: {
      value: '#57534e  '
    },
    700: {
      value: '#44403c'
    },
    800: {
      value: '#292524'
    },
    900: {
      value: '#1c1917'
    },
    950: {
      value: '#0c0a09'
    }
  },
  zinc: {
    50: {
      value: '#fafafa'
    },
    100: {
      value: '#f4f4f5'
    },
    200: {
      value: '#e4e4e7'
    },
    300: {
      value: '#d4d4d8'
    },
    400: {
      value: '#a1a1aa'
    },
    500: {
      value: '#71717a'
    },
    600: {
      value: '#52525b '
    },
    700: {
      value: '#3f3f46'
    },
    800: {
      value: '#27272a'
    },
    900: {
      value: '#18181b'
    },
    950: {
      value: '#09090b'
    }
  },
  gray: {
    50: {
      value: '#f9fafb'
    },
    100: {
      value: '#f3f4f6'
    },
    200: {
      value: '#e5e7eb'
    },
    300: {
      value: '#d1d5db'
    },
    400: {
      value: '#9ca3af'
    },
    500: {
      value: '#6b7280 '
    },
    600: {
      value: '#4b5563'
    },
    700: {
      value: '#374151'
    },
    800: {
      value: '#1f2937'
    },
    900: {
      value: '#111827'
    },
    950: {
      value: '#030712'
    }
  },
  slate: {
    50: {
      value: '#f8fafc'
    },
    100: {
      value: '#f1f5f9'
    },
    200: {
      value: '#e2e8f0'
    },
    300: {
      value: '#cbd5e1'
    },
    400: {
      value: '#94a3b8'
    },
    500: {
      value: '#64748b'
    },
    600: {
      value: '#475569'
    },
    700: {
      value: '#334155'
    },
    800: {
      value: '#1e293b'
    }
  },
  grayAlpha: {
    1: {
      value: 'rgba(5, 5, 88, 0.01)'
    },
    2: {
      value: 'rgba(5, 5, 88, 0.02)'
    },
    3: {
      value: 'rgba(0, 0, 59, 0.05)'
    },
    4: {
      value: 'rgba(2, 2, 52, 0.08)'
    },
    5: {
      value: 'rgba(0, 0, 48, 0.11)'
    },
    6: {
      value: 'rgba(1, 1, 46, 0.13)'
    },
    7: {
      value: 'rgba(1, 6, 47, 0.17)'
    },
    8: {
      value: 'rgba(0, 8, 47, 0.28)'
    },
    9: {
      value: 'rgba(0, 4, 29, 0.46)'
    },
    10: {
      value: 'rgba(0, 4, 24, 0.51)'
    },
    11: {
      value: 'rgba(0, 7, 19, 0.62)'
    },
    12: {
      value: 'rgba(0, 5, 9, 0.89)'
    }
  },
  darkGrayAlpha: {
    1: {
      value: 'rgba(24, 24, 246, 0.01)'
    },
    2: {
      value: 'rgba(121, 121, 250, 0.03)'
    },
    3: {
      value: 'rgba(189, 200, 255, 0.09)'
    },
    4: {
      value: 'rgba(199, 214, 254, 0.13)'
    },
    5: {
      value: 'rgba(210, 223, 255, 0.16)'
    },
    6: {
      value: 'rgba(212, 228, 254, 0.19)'
    },
    7: {
      value: 'rgba(213, 234, 254, 0.24)'
    },
    8: {
      value: 'rgba(223, 242, 253, 0.33)'
    },
    9: {
      value: 'rgba(221, 233, 255, 0.41)'
    },
    10: {
      value: 'rgba(228, 238, 255, 0.49)'
    },
    11: {
      value: 'rgba(239, 245, 255, 0.69)'
    },
    12: {
      value: 'rgba(252, 253, 255, 0.94)'
    }
  },

  userColors: {
    // Picked from radix colors
    gray: {
      value: '#00000072'
    },
    mauve: {
      value: '#05001D73'
    },
    slate: {
      value: '#00051D74'
    },
    sage: {
      value: '#00110B79'
    },
    olive: {
      value: '#050F0078'
    },
    sand: {
      value: '#0F0F0079'
    },
    tomato: {
      value: '#DF2600D1'
    },
    red: {
      value: '#DB0007B7'
    },
    ruby: {
      value: '#DB002CB9'
    },
    crimson: {
      value: '#E2005BC2'
    },
    pink: {
      value: '#C8007FBF'
    },
    plum: {
      value: '#89009EB5'
    },
    purple: {
      value: '#5C00ADB1'
    },
    violet: {
      value: '#2400B7A9'
    },
    iris: {
      value: '#0000C0A4'
    },
    indigo: {
      value: '#0031D2C1'
    },
    cyan: {
      value: '#00A2C7'
    },
    teal: {
      value: '#009E8CED'
    },
    jade: {
      value: '#00916BD6'
    },
    green: {
      value: '#008F4ACF'
    },
    grass: {
      value: '#008619B9'
    },
    bronze: {
      value: '#551A008D'
    },
    gold: {
      value: '#5332009A'
    },
    brown: {
      value: '#823C00A7'
    },
    orange: {
      value: '#F65E00EA'
    },
    amber: {
      value: '#FFB300C2'
    },
    yellow: {
      value: '#FFE100D6'
    },
    lime: {
      value: '#93E4009C'
    },
    mint: {
      value: '#00D3A579'
    },
    sky: {
      value: '#00C7FE83'
    }
  },
  darkUserColors: {
    // Taken from radix colors
    gray: {
      value: '#FFFFFFAF'
    },
    mauve: {
      value: '#F5F1FFB7'
    },
    slate: {
      value: '#F1F7FEB5'
    },
    sage: {
      value: '#F4FEFBB0'
    },
    olive: {
      value: '#F6FEF4B0'
    },
    sand: {
      value: '#FFFCF4B0'
    },
    tomato: {
      value: '#FE5431E4'
    },
    red: {
      value: '#FE4E54E4'
    },
    ruby: {
      value: '#FE4C70E4'
    },
    crimson: {
      value: '#FE418DE8'
    },
    pink: {
      value: '#FE49BCD4'
    },
    plum: {
      value: '#E961FEB6'
    },
    purple: {
      value: '#B661FFC2'
    },
    violet: {
      value: '#8668FFCC'
    },
    iris: {
      value: '#6A6AFED4'
    },
    indigo: {
      value: '#4671FFDB'
    },
    cyan: {
      value: '#00CFFFC3'
    },
    teal: {
      value: '#13FFE49F'
    },
    jade: {
      value: '#38FECA9D'
    },
    green: {
      value: '#43FEA4AB'
    },
    grass: {
      value: '#72FF8DAE'
    },
    bronze: {
      value: '#FEC7B09B'
    },
    gold: {
      value: '#FFDBA690'
    },
    brown: {
      value: '#FEB87DA8'
    },
    orange: {
      value: '#FE6D15F7'
    },
    amber: {
      value: '#FFC53D'
    },
    yellow: {
      value: '#FFE629'
    },
    lime: {
      value: '#CAFF69ED'
    },
    mint: {
      value: '#92FFE7E9'
    },
    sky: {
      value: '#7CE3FFFE'
    }
  }
})



export const semanticColors = defineSemanticTokens.colors({
  background: {
    app: {
      value: { base: '{colors.lightModeBg}', _dark: '{colors.black}' }
    },
    muted: {
      value: { base: '{colors.grayAlpha.3}', _dark: '{colors.darkGrayAlpha.3}' }
    },
    primary: {
      value: { base: '{colors.orangePrimaryAlpha.9}', _dark: '{colors.darkOrangePrimaryAlpha.9}' }
    }
  },
  text: {
    app: {
      value: { base: '{colors.black}', _dark: '{colors.offWhite}' }
    },
    muted: {
      value: { base: '{colors.grayAlpha.11}', _dark: '{colors.darkGrayAlpha.11}' }
    },
    primary: {
      value: { base: '{colors.orangePrimaryAlpha.11}', _dark: '{colors.darkOrangePrimaryAlpha.11}' }
    },
    // error: {
    //   value: { base: '{colors.brand.errorA.11}', _dark: '{colors.darkErrorAlpha.11}' }
    // },
 
  },
 
  brand: {
    orangePrimary: {
      1: {
        value: { base: '{colors.orangePrimary.1}', _dark: '{colors.darkOrangePrimary.1}' }
      },
      2: {
        value: { base: '{colors.orangePrimary.2}', _dark: '{colors.darkOrangePrimary.2}' }
      },
      3: {
        value: { base: '{colors.orangePrimary.3}', _dark: '{colors.darkOrangePrimary.3}' }
      },
      4: {
        value: { base: '{colors.orangePrimary.4}', _dark: '{colors.darkOrangePrimary.4}' }
      },
      5: {
        value: { base: '{colors.orangePrimary.5}', _dark: '{colors.darkOrangePrimary.5}' }
      },
      6: {
        value: { base: '{colors.orangePrimary.6}', _dark: '{colors.darkOrangePrimary.6}' }
      },
      7: {
        value: { base: '{colors.orangePrimary.7}', _dark: '{colors.darkOrangePrimary.7}' }
      },
      8: {
        value: { base: '{colors.orangePrimary.8}', _dark: '{colors.darkOrangePrimary.8}' }
      },
      9: {
        value: { base: '{colors.orangePrimary.9}', _dark: '{colors.darkOrangePrimary.9}' }
      },
      10: {
        value: { base: '{colors.orangePrimary.10}', _dark: '{colors.darkOrangePrimary.10}' }
      },
      11: {
        value: { base: '{colors.orangePrimary.11}', _dark: '{colors.darkOrangePrimary.11}' }
      },
      12: {
        value: { base: '{colors.orangePrimary.12}', _dark: '{colors.darkOrangePrimary.12}' }
      }
    },
    orangePrimaryA: {
      DEFAULT: {
        value: { base: '{colors.orangePrimaryAlpha.1}', _dark: '{colors.darkOrangePrimaryAlpha.1}' }
      },
      2: {
        value: { base: '{colors.orangePrimaryAlpha.2}', _dark: '{colors.darkOrangePrimaryAlpha.2}' }
      },
      3: {
        value: { base: '{colors.orangePrimaryAlpha.3}', _dark: '{colors.darkOrangePrimaryAlpha.3}' }
      },
      4: {
        value: { base: '{colors.orangePrimaryAlpha.4}', _dark: '{colors.darkOrangePrimaryAlpha.4}' }
      },
      5: {
        value: { base: '{colors.orangePrimaryAlpha.5}', _dark: '{colors.darkOrangePrimaryAlpha.5}' }
      },
      6: {
        value: { base: '{colors.orangePrimaryAlpha.6}', _dark: '{colors.darkOrangePrimaryAlpha.6}' }
      },
      7: {
        value: { base: '{colors.orangePrimaryAlpha.7}', _dark: '{colors.darkOrangePrimaryAlpha.7}' }
      },
      8: {
        value: { base: '{colors.orangePrimaryAlpha.8}', _dark: '{colors.darkOrangePrimaryAlpha.8}' }
      },
      9: {
        value: { base: '{colors.orangePrimaryAlpha.9}', _dark: '{colors.darkOrangePrimaryAlpha.9}' }
      },
      10: {
        value: { base: '{colors.orangePrimaryAlpha.10}', _dark: '{colors.darkOrangePrimaryAlpha.10}' }
      },
      11: {
        value: { base: '{colors.orangePrimaryAlpha.11}', _dark: '{colors.darkOrangePrimaryAlpha.11}' }
      },
      12: {
        value: { base: '{colors.orangePrimaryAlpha.12}', _dark: '{colors.darkOrangePrimaryAlpha.12}' }
      }
    }
  }
})


export const USER_COLORS = [
  'gray',
  'sand',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky'
]

