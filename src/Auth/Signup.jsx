import React from 'react';

const Signup = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-success bg-opacity-10">
      <div className="bg-white rounded-4 shadow p-4 p-md-5 w-100" style={{ maxWidth: '420px' }}>
        <div className="text-center mb-4">
          <img
            src="https://readdy.ai/api/search-image?query=A%20cute%20cartoon%20monkey%20character%20with%20a%20red%20circular%20background%2C%20stylized%20as%20a%20mascot%20logo%20for%20a%20business.%20The%20monkey%20has%20a%20friendly%20face%20with%20big%20eyes%20and%20is%20wearing%20a%20suit%20or%20business%20attire.%20The%20logo%20has%20a%20circular%20border%20with%20text%20around%20it&width=200&height=200&seq=1&orientation=squarish"
            alt="Logo"
            className="mb-3"
            style={{ width: '96px', height: '96px', objectFit: 'contain' }}
          />
          <h3 className="fw-semibold">Create Your Account</h3>
          <p className="text-muted small">Join us and manage your loans easily</p>
        </div>

        <form className="d-grid gap-3">
          <input type="text" className="form-control rounded-pill border-success-subtle" placeholder="Full Name" />
          <input type="email" className="form-control rounded-pill border-success-subtle" placeholder="Email Address" />
          <input type="password" className="form-control rounded-pill border-success-subtle" placeholder="Password" />
          <input type="password" className="form-control rounded-pill border-success-subtle" placeholder="Confirm Password" />
          <input type="tel" className="form-control rounded-pill border-success-subtle" placeholder="Phone Number" />
          <input type="text" className="form-control rounded-pill border-success-subtle" placeholder="Address" />

          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" id="terms" />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <span className="text-danger">terms and conditions</span>
            </label>
          </div>

          <button className="btn btn-success w-100 rounded-pill mt-3 py-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
