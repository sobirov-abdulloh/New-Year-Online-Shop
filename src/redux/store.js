import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";
import UserReducer from "./userSlice";
import RoutesReduser from"./RoutesSlice"
 export const store = configureStore({
  reducer:{
    products:ProductReducer,
    users:UserReducer,
    routes:RoutesReduser
  }
});
