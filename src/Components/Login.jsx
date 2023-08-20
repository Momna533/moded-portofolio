import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="login">
        <div className="login_content">
          <h1>Login</h1>
          <form action="" className="login_form">
            <label htmlFor="email">
              <input type="email" placeholder="email" />
            </label>
            <label htmlFor="password">
              <input type="password" placeholder="password" />
            </label>
            <button type="submit">login</button>
            <span>dont have an account <Link to="/signup">Signup</Link> </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
