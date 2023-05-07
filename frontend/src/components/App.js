import Login from './Login';
import Register from './Register'
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>
        <Route path="/reset-password/:token" element={<ResetPassword />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
