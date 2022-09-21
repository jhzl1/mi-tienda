import { CardProducts } from "./CardProducts"

export const ListProducts = () => {
  return (
    <div className="px-36 grid grid-cols-4 gap-10">
      <CardProducts />
      <CardProducts />
      <CardProducts />
      <CardProducts />
    </div>
  )
}
