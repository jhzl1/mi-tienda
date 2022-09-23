import { Skeleton } from "@mui/material"
import { useGetProducts } from "hooks"
import { CardProduct } from "./CardProducts"
import uuid from "react-uuid"

interface Props {
  limitOfProducts?: number
}

export const ListProducts = ({ limitOfProducts }: Props) => {
  const { isLoading, products, isExistingProducts } =
    useGetProducts(limitOfProducts)

  return (
    <div className="px-2 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {isLoading &&
        [...Array(4)].map((e, i) => (
          <Skeleton key={i} variant="rectangular" className="h-full" />
        ))}

      {isExistingProducts &&
        products.map((product) => <CardProduct key={uuid()} {...product} />)}
    </div>
  )
}
