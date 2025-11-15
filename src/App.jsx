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
import Profile from "./components/dashboards/studentdashboard/Profile";
import ExamComponent from "./components/dashboards/studentdashboard/ExamComponent";
import ExamsHistory from "./components/dashboards/studentdashboard/ExamsHistory";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
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
            { path: "profile", element: <Profile /> },
            { path: "exams", element: <ExamComponent /> },
            { path: "history", element: <ExamsHistory /> },
          ],
        },
        {
          path: "admindashboard",
          element: <AdminDashboard />,
          children: [
            {
              index: true,
              element: <Navigate to="profile" replace />,
            },
            // { path: "profile", element: <Profile /> },
            // { path: "registerstudent", element: <RegisterStudent /> },
            // { path: "uploadexams", element: <UploadExams /> },
            // { path: "uploadanswers", element: <UploadAnswers /> },
          ],
        },
      ],
    },
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
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/* 
  {
          element: <ProtectedRoute />,
          path: "/dashboard",
          children: [
            {
              path: "studentdashboard",
              element: <StudentDashboard />,
              children: [
                {
                  index: true,
                  element: <Navigate to="profile" replace />,
                },
                { path: "profile", element: <Profile /> },
                { path: "exams", element: <Exams /> },
                { path: "examshistory", element: <ExamsHistory /> },
              ],
            },
            {
              path: "admindashboard",
              element: <AdminDashboard />,
              children: [
                {
                  index: true,
                  element: <Navigate to="profile" replace />,
                },
                { path: "profile", element: <Profile /> },
                { path: "registerstudent", element: <RegisterStudent /> },
                { path: "uploadexams", element: <UploadExams /> },
                { path: "uploadanswers", element: <UploadAnswers /> },
              ],
            },
          ],
        },
*/
