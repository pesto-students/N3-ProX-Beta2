import React, { useRef, useState, useEffect } from "react";
import Model from "../../../../components/model/model";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { useAuth } from "../../../../contexts/auth-context";
import validator from "../../../../shared/utility/validator";
import TextInputBox from "../../../../components/text-input-box/text-input-box";

function SignInModel({ setOpenModal }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function handleLogInSubmit(e) {
    e.preventDefault();
  }
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const signInWithgoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => setOpenModal(false));
  };

  const validate = (email, password) => {
    setEmailError(validator.validateEmail(email));
    setPasswordError(validator.validatePassword(password));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    validate(email, password);

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to log in, Please check you credentials.");
    }

    setLoading(false);
  }

  const LogInModel = () => {
    return (
      <>
        <h1 className="card-title">Hello Again!</h1>
        <small className="card-subtitle">Enter your credentials and get access</small>
        {error && <span className="errorText">{error}</span>}
        <form className="card-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <div className="card-input-container username">
            <TextInputBox
              placeholder="Enter your email"
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
              errorText="Password must contain minimum 6 character"
              error={passwordError}
              type="password"
            />
          </div>
          <button className="card-button" disabled={loading}>
            Sign In
          </button>
          <small className="cardOr">or</small>
          <button className="login-with-google-btn" onClick={signInWithgoogle}>
            Login with Google
          </button>
        </form>
      </>
    );
  };

  return (
    <section>
      <Model
        enableButton={false}
        component={<LogInModel />}
        handleSubmit={handleLogInSubmit}
        setOpenModal={setOpenModal}
      />
    </section>
  );
}

export default SignInModel;
