import {NavLink } from 'react-router-dom';
import '../App.css';
import FadeIn from 'react-fade-in/lib/FadeIn';
function Home() {
    return (
      <header>
        <FadeIn transitionDuration={600}>
        <div className="navbar-container">
          <div className='logo'>
            DAIMLER TRUCK
          </div>
        <nav className='item'>
		

        
		<NavLink className="navlink" to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink className="navlink" to='/user' activeStyle>
			User
		</NavLink>
		<NavLink className="navlink" to='/aboutus' activeStyle>
			About us
		</NavLink>
        <NavLink className="navlink" to='/contactus' activeStyle>
			Contact us
		</NavLink>
        <NavLink className="navlink" to='/logout' activeStyle>
			Logout
		</NavLink>

		
	</nav>
  </div>
  <div style={{
          display: 'flex',
          justifyContent: 'Center',
          height: '100vh'
        }}>
    <h2>Welcome to Daimler Truck!</h2>
  </div>
  </FadeIn>
</header>
    );
  };
    
  export default Home;