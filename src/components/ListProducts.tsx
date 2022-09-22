import { Skeleton } from "@mui/material"
import { useGetProducts } from "hooks"
import { CardProducts } from "./CardProducts"

interface Props {
  limitOfProducts?: number
}

export const ListProducts = ({ limitOfProducts }: Props) => {
  const { isLoading, products, isExistingProducts } = useGetProducts({
    limit: limitOfProducts,
  })

  return (
    <div className="px-36 grid grid-cols-4 gap-10">
      {isLoading &&
        [...Array(4)].map((e, i) => (
          <Skeleton variant="rectangular" className="h-full" />
        ))}

      {isExistingProducts &&
        products.map((product) => <CardProducts {...product} />)}
    </div>
  )
}
