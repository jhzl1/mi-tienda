import { fetchApi } from "api/fakeStoreApi"
import { Product } from "interfaces/Product"
import { useEffect, useState } from "react"

export const useGetProduct = (idProduct: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)

      try {
        const { data } = await fetchApi<Product>({
          endpoint: `/products/${idProduct}`,
          method: "GET",
        })

        setProduct(data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    getProducts()
  }, [])

  return { product, isLoading }
}
