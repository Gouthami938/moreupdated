import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import UserDetails from './pages/UserDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import userDto from './pages/userDto';

function App() {
  return (
   <BrowserRouter>
   <ToastContainer/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/userdetails" element={<UserDetails/>}/>
    {/* <Route path="/userDto" element={<userDto/>}/> */}

   </Routes>

   </BrowserRouter>

  );
}
export default App;
