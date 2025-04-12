import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp() {
  let [user, setUser] = useState({});
  let getInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  let submitData = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password == user.cpass) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          console.log(res.user);
          updateProfile(auth.currentUser, { displayName: user.username })
            .then((userRes) => {
              console.log(auth.currentUser);
            })
            .catch((err) => {
              console.log(err.message);
            });
          console.log("User Registered Successfully!");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      console.log("Passowrds Dont't Match!");
    }
  };

  return (
    <div>
      <h1>Sign Up Page</h1>
      <form method="post" onSubmit={(e) => submitData(e)}>
        <table border={1} align="center">
          <tr>
            <td>Enter Username</td>
            <td>
              <input
                type="text"
                name="username"
                onChange={(e) => getInput(e)}
              />
            </td>
          </tr>
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
            <td>Enter Confirm Password</td>
            <td>
              <input type="text" name="cpass" onChange={(e) => getInput(e)} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <input type="submit" name="submit" value="Sign Up" />
            </td>
          </tr>
        </table>
      </form>
      <Link to="/">Sign In</Link>
    </div>
  );
}

export default SignUp;
