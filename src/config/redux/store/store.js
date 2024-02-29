import { configureStore } from "@reduxjs/toolkit"; 
import todoReducer from "../reducer/todoSlice"
import cartSlice from "../reducer/cartSlice";

const store =  configureStore({
    reducer:{
     todo: todoReducer,
     cart: cartSlice,
    }
})

export default store