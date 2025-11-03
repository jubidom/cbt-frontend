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

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      /* children: [
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
      ], */
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
