import React from 'react';

const Login = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-success bg-opacity-10">
      <div className="bg-white rounded-4 shadow p-4 p-md-5 w-100" style={{ maxWidth: "400px" }}>
        <div className="d-flex flex-column align-items-center mb-4">
          <div className="mb-4" style={{ width: "96px", height: "96px" }}>
            <img 
              src="https://readdy.ai/api/search-image?query=A%20cute%20cartoon%20monkey%20character%20with%20a%20red%20circular%20background%2C%20stylized%20as%20a%20mascot%20logo%20for%20a%20business.%20The%20monkey%20has%20a%20friendly%20face%20with%20big%20eyes%20and%20is%20wearing%20a%20suit%20or%20business%20attire.%20The%20logo%20has%20a%20circular%20border%20with%20text%20around%20it&width=200&height=200&seq=1&orientation=squarish" 
              alt="Company Logo" 
              className="img-fluid"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
          <h1 className="h4 text-secondary fw-medium">Client sign-in</h1>
        </div>

        <form className="d-grid gap-3">
          <div>
            <input 
              type="text" 
              placeholder="Username" 
              className="form-control rounded-pill text-secondary"
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              className="form-control rounded-pill text-secondary"
            />
          </div>
          <div className="pt-2">
            <button 
              type="submit"
              className="btn btn-success w-100 py-2 rounded-pill"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
