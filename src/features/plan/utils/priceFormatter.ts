export function priceFormatted(
  monthlyPrice: number,
  isAnnual: boolean,
  locale: string = 'en-US'
): string {
  const finalPrice = isAnnual ? monthlyPrice * 0.85 : monthlyPrice

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(finalPrice)
}
