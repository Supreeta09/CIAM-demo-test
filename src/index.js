import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import Aboutus from './Pages/aboutus';
import Contactus from './Pages/contactus';
import Login from './Pages/login';
import Signup from './Pages/signup';
import User from './Pages/user';
import Logout from './Pages/logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/user" element={<User/>} />
        <Route exact path="/aboutus" element={<Aboutus/>} />
        <Route exact path="/contactus" element={<Contactus/>} />
        <Route exact path="/logout" element={<Logout/>}/>
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
