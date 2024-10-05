import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"


const Root = () => {
  return (
    <div>
      <div className="container">
      <NavBar></NavBar>
      </div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root