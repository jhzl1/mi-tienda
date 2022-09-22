import { ItemToCart } from "interfaces/Product"
import { addItem, closeCart, openCart, resetCart } from "store/slices"
import { useAppDispatch } from "./useAppDispatch"
import { Store } from "react-notifications-component"

export const useCart = () => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (productData: ItemToCart) => {
    dispatch(addItem(productData))

    Store.addNotification({
      message: "The item has been added to the cart",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__flipInX"],
      animationOut: ["animate__animated", "animate__flipOutX"],
      dismiss: {
        duration: 4000,
        onScreen: true,
      },
    })
  }

  const handleCloseCart = () => dispatch(closeCart())
  const handleOpenCart = () => dispatch(openCart())
  const handleResetCart = () => dispatch(resetCart())

  return { handleAddToCart, handleCloseCart, handleOpenCart, handleResetCart }
}
