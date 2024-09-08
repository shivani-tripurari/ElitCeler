import { benefits } from "../constants";
import Arrow from '../assets/Arrow.jsx';
import './styles.css';
import './landing.css';

const Benefits = () => {
  return (
    <div id="benefits" className='container relative z-2 mt-[6.69rem]'>
      <div className="left">
        <div className="blob"></div>
      </div>
      <h2 className={`text-[24px] font-semibold md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] ml-[0rem] lg:ml-[3rem] mb-12 lg:mb-20`}>Start your journey with <span className='heading-span'>ElitCeler</span></h2>
      <div className="flex flex-wrap gap-10 mb-10 justify-center">
  {benefits.map((item) => (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[calc(30.333%-20px)] shadow-md"
      key={item.id}
    >
      <div className="relative flex flex-col z-2 min-h-[22rem] p-[2.4rem] bg-gray-900 backdrop-blur border border-gray-800 rounded-2xl">
        <h5 className="mb-5 text-xl text-slate-300">{item.title}</h5>
        <p className="p-[0.7rem]  mb-6 text-slate-300">{item.text}</p>
        <div className="flex items-center justify-between mt-auto">
                    <img src={item.iconUrl} width={48} height={48} />
                    
                      
                    <a href="https://www.linkedin.com/company/elitceler-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="flex justify-end items-center">
                      <p className="p-2 ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                          Know more
                      </p>
                      <Arrow />
                    </a>

                      
                    
                  </div>
      </div>
      
    </div>
  ))}
  
</div>
<div className="sm-right">
        <div className="blob"></div>
      </div>

    </div>
  )
}

export default Benefits
