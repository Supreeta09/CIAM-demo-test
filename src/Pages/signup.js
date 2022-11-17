import React from "react";
import { useNavigate } from 'react-router-dom';
import FadeIn from "react-fade-in/lib/FadeIn";
const Signup = () =>{
    const navigate = useNavigate();
    return(
        <div className="singup-container">
            <FadeIn transitionDuration={600}>
            <h1>Sign Up</h1>
            <form>
                <label>First name</label>
                <input type="text" placeholder="Enter first name" required/>
                <label>Last name</label>
                <input type="text" placeholder="Enter last name" required/>
                <label>Email</label>
                <input type="email" placeholder="Enter email" required/>
                <label>Password</label>
                <input type="password" placeholder="Enter password" required/>
                <label>Confirm password</label>
                <input type="password" placeholder="Enter password" required/>
                <button className="btn-button" onClick={()=>{navigate("/home")}}>Submit</button>
            </form>
            <p>Already have an account? <a href="/">Login</a></p>
            </FadeIn>
        </div>
    )
}

export default Signup;