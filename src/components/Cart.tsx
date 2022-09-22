import { Button, Drawer } from "@mui/material"
import { useAppSelector, useCart } from "hooks"
import { CartItem } from "./CartItem"

export const Cart = () => {
  const openCart = useAppSelector((state) => state.cart.isOpenCart)

  const itemsOnCart = useAppSelector((state) => state.cart.products)

  const { handleCloseCart, handleResetCart } = useCart()

  return (
    <Drawer
      anchor="right"
      open={openCart}
      onClose={handleCloseCart}
      color="white"
    >
      <div className="w-[500px] p-2 h-full relative">
        {itemsOnCart.length === 0 ? (
          <span className="block text-center w-full text-lg">
            The cart is empty
          </span>
        ) : (
          itemsOnCart.map((item) => <CartItem {...item} />)
        )}

        <div className="absolute bottom-0 right-0 p-3 grid grid-cols-2 gap-4 ">
          <Button
            onClick={handleResetCart}
            color="secondary"
            disabled={itemsOnCart.length === 0}
          >
            Reset cart
          </Button>
          <Button disabled={itemsOnCart.length === 0}>Checkout</Button>
        </div>
      </div>
    </Drawer>
  )
}
