import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="navbar  flex  items-center md:my-4 my-2">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-[80px]" src="./logo.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold space-x-4">
          <li>
            <NavLink className={({ isActive }) => (isActive ? "" : "")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="items-center hidden md:flex gap-3 md:gap-5 justify-center ">
          <HiOutlineShoppingBag
            className="cursor-pointer hover:scale-95 duration-300"
            size={20}
          ></HiOutlineShoppingBag>
          <CiSearch
            size={22}
            className="cursor-pointer hover:scale-95 duration-300"
          ></CiSearch>
          <button className="btn btn-outline text-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
