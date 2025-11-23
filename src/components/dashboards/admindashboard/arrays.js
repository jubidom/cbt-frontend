import { MdDashboard } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { TbPencilQuestion } from "react-icons/tb";
import { GrScorecard } from "react-icons/gr";
import { LuLibraryBig } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FiActivity } from "react-icons/fi";

export const tabs = [
  "admindashboard",
  "userconfig",
  "manageexams",
  "questionbank",
  "examsscores",
  "managesubject",
  "adminsettings",
  "adminactivities",
];

export const text = [
  "Admin Dashboard",
  "User Config",
  "Manage Exams",
  "Question Bank",
  "Exams Scores",
  "Manage Subject",
  "Admin Settings",
  "Admin Activities",
];

export const icons = [
  <MdDashboard />,
  <FaUsersCog />,
  <PiExam />,
  <TbPencilQuestion />,
  <GrScorecard />,
  <LuLibraryBig />,
  <IoMdSettings />,
  <FiActivity />,
];
