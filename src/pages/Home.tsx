import { Button } from "@mui/material"
import { ListProducts } from "components/ListProducts"

export const HomePage = () => {
  return (
    <div className="">
      <div className="home-banner h-screen px-36 flex flex-col justify-center">
        <div className="max-w-xl">
          <span className="font-bold text-xl">Nueva colección</span>
          <h1 className="font-bold text-[60px]">
            Encuentra todo lo que te gusta en un solo sitio
          </h1>

          <Button size="large" color="secondary" className="!text-xl">
            Ver más
          </Button>
        </div>
      </div>

      <div className="px-5 py-10">
        <h2 className="text-center text-5xl mb-10">Algunos productos</h2>
        <ListProducts />
      </div>
    </div>
  )
}
