import { HomePage, ProductPage, ProductsPage } from "pages"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <ProductPage />,
      },
    ],
  },
])
