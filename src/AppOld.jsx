import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import ErrorPage from "./error/ErrorPage";
import Login from "./pages/Login";
import SignupForm from "./pages/SignupForm";
import Unauthourized from "./pages/Unauthourized";

import StudentDashboard from "./components/dashboards/studentdashboard/StudentDashboard";
import Dashboard from "./components/dashboards/studentdashboard/Dashboard";
import StudentProfile from "./components/dashboards/studentdashboard/StudentProfile";
import ExamComponent from "./components/dashboards/studentdashboard/ExamComponent";
import ExamsHistory from "./components/dashboards/studentdashboard/ExamsHistory";
import ExamsGrid from "./components/dashboards/studentdashboard/ExamsGrid";
import Subjects from "./components/dashboards/studentdashboard/Subjects";
import SubjectPerformance from "./components/dashboards/studentdashboard/SubjectPerformance";
import ExamScoreDetail from "./components/dashboards/studentdashboard/ExamScoreDetail";

import AdminDashboard from "./components/dashboards/admindashboard/AdminDashboard";
import Analytics from "./components/dashboards/admindashboard/Analytics";
import ManageExams from "./components/dashboards/admindashboard/ManageExams";
import AdminExamList from "./components/dashboards/admindashboard/AdminExamList";
import UpdateExam from "./components/dashboards/admindashboard/UpdateExam";
import Results from "./components/dashboards/admindashboard/Results";
import UploadExam from "./components/dashboards/admindashboard/UploadExam";
import UpdateStudent from "./components/dashboards/admindashboard/UpdateStudent";

import ProtectedRoute from "./routes/ProtectedRoute";

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
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,

          errorElement: <ErrorPage />,
          children: [
            {
              element: <ProtectedRoute specificRole={["student"]} />,
              children: [
                {
                  element: <StudentDashboard />,
                  children: [
                    {
                      index: true,
                      element: <Navigate to="studentdashboard" replace />,
                    },
                    { path: "studentdashboard", element: <Dashboard /> },
                    { path: "studentprofile", element: <StudentProfile /> },
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
              ],
            },

            {
              element: <ProtectedRoute specificRole={["admin"]} />,
              children: [
                {
                  element: <AdminDashboard />,
                  children: [
                    {
                      index: true,
                      element: <Navigate to="admindashboard" replace />,
                    },
                    { path: "admindashboard", element: <Analytics /> },

                    {
                      path: "manageexams",
                      element: <ManageExams />,
                      children: [
                        {
                          index: true,
                          element: <AdminExamList />,
                        },
                        {
                          path: "update/:id",
                          element: <UpdateExam />,
                        },
                      ],
                    },
                    ,
                    { path: "results", element: <Results /> },
                    { path: "uploadexams", element: <UploadExam /> },
                    { path: "userconfig", element: <UpdateStudent /> },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
