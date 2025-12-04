import { TbLogout } from "react-icons/tb";
import { adminNav } from "../links";
import Button from "../../Button";
import logo from "../../../assets/logo.png";

const btnStyle = `inline-block px-4 py-2 rounded-full text-black w-full active:text-secondary focus:text-secondary active:bg-primary focus:bg-primary text-primary border border-primary font-semibold flex items-center gap-2`;

function SideBar({ onhandleActiveTab, activeTab }) {
  return (
    <aside className="bg-secondary min-w-60 lg:flex flex-col px-4 py-2 rounded-br-2xl rounded-tr-2xl hidden">
      <div className="py-6">
        <img src={logo} alt="logo" className="w-14 h-14 block" />
      </div>
      <div className="flex-grow flex flex-col justify-between px-1 py-2">
        <div className="flex flex-col gap-4">
          {adminNav.map((tabOpt) => {
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
                <span title={tabOpt.label}>{tabOpt.icon}</span>

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
    </aside>
  );
}

export default SideBar;
