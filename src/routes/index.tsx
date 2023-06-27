import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard";
import Engineer from "../page/engineer";
import Materials from "../page/materials";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/engineers" element={<Engineer />} />
      <Route path="/materials" element={<Materials />} />
    </Routes>
  );
};

export default RoutesApplication;
