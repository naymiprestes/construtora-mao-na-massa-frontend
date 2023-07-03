import { Route, Routes } from "react-router-dom";
import Dashboard from "../page/dashboard";
import Engineer from "../page/engineer";
import Materials from "../page/materials";
import Projects from "../page/projects";
import AllProjects from "../page/allProjects";
import ListProject from "../page/listProject";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/engineers" element={<Engineer />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/new-projects" element={<Projects />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/list-project" element={<ListProject />} />
    </Routes>
  );
};

export default RoutesApplication;
