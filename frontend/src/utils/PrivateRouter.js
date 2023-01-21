import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const login = localStorage.getItem("login");
  return login ? children : <Navigate to="/" />;
};

export default PrivateRouter;
