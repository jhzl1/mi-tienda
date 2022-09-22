import { ThemeProvider } from "@mui/material"
import { theme } from "assets/theme/theme"
import { RouterProvider } from "react-router-dom"
import { router } from "routes"

export const AppContext = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
