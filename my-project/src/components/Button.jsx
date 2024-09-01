import { HashLink } from 'react-router-hash-link';
import './button.css';

const Button = () => {
  return (
    <HashLink smooth to="/#benefits">
      <button className="h-14 px-7 m-2 rounded-full bg-transparent text-[#FD9E18] border-solid border-2 border-[#FD9E18] font-bold">
        Get started
      </button>
    </HashLink>
  );
}

export default Button;
