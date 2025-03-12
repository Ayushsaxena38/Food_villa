import Cart from './Cart';
import Shimmer from './Shimmer';
import { useState, useEffect , useContext } from 'react';
import useFetchRestaurantList from '../utils/useFetchRestaurantList';
import useOnline from '../utils/useOnline';
import useLocation from '../utils/useLocation';
import UserContext from '../utils/UserContext';

const Body = () => {
  const userC  = useContext(UserContext);
  console.log(userC);
  const {user ,  setUser } = userC;

  let [searchText, setSearchText] = useState('');

  const [lat, lon] = useLocation();

  const { restaurants, setRestaurants, list, setList } = useFetchRestaurantList(lat, lon);

  function searchFn(resArray, text) {
    const filererd = resArray.filter((res) => {
      return res.info.name.toLowerCase().includes(text.toLowerCase());
    });
    return filererd;
  }

  function filterHighRated(resArray) {
    const returnArray = resArray.filter((restaurant) => restaurant.info.avgRatingString == 4.4);
    return returnArray;
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="flex justify-center items-center h-screen"> {/* Center content */}
        <h1 className="text-2xl font-bold">You Are Offline🔴</h1>
      </div>
    );
  }

  return list.length === 0 ? (
    <div className="flex flex-wrap justify-center"> {/* Center shimmers */}
      {Array(10)
        .fill('')
        .map((e, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="body" > {/* Main container */}
      <div className="search flex justify-center items-center mb-4 p-2"> {/* Search area */}
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2"
          type="submit"
          onClick={() => {
            const filteredData = searchFn(list, searchText);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md ml-2 max-h-12 overflow-hidden"
          onClick={() => {
            const newRes = filterHighRated(list);
            setRestaurants(newRes);
          }}
        >
          4.4⭐
        </button>
        <input
          type="text"
          placeholder="User Name"
          value={user?.name}
          onChange={(e) => setUser({
            user:{
              ...user,
              name:e.target.value
            },
            setUser
          })}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
        />
      </div>
      <div className="flex flex-wrap justify-center md:justify-normal">
        {restaurants.length === 0? (
          <div className="col-span-full text-center text-xl font-bold">No Match Found</div>
        ): (
          restaurants.map((data) => (
            <Cart {...data.info} key={data.info.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;