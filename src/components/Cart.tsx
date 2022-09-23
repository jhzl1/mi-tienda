import { Button, Drawer } from "@mui/material"
import { calculateTotal } from "helpers/calculateTotal"
import { formatMoney } from "helpers/formatMoney"
import { useAppSelector, useCart } from "hooks"
import { CartItem } from "./CartItem"

export const Cart = () => {
  const openCart = useAppSelector((state) => state.cart.isOpenCart)

  const itemsOnCart = useAppSelector((state) => state.cart.products)

  const { handleCloseCart, handleResetCart, handleCheckout } = useCart()

  const totalCart = calculateTotal()

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
          itemsOnCart.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <div className="absolute bottom-0 right-0 p-3">
          <p className="text-right p-2 font-bold text-xl">
            Total: {formatMoney(totalCart)}{" "}
          </p>
          <div className=" grid grid-cols-2 gap-4 ">
            <Button
              onClick={handleResetCart}
              color="secondary"
              disabled={itemsOnCart.length === 0}
            >
              Reset cart
            </Button>
            <Button
              disabled={itemsOnCart.length === 0}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
