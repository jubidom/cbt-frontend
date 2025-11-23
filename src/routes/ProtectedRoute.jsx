import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function ProtectedRoute() {
  const location = useLocation();
  const { user, token } = useSelector((state) => state.auth);
  if (!user || !token) {
    return <Navigate to="/auth/login" replace />;
  }
  if (
    location.pathname === "/" ||
    location.pathname === "/auth" ||
    location.pathname === "/dashboard"
  ) {
    if (user.role && user.role === "student") {
      // return <Navigate to="/dashboard/studentdashboard/" replace />;
      return <Navigate to="studentdashboard" replace />;
    }
    if (user.role && user.role === "admin") {
      // return <Navigate to="/dashboard/admindashboard/" replace />;
      return <Navigate to="admindashboard" replace />;
    }
  }
  return <Outlet />;
}

export default ProtectedRoute;
