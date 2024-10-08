import elitceler from '../assets/ElitCelerFrame.png';
import Arrow from '../assets/Arrow.jsx';
import React from '../assets/react.svg';
import Next from '../assets/nextjs.svg';
import Node from '../assets/nodejs.svg';
import Mongo from '../assets/mongodb-original-wordmark.svg';
import Flutter from '../assets/flutter.svg';
import Figma from '../assets/figma.svg';
import HTML from '../assets/html-5-svgrepo-com.svg';
import CSS from '../assets/css-svgrepo-com.svg';
import Postgres from '../assets/postgresql-svgrepo-com.svg';
import './styles.css';
import './landing.css';

const Services=()=>{


    return(
        <>
            <div className='container relative z-2 mt-[3.69rem]' id="services">
            <h2 className={`text-[24px]  font-semibold md:max-w-sm md:text-[32px] lg:max-w-2xl lg:text-[40px] max-w-[50rem] lg:ml-[1rem] mb-12 lg:mb-20`}>Convert your Dreams to <span className='heading-span'>Reality</span></h2>
            <div className='relative'>
                <div className='relative z-1 flex items-center h-[26rem] mb-5 p-8 border border-gray-800 bg-gray-900 rounded-3xl overflow-hidden lg: p-20 xl: h-[32rem]'>
                    <div className="absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto pointer-events-none">
                      <img
                        className=" block md:w-full md:h-full md-custom:ml-24 md:object-cover md:block  md:object-right lg:block mt-44 md:mt-0 lg:mt-0  "
                        width={400}
                        height={430}
                        src={elitceler}
                      />
                    </div>
                <div className="left">
                  <div className="blob"></div>
                </div>
                <div className="flex justify-center flex-col items-center relative z-1 max-w-[27rem] ml-11 md:ml-auto lg:ml-auto mt-0 mb-64 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0 ">
                    <h2 className={`pt-7 text-lg mr-7 font-semibold md:max-w-sm md:text-[28px] md:leading-2 lg:max-w-2xl lg:text-[36px] lg:leading-3 max-w-[50rem] mr-11 md-custom:ml-24 md:mx-4 lg:mx-4 mb-1 lg:mb-7`}>Why trust <span className='heading-span'>ElitCeler</span> </h2>
                    <p className="text-sm mr-[2rem] lg:mr-[5rem] mb-[3rem] md-custom:ml-20 text-gray-400">
                       We support the creation of high-performance products with industry-specific solutions.
                    </p>
                    
                   
                </div>
            </div>

            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              {/*card-1, row-2*/}
              <div className="relative min-h-[28rem] overflow-hidden border border-gray-700 rounded-3xl">
                
                <div className="absolute inset-0">
                    <div className='flex justify-evenly items-center mt-11 md:mt-16 lg:mt-24'>
                     <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                        
                        src={Next}
                      />
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                        
                        src={React}
                      /> 
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                        
                        src={Node}
                      /> 
                    </div>
                    <div className='flex justify-evenly items-center mt-11 md:mt-16 lg:mt-24'>
                     <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                       
                        src={Mongo}
                      />
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                        
                        src={Postgres}
                      /> 
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-24 lg:w-24"
                        
                        src={Flutter}
                      /> 
                    </div>
                    <div className='flex justify-evenly items-center mt-11 md:mt-14 lg:mt-24'>
                     <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20"
                       
                        src={HTML}
                      />
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20"
                        
                        src={CSS}
                      /> 
                      <img
                        className=" block h-12 w-12 md:h-20 md:w-20 lg:h-20 lg:w-20"
                        
                        src={Figma}
                      /> 
                    </div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                
                  <h2 className=" text-base md:text-xl lg:text-2xl font-semibold">Techhnologies used</h2>
                  <p className="text-sm mb-[3rem] text-gray-400">
                    Automatically enhance your performance by using our
                    application. Try it now!
                  </p>
                  
                </div>
                
              </div>

              {/*card-2, row-2 */}

              <div className="p-4 bg-gray-900 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                <div className="left">
        <div className="blob"></div>
      </div>
                  <h2 className="text-base md:text-xl lg:text-2xl font-semibold">Grow your digital presence</h2>
                  <p className="text-gray-400 mb-[3rem] text-n-3">
                  Build your digital presence and increase the profits by 2X 
                  </p>
                
                </div>
                <div className="relative h-[20rem] bg-n-8 rounded-2xl overflow-hidden md:h-[25rem]">
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover rounded-2xl"
                    width={560}
                    height={480}
                  />
                </div>
              </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Services;
