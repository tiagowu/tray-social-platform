import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import "./SignUpForm.css";
import { signup } from "../redux/actions/authActions";

const SignUpForm = () => {
  const { alert } = useSelector((state) => state);
  const initialState = { email: "", fullName: "", username: "", password: "" };
  const [showPass, setShowPass] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const { email, fullName, username, password } = userData;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <TextInput type="text" label="Email" name="email" value={email} handleChange={handleDataChange} />
      <TextInput type="text" label="Full Name" name="fullName" value={fullName} handleChange={handleDataChange} />
      <TextInput type="text" label="Username" name="username" value={username.toLowerCase().replace(/ /g, "")} handleChange={handleDataChange} />
      <div className="password-input">
        <TextInput type={showPass ? "type" : "password"} label="Password" value={password} name="password" handleChange={handleDataChange} />
        {password && "filled" ? (
          <button type="button" className="signup-showpass" onClick={() => setShowPass(!showPass)}>
            {showPass ? "Hide" : "Show"}
          </button>
        ) : null}
      </div>
      <button className="signup-button" type="submit" disabled={!email || !fullName || !username || !password}>
        {alert.loading ? "Loading..." : "Sign Up"}
      </button>
      {alert.error && <p className="alert">{alert.error}</p>}
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
