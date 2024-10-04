import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"


const Root = () => {
  return (
    <div>
      <div className="container">
      <NavBar></NavBar>
      </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Root