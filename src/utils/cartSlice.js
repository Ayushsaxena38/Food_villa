import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state , action)=>{
            state.items.push(action.payload);
        },
        clearCart : (state)=>{
            state.items = [];
        },
        removeItem : (state , action)=>{
            const index = state.items.findIndex(item => item.name == action.payload);
            if(index >= 0){
                state.items.splice( index , 1);
            }
        }
    }
})

export const {addItem , clearCart , removeItem} = cartSlice.actions;

export default cartSlice.reducer;