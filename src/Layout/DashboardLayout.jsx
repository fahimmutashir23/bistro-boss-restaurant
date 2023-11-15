import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="max-w-6xl mx-auto flex">
      <Sidebar></Sidebar>
      <div className="p-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
