// import { Route, Routes, useLocation } from "react-router-dom";
// import "./App.css";

// import Navbar from "./layout/Navbar";
// import Sidebar from "./Layout/Sidebar";
// import { useState } from "react";
// import Login from "./Auth/Login";
// import Signup from "./Auth/Signup";
// import Dashboard from "./Component/Dashboard/Dashboard";

// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

//   const menusidebarcollaps = () => {
//     setIsSidebarCollapsed(true);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarCollapsed((prev) => !prev);
//   };

//   const location = useLocation();

//   // Define routes where navbar and sidebar should be hidden
//   const NO_LAYOUT_ROUTES = ["/", "/singup"];
//   const hideLayout = NO_LAYOUT_ROUTES.includes(location.pathname);

//   return (
//     <>
//       {/* navbar - hidden on login/signup page */}
//       {!hideLayout && <Navbar  />}

//       {/* main content area */}
//       <div className={`main-content ${hideLayout ? "full-width" : ""}`}>
//         {/* sidebar - hidden on login/signup page */}
//         {!hideLayout && (
//           <Sidebar
//             collapsed={isSidebarCollapsed}
//             menuItemClick={menusidebarcollaps}
//           />
//         )}

//         {/* right side content */}
//         <div
//         >
//           <Routes>
//             {/* Authentication routes (no navbar/sidebar) */}
//             <Route path="/" element={<Login/>} />
//             <Route path="/singup" element={<Signup />} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./layout/Navbar";
import Sidebar from "./Layout/Sidebar";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  // Hide sidebar/navbar on login/signup
  const hideLayout = location.pathname === "/" || location.pathname === "/singup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className="main-layout d-flex">
        {!hideLayout && (
          <Sidebar collapsed={isSidebarCollapsed} />
        )}

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/singup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
