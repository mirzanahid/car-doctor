import { Link, NavLink }  from "react-router-dom";
import logo from "../../assets/logoo.svg"
import Button from "../Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {

    const navItems = <>
    <NavLink to={'/'} className={({isActive})=>{
      isActive ? "active" : ""
    }}>Home</NavLink>
    <NavLink to={'/about'} className={({isActive})=>{
      isActive ? "active" : ""
    }}>About</NavLink>
    <NavLink to={'/services'} className={({isActive})=>{
      isActive ? "active" : ""
    }}>Services</NavLink>
    <NavLink to={'/blog'} className={({isActive})=>{
      isActive ? "active" : ""
    }}>Blog</NavLink>
</>

  return (
    <div className="navbar bg-base-100 my-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow 'font-inter text-sub4 text-dark2'"
          >
           {navItems}
          </ul>
        </div>
        <Link to={'/'} className=" text-xl"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-inter text-sub4 text-dark2 gap-45">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-20">
        <HiOutlineShoppingBag className="text-2xl" />
        <IoSearchOutline className="text-2xl" />
        <Link to={'/login'}><Button className={'font-inter text-sub4 text-primary border border-primary rounded-sm py-15 px-30 hover:bg-primary hover:text-white duration-300'} label={'Login'}></Button></Link>
        <Link to={'/signup'}><Button className={'font-inter text-sub4 text-primary border border-primary rounded-sm py-15 px-30 hover:bg-primary hover:text-white duration-300'} label={'Sign Up'}></Button></Link>
      </div>
    </div>
  );
};

export default NavBar;
