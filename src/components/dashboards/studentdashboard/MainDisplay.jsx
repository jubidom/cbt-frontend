import { CiBellOn } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

function MainDisplay({ children, setIsOpen }) {
  return (
    <section className="px-4 py-2 flex flex-col flex-grow max-h-full">
      <header className="flex flex-grow items-center gap-2 justify-between overflow-hidden">
        <h1 className="md:text-xl text-sm font-semibold drop-shadow-lg flex items-center gap-6">
          <FiMenu
            onClick={() => setIsOpen(true)}
            className="block lg:hidden cursor-pointer text-lg"
          />
          <span>Dashboard</span>
        </h1>
        <CiBellOn className="text-lg cursor-pointer" />
      </header>
      <main className="flex-grow h-full overflow-hidden">{children}</main>
    </section>
  );
}

export default MainDisplay;
