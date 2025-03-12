import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
const store = configureStore({
    //our slices will go here
    reducer : {
        cart : cartSlice,
    }
})

export default store;