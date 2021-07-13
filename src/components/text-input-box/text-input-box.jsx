import React from "react";
import "./text-input-box.scss";

function TextInputBox({
  placeholder = "",
  reference = null,
  id = "",
  errorText,
  error,
  type = "text",
  required = false,
  onChange = () => true,
}) {
  return (
    <>
      <input type={type} placeholder={placeholder} id={id} ref={reference} required={required} onChange={onChange} />
      {error && <span className="error">{errorText}</span>}
    </>
  );
}

export default TextInputBox;
