import { Badge, IconButton } from "@mui/material"

export const Navbar = () => {
  return (
    <div className="bg-gray-200 w-[95%] top-3 fixed left-1/2 transform -translate-x-1/2 py-3 px-12 rounded-xl flex justify-between items-center z-10 shadow-md">
      <div className="flex items-center text-blue-500">
        <i className="fa-solid fa-bag-shopping text-3xl" />
        <span id="navbar-title" className="font-extrabold text-3xl ml-2">
          MiTienda
        </span>
      </div>
      <IconButton aria-label="cart">
        <Badge badgeContent={4} color="primary">
          <i className="fa-solid fa-cart-shopping text-3xl" />
        </Badge>
      </IconButton>
    </div>
  )
}
