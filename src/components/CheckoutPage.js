import { useSelector , useDispatch } from "react-redux"
import { clearCart , removeItem } from "../utils/cartSlice"
import CheckoutPageCart from "./CheckoutPageCart" 
const CheckoutPage = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems:-",cartItems)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        //dispatch(actionName(payload))
        dispatch(clearCart());
    }

    return (
        <div>

            <div className="flex flex-wrap justify-center">
                <h1 className="p-2 m-2 font-bold text-2xl">
                    Total Items:{cartItems.length}
                </h1>
                <button onClick = {()=> handleClearCart()} className="bg-red-400 rounded m-2 p-2 text-white">Clear Cart ❌</button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-normal">
            {/** the checkout cart component will come here */}
            {cartItems.map((item)=> <CheckoutPageCart key = {item.id}  {...item} />)}
            </div>

        </div>
    )
}

export default CheckoutPage;