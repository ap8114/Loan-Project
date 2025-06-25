import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientLogin = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#ccf8db' }}>
      <div className="text-center w-100" style={{ maxWidth: '400px' }}>
        {/* Logo */}
        <img
          src="https://i.ibb.co/3yG9tdt5/3db2775f70a199b26bc47425ca16af18-1-removebg-preview.png" // Replace with your logo
          alt="Logo"
          className="mb-1"
          style={{ height: '200px', objectFit: 'contain' }}
        />

        {/* Title */}
        <h3 className="mb-4 fw-bold" style={{ color: '#4d4d4d' }}>
          Client sign-in
        </h3>

        {/* Username Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Username"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Password"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
        </div>

        {/* Sign-in Button */}
        <button className="btn btn-danger rounded-pill w-100 py-2 fw-semibold">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default ClientLogin;