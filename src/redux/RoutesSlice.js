import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 routes: false,
};
const routesSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    routesTrue:(state) => {
      state.routes =true 
    
    },
  },
});

export const {routesTrue} = routesSlice.actions;

export default routesSlice.reducer;