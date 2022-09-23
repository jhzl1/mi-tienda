import { store } from "store"

export const calculateTotal = () => {
  const products = store.getState().cart.products

  if (products.length === 0) return 0

  const totals: number[] = []

  for (const product of products) {
    totals.push(product.price * product.quantity)
  }

  return totals.reduce((acc, i) => acc + i)
}
