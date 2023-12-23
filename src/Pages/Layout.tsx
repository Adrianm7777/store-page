import { Outlet } from "react-router-dom";
import Header from "../MainPage/Components/Header/Header";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
