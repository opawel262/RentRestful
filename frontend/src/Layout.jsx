import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col p-6 min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
