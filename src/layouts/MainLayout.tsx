import { Outlet } from "react-router-dom";

import SideBar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
