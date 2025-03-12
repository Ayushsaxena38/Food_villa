import { CDN_ITEM_IMG_URL } from '../utils/constents';
import { useDispatch } from "react-redux"
import { removeItem } from "../utils/cartSlice"
const CheckoutPageCart = ({name , price , imageId , description , defaultPrice
}) => {
  const dispatch = useDispatch();
  console.log('props:-', price)
  const handleRemoveItem = (item)=>{
    console.log("item:-",item);
    dispatch(removeItem(item.name));
}

  return (
    <div className="w-56 border border-solid border-black-500 flex flex-col gap-2 justify-center text-center m-2 p-2 overflow-hidden">
      <img src = {CDN_ITEM_IMG_URL + '' + imageId} alt = "restaurant-logo" className="w-full h-40 object-cover rounded-md" />
      <h2 className="truncate w-full overflow-hidden whitespace-nowrap">{name}</h2>
      <h3 className="truncate w-full overflow-hidden whitespace-nowrap">{description}</h3>
      <button onClick = {()=>handleRemoveItem({name})} className="bg-red-400 rounded m-2 p-2 text-white">Remove Item ❌</button>
      <h4>{price ? Number(price)/100: Number(defaultPrice)/100} Rs</h4>
    </div>
  );
};

export default CheckoutPageCart;
