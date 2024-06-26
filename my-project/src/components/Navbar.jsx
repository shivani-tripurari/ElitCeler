import './navbar.css';
import elitceler from '../assets/elitceler-logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav-container container'>
      <div className="logo">
        <img src={elitceler} />
      </div>
      
      <div className="hidden  md:block rounded-nav rounded-full">
        <nav className='sm: text-xs gap-0.5 '>
            <li><a href='#services'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><button className='rounded-full'>Contact us</button></li>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
