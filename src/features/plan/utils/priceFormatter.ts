export function priceFormatted(
  monthlyPrice: number,
  isAnnual: boolean,
  locale: string = 'en-US',
  currency: string = 'USD'
): string {
  const finalPrice = isAnnual
    ? monthlyPrice * 0.85 // apply 15% discount
    : monthlyPrice

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(finalPrice)
}
