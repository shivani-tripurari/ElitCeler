import bulb from '../assets/bulb.svg'
import grid from '../assets/grid.png';
import smiley from '../assets/smiley.svg'
import circleText from '../assets/circlrText.png';
import rating from '../assets/rating.png';
import './landing.css';
import Navbar from "./Navbar.jsx";
import Button from "./Button.jsx";

const Landing = () => {
  return (
    <div className="container glass-overlay ">
      <Navbar/>
      <div className="grid-bg"><img src={grid}/></div>
      <div className="block w-14 h-14 md:block md:w-20 md:h-20 lg:w-24 lg:h-24 bulb-icon"><img src={bulb}/></div>
     
        <div className="block ml-1 mt-32 md:block md:ml-7 md:mt-16 lg:mt-16 smiley-icon"><img src={smiley}/></div>
        <div className="block pl-9 mt-32 md:block md:mt-16 lg:mt-16 smiley-text"><h5>600+</h5><p>happy clients !</p></div>
      <div className="block ml-7 mb-11 md:block circle"><img src={circleText}/></div>
      <div className="rating-cont">
        <div className="block mt-44 mr-11 md:block md:mt-12 md:mr-7 lg:mt-8 lg:mr-3 rating"><img src={rating}/></div>
        <div className="block mt-8 md:block rating-text"><h5>4.7</h5><p>rating</p></div>
      </div>
      <div className="right">
        <div className="blob"></div>
      </div>
      <div className="hero-text absolute top-44 right-[60px] md:top-48 md:right-64 ">
        <h1 className='text-[36px] mt-4 pr-2 mr-1 pb-7 mb-4 md:text-7xl'><span className='white'>PRODUCTS THAT <br/>BRIDGE TO </span> <span className='orange'>REALITY</span> </h1>
        <p className='block text-sm mb-7 md:hidden'>We at ElitCeler turn your dreams into reality</p>
        <p className='hidden md:block hero-text-para' >The future belongs to the generation who believes in dreams.<br/>
         We at ElitCeler Tech perform infinite times of continuous processes<br/>
          of improvements to fulfil those dreams.</p>
        <Button />

      </div>
    </div>
  )
}

export default Landing
