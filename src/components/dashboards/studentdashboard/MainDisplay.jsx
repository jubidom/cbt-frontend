import { CiBellOn } from "react-icons/ci";

function MainDisplay({ children }) {
  return (
    <section className="px-4 py-2 flex flex-col flex-grow max-h-full">
      <header className="flex flex-grow items-center gap-2 justify-between">
        <h1 className="md:text-xl text-sm font-semibold drop-shadow-lg">
          Dashboard
        </h1>
        <CiBellOn className="text-lg cursor-pointer" />
      </header>
      <main className="flex-grow h-full">{children}</main>
    </section>
  );
}

export default MainDisplay;
