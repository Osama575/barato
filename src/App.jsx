import { Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"
import Shop from "./pages/Shop"
import SingleProducts from "./pages/SingleProducts"
import About from "./pages/About"



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* AUTHENTICATION ROUTES */}
        <Route path='auth' >
          <Route index element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword/>} />
        </Route>

        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<SingleProducts />} />

        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
