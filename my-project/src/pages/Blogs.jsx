import { blogs } from "../constants";
import '../components/styles.css';
import '../components/landing.css';
import logo from '../assets/elitceler-logo.svg';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import '../components/styles.css';

const Blogs = () => {
  return (
  <>
    <div className="static left-7 top-7">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>

    <div className="container relative z-2 mt-[6.69rem]" id="blogs">
      <div className="left">
        <div className="blob"></div>
      </div>
      <h2 className="text-sm font-semibold ml-[3rem] md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] mb-12 lg:mb-20">
        Read our blogs and get <span className="heading-span">Inspired</span>
      </h2>
      <div className="flex flex-wrap gap-10 mb-10 justify-center">
        {blogs.map((item) => (
          <div
            className="bg-slate-900 rounded-2xl block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full sm:w-[calc(50%-10px)] md:w-[calc(30.333%-20px)] shadow-md"
            key={item.id}
          >
            <div className="relative flex flex-col z-2 min-h-[22rem] p-[2.4rem] pointer-events-none bg-gray-900 backdrop-blur border border-gray-800 rounded-2xl">
              <h5 className="z-10 absolute bottom-7 mb-5 text-slate-300 font-bold">
                {item.title}
              </h5>
              <div className="flex items-center mt-auto">
                <img
                  src={item.imgUrl}
                  className="backdrop-blur-md absolute object-cover top-0 left-0 rounded-2xl z-0 opacity-50 h-full w-full"
                  alt={item.title}
                />
                <p className="text-slate-200 absolute right-1 bottom-2 p-2 ml-auto font-code text-xs font-medium uppercase tracking-wider text-n-1">
                  Read more...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm-right">
        <div className="blob"></div>
      </div>
      <Footer/>
    </div>
  </>
);

}

export default Blogs
