import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const DashboardLayout = () => {
    return (
        <div className="flex">
         <div className="w-[20%] pl-5">
         <DashboardSidebar></DashboardSidebar>
         </div>

         <div className="w-[80%] pl-5">
            <Outlet></Outlet>
         </div>

        </div>
    );
};

export default DashboardLayout;