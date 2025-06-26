import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  // Define routes where navbar and sidebar should be hidden
  const NO_LAYOUT_ROUTES = ["/", "/singup"];
  const hideLayout = NO_LAYOUT_ROUTES.includes(location.pathname);

  return (
    <>
      {/* navbar - hidden on login/signup page */}
      {!hideLayout && <Navbar  />}

      {/* main content area */}
      <div className={`main-content ${hideLayout ? "full-width" : ""}`}>
        {/* sidebar - hidden on login/signup page */}
        {!hideLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={menusidebarcollaps}
          />
        )}

        {/* right side content */}
        <div
        >
          <Routes>
            {/* Authentication routes (no navbar/sidebar) */}
            <Route path="/" element={<Login/>} />
            <Route path="/singup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;