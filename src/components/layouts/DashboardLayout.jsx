
import { Outlet } from "react-router-dom";
import TopNaviagtionBar from "../uiComponents/TopNaviagtionBar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation visible everywhere */}
      <TopNaviagtionBar/>
      {/* Routed pages */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
