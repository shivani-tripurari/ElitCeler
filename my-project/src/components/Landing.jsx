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
      <div className="hidden  md:block bulb-icon"><img src={bulb}/></div>
     
        <div className="hidden smiley-icon"><img src={smiley}/></div>
        <div className="hidden  md:block smiley-text"><h5>600+</h5><p>happy clients !</p></div>
      <div className="hidden  md:block circle"><img src={circleText}/></div>
      <div className="rating-cont">
        <div className="hidden  md:block rating"><img src={rating}/></div>
        <div className="hidden  md:block rating-text"><h5>4.7</h5><p>rating</p></div>
      </div>
      <div className="right">
        <div className="blob"></div>
      </div>
      <div className="hero-text absolute top-32 right-[60px] md:top-48 md:right-64 ">
        <h1 className='text-[40px] mt-4 pr-2 pb-7 mb-4 md:text-7xl'><span className='white'>PRODUCTS THAT <br/>BRIDGE TO </span> <span className='orange'>REALITY</span> </h1>
        <p>The future belongs to the generation who believes in dreams.<br/>
         We at ElitCeler Tech perform infinite times of continuous processes<br/>
          of improvements to fulfil those dreams.</p>
        <Button />

      </div>
    </div>
  )
}

export default Landing
