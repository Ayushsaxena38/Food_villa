import { restaurantList } from '../utils/constents';
import Cart from './Cart';
import { useState, useEffect } from 'react';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  function searchFn(resArray, text) {
    const filtered = resArray.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    return filtered;
  }

  // Use useEffect to handle side effects when searchText changes
  useEffect(() => {
    const filteredData = searchFn(restaurantList, searchText);
    setRestaurants(filteredData);
  }, [searchText]); // Dependency array ensures this runs whenever searchText changes

  return (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            type="submit"
            onClick={() => {
              console.log('searchText', searchText);
              const filteredData = searchFn(restaurantList, searchText);
              console.log('Filtered Text:', filteredData);
              setRestaurants(filteredData);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredByRating = restaurantList.filter(
                (res) => res.info.rating >= 4.5
              );
              setRestaurants(filteredByRating);
            }}
          >
            Filter 4.5 Stars
          </button>
        </div>
        <div className="restaurants">
          {restaurants.map((data) => (
            <Cart {...data.info} key={data.info.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
