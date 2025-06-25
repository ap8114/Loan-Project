import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4 py-3 shadow-sm"
      style={{ backgroundColor: '#E8F5E9', width: '100%' }}
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
  );
};

export default Navbar;
