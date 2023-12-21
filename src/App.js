import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import ForgetPassword from './pages/User/ForgetPassword';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup'  element={<Signup />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;