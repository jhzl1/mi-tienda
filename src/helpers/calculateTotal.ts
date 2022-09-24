import { store } from "store"

export const calculateTotal = () => {
  const products = store.getState().cart.products

  return products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
}
