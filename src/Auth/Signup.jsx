import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ccf8db' }}>
      <div
        className="text-center w-100 px-3 mt-4 border border-dark-subtle rounded-4 shadow-sm"
        style={{ maxWidth: '500px', backgroundColor: '#ccf8db' }}
      >
        {/* Logo */}
        <img
          src="https://i.ibb.co/KxdfWFTv/3db2775f70a199b26bc47425ca16af18-1-removebg-preview.png"
          alt="Logo"
          className="mb-1"
          style={{ height: '100px', objectFit: 'contain' }}
        />

        {/* Title */}
        <h3 className="fw-bold mb-1" style={{ color: '#4d4d4d' }}>
          Create Your Account
        </h3>
        <p className="text-muted mb-4 small">Join us and manage your loans easily</p>

        {/* Form */}
        <form className="d-grid gap-3">
          <input
            type="text"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Full Name"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
          <input
            type="email"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Email Address"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
           <input
            type="tel"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Phone Number"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
          <input
            type="password"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Password"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />
          <input
            type="password"
            className="form-control rounded-pill py-2 px-3"
            placeholder="Confirm Password"
            style={{ borderColor: '#4d4d4d', color: '#4d4d4d', fontWeight: '500' }}
          />

          <div className="form-check text-start">
            <input className="form-check-input" type="checkbox" id="terms" />
            <label className="form-check-label small" htmlFor="terms">
              I agree to the <span className="text-danger">terms and conditions</span>
            </label>
          </div>

          <button className="btn btn-danger rounded-pill py-2 fw-semibold">
            Sign Up
          </button>
        </form>

        {/* Sign-in Link */}
        <p className="mt-2" style={{ color: '#4d4d4d' }}>
          Already have an account?{' '}
          <Link to="/" className="text-danger fw-semibold text-decoration-none">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;