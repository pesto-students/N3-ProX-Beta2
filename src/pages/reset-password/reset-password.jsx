import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import TextInputBox from "../../components/text-input-box/text-input-box";
import "./reset-password.scss";
import validator from "../../shared/utility/validator";

function ResetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validate = (email) => {
    setEmailError(validator.validateEmail(email));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    validate(email);

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div>
      <div className="container">
        <div className="card">
          <h1 className="card-title">Forgot password?</h1>
          {error && <span className="errorText">{error}</span>}
          {message && <span className="successText">{message}</span>}
          <form className="card-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <div className="card-input-container username">
              <TextInputBox
                placeholder="Enter your email"
                reference={emailRef}
                id="username"
                errorText="Invalid e-mail address"
                error={emailError}
              />
            </div>
            <button className="card-button" disabled={loading}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
