import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { fetchStudentProfile } from "../components/dashboards/studentdashboard/studentSlice";

function ProtectedRoute({ specificRole, children }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, role, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (role === "student") {
      dispatch(fetchStudentProfile());
    }
  }, [role, dispatch]);
  if (loading) {
    return <Loader />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (specificRole && !specificRole.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
