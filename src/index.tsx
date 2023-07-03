import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EngineerProvider from "./context/EngineerContext";
import MaterialsProvider from "./context/MaterialsContext";
import ProjectsProvider from "./context/ProjectsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EngineerProvider>
        <MaterialsProvider>
          <ProjectsProvider>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <App />
          </ProjectsProvider>
        </MaterialsProvider>
      </EngineerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
