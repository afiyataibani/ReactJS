import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const getInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("Login error:", err.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow rounded-4 border-0" style={{ background: "#ffffff" }}>
            <h4 className="text-center fw-bold mb-4">User Login</h4>
            <form onSubmit={submitData}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  onChange={getInput}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={user.password}
                  onChange={getInput}
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary px-5 rounded-pill">
                  Sign In
                </button>
              </div>
              <p className="text-center mt-3">
                Don't have an account?{" "}
                <Link to="/signup" className="text-decoration-none fw-semibold">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
