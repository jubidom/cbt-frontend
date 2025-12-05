import { Outlet } from "react-router-dom";
/*  side menu, main page and other pages, will be displayed here*/

function MainLayout() {
  return <div>{<Outlet />}</div>;
}

export default MainLayout;
