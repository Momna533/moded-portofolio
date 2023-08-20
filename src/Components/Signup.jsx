import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <div className="login">
        <div className="login_content">
          <h1>Signup</h1>
          <form action="" className="login_form">
          <label htmlFor="name">
              <input type="name" placeholder="username"/>
            </label>
            <label htmlFor="email">
              <input type="email" placeholder="email" />
            </label>
            <label htmlFor="password">
              <input type="password" placeholder="password" />
            </label>
            <button type="submit">Signup</button>
            <span>already have an account <Link to="/login">Login</Link> </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;