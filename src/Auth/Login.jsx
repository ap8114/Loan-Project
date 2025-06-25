import React from 'react';

import { Link } from 'react-router-dom'; // 👈 Import Link

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#ccf8db' }}>
      <div className="text-center w-100 px-4 p-5 mt-4 border border-dark-subtle rounded-4 shadow-sm" style={{ maxWidth: '500px' , backgroundColor: '#ccf8db' }}>
        {/* Logo */}
        <img
          src="https://i.ibb.co/KxdfWFTv/3db2775f70a199b26bc47425ca16af18-1-removebg-preview.png"
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

        {/* Sign-up Link */}
        <p className="mt-3" style={{ color: '#4d4d4d' }}>
          Don’t have an account?{' '}
          <Link to="/singup" className="text-danger fw-semibold text-decoration-none">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
