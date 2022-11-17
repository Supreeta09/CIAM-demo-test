import { useNavigate } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
function User() {
  const navigate = useNavigate();
    return (
      <div>
        <FadeIn transitionDuration={600}>
        <div >
          <button class="back-btn" onClick={()=>{navigate("/home")}}>BACK </button>
        </div>
        <br></br>
        <div 
        style={{
          display: 'flex',
          justifyContent: 'Center',
          height: '100vh',
          color: 'white'
        }}
        >
          <h1>User details</h1>
          <p></p>
        </div>
        </FadeIn>
      </div>
    );
  };
    
  export default User;