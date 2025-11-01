import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

function AuthLayout() {
  return <main className="">{<Outlet />}</main>;
}

export default AuthLayout;
