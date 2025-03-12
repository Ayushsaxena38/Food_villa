import { useEffect, useState } from 'react';
import { Fetch_Restaurant_Menu_List_Url } from '../utils/constents';
const useRestaurantDetails = (id)=>{
    const [menu , setMenu] = useState([]);
    const [hotelNameImg , setHotelNameImg] = useState({});
    useEffect(()=>{
           fetchRestaurantDetails();//just call the async function in use Effect
       },[]); 

       async function fetchRestaurantDetails(){
        try {
            let data = await fetch(`${Fetch_Restaurant_Menu_List_Url}${id}`);
            data = await data.json();
            let a = {};
            data.data.cards.forEach((card)=>{
                console.log("card:-",card);
                if(card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"){
                    a.name = card?.card?.card?.info?.name;
                    a.imgId = card?.card?.card?.info?.cloudinaryImageId
                }
            })
            console.log(a);
            setHotelNameImg(a);
            // console.log("data :-= ",data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
            data = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
            let anArray = [];
            data.forEach((card) => {
                if (card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") {
                  const category = card.card.card;
                  const items = category?.itemCards || [];
                  anArray.push({
                    category: category.title,
                    items: items.map((item) => item.card?.info), // Adjust if `info` holds item details
                  });
                }
              });
              setMenu(anArray);
              console.log("hotel:-",anArray);
        } catch (error) {
            console.log("error:-",error);
            return false;
        }
    }

    return {menu , hotelNameImg};
}

export default useRestaurantDetails;