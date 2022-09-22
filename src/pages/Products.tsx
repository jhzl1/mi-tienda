import { ListProducts } from "components/ListProducts"
import { PageContainer } from "components/PageContainer"

export const ProductsPage = () => {
  return (
    <PageContainer>
      <h2 className="text-center text-5xl mb-10  text-[#003890]">
        All products available
      </h2>
      <ListProducts />
    </PageContainer>
  )
}
