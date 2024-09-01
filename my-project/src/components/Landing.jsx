import bulb from '../assets/bulb.svg';
import grid from '../assets/grid.png';
import smiley from '../assets/smiley.svg';
import circleText from '../assets/circlrText.png';
import rating from '../assets/rating.png';
import './landing.css';
import Navbar from "./Navbar.jsx";
import Button from "./Button.jsx";

const Landing = () => {
  return (
    <div className="container glass-overlay">
      <Navbar />
      <div className="grid-bg">
        <img src={grid} alt="Grid background" />
      </div>
      <div className="block w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 bulb-icon">
        <img src={bulb} alt="Bulb icon" />
      </div>

      
      <div className="hidden pl-9 mt-40 md:pl-5 md:block lg:block xl:block md-custom:block sam-fold:block md:left-7 md:mt-16 lg:mt-16 lg:left-26 xl:left-20 md-custom:ml-3 sam-fold:mt-11 sam-fold:left-0 smiley-text">
        <h5 className=''>25+</h5>
        <p className=''>happy clients !</p>
      </div>
      <div className="block ml-7 mb-11 md:ml-4 circle">
        <img src={circleText} alt="Circle text" />
      </div>
      <div className="rating-cont">
        <div className="hidden mt-44 mr-11 md:block md:mt-8 md:mr-4 lg:mt-8 lg:mr-3 rating md-custom:mt-44">
          <img src={rating} alt="Rating" />
        </div>
        <div className="hidden mt-8 md:block md:mt-2 rating-text">
          <h5>4.7</h5>
          <p>rating</p>
        </div>
      </div>
      <div className="right">
        <div className="blob"></div>
      </div>
      <div className="hero-text absolute top-44 right-[60px] md:top-36 md:right-24 lg:top-20 lg:right-64 laptop:top-56  tab:top-96 md-custom:top-96 sam-fold:top-24 sam-fold:right-28">
        <h1 className='text-[36px] mt-4 pr-2 mr-1 pb-7 mb-4 md:text-4xl lg:text-[68px] md-custom:text-7xl tab:text-8xl tab:ml-7 sam-fold:text-[28px] '>
          <span className='white'>PRODUCTS THAT <br />BRIDGE TO </span>
          <span className='orange'>REALITY</span>
        </h1>
        <p className='block text-sm mb-7 md:hidden'>
          We at ElitCeler turn your dreams into reality
        </p>
        <p className='hidden md:block hero-text-para md-custom:w-[100%]'>
          The future belongs to the generation who believes in dreams.<br />
          We at ElitCeler Tech perform infinite times of continuous processes<br />
          of improvements to fulfill those dreams.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Landing;
