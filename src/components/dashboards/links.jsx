import { LuLayoutDashboard } from "react-icons/lu";
import { FaBook } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { TbPencilQuestion } from "react-icons/tb";
import { GrScorecard } from "react-icons/gr";

export const studentNav = [
  {
    path: "dashboard",
    label: "Student Dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    path: "profile",
    label: "Student Profile",
    icon: <FaRegUser />,
  },
  {
    path: "exams",
    label: "Exams",
    icon: <FaBook />,
  },
  {
    path: "history",
    label: "History",
    icon: <FaHistory />,
  },
];

export const adminNav = [
  {
    path: "dashboard",
    label: "Admin Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "manage-exams",
    label: "Manage Exams",
    icon: <TbPencilQuestion />,
  },
  {
    path: "results",
    label: "Results",
    icon: <GrScorecard />,
  },
  {
    path: "userconfig",
    label: "User Config",
    icon: <FaUsersCog />,
  },
  {
    path: "upload-exams",
    label: "Upload Exams",
    icon: <PiExam />,
  },
];
