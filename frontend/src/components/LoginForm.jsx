import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import "./LoginForm.css";
import { login } from "../redux/actions/authActions";
import { clearAlert } from "../redux/actions/alertActions";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const { alert } = useSelector((state) => state);
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const [showPass, setShowPass] = useState(false);
  const { email, password } = userData;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TextInput type="text" label="Email" name="email" value={email} handleChange={handleDataChange} />
      <div className="password-input">
        <TextInput type={showPass ? "text" : "password"} label="Password" name="password" value={password} handleChange={handleDataChange} />
        {password && "filled" ? (
          <button type="button" className="login-showpass" onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </button>
        ) : null}
      </div>
      <button className="login-button" type="submit" disabled={!email || !password || password.length < 8}>
        {alert.loading ? "Loading..." : "Login"}
      </button>
      {alert.error && <p className="alert">{alert.error}</p>}
      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link" onClick={clearAlert()}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
