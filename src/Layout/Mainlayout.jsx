import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Top Navbar */}
      <nav
        className="d-flex justify-content-between align-items-center px-4 py-3 shadow-sm"
        style={{
          backgroundColor: '#E8F5E9',
          width: '100vw',
          position: 'sticky',
          top: 0,
          zIndex: 1050,
          
        }}
      >
        {/* User Info */}
        <div className="d-flex flex-column">
          <h1 className="h5 fw-bold text-dark mb-0">Hi, Jacob Hills</h1>
          <p className="text-muted small mb-0">Jacob Hills Group of Company</p>
        </div>

        {/* Profile Image */}
        <div
          className="rounded-circle border border-secondary overflow-hidden"
          style={{ width: '48px', height: '48px' }}
        >
          <img
            src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20business%20person%20with%20neutral%20expression%20wearing%20business%20casual%20attire%20against%20a%20plain%20light%20background%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=1&orientation=squarish"
            alt="Profile"
            className="img-fluid"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>
      </nav>

      {/* Below Navbar Section */}
      <div className="d-flex" style={{ minHeight: 'calc(100vh - 72px)' }}>
        {/* Sidebar */}
        <div
          className="d-flex flex-column align-items-center p-3 shadow"
          style={{
            width: '200px',
            backgroundColor: '#E0F4E8',
            minHeight: '100%',
          }}
        >
          <div
            className="rounded-circle bg-danger d-flex align-items-center justify-content-center mb-4 border border-white"
            style={{ width: '64px', height: '64px' }}
          >
            <i className="fas fa-paw text-white fs-4"></i>
          </div>

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

        {/* Page Content */}
        <div className="flex-grow-1 p-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
