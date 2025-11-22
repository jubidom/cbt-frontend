import { CiBellOn } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
<<<<<<< HEAD

function MainDisplay({ children, setIsOpen }) {
  return (
    <section className="px-4 py-2 flex flex-col flex-grow max-h-full">
      <header className="flex flex-grow items-center gap-2 justify-between overflow-hidden">
        <h1 className="md:text-xl text-sm font-semibold drop-shadow-lg flex items-center gap-6">
=======
import SignalStatus from "../../SignalStatus";
import { LuSunMoon } from "react-icons/lu";

function MainDisplay({ children, setIsOpen }) {
  return (
    <section className="px-4 py-2 flex flex-col flex-grow overflow-y-auto">
      <header className="flex flex-grow items-center gap-2 justify-between py-4">
        <div className="md:text-xl text-sm font-semibold drop-shadow-lg flex items-center gap-6">
>>>>>>> Vincent
          <FiMenu
            onClick={() => setIsOpen(true)}
            className="block lg:hidden cursor-pointer text-lg"
          />
<<<<<<< HEAD
          <span>Dashboard</span>
        </h1>
        <CiBellOn className="text-lg cursor-pointer" />
      </header>
      <main className="flex-grow h-full overflow-hidden">{children}</main>
=======
          <h1>Dashboard</h1>
          <SignalStatus />
        </div>
        <div className="flex gap-5">
          <LuSunMoon className="cursor-pointer text-lg" />
          <CiBellOn className="text-lg cursor-pointer" />
        </div>
      </header>
      <main className="flex-grow overflow-y-auto">{children}</main>
>>>>>>> Vincent
    </section>
  );
}

export default MainDisplay;
