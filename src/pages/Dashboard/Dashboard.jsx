import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
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
  return (
    <div>
      <Helmet>
        <title>Dashboard | Corporate Event Management</title>
      </Helmet>
      <div className="hero min-h-screen  bg-corporate-lightColor">
        <div className="hero-content  flex-col lg:flex-row">
          <img
          data-aos="flip-left"
            src={user?.photoURL}
            className="max-w-[250px] lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 data-aos="fade-right" data-aos-delay="50" className="text-2xl lg:text-5xl font-bold">
              {user?.displayName}
            </h1>
            <p data-aos="fade-right" data-aos-delay="100" className="py-6 text-2xl lg:text-5xl">{user?.email}</p>
            <button
              onClick={handleLogoutBtn}
              data-aos="fade-right" data-aos-delay="150"
              className="bg-corporate-color py-3 font-medium px-8 hover:bg-black duration-300 rounded-lg text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
