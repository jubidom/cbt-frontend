import { LuLayoutDashboard } from "react-icons/lu";

import { FaBook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Button from "../../Button";

const btnStyle = `inline-block px-4 py-2 rounded-full text-black w-full active:text-secondary focus:text-secondary active:bg-primary focus:bg-primary text-primary border border-primary font-semibold flex items-center gap-2`;

const tabs = ["dashboard", "studentprofile", "exams", "history"];
const icons = [<LuLayoutDashboard />, <FaRegUser />, <FaBook />, <FaHistory />];

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
                {tabOpt.charAt(0).toUpperCase() + tabOpt.slice(1)}
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
