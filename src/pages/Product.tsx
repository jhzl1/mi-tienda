import { Divider, Rating, Skeleton } from "@mui/material"
import { PageContainer } from "components/PageContainer"
import { ProductDetails } from "components/ProductDetails"
import { useCart, useGetProduct } from "hooks"
import { useParams } from "react-router-dom"

export const ProductPage = () => {
  const { productId } = useParams<"productId">()

  const { isLoading, product } = useGetProduct(Number(productId))

  const { handleAddToCart } = useCart()

  return (
    <PageContainer>
      {isLoading ? (
        <Skeleton className="!mx-2 !md:mx-36 !h-20" />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-700 px-4 xl:px-36">
          <div className="flex justify-center">
            <img src={product?.image} className="h-[400px]" />
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#003890]">
              {product?.title}
            </h3>{" "}
            <span>{product?.category}</span>
            <Divider className="!my-5" />
            <div className="mb-3 flex">
              <ProductDetails
                price={product!?.price}
                quantity={product!?.rating.count}
                onAddCart={(quantity) =>
                  handleAddToCart({
                    id: product!?.id,
                    image: product!?.image,
                    price: product!?.price,
                    quantity: quantity,
                    title: product!?.title,
                  })
                }
              />
            </div>
            <div className="flex justify-center md:block">
              <Rating
                name="read-only"
                value={Math.ceil(product!?.rating.rate)}
                readOnly
              />
            </div>
            <p className="my-3">{product?.description}</p>
          </div>
        </div>
      )}
    </PageContainer>
  )
}
