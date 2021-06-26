import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.scss";

function SignUp() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h1 className="card-title">ProX</h1>
          <small className="card-subtitle">Create an account to get access</small>
          <form className="card-form">
            <label htmlFor="username">Username</label>
            <div className="card-input-container username">
              <input type="text" placeholder="Enter your username" id="username" />
            </div>
            <label htmlFor="password">Password</label>
            <div className="card-input-container password">
              <input type="password" placeholder="Enter your password" id="password" />
            </div>
            <label htmlFor="password">Confirm</label>
            <div className="card-input-container password">
              <input type="password" placeholder="Re-enter your password" id="password" />
            </div>
            <button className="card-button">Creat an Account</button>
            <small className="card-forgot-password">
              Already have an account? <Link to={"/log-in"}>Sign In here.</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
