export const tokenSemantic = [
  'primary',
  'secondary',
  'success',
  'destructive',
  'info',
  'warning',
] as const

export type TokenSemantic = (typeof tokenSemantic)[number]
export type TokenGroup = 'core' | 'semantic'
export type TokenItem = {
  name: string
  palette: string
  description: string
}
export type Tokens = Partial<{
  [key in TokenSemantic | TokenGroup]: TokenItem[]
}> & {
  [key in string]: Record<string, TokenItem[]> | TokenItem[]
}

export type TokenKeys = keyof Tokens

export const textColorTokens: Tokens = {
  core: [
    {
      name: 'text-default',
      palette: 'bg-neutral-800',
      description:
        'Use for default body text, buttons, and standard content elements.',
    },
    {
      name: 'text-subtle',
      palette: 'bg-neutral-600',
      description:
        'Use for secondary text, hints, or helper content with less emphasis.',
    },
    {
      name: 'text-subtlest',
      palette: 'bg-neutral-400',
      description:
        'Use for lowest emphasis text like placeholders or disabled labels.',
    },
    {
      name: 'text-inverse',
      palette: 'bg-neutral-50',
      description: 'Use for bold background.',
    },
    {
      name: 'text-warning-inverse',
      palette: 'bg-neutral-700',
      description: 'Use for warning background.',
    },
  ],
  semantic: [
    {
      name: 'text-primary',
      palette: 'bg-violet-700',
      description:
        'Use for brand-driven text such as titles, links, or main actions.',
    },
    {
      name: 'text-secondary',
      palette: 'bg-neutral-700',
      description: 'Use for brand-driven sub text such as sub title.',
    },
    {
      name: 'text-success',
      palette: 'bg-green-600',
      description:
        'Use for positive status text such as success messages or confirmations.',
    },
    {
      name: 'text-warning',
      palette: 'bg-yellow-600',
      description: 'Use for cautionary or warning messages to alert users.',
    },
    {
      name: 'text-destructive',
      palette: 'bg-red-700',
      description:
        'Use for destructive actions, errors, or danger alerts in text.',
    },
    {
      name: 'text-info',
      palette: 'bg-blue-700',
      description:
        'Use for informational or neutral notices, system hints, or inline help.',
    },
  ],
  accents: {
    violet: [
      {
        name: 'text-accent-violet',
        palette: 'bg-violet-700',
        description: 'Use for secondary brand highlights or decorative labels.',
      },
      {
        name: 'text-accent-violet-intense',
        palette: 'bg-violet-800',
        description:
          'Use for strong brand emphasis in headers, badges, or key highlights.',
      },
    ],
    gray: [
      {
        name: 'text-accent-gray',
        palette: 'bg-gray-700',
        description:
          'Use for grayscale accents in text elements such as labels, subtitles, or secondary actions.',
      },
      {
        name: 'text-accent-gray-intense',
        palette: 'bg-gray-800',
        description:
          'Use for strong grayscale accents in text elements such as high-contrast labels or key actions.',
      },
    ],
    red: [
      {
        name: 'text-accent-red',
        palette: 'bg-red-700',
        description:
          'Use for red accent text in warnings, errors, or critical messages.',
      },
      {
        name: 'text-accent-red-intense',
        palette: 'bg-red-800',
        description:
          'Use for stronger red accents in text for critical emphasis or destructive actions.',
      },
    ],
    green: [
      {
        name: 'text-accent-green',
        palette: 'bg-green-700',
        description:
          'Use for green accent text to represent success, confirmations, or positive status.',
      },
      {
        name: 'text-accent-green-intense',
        palette: 'bg-green-800',
        description:
          'Use for stronger green accents in text to emphasize success or approved actions.',
      },
    ],
    cyan: [
      {
        name: 'text-accent-cyan',
        palette: 'bg-cyan-700',
        description:
          'Use for cyan accent text in info or system-related messages.',
      },
      {
        name: 'text-accent-cyan-intense',
        palette: 'bg-cyan-800',
        description:
          'Use for stronger cyan text accents to highlight system alerts or informational emphasis.',
      },
    ],
    orange: [
      {
        name: 'text-accent-orange',
        palette: 'bg-orange-700',
        description:
          'Use for orange text accents in promotional, warning, or highlight areas.',
      },
      {
        name: 'text-accent-orange-intense',
        palette: 'bg-orange-800',
        description:
          'Use for stronger orange text accents to draw attention to important highlights or limited-time alerts.',
      },
    ],
    blue: [
      {
        name: 'text-accent-blue',
        palette: 'bg-blue-700',
        description:
          'Use for blue accent text in links, guidance, or action hints.',
      },
      {
        name: 'text-accent-blue-intense',
        palette: 'bg-blue-800',
        description:
          'Use for stronger blue text accents in primary links, navigation, or action emphasis.',
      },
    ],
  },
}

export const borderColorTokens: Tokens = {
  core: [
    {
      name: 'border-default',
      palette: 'bg-gray-200',
      description:
        'Used for standard UI element borders, such as cards, containers, and panels.',
    },
    {
      name: 'border-disabled',
      palette: 'bg-gray-400',
      description:
        'Used for borders of disabled or inactive elements to indicate non-interactivity.',
    },
    {
      name: 'border-focused',
      palette: 'bg-violet-700',
      description:
        'Applied to elements when focused, such as form fields or interactive controls.',
    },
    {
      name: 'border-input',
      palette: 'bg-gray-300',
      description:
        'Default border color for input fields in their normal state.',
    },
    {
      name: 'border-focused',
      palette: 'bg-violet-700',
      description:
        'Default border color for input fields in their focus state.',
    },
    {
      name: 'border-error',
      palette: 'bg-red-700',
      description:
        'Default border color for input fields in their error state.',
    },
    {
      name: 'border-inverse',
      palette: 'bg-gray-50',
      description:
        'Used on light borders against dark or inverted backgrounds for contrast.',
    },
    {
      name: 'border-selected',
      palette: 'bg-violet-700',
      description:
        'Indicates an actively selected element, such as a tab, list item, or card.',
    },
  ],
  semantic: [
    {
      name: 'border-primary',
      palette: 'bg-violet-700',
      description:
        'Used for primary action boundaries, highlighting high-importance elements.',
    },
    {
      name: 'border-secondary',
      palette: 'bg-neutral-700',
      description: 'Applied to secondary or less prominent UI components.',
    },
    {
      name: 'border-success',
      palette: 'bg-green-700',
      description:
        'Indicates successful or positive status, often used in confirmations.',
    },
    {
      name: 'border-warning',
      palette: 'bg-yellow-400',
      description:
        'Highlights cautionary or warning states, such as unsaved changes.',
    },
    {
      name: 'border-destructive',
      palette: 'bg-red-700',
      description:
        'Marks elements related to destructive actions like deletions or errors.',
    },
    {
      name: 'border-info',
      palette: 'bg-blue-700',
      description:
        'Used for informational or neutral emphasis, such as tooltips or banners.',
    },
  ],
  accents: [
    {
      name: 'border-accent-violet',
      palette: 'bg-violet-600',
      description:
        'Violet accent border used to highlight interactive or special UI sections.',
    },
    {
      name: 'border-accent-gray',
      palette: 'bg-gray-600',
      description:
        'Gray accent border for subtle separation or neutral emphasis.',
    },
    {
      name: 'border-accent-red',
      palette: 'bg-red-600',
      description: 'Red accent border for urgent or error-related highlights.',
    },
    {
      name: 'border-accent-green',
      palette: 'bg-green-600',
      description:
        'Green accent border for positive emphasis or confirmation states.',
    },
    {
      name: 'border-accent-cyan',
      palette: 'bg-cyan-600',
      description:
        'Cyan accent border for drawing attention in informational contexts.',
    },
    {
      name: 'border-accent-orange',
      palette: 'bg-orange-600',
      description:
        'Orange accent border for highlighting actions or pending states.',
    },
    {
      name: 'border-accent-blue',
      palette: 'bg-blue-600',
      description:
        'Blue accent border for interactive elements or primary navigation.',
    },
  ],
}

export const backgroundColorTokens = {
  core: {
    default: [
      {
        name: 'bg-default',
        palette: 'bg-white',
        description: 'Background for UI elements.',
      },
      {
        name: 'bg-disabled',
        palette: 'bg-gray-300',
        description: 'Background for disabled or inactive UI elements.',
      },
    ],
    input: [
      {
        name: 'bg-input',
        palette: 'bg-gray-50',
        description: 'Default background for input fields.',
      },
      {
        name: 'bg-input-hovered',
        palette: 'bg-gray-100',
        description: 'Background for input fields on hover.',
      },
      {
        name: 'bg-input-pressed',
        palette: 'bg-gray-50',
        description: 'Background for input fields when active or pressed.',
      },
    ],
    inverse: [
      {
        name: 'bg-inverse',
        palette: 'bg-gray-50',
        description: 'Background for content placed on dark surfaces.',
      },
      {
        name: 'bg-inverse-hovered',
        palette: 'bg-gray-100',
        description: 'Hovered background for content on dark surfaces.',
      },
      {
        name: 'bg-inverse-pressed',
        palette: 'bg-gray-200',
        description: 'Pressed background for content on dark surfaces.',
      },
    ],
    neutral: [
      {
        name: 'bg-neutral',
        palette: 'bg-neutral-100',
        description:
          'Default neutral background for general containers or sections.',
      },
      {
        name: 'bg-neutral-hovered',
        palette: 'bg-neutral-200',
        description: 'Neutral background for hovered containers or list items.',
      },
      {
        name: 'bg-neutral-pressed',
        palette: 'bg-neutral-300',
        description: 'Neutral background for pressed or active containers.',
      },
      {
        name: 'bg-neutral-intense',
        palette: 'bg-neutral-700',
        description: 'High-contrast neutral background for emphasis areas.',
      },
      {
        name: 'bg-neutral-intense-hovered',
        palette: 'bg-neutral-800',
        description: 'Hovered state for high-contrast neutral backgrounds.',
      },
      {
        name: 'bg-neutral-intense-pressed',
        palette: 'bg-neutral-900',
        description: 'Pressed state for high-contrast neutral backgrounds.',
      },
    ],
  },
  semantic: {
    primary: [
      {
        name: 'bg-primary',
        palette: 'bg-violet-100',
        description: 'Primary background color.',
      },
      {
        name: 'bg-primary-hovered',
        palette: 'bg-violet-200',
        description: 'Hovered state for primary background.',
      },
      {
        name: 'bg-primary-pressed',
        palette: 'bg-violet-300',
        description: 'Pressed state for primary background.',
      },
      {
        name: 'bg-primary-intense',
        palette: 'bg-violet-700',
        description: 'Strong variant of primary background.',
      },
      {
        name: 'bg-primary-intense-hovered',
        palette: 'bg-violet-800',
        description: 'Hovered state for intense primary background.',
      },
      {
        name: 'bg-primary-intense-pressed',
        palette: 'bg-violet-900',
        description: 'Pressed state for intense primary background.',
      },
    ],
    secondary: [
      {
        name: 'bg-secondary',
        palette: 'bg-neutral-100',
        description: 'Secondary background color.',
      },
      {
        name: 'bg-secondary-hovered',
        palette: 'bg-neutral-200',
        description: 'Hovered state for secondary background.',
      },
      {
        name: 'bg-secondary-pressed',
        palette: 'bg-neutral-300',
        description: 'Pressed state for secondary background.',
      },
      {
        name: 'bg-secondary-intense',
        palette: 'bg-neutral-700',
        description: 'Strong variant of secondary background.',
      },
      {
        name: 'bg-secondary-intense-hovered',
        palette: 'bg-neutral-800',
        description: 'Hovered state for intense secondary background.',
      },
      {
        name: 'bg-secondary-intense-pressed',
        palette: 'bg-neutral-900',
        description: 'Pressed state for intense secondary background.',
      },
    ],
    success: [
      {
        name: 'bg-success',
        palette: 'bg-green-100',
        description: 'Success background color.',
      },
      {
        name: 'bg-success-hovered',
        palette: 'bg-green-200',
        description: 'Hovered state for success background.',
      },
      {
        name: 'bg-success-pressed',
        palette: 'bg-green-300',
        description: 'Pressed state for success background.',
      },
      {
        name: 'bg-success-intense',
        palette: 'bg-green-700',
        description: 'Strong success background.',
      },
      {
        name: 'bg-success-intense-hovered',
        palette: 'bg-green-800',
        description: 'Hovered state for intense success background.',
      },
      {
        name: 'bg-success-intense-pressed',
        palette: 'bg-green-900',
        description: 'Pressed state for intense success background.',
      },
    ],
    warning: [
      {
        name: 'bg-warning',
        palette: 'bg-yellow-100',
        description: 'Warning background color.',
      },
      {
        name: 'bg-warning-hovered',
        palette: 'bg-yellow-200',
        description: 'Hovered state for warning background.',
      },
      {
        name: 'bg-warning-pressed',
        palette: 'bg-yellow-300',
        description: 'Pressed state for warning background.',
      },
      {
        name: 'bg-warning-intense',
        palette: 'bg-yellow-400',
        description: 'Strong warning background.',
      },
      {
        name: 'bg-warning-intense-hovered',
        palette: 'bg-yellow-500',
        description: 'Hovered state for intense warning background.',
      },
      {
        name: 'bg-warning-intense-pressed',
        palette: 'bg-yellow-600',
        description: 'Pressed state for intense warning background.',
      },
    ],
    destructive: [
      {
        name: 'bg-destructive',
        palette: 'bg-red-100',
        description: 'Error/destructive background.',
      },
      {
        name: 'bg-destructive-hovered',
        palette: 'bg-red-200',
        description: 'Hovered state for destructive background.',
      },
      {
        name: 'bg-destructive-pressed',
        palette: 'bg-red-300',
        description: 'Pressed state for destructive background.',
      },
      {
        name: 'bg-destructive-intense',
        palette: 'bg-red-700',
        description: 'Strong destructive background.',
      },
      {
        name: 'bg-destructive-intense-hovered',
        palette: 'bg-red-800',
        description: 'Hovered state for intense destructive background.',
      },
      {
        name: 'bg-destructive-intense-pressed',
        palette: 'bg-red-900',
        description: 'Pressed state for intense destructive background.',
      },
    ],
    info: [
      {
        name: 'bg-info',
        palette: 'bg-blue-100',
        description: 'Informational background color.',
      },
      {
        name: 'bg-info-hovered',
        palette: 'bg-blue-200',
        description: 'Hovered state for info background.',
      },
      {
        name: 'bg-info-pressed',
        palette: 'bg-blue-300',
        description: 'Pressed state for info background.',
      },
      {
        name: 'bg-info-intense',
        palette: 'bg-blue-700',
        description: 'Strong info background.',
      },
      {
        name: 'bg-info-intense-hovered',
        palette: 'bg-blue-800',
        description: 'Hovered state for intense info background.',
      },
      {
        name: 'bg-info-intense-pressed',
        palette: 'bg-blue-900',
        description: 'Pressed state for intense info background.',
      },
    ],
  },
  accents: {
    violet: [
      {
        name: 'bg-accent-violet-subtlest',
        palette: 'bg-violet-100',
        description: 'Subtlest violet accent background.',
      },
      {
        name: 'bg-accent-violet-subtlest-hovered',
        palette: 'bg-violet-200',
        description: 'Hovered state for subtlest violet accent background.',
      },
      {
        name: 'bg-accent-violet-subtlest-pressed',
        palette: 'bg-violet-300',
        description: 'Pressed state for subtlest violet accent background.',
      },
      {
        name: 'bg-accent-violet-intense',
        palette: 'bg-violet-700',
        description: 'Intense violet accent background.',
      },
      {
        name: 'bg-accent-violet-intense-hovered',
        palette: 'bg-violet-800',
        description: 'Hovered state for intense violet accent background.',
      },
      {
        name: 'bg-accent-violet-intense-pressed',
        palette: 'bg-violet-900',
        description: 'Pressed state for intense violet accent background.',
      },
    ],
    gray: [
      {
        name: 'bg-accent-gray-subtlest',
        palette: 'bg-gray-100',
        description: 'Subtlest gray accent background.',
      },
      {
        name: 'bg-accent-gray-subtlest-hovered',
        palette: 'bg-gray-200',
        description: 'Hovered state for subtlest gray accent background.',
      },
      {
        name: 'bg-accent-gray-subtlest-pressed',
        palette: 'bg-gray-300',
        description: 'Pressed state for subtlest gray accent background.',
      },
      {
        name: 'bg-accent-gray-intense',
        palette: 'bg-gray-700',
        description: 'Intense gray accent background.',
      },
      {
        name: 'bg-accent-gray-intense-hovered',
        palette: 'bg-gray-800',
        description: 'Hovered state for intense gray accent background.',
      },
      {
        name: 'bg-accent-gray-intense-pressed',
        palette: 'bg-gray-900',
        description: 'Pressed state for intense gray accent background.',
      },
    ],
    red: [
      {
        name: 'bg-accent-red-subtlest',
        palette: 'bg-red-100',
        description: 'Subtlest red accent background.',
      },
      {
        name: 'bg-accent-red-subtlest-hovered',
        palette: 'bg-red-200',
        description: 'Hovered state for subtlest red accent background.',
      },
      {
        name: 'bg-accent-red-subtlest-pressed',
        palette: 'bg-red-300',
        description: 'Pressed state for subtlest red accent background.',
      },
      {
        name: 'bg-accent-red-intense',
        palette: 'bg-red-700',
        description: 'Intense red accent background.',
      },
      {
        name: 'bg-accent-red-intense-hovered',
        palette: 'bg-red-800',
        description: 'Hovered state for intense red accent background.',
      },
      {
        name: 'bg-accent-red-intense-pressed',
        palette: 'bg-red-900',
        description: 'Pressed state for intense red accent background.',
      },
    ],
    green: [
      {
        name: 'bg-accent-green-subtlest',
        palette: 'bg-green-100',
        description: 'Subtlest green accent background.',
      },
      {
        name: 'bg-accent-green-subtlest-hovered',
        palette: 'bg-green-200',
        description: 'Hovered state for subtlest green accent background.',
      },
      {
        name: 'bg-accent-green-subtlest-pressed',
        palette: 'bg-green-300',
        description: 'Pressed state for subtlest green accent background.',
      },
      {
        name: 'bg-accent-green-intense',
        palette: 'bg-green-700',
        description: 'Intense green accent background.',
      },
      {
        name: 'bg-accent-green-intense-hovered',
        palette: 'bg-green-800',
        description: 'Hovered state for intense green accent background.',
      },
      {
        name: 'bg-accent-green-intense-pressed',
        palette: 'bg-green-900',
        description: 'Pressed state for intense green accent background.',
      },
    ],
    cyan: [
      {
        name: 'bg-accent-cyan-subtlest',
        palette: 'bg-cyan-100',
        description: 'Subtlest cyan accent background.',
      },
      {
        name: 'bg-accent-cyan-subtlest-hovered',
        palette: 'bg-cyan-200',
        description: 'Hovered state for subtlest cyan accent background.',
      },
      {
        name: 'bg-accent-cyan-subtlest-pressed',
        palette: 'bg-cyan-300',
        description: 'Pressed state for subtlest cyan accent background.',
      },
      {
        name: 'bg-accent-cyan-intense',
        palette: 'bg-cyan-700',
        description: 'Intense cyan accent background.',
      },
      {
        name: 'bg-accent-cyan-intense-hovered',
        palette: 'bg-cyan-800',
        description: 'Hovered state for intense cyan accent background.',
      },
      {
        name: 'bg-accent-cyan-intense-pressed',
        palette: 'bg-cyan-900',
        description: 'Pressed state for intense cyan accent background.',
      },
    ],
    orange: [
      {
        name: 'bg-accent-orange-subtlest',
        palette: 'bg-orange-100',
        description: 'Subtlest orange accent background.',
      },
      {
        name: 'bg-accent-orange-subtlest-hovered',
        palette: 'bg-orange-200',
        description: 'Hovered state for subtlest orange accent background.',
      },
      {
        name: 'bg-accent-orange-subtlest-pressed',
        palette: 'bg-orange-300',
        description: 'Pressed state for subtlest orange accent background.',
      },
      {
        name: 'bg-accent-orange-intense',
        palette: 'bg-orange-700',
        description: 'Intense orange accent background.',
      },
      {
        name: 'bg-accent-orange-intense-hovered',
        palette: 'bg-orange-800',
        description: 'Hovered state for intense orange accent background.',
      },
      {
        name: 'bg-accent-orange-intense-pressed',
        palette: 'bg-orange-900',
        description: 'Pressed state for intense orange accent background.',
      },
    ],
  },
}

export const textColorTokenKeys = Object.keys(textColorTokens) as TokenKeys[]
export const borderColorTokenKeys = Object.keys(
  borderColorTokens
) as TokenKeys[]
export const backgroundColorTokenKeys = Object.keys(
  backgroundColorTokens
) as TokenKeys[]
