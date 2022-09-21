import { RouterProvider } from "react-router-dom"
import { router } from "routes"
import { MyFC } from "../interfaces/MyFc"

export const AppContext = ({ children }: MyFC) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
