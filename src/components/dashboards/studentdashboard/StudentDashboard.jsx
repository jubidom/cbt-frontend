import { useState } from "react";
import SideBar from "./SideBar";
import MainDisplay from "./MainDisplay";
import { Outlet } from "react-router-dom";
function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  function handleActiveTab(tab) {
    setActiveTab(tab);
  }
  return (
    <section className="min-h-dvh flex ">
      <SideBar onhandleActiveTab={handleActiveTab} activeTab={activeTab} />
      <MainDisplay activeTab={activeTab}>
        <Outlet />
      </MainDisplay>
    </section>
  );
}

export default StudentDashboard;
