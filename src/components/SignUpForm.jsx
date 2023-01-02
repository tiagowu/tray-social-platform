import React from "react";
import TextInput from "./TextInput";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <form>
      <TextInput label="Email" />
      <TextInput label="Full Name" />
      <TextInput label="Username" />
      <TextInput label="Password" />
    </form>
  );
};

export default SignUpForm;
