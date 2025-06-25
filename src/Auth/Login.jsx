import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClientLogin = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#ccf8db' }}>
      <div className="text-center w-100 px-3" style={{ maxWidth: '400px' }}>
        {/* Logo */}
        <img
          src="https://readdy.ai/api/search-image?query=A%20cute%20cartoon%20monkey%20character%20with%20a%20red%20circular%20background%2C%20stylized%20as%20a%20mascot%20logo%20for%20a%20business.%20The%20monkey%20has%20a%20friendly%20face%20with%20big%20eyes%20and%20is%20wearing%20a%20suit%20or%20business%20attire.%20The%20logo%20has%20a%20circular%20border%20with%20text%20around%20it&width=200&height=200&seq=1&orientation=squarish" // Replace with your logo
          alt="Logo"
          className="mb-4"
          style={{ height: '120px', objectFit: 'contain' }}
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