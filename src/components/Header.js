import { LOGO } from "../utils/constents";
import { Link } from "react-router"; // Import from react-router-dom
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

export const Title = () => (
  <Link to="/"> {/* Use Link for logo */}
    <img className="h-24 p-2" src={LOGO} alt="logo" /> {/* alt attribute added */}
  </Link>
);

const Header = () => {
  let b = useContext(UserContext);
  console.log("user:-",b);
  const {user} = b;
  const cartCount = useSelector((store)=>store.cart.items.length);
  console.log("cartCount:-",cartCount);
  return (
  <header className="bg-gray-100 shadow-md py-2 px-3 flex justify-between items-center"> {/* Header styles */}
    <Title />
    <nav> {/* Use <nav> for navigation */}
      <ul className="flex space-x-4"> {/* Navigation list styles */}
        <li>
          <Link to="/" className="text-gray-800 hover:text-blue-500 font-medium"> {/* Link styles */}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 hover:text-blue-500 font-medium">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500 font-medium">
            Contact
          </Link>
        </li>
        <li className = "text-gray-800 hover:text-blue-500 font-medium">
          <Link to = "/checkout">
          Cart : {cartCount}
          </Link>
        </li>
        <li>
          <span className="text-blue-500 hover:text-blue-500 font-medium">
            {user?.name}
          </span>
        </li>
      </ul>
    </nav>
  </header>
)};

export default Header;