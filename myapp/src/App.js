import './App.css';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-com';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
 
function App() {
  return (
    <div className="App">
       <Router>
        <nev>
          <ul>
            <li><link to="/home">Home</link></li>
            <li><link to="/about">About</link></li>
            <li><link to="/contact">Contact</link></li>
          </ul>
        </nev>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/contact' element={<ContactUs/>} />

           
        </Routes>
       </Router>
    </div>
  );
}

export default App;
