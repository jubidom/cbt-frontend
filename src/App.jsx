import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import ErrorPage from "./error/ErrorPage";
import Login from "./pages/Login";
import SignupForm from "./components/SignupForm";
import StudentDashboard from "./components/dashboards/studentdashboard/StudentDashboard";
import AdminDashboard from "./components/dashboards/admindashboard/AdminDashboard";
import Dashboard from "./components/dashboards/studentdashboard/Dashboard";
// import Profile from "./components/dashboards/studentdashboard/StudentProfile";
import StudentProfile from "./components/dashboards/studentdashboard/StudentProfile";
import ExamComponent from "./components/dashboards/studentdashboard/ExamComponent";
import ExamsHistory from "./components/dashboards/studentdashboard/ExamsHistory";
import ExamsGrid from "./components/dashboards/studentdashboard/ExamsGrid";
import Subjects from "./components/dashboards/studentdashboard/Subjects";
import ProtectedRoute from "./routes/ProtectedRoute";
import SubjectPerformance from "./components/dashboards/studentdashboard/SubjectPerformance";
import ExamScoreDetail from "./components/dashboards/studentdashboard/ExamScoreDetail";
import Analytics from "./components/dashboards/admindashboard/Analytics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="login" replace />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignupForm />,
        },
      ],
    },
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <StudentDashboard />,
          children: [
            {
              index: true,
              element: <Navigate to="dashboard" replace />,
            },
            { path: "dashboard", element: <Dashboard /> },
            { path: "profile", element: <StudentProfile /> },
            {
              path: "exams",
              element: <ExamsGrid />,
              children: [
                { index: true, element: <Subjects /> },
                {
                  path: ":id",
                  element: <ExamComponent />,
                },
              ],
            },
            {
              path: "history",
              element: <ExamsHistory />,
              children: [
                { index: true, element: <SubjectPerformance /> },
                { path: ":id", element: <ExamScoreDetail /> },
              ],
            },
          ],
        },
        {
          // path: "admindashboard",
          element: <AdminDashboard />,
          children: [
            {
              index: true,
              element: <Navigate to="admindashboard" replace />,
            },
            { path: "admindashboard", element: <Analytics /> },
            // { path: "registerstudent", element: <RegisterStudent /> },
            // { path: "uploadexams", element: <UploadExams /> },
            // { path: "uploadanswers", element: <UploadAnswers /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
