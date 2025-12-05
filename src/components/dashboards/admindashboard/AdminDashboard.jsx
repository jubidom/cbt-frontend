import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import SideBar from "./SideBar";

import MainDisplay from "./MainDisplay";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }
  return (
    <section className="flex relative overflow-hidden lg:h-screen bg-slate-50">
      <SideBar onhandleActiveTab={handleActiveTab} activeTab={activeTab} />
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      <div className="lg:h-screen flex-grow overflow-y-auto">
        <MainDisplay setIsOpen={setIsOpen}>
          <Outlet />
        </MainDisplay>
      </div>
    </section>
  );
}

export default AdminDashboard;
