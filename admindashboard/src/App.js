import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  TaskDashboard,
  Tasks,
  Users,
  Projects,
  BAU,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
  NotFound,
} from "./pages";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              ]<Sidebar />
            </div>
          ) : (
            <div className="w-0 fixed  dark:bg-secondary-dark-bg bg-white">\\\\\\\\
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu} ? 'md:ml-72 ' : ' flex-2'`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* DashBoard */}
              <Route path="/" element="TaskDashboard" />
              <Route path="/taskdashboard" element="TaskDashboard" />
              {/* Pages */}
              <Route path="/tasks" element="Tasks" />
              <Route path="/users" element="Users" />
              <Route path="/projects" element="Projects" />
              <Route path="/bau" element="BAU" />

              {/* Apps */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/editor" element="editor" />
              <Route path="/calendar" element="calendar" />
              <Route path="/color-picker" element="ColorPicker" />

              {/* Charts */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
            <Routes>
              <Route path="/*" element="NotFound" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
