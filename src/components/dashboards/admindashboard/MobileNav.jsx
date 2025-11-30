import { IoClose } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { TbPencilQuestion } from "react-icons/tb";
import { GrScorecard } from "react-icons/gr";
import { LuLibraryBig } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FiActivity } from "react-icons/fi";

import { TbLogout } from "react-icons/tb";
import Button from "../../Button";
import logo from "../../../assets/logo.png";

const btnStyle = `inline-block px-4 py-2 rounded-full text-black w-full active:text-secondary focus:text-secondary active:bg-primary focus:bg-primary text-primary border border-primary font-semibold flex items-center gap-2`;

const sidebarItems = [
  {
    path: "admindashboard",
    label: "Admin Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "manageexams",
    label: "Manage Exams",
    icon: <TbPencilQuestion />,
  },
  {
    path: "results",
    label: "Results",
    icon: <GrScorecard />,
  },
  {
    path: "userconfig",
    label: "User Config",
    icon: <FaUsersCog />,
  },
  {
    path: "uploadexams",
    label: "Upload Exams",
    icon: <PiExam />,
  },
];

function MobileNav({ onhandleActiveTab, activeTab, setIsOpen }) {
  return (
    <aside className=" fixed top-0 bottom-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.2)] z-10 ">
      <section className="bg-secondary h-full w-60 flex flex-col px-4 py-2 rounded-br-3xl rounded-tr-3xl">
        <div className="pt-3 pb-6 flex items-center justify-between">
          <img src={logo} alt="logo" className="w-14 h-14 block" />
          <IoClose
            className="text-2xl block lg:hidden cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex-grow flex flex-col justify-between px-1 py-2">
          <div className="flex flex-col gap-4">
            {sidebarItems.map((tabOpt, i) => {
              return (
                <Button
                  type="link"
                  to={tabOpt.path}
                  key={tabOpt.path}
                  onClick={() => onhandleActiveTab(tabOpt.path)}
                  className={
                    activeTab === tabOpt.path
                      ? `${btnStyle} bg-primary text-secondary`
                      : btnStyle
                  }
                >
                  <span title={tabOpt}>{tabOpt.icon}</span>
                  {tabOpt.label}
                </Button>
              );
            })}
          </div>
          <div className="mb-12">
            <Button
              key="logout"
              to="/login"
              onClick={() => onhandleActiveTab("logout")}
              className={
                activeTab === "logout"
                  ? `${btnStyle} bg-primary text-secondary `
                  : btnStyle
              }
            >
              <span title="logout">
                <TbLogout />
              </span>
              Log Out
            </Button>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default MobileNav;
