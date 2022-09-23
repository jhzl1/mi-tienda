import { Button } from "@mui/material"
import { ListProducts } from "components/ListProducts"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const someProductsRef = useRef<any>(null)

  const handleSeeMore = () => {
    someProductsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const navigate = useNavigate()

  return (
    <div>
      <div className="home-banner h-screen px-5 md:px-36 flex flex-col justify-center">
        <div className="md:max-w-xl">
          <span className="font-bold md:text-xl">New collection</span>
          <h1 className="font-bold text-3xl md:text-6xl leading">
            Find everything you like in one place
          </h1>

          <Button
            size="large"
            color="secondary"
            className="md:!text-xl !my-5"
            onClick={handleSeeMore}
          >
            See more
          </Button>
        </div>
      </div>

      <div className="px-5 py-20" ref={someProductsRef}>
        <h2 className="text-center text-3xl  md:text-5xl mb-20  text-[#003890]">
          Some products
        </h2>
        <ListProducts limitOfProducts={4} />
      </div>
      <div className="flex justify-center px-36 mb-16">
        <Button onClick={() => navigate("/products")}>See all products</Button>
      </div>
    </div>
  )
}
