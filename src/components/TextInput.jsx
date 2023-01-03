import React from "react";
import "./TextInput.css";

const TextInput = ({ type, label, value, handleChange }) => {
  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
};

export default TextInput;
