import './landing.css';
import './styles.css';
import elitceler from '../assets/elitceler-logo.svg';


const Footer = () => {
  return (
    <>
        <div className='container relative z-2 mt-[6.69rem]'>
        
            <div className='footer-section'>
                <div className="col1">
                    <div className="logo">
                        <img src={elitceler} />
                    </div>
                    <div className="footer-text">
                        <p>The future belongs to the generation who<br/> believes in dreams.</p>
                    </div>
                </div>
                <div className="col2">
                    <h3>Our divisions</h3>
                    <ul>
                        <li>Health care</li>
                        <li>Education</li>
                        <li>Finance</li>
                    </ul>
                </div>
                <div className="col3">
                    <h3>Company</h3>
                    <ul>
                        <li>About us</li>
                        <li>Partners</li>
                        <li>Phone number</li>
                    </ul>
                </div>
                <div className="col4">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address line 1</li>
                        <li>Address line 2</li>
                        <li>Address line 3</li>
                    </ul>
                </div>
            </div>
            <div className="line"></div>
            <div className="copyrights">
                <h1>ELIT<span>CELER</span></h1>
                <div className="gradinet"><div className="blobGra"></div></div>
                <div className="icons">
                    <img src=''/>
                    <img src=''/>
                    <img src=''/>
                    <p>© ElitCeler. All Rights Reserved 2022</p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Footer
