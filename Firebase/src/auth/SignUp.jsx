import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpass: "",
  });

  const getInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (user.password === user.cpass) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          updateProfile(auth.currentUser, {
            displayName: user.username,
          })
            .then(() => {
              console.log("User profile updated:", auth.currentUser);
            })
            .catch((err) => {
              console.log("Profile update error:", err.message);
            });
          console.log("User Registered Successfully!");
        })
        .catch((err) => {
          console.log("Registration error:", err.message);
        });
    } else {
      console.log("Passwords don't match!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow rounded-4 border-0" style={{ background: "#ffffff" }}>
            <h4 className="text-center fw-bold mb-4">User Registration</h4>
            <form onSubmit={submitData}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={user.username}
                  onChange={getInput}
                  placeholder="Enter username"
                  required
                />
              </div>
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
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="cpass"
                  className="form-control"
                  value={user.cpass}
                  onChange={getInput}
                  placeholder="Re-enter password"
                  required
                />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary px-5 rounded-pill">
                  Register
                </button>
              </div>
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none fw-semibold">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
