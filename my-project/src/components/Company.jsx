// import yourlogo from "../assets/yourlogo.svg";
import startup from "../assets/18startup.svg";
import CRC from "../assets/CRC.svg";
import group from "../assets/Group.svg";
import health from "../assets/Healthkare.svg";
import HH from "../assets/HH.svg";
import kodeblue from "../assets/Kodeblue.svg";
import Moksh from "../assets/Moksh.svg";
import MyHome from "../assets/Myhome.svg";
import PV from "../assets/PV.svg";
const Company = ({className}) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-gray-600">Helping companies create beautiful experiences </h5>
      <div className="flex flex-col">
          <div>
          <ul className="flex items-center justify-center flex-1 h-[7.5rem] m-2">
        
        <li>
            <img src={startup} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={CRC} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={health} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={group} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={HH} height={28} width={134} className="m-4"/> 
        </li>
        </ul>
          </div>
          <div>
          <ul className="flex items-center justify-center flex-1 h-[6.5rem] m-2">
        
        <li>
            <img src={kodeblue} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={Moksh} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={MyHome} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={PV} height={28} width={134} className="m-4"/> 
        </li>
        {/* <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li> */}
        </ul>
          </div>
      </div>
    </div>
  )
}

export default Company
