import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <form className="signup-form">
      <TextInput
        type="email"
        label="Email"
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        type="text"
        label="Full Name"
        value={fullName}
        handleChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <TextInput
        type="text"
        label="Username"
        value={username}
        handleChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div className="password-input">
        <TextInput
          type={showPass ? "type" : "password"}
          label="Password"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {password && "filled" ? (
          <button type="button" className="signup-showpass" onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </button>
        ) : null}
      </div>
      <button className="signup-button" type="submit">
        Sign Up
      </button>
      <p>
        Already have an account?{" "}
        <Link to="/" className="login-link">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
