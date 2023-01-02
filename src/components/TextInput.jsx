import React, { useState } from "react";
import "./TextInput.css";

const TextInput = ({ type = "text", label }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
};

export default TextInput;
