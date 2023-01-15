import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import "./LoginForm.css";
import { login } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const { alert } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        label="Email"
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className="password-input">
        <TextInput
          type={showPass ? "text" : "password"}
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
      <button
        className="login-button"
        type="submit"
        disabled={!email || !password || password.length < 8}
      >
        Login
      </button>
      {alert.error && <p className="alert">{alert.error}</p>}
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
