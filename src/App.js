import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './Pages/aboutus';
import Contactus from './Pages/contactus';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import User from './Pages/user';
import Logout from './Pages/logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/signup" element={Signup} />
        <Route exact path="/home" element={Home} />
        <Route exact path="/user" element={User} />
        <Route exact path="/aboutus" element={Aboutus} />
        <Route exact path="/contactus" element={Contactus} />
        <Route exact path="/logout" element={Logout}/>
      </Routes>
    </Router>
  );
}

export default App;
