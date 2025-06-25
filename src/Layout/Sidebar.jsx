import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex min-vh-100 w-100">
      {/* Sidebar */}
      <div
        className="d-flex flex-column align-items-center p-3 shadow"
        style={{
          width: '200px',
          backgroundColor: '#E0F4E8',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1020,
        }}
      >
        {/* Logo */}
        <div
          className="rounded-circle bg-danger d-flex align-items-center justify-content-center mb-4 border border-white"
          style={{ width: '64px', height: '64px' }}
        >
          <i className="fas fa-paw text-white fs-4"></i>
        </div>

        {/* Navigation Buttons */}
        <div className="w-100 px-2">
          <button
            className="btn w-100 mb-3 text-start text-dark fw-medium"
            style={{
              backgroundColor: '#9DDECE',
              borderRadius: '999px',
            }}
          >
            Dashboard
          </button>

          <button
            className="btn w-100 text-start text-dark fw-medium"
            style={{
              borderRadius: '999px',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#9DDECE')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
