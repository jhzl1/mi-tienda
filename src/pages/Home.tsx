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
      <div className="home-banner h-screen px-36 flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="font-bold text-xl">Nueva colección</span>
          <h1 className="font-bold text-[60px]">
            Encuentra todo lo que te gusta en un solo sitio
          </h1>

          <Button
            size="large"
            color="secondary"
            className="!text-xl"
            onClick={handleSeeMore}
          >
            Ver más
          </Button>
        </div>
      </div>

      <div className="px-5 py-20" ref={someProductsRef}>
        <h2 className="text-center text-5xl mb-20  text-[#003890]">
          Algunos productos
        </h2>
        <ListProducts limitOfProducts={4} />
      </div>
      <div className="flex justify-center px-36 mb-16">
        <Button onClick={() => navigate("/products")}>
          Ver todos los productos
        </Button>
      </div>
    </div>
  )
}
