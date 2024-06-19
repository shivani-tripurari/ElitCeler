//import Navbar from "./Navbar.jsx";
import Company from './Company.jsx';
import Landing from './Landing.jsx';
import './styles.css';

const Hero = () => {
  return (
    <div className="container hero-container">
      <Landing/>
      <Company className="hidden relative z-10 mt-20 lg:block"/>
    </div>
  )
}

export default Hero;