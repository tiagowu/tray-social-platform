import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { refreshToken } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={localStorage.getItem("login") ? <Home /> : <Login />} />
        <Route exact path="/signup" element={localStorage.getItem("login") ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
