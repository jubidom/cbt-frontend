import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchLoggedInStudentSubject,
  resetSubjectState,
} from "./subjectsSlice";

function Subjects() {
  const { loading, error, subjects } = useSelector((state) => state.subjects);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let loadSubjects = async () => {
      try {
        await dispatch(fetchLoggedInStudentSubject()).unwrap();
      } catch (error) {
        console.error("Failed to load subjects", error);
      }
    };
    loadSubjects();
  }, [dispatch]);

  const bgcolors = [
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-slate-400",
  ];

  const handleSubjectSelect = (subject) => {
    dispatch(selectSubject(subject));
    // navigate("/exams/:id");
    navigate("/:id");
  };

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-[16px]">
      {/* {subjects.forEach((subject, i) => {
        return (
          <Link
            id={subject._id}
            to="maths"
            className={`${bgcolors[i]} rounded-md py-20 text-center lg:text-3xl shadow-md  ease-linear duration-100 cursor-pointer hover:bg-opacity-50`}
            onClick={() => handleSubjectSelect(subject)}
          >
            {subject.title}
          </Link>
        );
      })} */}
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
