import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  let [user, setUser] = useState({});
  let navigate = useNavigate();
  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  let submitData = (e) => {
    e.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <form method="post" onSubmit={(e) => submitData(e)}>
        <table border={1} align="center">
          <tr>
            <td>Enter Email</td>
            <td>
              <input type="email" name="email" onChange={(e) => getInput(e)} />
            </td>
          </tr>
          <tr>
            <td>Enter Password</td>
            <td>
              <input
                type="text"
                name="password"
                onChange={(e) => getInput(e)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <input type="submit" name="submit" value="Sign In" />
            </td>
          </tr>
        </table>
      </form>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default SignIn;
