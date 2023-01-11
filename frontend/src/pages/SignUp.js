import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Tray</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
