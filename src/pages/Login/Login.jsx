import { useContext } from "react";
import { FaGoogle, FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Logged in Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.success("Incorrect password. Please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (errorCode === "auth/invalid-email") {
          toast.success("Incorrect Email. Please try again.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          console.error(error.message);
        }
      });
  };
  const  handleGoogleLogin = ()=>{
    googleLogin()
    .then(() => {
        toast.success("Successfully Login", {
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
  }
  return (
    <div className="bg-corporate-lightColor py-24">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8  bg-corporate-color justify-center items-center p-8 rounded-lg ">
        <div>
          <div className="text-center text-white mt-3">
            <h3 className="font-bold text-2xl mb-3">
              Welcome To <br /> Corporate Event Management
            </h3>
            <p className="text-sm mb-8">
              The faster you fill up. the faster you get a booking
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <MdMail />
              </div>
              <input
                name="email"
                type="email"
                className=" border   text-sm rounded-lg focus-visible:outline-none   block w-full pl-10 p-2.5  "
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaLock />
              </div>
              <input
                name="password"
                type="password"
                className=" border   text-sm rounded-lg focus-visible:outline-none   block w-full pl-10 p-2.5  "
                placeholder="Enter Password"
                required
              />
            </div>

            <button className="bg-black py-3 font-medium w-full px-8 mb-4 hover:bg-slate-900 duration-300 rounded-lg text-white">
              Login
            </button>
          </form>

          <button onClick={handleGoogleLogin} className="bg-gradient-to-r hover:from-green-400 hover:to-orange-500 from-pink-500 to-yellow-500 py-3 font-medium w-full px-8 flex items-center justify-center gap-2 hover:bg-slate-900 duration-300 rounded-lg text-white">
            <FaGoogle /> Login With Google
          </button>

          <h4 className="text-center text-white my-10">
            Don&#39;t have an account?{" "}
            <Link
              className="text-lg font-bold hover:border-b ml-1"
              to="/register"
            >
              Register
            </Link>
          </h4>
        </div>

        <div className="h-full w-full">
          <img
            className="h-full w-full rounded-lg object-cover"
            src="/images/banner/banner4.jpg"
            alt="Banner Image"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
