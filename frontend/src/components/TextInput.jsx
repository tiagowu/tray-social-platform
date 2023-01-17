import React from "react";
import "./TextInput.css";

const TextInput = ({ type, label, name, value, handleChange }) => {
  return (
    <div className="input-container">
      <input type={type} value={value} name={name} autoComplete="off" onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
};

export default TextInput;
