import { Button, Divider, Rating, Skeleton } from "@mui/material"
import { PageContainer } from "components/PageContainer"
import { ProductDetails } from "components/ProductDetails"
import { useGetProduct } from "hooks"
import { useParams } from "react-router-dom"

export const ProductPage = () => {
  const { productId } = useParams<"productId">()

  const { isLoading, product } = useGetProduct(Number(productId))

  return (
    <PageContainer>
      {isLoading ? (
        <Skeleton className="mx-36 !h-20" />
      ) : (
        <div className="grid grid-cols-3 gap-4 text-gray-700 px-36">
          <div className="flex justify-center">
            <img src={product?.image} className="h-[400px]" />
          </div>
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-[#003890]">
              {product?.title}
            </h3>{" "}
            <span>{product?.category}</span>
            <Divider className="!my-5" />
            <div className="mb-3 flex">
              <ProductDetails
                price={product!?.price}
                quantity={product!?.rating.count}
                onAddCart={(qq) => console.log(qq)}
              />
            </div>
            <Rating
              name="read-only"
              value={Math.ceil(product!?.rating.rate)}
              readOnly
            />
            <p className="my-3">{product?.description}</p>
          </div>
        </div>
      )}
    </PageContainer>
  )
}
