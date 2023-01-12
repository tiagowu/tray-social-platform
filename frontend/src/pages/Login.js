import React from "react";
import LoginForm from "../components/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Tray</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
