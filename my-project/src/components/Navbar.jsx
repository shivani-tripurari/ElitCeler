import { useState } from 'react';
import './navbar.css';
import elitceler from '../assets/elitceler-logo.svg';
import hamburger from '../assets/hamburger-menu.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);

  const whatsappNumber = '+917075202565';

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const redirectToWhatsApp = () => {
    const message = "Hello, I'd like to know more about your services!";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
            <li><button onClick={redirectToWhatsApp} className='rounded-full nav-btn'>Contact us</button></li>
           </ul>
          
        </nav>

        
       

      </div>

      {/* Hamburger Menu (visible only on sm and md) */}
   <div className='block lg:hidden'>
   <Hamburger
     color="white"
     size={28}
     toggled={isOpen}
     toggle={setIsOpen}
     className="block lg:hidden"  // Ensure it's hidden on lg and above
   />
 </div>
      {/* Mobile Menu (when Hamburger is toggled) */}
   {isOpen && (
     <div className='text-xl text-white fixed z-20 top-0 right-0 w-screen h-screen p-4 bg-[#121212] block lg:hidden'>
       <header className='flex justify-end items-center p-7'>
         <Hamburger
           color="white"
           size={28}
           toggled={isOpen}
           toggle={setIsOpen}
           className="block lg:hidden"  // Ensure it's hidden on lg and above
         />
       </header>
       <main className='flex items-start justify-center h-screen text-2xl text-[#FBBC89]'>
         <ul className='p-7'>
           <li className='p-7 hover:scale-125'><a href='#services'>About</a></li>
           <li className='p-7 hover:scale-125'><a href='#projects'>Projects</a></li>
           <li className='p-7 hover:scale-125'><Link to="/team">Team</Link></li>
           <li className='p-7 hover:scale-125'><Link to="/blogs">Blogs</Link></li>
           <li className='p-7 hover:scale-125'><button onClick={redirectToWhatsApp} className='rounded-full nav-btn'>Contact us</button></li>
         </ul>
       </main>
     </div>
   )}
    </div>
    
  )
}

export default Navbar

