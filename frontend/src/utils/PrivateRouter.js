import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRouter = ({ props }) => {
  const login = localStorage.getItem("login");
  return login ? <Route {...props} /> : <Navigate to="/" />;
};

export default PrivateRouter;
