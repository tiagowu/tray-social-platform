import SignUp from './pages/signup';
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </Router>
  );
}

export default App;
