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

const btnStyle = `inline-block px-4 py-2 rounded-full text-black w-full active:text-secondary focus:text-secondary active:bg-primary focus:bg-primary text-primary border border-primary font-semibold flex items-center gap-2`;

const tabs = [
  "admindashboard",
  "userconfig",
  "manageexams",
  "questionbank",
  "examsscores",
  "managesubject",
  "adminsettings",
  "adminactivities",
];

const text = [
  "Admin Dashboard",
  "User Config",
  "Manage Exams",
  "Question Bank",
  "Exams Scores",
  "Manage Subject",
  "Admin Settings",
  "Admin Activities",
];

const icons = [
  <MdDashboard />,
  <FaUsersCog />,
  <PiExam />,
  <TbPencilQuestion />,
  <GrScorecard />,
  <LuLibraryBig />,
  <IoMdSettings />,
  <FiActivity />,
];

function MobileNav({ onhandleActiveTab, activeTab, setIsOpen }) {
  return (
    <aside className=" fixed top-0 bottom-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.2)] z-10 ">
      <section className="bg-secondary h-full w-60 flex flex-col px-4 py-2 rounded-br-3xl rounded-tr-3xl">
        <div className="pt-3 pb-6 flex items-center justify-between">
          <h1 className="font-semibold text-lg text-white">LOGO</h1>
          <IoClose
            className="text-2xl block lg:hidden cursor-pointer text-white"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex-grow flex flex-col justify-between px-1 py-2">
          <div className="flex flex-col gap-4">
            {tabs.map((tabOpt, i) => {
              return (
                <Button
                  type="link"
                  to={tabOpt}
                  key={tabOpt}
                  onClick={() => onhandleActiveTab(tabOpt)}
                  className={
                    activeTab === tabOpt
                      ? `${btnStyle} bg-primary text-secondary`
                      : btnStyle
                  }
                >
                  <span title={tabOpt}>{icons[i]}</span>
                  {text[i]}
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
