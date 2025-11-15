import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MainDisplay from "./MainDisplay";
import MobileNav from "./MobileNav";

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <section className="min-h-dvh flex relative overflow-hidden">
      <SideBar onhandleActiveTab={handleActiveTab} activeTab={activeTab} />
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      <MainDisplay activeTab={activeTab} setIsOpen={setIsOpen}>
        <Outlet />
      </MainDisplay>
    </section>
  );
}

export default StudentDashboard;
