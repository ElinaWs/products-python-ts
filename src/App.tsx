
import { CssBaseline } from "@mui/material"
import { Route, Routes } from "react-router"
import { ProductsPage } from "./pages/ProductsPage/ProductsPage"
import { CreateProductPage } from "./pages/CreateProductPage/CreateProductPage"
import type { ReactNode } from "react"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  return (
    <div>asd</div>
  )
}

function App() {

  return (
    <div>
      <CssBaseline/>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<ProductsPage/>} />
        <Route path="/product/create" element={<CreateProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
