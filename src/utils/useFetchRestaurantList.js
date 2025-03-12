import { useState, useEffect } from 'react';
import { Fetch_Restaurant_list_Url , Fetch_Restaurant_By_location } from '../utils/constents';

const useFetchRestaurantList = (lat , lon)=>{
    const [restaurants, setRestaurants] = useState();
    const [list, setList] = useState([]);
    useEffect(() => {
      if(lat && lon){
        fetchRestaurants();
      }else{
        console.log("error in gtting the restaurant list")
      }
      }, [lat , lon]);
    
      async function fetchRestaurants() {
        try {
          let url = `${Fetch_Restaurant_By_location }lat=${lat}&lng=${lon}`
          let data = await fetch(
            // Fetch_Restaurant_list_Url
            url
          );
          console.log('data(before converting into json):-', data);
          data = await data.json();
          console.log('data:-', data);
          setList(
            data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
          setRestaurants(
            data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
        } catch (error) {
          console.log('error:-', error);
        }
    }
    return {restaurants , setRestaurants , list , setList};
}

export default useFetchRestaurantList;