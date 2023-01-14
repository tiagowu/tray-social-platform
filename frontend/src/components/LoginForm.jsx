import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import "./LoginForm.css";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TextInput
        type="email"
        label="Email"
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
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
          <button type="button" className="login-showpass" onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </button>
        ) : null}
      </div>
      <button className="login-button" type="submit">
        Login
      </button>
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
