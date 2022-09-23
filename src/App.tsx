import "react-notifications-component/dist/theme.css"
import "./assets/css/app.css"
import "animate.css"

import { Outlet } from "react-router-dom"
import { Navbar } from "components/Navbar"
import { Footer } from "components/Footer"
import { ReactNotifications } from "react-notifications-component"
import { Cart } from "components/Cart"

function App() {
  return (
    <div className="app">
      <ReactNotifications />
      <Cart />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
