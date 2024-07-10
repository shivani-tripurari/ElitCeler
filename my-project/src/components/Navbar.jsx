import { useState } from 'react';
import './navbar.css';
import elitceler from '../assets/elitceler-logo.svg';
import hamburger from '../assets/hamburger-menu.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-container container flex-wrap'>
      <div className="logo">
        <img src={elitceler} />
      </div>
      
      <div className="hidden md:block rounded-nav rounded-full flex flex-col justify-between">
        <nav className='sm: text-xs gap-0.5 '>
           <ul className='hidden md:flex items-center space-x-11'>
            <li><a href='#services'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><button className='rounded-full nav-btn'>Contact us</button></li>
           </ul>
          
        </nav>

        
       

      </div>

      <div className='md:hidden'>
              <button className='ham-btn' onClick={toggleNavbar}><img src={isOpen ? close : hamburger} alt="Menu Icon" /></button>
      </div>
      {isOpen && (
      <div className='mobile md:hidden'>
      <ul className='flex flex-col basis-full items-center'>
      <li><a href='#services'>About</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><button className='rounded-full nav-btn'>Contact us</button></li>
    </ul>
      </div>
    )}
    </div>
    
  )
}

export default Navbar
