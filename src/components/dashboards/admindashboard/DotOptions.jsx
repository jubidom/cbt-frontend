import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Button from "../../Button";

function DotOptions({ isOpen, setIsOpen }) {
  //import the delete function from the subjects slice, and attach the delete button
  return (
    <ul className="rounded-lg shadow-lg py-4 px-3 min-w-32 absolute top-4 right-4 text-sm z-40 bg-[rgba(0,0,0,0.5)] flex flex-col gap-2 text-white">
      {/* <IoClose
        className="text-md block cursor-pointer absolute top-2 right-2 z-30 text-white"
        onClick={setIsOpen}
      /> */}

      <li className="hover:bg-gray-50 py-2 rounded-md hover:text-slate-800">
        <Link to={`update/${isOpen}`}>Update</Link>
      </li>
      <li className="hover:bg-gray-50 py-2 rounded-md hover:text-slate-800">
        <Button>Delete</Button>
      </li>
    </ul>
  );
}

export default DotOptions;
