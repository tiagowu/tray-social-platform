import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import { refreshToken } from "./redux/actions/authActions";

function App() {
  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={alert.loading ? <Loading /> : auth.token ? <Home /> : <Login />}
        />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
