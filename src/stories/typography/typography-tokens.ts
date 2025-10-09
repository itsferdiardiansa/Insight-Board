type Token = {
  [key in 'name' | 'token' | 'fontSize' | 'lineHeight']?: string
}

export type TypographyToken = {
  title: string
  tokens: Token[]
}

export const typographyTokens: TypographyToken[] = [
  {
    title: 'Heading',
    tokens: [
      {
        name: 'Display',
        token: 'text-display',
        fontSize: '3.75rem / 60px',
        lineHeight: '4.6rem / 75px',
      },
      {
        name: 'Heading / 5XL',
        token: 'text-heading-5xl',
        fontSize: '3rem / 48px',
        lineHeight: '4.125rem / 66px',
      },
      {
        name: 'Heading / 4XL',
        token: 'text-heading-4xl',
        fontSize: '2.25rem / 36px',
        lineHeight: '3rem / 49.5px',
      },
      {
        name: 'Heading / 3XL',
        token: 'text-heading-3xl',
        fontSize: '1.875rem / 30px',
        lineHeight: '2.5rem / 41px',
      },
      {
        name: 'Heading / 2XL',
        token: 'text-heading-2xl',
        fontSize: '1.5rem / 24px',
        lineHeight: '2rem / 33px',
      },
      {
        name: 'Heading / XL',
        token: 'text-heading-xl',
        fontSize: '1.25rem / 20px',
        lineHeight: '1.8rem / 30px',
      },
      {
        name: 'Heading / LG',
        token: 'text-heading-lg',
        fontSize: '1.125rem / 18px',
        lineHeight: '1.6rem / 27px',
      },
    ],
  },
  {
    title: 'Body',
    tokens: [
      {
        name: 'Body / LG',
        token: 'text-body-lg',
        fontSize: '1.125rem / 18px',
        lineHeight: '1.6',
      },
      {
        name: 'Body / MD',
        token: 'text-body-md',
        fontSize: '1rem / 16px',
        lineHeight: '1.5',
      },
      {
        name: 'Body / SM',
        token: 'text-body-sm',
        fontSize: '.875rem / 14px',
        lineHeight: '1.4',
      },
    ],
  },
  {
    title: 'Caption & Overline',
    tokens: [
      {
        name: 'Caption',
        token: 'text-caption',
        fontSize: '0.75rem / 12px',
        lineHeight: '1.25rem / 20px (tight)',
      },
      {
        name: 'Overline',
        token: 'text-overline',
        fontSize: '0.625rem / 10px',
        lineHeight: 'normal',
      },
    ],
  },
  {
    title: 'Labels',
    tokens: [
      {
        name: 'Label / Large',
        token: 'text-label-lg',
        fontSize: '0.875rem / 14px → 1rem / 16px (md)',
        lineHeight: '1.5rem / 24px (normal)',
      },
      {
        name: 'Label / Small',
        token: 'text-label-sm',
        fontSize: '0.75rem / 12px',
        lineHeight: '1.25rem / 20px (normal)',
      },
    ],
  },
  {
    title: 'Code & Links',
    tokens: [
      {
        name: 'Code',
        token: 'text-code',
        fontSize: '0.875rem / 14px',
        lineHeight: '1.25rem / 20px (normal)',
      },
      {
        name: 'Link',
        token: 'text-link',
        fontSize: '0.875rem / 14px',
        lineHeight: '1.25rem / 20px (normal)',
      },
    ],
  },
  {
    title: 'Text Styles',
    tokens: [
      {
        name: 'Muted',
        token: 'text-muted',
        fontSize: '0.875rem / 14px',
        lineHeight: '1.25rem / 20px (normal)',
      },
      {
        name: 'Strong',
        token: 'text-strong',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      },
      {
        name: 'Emphasis',
        token: 'text-em',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      },
    ],
  },
]
