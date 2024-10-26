import { Outlet } from "react-router-dom"
import Navbar from "./Sheard/Navbar/Navbar"
import Footer from "./Sheard/Footer/Footer"

function App() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App