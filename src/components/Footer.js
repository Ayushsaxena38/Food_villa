import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user} = useContext(UserContext);
    return (<div className="pb-0">
      <footer className='bg-gray-200 p-4 text-center'>
        <h3 className='text-xl'>Footer</h3>
        <p className='text-lg'>Foods Villa @2025</p>
        <p className='text-lg'>created By - {user?.name}</p>
      </footer>
    </div>);
  };

export default Footer;