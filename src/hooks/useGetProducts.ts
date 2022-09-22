import { fetchApi } from "api/fakeStoreApi"
import { Product } from "interfaces/Product"
import { useEffect, useState } from "react"

interface Props {
  limit?: number
}

export const useGetProducts = ({ limit }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const isExistingProducts = products.length > 0

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)

      try {
        const { data } = await fetchApi<Product[]>({
          endpoint: "/products",
          method: "GET",
          ...(limit && {
            params: {
              limit,
            },
          }),
        })

        setProducts(data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    getProducts()
  }, [])

  return { isLoading, products, isExistingProducts }
}
