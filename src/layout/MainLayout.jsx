import { Outlet } from "react-router-dom";
//other pages aside header and footer, will be displayed her

function MainLayout() {
  return <div>{<Outlet />}</div>;
}

export default MainLayout;
