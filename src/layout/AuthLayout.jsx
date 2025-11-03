import { Outlet } from "react-router-dom";
//login and signup forms will be displyed in this layout

function AuthLayout() {
  return <main className="">{<Outlet />}</main>;
}

export default AuthLayout;
