export const currencyOptions = [
  { label: `🇺🇸 USD`, value: 'usd' },
  { label: `🇪🇺 EUR`, value: 'eur' },
  { label: `🇬🇧 GBP`, value: 'gbp' },
  { label: `🇯🇵 JPY`, value: 'jpy' },
  { label: `🇮🇩 IDR`, value: 'idr' },
  { label: `🇨🇦 CAD`, value: 'cad' },
  { label: `🇦🇺 AUD`, value: 'aud' },
  { label: `🇨🇭 CHF`, value: 'chf' },
  { label: `🇨🇳 CNY`, value: 'cny' },
  { label: `🇸🇬 SGD`, value: 'sgd' },
] as const

export const currencyRates = {
  usd: 1,
  eur: 0.91,
  gbp: 0.78,
  jpy: 141,
  idr: 15500,
  cad: 1.35,
  aud: 1.47,
  chf: 0.88,
  cny: 7.2,
  sgd: 1.34,
} as const

export type CurrencyRateKeys = keyof typeof currencyRates
export type CurrencyOptions = typeof currencyOptions
export type CurrencyValues = CurrencyOptions[number]['value']
