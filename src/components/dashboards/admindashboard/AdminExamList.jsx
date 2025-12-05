import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import DotOptions from "./DotOptions";

function AdminExamList() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-[16px] pb-12">
      <li className="bg-blue-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "maths" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 cursor-pointer z-20"
            value="maths"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link to={`update/${"maths"}`} className="block h-full w-full py-20">
          Maths
        </Link>
      </li>
      <li className="bg-green-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "english" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 text-md cursor-pointer z-20"
            value="english"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link to={`update/${"english"}`} className="block h-full w-full py-20">
          English
        </Link>
      </li>
      <li className="bg-yellow-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "chemistry" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 text-md cursor-pointer z-20"
            value="chemistry"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link
          to={`update/${"chemistry"}`}
          className="block h-full w-full py-20"
        >
          Chemistry
        </Link>
      </li>
      <li className="bg-pink-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "physics" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 text-md cursor-pointer z-20"
            value="physics"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link to={`update/${"physics"}`} className="block h-full w-full py-20">
          Physics
        </Link>
      </li>

      <li className="bg-slate-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "biology" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 text-md cursor-pointer z-20"
            value="biology"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link to={`update/${"biology"}`} className="block h-full w-full py-20">
          Biology
        </Link>
      </li>
      <li className="bg-orange-300 rounded-md text-center lg:text-3xl shadow-md ease-linear duration-100 cursor-pointer relative hover:bg-opacity-50">
        {isOpen === "geography" ? (
          <DotOptions setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <button
            className="absolute right-1 top-4 text-md cursor-pointer z-20"
            value="geography"
            onClick={(e) => {
              setIsOpen(e.currentTarget.value);
            }}
          >
            <BsThreeDotsVertical />
          </button>
        )}
        <Link
          to={`update/${"geography"}`}
          className="block h-full w-full py-20"
        >
          Geography
        </Link>
      </li>
    </ul>
  );
}

export default AdminExamList;
