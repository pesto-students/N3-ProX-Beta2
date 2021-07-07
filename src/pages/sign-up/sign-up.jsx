import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import TextInputBox from "../../components/text-input-box/text-input-box";
import validator from "../../shared/utility/validator";
import "./sign-up.scss";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);

  const validate = (email, password, passwordConfirm) => {
    console.log(passwordConfirm);
    setEmailError(validator.validateEmail(email));
    setPasswordError(validator.validatePassword(password));
    setPasswordConfirmationError(password !== passwordConfirm);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    validate(email, password, passwordConfirm);

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <h1 className="card-title">ProX</h1>
          <small className="card-subtitle">Create an account to get access</small>
          {error && <span className="errorText">{error}</span>}
          <form className="card-form">
            <label htmlFor="username">Username</label>
            <div className="card-input-container username">
              <TextInputBox
                placeholder="Enter your username"
                reference={emailRef}
                id="username"
                errorText="Invalid e-mail address"
                error={emailError}
              />
            </div>
            <label htmlFor="password">Password</label>
            <div className="card-input-container password">
              <TextInputBox
                placeholder="Enter your password"
                reference={passwordRef}
                id="password"
                type="password"
                errorText="Password must contain minimum 6 character"
                error={passwordError}
              />
            </div>
            <label htmlFor="password">Confirm Password</label>
            <div className="card-input-container password">
              <TextInputBox
                placeholder="Re-enter your password"
                reference={passwordConfirmRef}
                id="password"
                type="password"
                errorText="Password is not matching"
                error={passwordConfirmationError}
              />
            </div>
            <button className="card-button" onClick={handleSubmit} disabled={loading}>
              Creat an Account
            </button>
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
