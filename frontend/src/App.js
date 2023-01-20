import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PrivateRouter from "./utils/PrivateRouter";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import { refreshToken } from "./redux/actions/authActions";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      {auth.token && <Navbar />}
      <Routes>
        <Route exact path="/" element={localStorage.getItem("login") || auth.token ? <Home /> : <Login />} />
        <Route exact path="/signup" element={localStorage.getItem("login") || auth.token ? <Navigate to="/" /> : <SignUp />} />
        <PrivateRouter exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
