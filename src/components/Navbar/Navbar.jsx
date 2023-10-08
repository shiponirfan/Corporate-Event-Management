import { Link, NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout Button
  const handleLogoutBtn = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Nav Menu
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
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink
          to="/pricing"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          Pricing
        </NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="mx-8 hover:text-corporate-color">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-corporate-color" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* Top Navbar */}
      <div className="bg-corporate-lightColor py-3">
        <div className="flex flex-col text-center md:text-left md:flex-row px-6 md:px-8 container mx-auto justify-between items-center">
          <h4>Our Business Hours starts From 8AM to 8PM (Friday Holiday)</h4>
          {/* Social Icons */}
          <div className="flex gap-3 text-lg mt-3 md:mt-0">
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
        <div className="navbar justify-between md:px-8 container mx-auto">
          <div>
            <div className="dropdown z-50">
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
              <ul className="menu-horizontal text-base font-medium">
                {navMenu}
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <div className="hidden md:block">
                {user ? (
                  <div className="dropdown z-50 dropdown-end">
                    <label
                      tabIndex={0}
                      className="flex justify-center items-center gap-1 avatar  cursor-pointer bg-corporate-color py-3 font-medium px-4 hover:bg-black duration-300 rounded-lg text-white"
                    >
                      <div className="w-10 rounded-full ring ring-offset-white ring-offset-2">
                        {user?.photoURL ? (
                          <img src={user?.photoURL} />
                        ) : (
                          <img src="/images/user.png" />
                        )}
                      </div>
                      {user?.displayName ? (
                        <h2 className="text-base font-bold ml-1">
                          {user?.displayName}
                        </h2>
                      ) : (
                        <h2 className="text-base font-bold ml-1">Profile</h2>
                      )}
                      <BiChevronDown className="text-xl" />
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-corporate-lightColor rounded "
                    >
                      <li className="border-b mb-2">
                        <div className="flex flex-col justify-start items-start py-2 ">
                          <span className="font-bold text-xl">
                            {user?.displayName ? user?.displayName : "John Doe"}
                          </span>
                          <span className=" font-bold text-base">
                            {user?.email}
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link to="/dashboard">
                          <btn className=" font-medium text-lg">Dashboard</btn>
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings">
                          <btn className=" font-medium text-lg">Settings</btn>
                        </Link>
                      </li>
                      <li>
                        <a
                          onClick={handleLogoutBtn}
                          className=" font-medium text-lg"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="bg-corporate-color py-3 font-medium px-8 hover:bg-black duration-300 rounded-lg text-white">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Navbar;
