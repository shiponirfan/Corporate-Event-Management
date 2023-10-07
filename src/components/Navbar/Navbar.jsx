import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Navbar = () => {
  const navMenu = (
    <>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink to="/services" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }>Services</NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }>About Us</NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }>Contact Us</NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }>Blog</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* Top Navbar */}
      <div className="bg-corporate-lightColor py-3">
        <div className="flex px-2 container mx-auto justify-between items-center">
          <h4>Our Business Hours starts From 8AM to 8PM (Friday Holiday)</h4>
          {/* Social Icons */}
          <div className="flex gap-3 text-lg">
            <a href="https://www.facebook.com/ShiponIrfan/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/ShiponIrfan">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/shiponirfan/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shiponirfan/">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@shiponirfan">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="bg-white py-2">
        <div className="navbar justify-between container mx-auto">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>
            <Link to="/">
              <h4 className="flex flex-col text-lg">
                <span className="uppercase font-bold text-[26px] text-corporate-color">
                  Corporate
                </span>
                Event Management
              </h4>
            </Link>
          </div>
          <div>
            <div className="hidden lg:flex">
              <ul className="menu-horizontal text-base font-medium">{navMenu}</ul>
            </div>
            <div className="flex gap-4 items-center">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/user.png" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <button className="bg-corporate-color py-3 font-medium px-8 hover:bg-black duration-300 rounded-lg text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
