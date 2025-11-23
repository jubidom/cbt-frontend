import { CiBellOn } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import SignalStatus from "../../SignalStatus";
import { LuSunMoon } from "react-icons/lu";

function MainDisplay({ setIsOpen, children }) {
  return (
    <section className="px-4 py-2 flex flex-col flex-grow overflow-y-auto">
      <header className="flex flex-grow items-center gap-2 justify-between py-4">
        <div className="md:text-xl text-sm font-semibold drop-shadow-lg flex items-center gap-6">
          <FiMenu
            onClick={() => setIsOpen(true)}
            className="block lg:hidden cursor-pointer text-lg"
          />
          <h1>Dashboard</h1>
          <SignalStatus />
        </div>
        <div className="flex gap-5">
          <LuSunMoon className="cursor-pointer text-lg" />
          <CiBellOn className="text-lg cursor-pointer" />
        </div>
      </header>
      <main className="flex-grow overflow-y-auto">{children}</main>
    </section>
  );
}

export default MainDisplay;
