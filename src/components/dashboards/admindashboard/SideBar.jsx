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

function SideBar({ onhandleActiveTab, activeTab }) {
  return (
    <aside className="bg-secondary min-w-60 lg:flex flex-col px-4 py-2 rounded-br-2xl rounded-tr-2xl hidden">
      <div className="py-6">
        <h1>Logo</h1>
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

                {/* {tabOpt.charAt(0).toUpperCase() + tabOpt.slice(1)} */}
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
    </aside>
  );
}

export default SideBar;
