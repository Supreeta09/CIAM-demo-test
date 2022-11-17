import React from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import FadeIn from "react-fade-in/lib/FadeIn";
const Login = () =>{
    const navigate = useNavigate();
    return(
        <div className="login-container">
            <FadeIn transitionDuration={600}>
            <h1 >Login</h1>
            <form>
                <label>Email</label>
                <input type="text" placeholder="Enter email" required/>
                <label>Password</label>
                <input type="password" placeholder="Enter password" required/>
                <button className="btn-button" onClick={()=>{navigate("/home")}}>Submit</button>
            </form>
            <p>Dont't have an account? <a href="./signup">SignUp</a></p>
            </FadeIn>
        </div>
        
    )
}

export default Login;