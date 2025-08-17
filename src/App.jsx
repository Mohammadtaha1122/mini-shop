import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Shop from "./pages/shop"
import Buying from "./pages/buying"
import CalaDetail from "./pages/calaDetail"
import Login from "./pages/signUp"
import MainLayout from "./layout/mainLayout"
import SignUp from "./pages/signUp"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/cala/:id" element={<CalaDetail />} />
          </Route>
          <Route path="/form">
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
