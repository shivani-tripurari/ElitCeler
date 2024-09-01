import './landing.css';
import './styles.css';
import elitceler from '../assets/elitceler-logo.svg';
import mail from "../assets/icons8-mail.png";
import insta from '../assets/instaLogo.svg';
import linkedin from "../assets/icons8-linkedin-50.png";


const Footer = () => {
    return (
        <>
          <div className='container mx-auto relative z-2 mt-[6.69rem] p-4'>
            <div className='footer-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              <div className="col1">
                <div className="logo mb-4">
                  <img src={elitceler} alt="ElitCeler Logo" />
                </div>
                <div className="footer-text">
                  <p className="text-gray-500">
                    The future belongs to the generation who<br /> believes in dreams.
                  </p>
                </div>
              </div>
              <div className="col2">
                <h3 className="text-lg font-bold mb-4">Our divisions</h3>
                <ul className="text-gray-500">
                  <li className="mb-2">Health care</li>
                  <li className="mb-2">Creative Tech</li>
                  <li className="mb-2">Finance</li>
                </ul>
              </div>
              <div className="col3">
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="text-gray-500">
                  <li className="mb-2">About us</li>
                  <li className="mb-2">Partners</li>
                  <li className="mb-2">+91 7075202565</li>
                </ul>
              </div>
              <div className="col4">
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="text-gray-500">
                  <li className="mb-2">T-hub, Phase-2</li>
                  <li className="mb-2">Hyderabad, Telangana</li>
                  <li className="mb-2">500081</li>
                </ul>
              </div>
            </div>
            <div className="line my-8 border-t border-gray-300"></div>
            <div className="copyrights flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <h1 className="text-2xl font-bold mb-4 md:mb-0">
                ELIT<span className="text-orange-500">CELER</span>
              </h1>
              <div className="gradinet relative mb-4 md:mb-0">
                <div className="blobGra"></div>
              </div>
              <div className="icons flex items-center space-x-4">
                  <a href="mailto:saikrishna.alishala@elitceler.com" target="_blank" rel="noopener noreferrer">
                    <img src={mail} alt="Email Icon" className="w-6 h-6"/>
                  </a>
                  <a href="https://www.linkedin.com/company/elitceler-technologies-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn Icon" className="w-6 h-6"/>
                  </a>
                  <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Icon" className="w-5 h-5"/>
                  </a>
              </div>

              <p className="text-gray-500 mt-4 md:mt-0">© ElitCeler. All Rights Reserved 2022</p>
            </div>
          </div>
        </>
      )
      
}

export default Footer
