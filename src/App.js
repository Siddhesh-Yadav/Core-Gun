import './App.scss';
import React,{useContext,useEffect} from 'react';
import State from "./context/State";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Market from './Components/Market';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import Setting from './Components/Setting';


function App() {
  return (
    <>
      <State>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/market" element={<Market />} />        
            <Route path="/cart" element={<Cart />} />        
            <Route path="/profile" element={<Profile />} />        
            <Route path="/setting" element={<Setting />} />        
          </Routes>
        </Router>
      </State>
    </>
  );
}

export default App;
