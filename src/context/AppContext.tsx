import { ThemeProvider } from "@mui/material"
import { theme } from "assets/theme/theme"
import { RouterProvider } from "react-router-dom"
import { router } from "routes"
import { MyFC } from "../interfaces/MyFc"

export const AppContext = ({ children }: MyFC) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
