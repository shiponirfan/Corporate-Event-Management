import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import BlogDetails from "../pages/Blog/BlogDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                loader: ()=> fetch('/services.json'),
                element: <PrivateRoutes> <ServiceDetails></ServiceDetails> </PrivateRoutes>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/blogs',
                loader: ()=> fetch('/blogs.json'),
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
            },
            {
                path: '/blog/:id',
                loader: ()=> fetch('/blogs.json'),
                element: <PrivateRoutes> <BlogDetails></BlogDetails> </PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
            },
            {
                path: '/settings',
                element: <PrivateRoutes><Settings></Settings></PrivateRoutes>
            },
        ],
    },
])
export default routes;