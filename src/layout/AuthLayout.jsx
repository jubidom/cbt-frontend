import { Outlet } from "react-router-dom";

function AuthLayout() {
  return <main className="bg-primary min-h-dvh">{<Outlet />}</main>;
}

export default AuthLayout;
