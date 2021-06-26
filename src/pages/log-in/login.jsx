import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

function LogIn() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h1 className="card-title">Hello Again!</h1>
          <small className="card-subtitle">Enter your credentials and get access</small>
          <form className="card-form">
            <label htmlFor="username">Username</label>
            <div className="card-input-container username">
              <input type="text" placeholder="Enter your email" id="username" />
            </div>
            <label htmlFor="password">Password</label>
            <div className="card-input-container password">
              <input type="password" placeholder="Enter your password" id="password" />
            </div>
            <button className="card-button">Sign In</button>
            <small className="cardOr">or</small>
            <button type="button" className="login-with-google-btn">
              Sign in with Google
            </button>
            <small className="card-forgot-password">
              Forgot your password ? <a>Reset Password</a>
            </small>
            <small className="card-forgot-password">
              New to ProX? <Link to={"/sign-up"}>Create an account here.</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
