import { ItemToCart } from "interfaces/Product"
import {
  addItem,
  closeCart,
  openCart,
  resetCart,
  updateQuantityProduct,
} from "store/slices"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { renderPopup } from "helpers/renderPopup"

export const useCart = () => {
  const dispatch = useAppDispatch()
  const productsOnCart = useAppSelector((state) => state.cart.products)

  const _updateQuantityProduct = (product: ItemToCart) => {
    dispatch(
      updateQuantityProduct({ id: product.id, quantity: product.quantity })
    )

    renderPopup("The item has been updated")
  }

  const findProductById = (productId: number) => {
    return productsOnCart.find((product) => product.id === productId)
  }

  const handleAddToCart = (productData: ItemToCart) => {
    const productAlreadyAdded = findProductById(productData.id)

    if (productAlreadyAdded) return _updateQuantityProduct(productData)

    dispatch(addItem(productData))

    renderPopup("The item has been added to the cart")
  }

  const handleCloseCart = () => dispatch(closeCart())
  const handleOpenCart = () => dispatch(openCart())
  const handleResetCart = () => dispatch(resetCart())

  return { handleAddToCart, handleCloseCart, handleOpenCart, handleResetCart }
}
