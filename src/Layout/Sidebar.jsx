import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("userRole"); // ✅ GET ROLE from localStorage

  const isActive = (path) => location.pathname === path;

  const menuItemClick = () => {
    console.log("Menu item clicked");
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar bg-card " style={{ height: "101vh" }}>
        <ul className="menu">
          {/* Admin Only */}

          <>
            {/* Dashboard */}
            <li
              className={`menu-item ${
                isActive("/admin-dashboard") ? "active" : ""
              }`}
            >
              <div
                className="menu-link menu-i"
                onClick={() => {
                  navigate("/admin-dashboard");
                  menuItemClick();
                }}
              >
                <i className="fa-solid fa-compass"></i>
                <span className="menu-text">Dashboard</span>
              </div>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
