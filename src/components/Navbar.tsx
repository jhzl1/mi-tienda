import { Badge, IconButton } from "@mui/material"

export const Navbar = () => {
  return (
    <div className="bg-white/40 w-[95%] top-3 fixed left-1/2 transform -translate-x-1/2 p-4 rounded-lg flex justify-between items-center backdrop-blur">
      <div className="flex items-center">
        <i className="fa-solid fa-bag-shopping text-3xl text-blue-500" />
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
