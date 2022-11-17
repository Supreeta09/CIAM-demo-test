import { useNavigate } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
function Aboutus() {
  const navigate = useNavigate();
    return (
      <div>
        <FadeIn transitionDuration={600}>
        <div >
          <button class="back-btn" onClick={()=>{navigate("/home")}}>BACK </button>
        </div>
        <br></br>

        <div className='aboutus-container'>
          <h1>About Daimler Truck</h1>
          <p>We are one of the world's largest commercial vehicle manufacturers, 
            with over 40 production sites around the globe and more than 100,000 employees. 
            We offer light, medium and heavy duty trucks, city and intercity buses, 
            coaches and bus chassis. Tailored financial services are also part of our portfolio.</p>
        </div>
        </FadeIn>
      </div>
    );
  };
    
  export default Aboutus;