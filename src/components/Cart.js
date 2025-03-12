import { useContext } from 'react';
import { Link } from 'react-router';  // ✅ Correct import
import { CDN_IMG_URL } from '../utils/constents';
import UserContext from '../utils/UserContext';



const Cart = (props) => {
  const { user } = useContext(UserContext);
  const { name, cloudinaryImageId, cuisines, avgRatingString, id } = props;



  return (
    <div className="w-56 border border-solid border-black-500 flex flex-col gap-2 justify-center text-center m-2 p-2 overflow-hidden">
      <Link to={`/${id}`}>
        <img
          className="w-full h-40 object-cover rounded-md"  // ✅ Consistent image sizing
          alt="restaurant-logo"
          src={`${CDN_IMG_URL}${cloudinaryImageId}`}
        />
        <h2 className="truncate w-full overflow-hidden whitespace-nowrap">{name}</h2>             {/* ✅ Fix */}
        <h3 className="truncate w-full overflow-hidden whitespace-nowrap">{cuisines.join(', ')}</h3> {/* ✅ Fix */}
        <h4>{avgRatingString} ⭐</h4>
        <h4 className="p-2 m-2 font-bold text-xl truncate w-full overflow-hidden whitespace-nowrap">{user?.name}</h4>   {/* ✅ Fix */}
        <h4 className="p-2 m-2 font-bold text-lg truncate w-full overflow-hidden whitespace-nowrap">{user?.email}</h4>  {/* ✅ Fix */}
      </Link>
    </div>
  );
};

export default Cart;
