import yourlogo from "../assets/yourlogo.svg";

const Company = ({className}) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-gray-600">Helping companies create beautiful experiences </h5>
      <div className="flex flex-col">
          <div>
          <ul className="flex items-center justify-center flex-1 h-[7.5rem] m-2">
        
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        </ul>
          </div>
          <div>
          <ul className="flex items-center justify-center flex-1 h-[1.5rem] m-2">
        
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        <li>
            <img src={yourlogo} height={28} width={134} className="m-4"/> 
        </li>
        </ul>
          </div>
      </div>
    </div>
  )
}

export default Company
