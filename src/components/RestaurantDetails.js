import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import { CDN_IMG_URL } from '../utils/constents';
import useRestaurantDetails from '../utils/useRestaurantDetails';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const RestaurantDetails = () => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //syntax for dispatch - dispatch(ActionName(payload or data));
    console.log("item:-",item)
    dispatch(addItem(item));
  };

  const { id } = useParams();

  const { menu, hotelNameImg } = useRestaurantDetails(id);

  return menu.length > 0 ? (
    <div className="flex flex-col sm:flex-row p-2 m-2 sm:justify-center items-center sm:items-start lg:items-stretch">
      <div className="flex-col w-[300px] m-2 bg-gray-100 overflow-hidden p-4 sm:pt-0">
        <h1 className="text-center text-xl">{hotelNameImg?.name}</h1>
        <img
          className="max-w-full p-2 object-contain"
          src={CDN_IMG_URL + '' + hotelNameImg.imgId}
        />
      </div>

      <div className="menu p-4 border border-solid border-gray-300 rounded-md">
        {menu.length > 0 ? (
          menu.map((oneHotel, index) => {
            return (
              <div className="ul-div" key={index}>
                <h3 className="text-lg border border-solid border-gray-300 bg-gray-400 text-white rounded-md p-2">
                  {oneHotel.category}
                </h3>
                <ul className="text-sm p-2">
                  {oneHotel.items.map((oneItem) => (
                    <>
                      <li key={oneItem.id} className='flex justify-between p-1 m-1'><span>{oneItem.name}</span><button
                        className="text-lg border border-solid border-gray-300 bg-green-400 text-white rounded p-1"
                        onClick={()=>handleAddItem(oneItem)}
                      >
                        Add
                      </button></li>
                    </>
                  ))}
                </ul>
              </div>
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  ) : (
    Array(10)
      .fill('')
      .map((sh, index) => <Shimmer key={index} />)
  );
};

export default RestaurantDetails;
