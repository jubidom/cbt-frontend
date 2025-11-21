import { Link } from "react-router-dom";

function Subjects() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-[16px]">
      <Link
        to="maths"
        className="bg-blue-300 rounded-md py-20 text-center lg:text-3xl shadow-md  ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        Maths
      </Link>
      <Link
        to="english"
        className="bg-green-300 rounded-md py-20 text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        English
      </Link>
      <Link
        to="chemistry"
        className="bg-yellow-300 rounded-md py-20 text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        Chemistry
      </Link>
      <Link
        to="physics"
        className="bg-pink-300 rounded-md py-20 text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        Physics
      </Link>
      <Link
        to="geography"
        className="bg-orange-300 rounded-md py-20 text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        Geography
      </Link>
      <Link
        to="biology"
        className="bg-slate-400 rounded-md py-20 text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer hover:bg-opacity-50"
      >
        Biology
      </Link>
    </section>
  );
}

export default Subjects;
