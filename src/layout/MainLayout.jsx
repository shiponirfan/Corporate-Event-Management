import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2>Main Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;