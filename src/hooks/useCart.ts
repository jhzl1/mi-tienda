import { ItemToCart } from "interfaces/Product"
import {
  addItem,
  closeCart,
  deleteProduct,
  openCart,
  resetCart,
  updateProduct,
  updateProductQuantity,
} from "store/slices"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { renderPopup, renderPopupSuccess } from "helpers/renderPopup"

export const useCart = () => {
  const dispatch = useAppDispatch()
  const productsOnCart = useAppSelector((state) => state.cart.products)

  const updateProductOfCart = (id: number, quantity: number) => {
    dispatch(updateProduct({ id, quantity }))
  }

  const _updateQuantityProduct = (id: number, quantity: number) => {
    dispatch(updateProductQuantity({ id, quantity }))

    renderPopup("The item has been updated")
  }

  const findProductById = (productId: number) => {
    return productsOnCart.find((product) => product.id === productId)
  }

  const handleAddToCart = (productData: ItemToCart) => {
    const { id, quantity } = productData

    const productAlreadyAdded = findProductById(id)

    if (productAlreadyAdded) return _updateQuantityProduct(id, quantity)

    dispatch(addItem(productData))

    renderPopup("The item has been added to the cart")
  }
  const handleDeleteProduct = (id: number) => dispatch(deleteProduct(id))

  const handleCloseCart = () => dispatch(closeCart())
  const handleOpenCart = () => dispatch(openCart())
  const handleResetCart = () => dispatch(resetCart())

  const handleCheckout = () => {
    renderPopupSuccess()
    handleResetCart()
  }

  return {
    handleAddToCart,
    handleCloseCart,
    handleOpenCart,
    handleResetCart,
    updateQuantityProduct: _updateQuantityProduct,
    updateProductOfCart,
    handleDeleteProduct,
    handleCheckout,
  }
}
