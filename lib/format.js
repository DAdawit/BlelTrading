// Small shared helpers used anywhere a product price is displayed.

export function fmtPrice(n) {
  return `$${n.toFixed(2)}`;
}

export function discountedPrice(product) {
  return product.price - (product.price * product.discount) / 100;
}
