import React from "react"
import ReactDOM from "react-dom/client"
import { AppContext } from "./context/AppContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>
)
