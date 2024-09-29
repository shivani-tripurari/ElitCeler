// import yourlogo from "../assets/yourlogo.svg";
import React from "react";
import Marquee from "react-fast-marquee";
// import styled,{keyframes,css} from "styled-components";
import startup from "../assets/18startup.svg";
// import CRC from "../assets/CRC.svg";
import group from "../assets/Group.svg";
import health from "../assets/Healthkare.svg";
import HH from "../assets/HH.svg";
import kodeblue from "../assets/Kodeblue.svg";
import Moksh from "../assets/Moksh.svg";
import MyHome from "../assets/Myhome.svg";
import PV from "../assets/PV.svg";
import './styles.css';

const Company = () => {


    // const row1 = [startup,group,health,HH,kodeblue];
    // const row2 = [Moksh,MyHome,PV];

  return (
    <>
        <h2 className={`text-[16px] mr-24 w-[35%] md:text-[24px] md-custom:text-[20px] lg:text-[24px] font-semibold mt-36 md-custom:mr-[28rem] md:mr-96 lg:mr-[56rem]`}>Our partners</h2>
        <div className="marquee-bg">
        <Marquee  
            pauseOnHover={true}
            // gradient={true} // Enables the gradient effect
            // gradientColor={[0, 0, 0]} // Sets the gradient color (RGB format)
            // gradientWidth={700}
            >
            <img className="ml-7 mr-7 mt-4"
                src={startup}
                height={20}
                width={144}
                
            />
            <img className="ml-1 mr-1 mt-4"
            src={group}
            height={36}
                width={164}
            />
            <img className="ml-7 mr-7 mt-4"
             src={health}
             height={20}
                width={144}
             />
            <img className="ml-7 mr-7 mt-4"
            src={HH}
            height={20}
                width={144}
            />
            <img className="ml-7 mr-7 mt-4"
            src={kodeblue}
            height={28}
                width={164}
            />
            <img className="ml-7 mr-7 mt-4"
            src={Moksh}
            height={12}
                width={96}
            />
            <img className="ml-7 mr-7 mt-4"
             src={MyHome}
             height={12}
                width={96}/>
            <img className="ml-7 mr-7 mt-4"
            src={PV}
            height={16}
                width={100}
            />
        </Marquee>
        </div>
    </>
  )
}

export default Company;

