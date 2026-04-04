import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard/DashBoard";
import { Settings } from "../../pages/settings/Settings";
import Users from "../../pages/users/Users";
import Layout from "../../layouts/MainLayout";
import Weather from "../../pages/weather/Weather";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="settings" element={<Settings />} />

        <Route path="users" element={<Users />} />

        <Route path="weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}
