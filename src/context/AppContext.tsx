import { ThemeProvider } from "@mui/material"
import { theme } from "assets/theme/theme"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "routes"
import { store } from "store"

export const AppContext = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
