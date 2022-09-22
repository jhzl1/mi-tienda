import { Badge, IconButton } from "@mui/material"
import { CartIcon } from "assets/icons/CartIcon"
import { useAppSelector, useCart } from "hooks"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const productsOnCart = useAppSelector((state) => state.cart.products)

  const totalProductsOnCart = productsOnCart.length

  const { handleOpenCart } = useCart()

  return (
    <div className="bg-gray-200 w-[95%] top-3 fixed left-1/2 transform -translate-x-1/2 py-3 px-12 rounded-xl flex justify-between items-center z-10 shadow-md">
      <Link to="/">
        <div className="flex items-center text-blue-500">
          <i className="fa-solid fa-bag-shopping text-3xl" />
          <span id="navbar-title" className="font-extrabold text-3xl ml-2">
            MyStore
          </span>
        </div>
      </Link>
      <IconButton aria-label="cart" onClick={handleOpenCart}>
        <Badge badgeContent={totalProductsOnCart} color="primary">
          <CartIcon className="w-7" />
        </Badge>
      </IconButton>
    </div>
  )
}
