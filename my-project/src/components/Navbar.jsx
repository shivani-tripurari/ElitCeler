import './navbar.css';
import elitceler from '../assets/elitceler-logo.svg';
const Navbar = () => {
  return (
    <div className='nav-container container'>
      <div className="logo">
        <img src={elitceler} />
      </div>
      
      <div className="rounded-nav rounded-full">
        <nav className='sm: text-xs gap-0.5 '>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Team</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><button className='rounded-full'>Contact us</button></li>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
