import { createSlice } from "@reduxjs/toolkit";
// import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action.type";


// const dataSlice = createSlice({
//   name: "data1",
//   initialState: {
//     data: [],
//   },
//   reducers: {
//     setData: (state, action) => {
//       state.data = state.data.concat(action.payload);
//     },
//     updateData: (state, action) => {
//       const { index, updatedItem } = action.payload;
//       console.log("happy",index)
//       console.log("happy2", updatedItem)
//       state.data = state.data.map((item, idx) => {
//         return idx === index ? { ...item, ...updatedItem } : item;
//       });
//     },
//   },
// });

const dataSlice = createSlice({
  name: "data1",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = state.data.concat(action.payload);
    },
    updateData: (state, action) => {
      const updatedData = action.payload;
      console.log("updatedData",updatedData)
      state.data = state.data.map((item) => {
        const updatedItem = updatedData.find((updated) => updated.id === item.id);
        return updatedItem ? { ...item, ...updatedItem } : item;
      });
    },
  },
});


export default dataSlice.reducer;
export const { setData, updateData } = dataSlice.actions;
export const setDataActionType = dataSlice.actions.setData.type;