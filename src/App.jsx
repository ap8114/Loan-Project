import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import ClientLogin from "./Auth/Login";
import Signup from "./Auth/Signup";


import Dashboard from "./Component/Dashboard/Dashboard";
import MainLayout from "./Layout/Mainlayout";

function App() {
  const location = useLocation();
  const NO_LAYOUT_ROUTES = ["/", "/signup"];
  const hideLayout = NO_LAYOUT_ROUTES.includes(location.pathname);

  return (
    <>
      {hideLayout ? (
        // Login & Signup without layout
        <Routes>
          <Route path="/" element={<ClientLogin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        // All other routes wrapped in MainLayout
        <MainLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more protected/admin routes here */}
          </Routes>
        </MainLayout>
      )}
    </>
  );
}

export default App;
