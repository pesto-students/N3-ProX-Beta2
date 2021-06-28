import React from "react";
import "./text-input-box.scss";

function TextInputBox({ placeholder, reference, id = "", errorText, error, type = "text" }) {
  return (
    <>
      <input type={type} placeholder={placeholder} id={id} ref={reference} />
      {error && <span className="error">{errorText}</span>}
    </>
  );
}

export default TextInputBox;
