import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-com';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
 
function App() {
  return (
    <div className="App">
       <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />  
          <Route path='/login' element={<Login/>} />  
          <Route path='/dashboard' element={<Dashboard/>} />       
        </Routes>
       </Router>
    </div>
  );
}

export default App;
