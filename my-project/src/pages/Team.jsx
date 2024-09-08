import { teamMembers } from "../constants";
import '../components/styles.css';
import '../components/landing.css';
import mail from "../assets/icons8-mail.png";
import linkedin from "../assets/icons8-linkedin-50.png";
import logo from '../assets/elitceler-logo.svg';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import '../components/styles.css';
const Team = () => {
  return (
    <>
      <div className="static left-27 top-16">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="container relative z-2 mt-[6.69rem] mb-0" id="teams">
        <div className="left">
          <div className="blob"></div>
        </div>
        <h2 className="text-[24px] font-semibold md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] lg:ml-[-3rem] mb-12 lg:mb-20">
          Get to know our <span className="heading-span">Team</span>
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {teamMembers.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[calc(30.333%-20px)] w-full sm:w-[calc(50%-10px)] shadow-md"
              key={item.id}
            >
              <div className="relative flex flex-col z-2 min-h-[22rem] p-[2.4rem] bg-gray-900 backdrop-blur border border-gray-800 rounded-2xl">
                <h5 className="z-10 absolute bottom-11 mb-5 text-slate-300 font-bold">
                  {item.title}
                </h5>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.imgUrl}
                    className="absolute object-cover top-0 left-0 rounded-2xl z-0 opacity-50 h-full w-full"
                    alt={item.title}
                  />
                  <p className="absolute bottom-0 body-2 mb-6 text-orange-400 font-medium ">
                    {item.post}
                  </p>
                  <a
                    href={item.mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-5 pl-2 pb-0 pointer-events-auto"
                  >
                    <img src={mail} alt="Mail" className=" h-7 w-7" />
                  </a>
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-14 h-7 w-7 pointer-events-auto"
                  >
                    <img src={linkedin} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sm-right">
          <div className="blob"></div>
        </div>
        <Footer />
      </div>
      
    </>
  );
}

export default Team;
