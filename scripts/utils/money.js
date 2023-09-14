// utils folder => to save the code which can used everywhere (share function)
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}
