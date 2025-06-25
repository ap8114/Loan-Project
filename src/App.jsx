import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";


import { useState } from "react";
import ClientLogin from "./Auth/Login";
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
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}

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
          className={`right-side-content ${isSidebarCollapsed && !hideLayout ? "collapsed" : ""
            }`}
        >
          <Routes>
            {/* Authentication routes (no navbar/sidebar) */}
            <Route path="/" element={<ClientLogin />} />
            <Route path="/singup" element={<Signup />} />

          {/*Admin Dashboard Route Start */}
           
            
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;