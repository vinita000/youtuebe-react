import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import filterVideos from './filterVideos';
import chatSlice from "./chatSlice";
import statusSlice from "./statusSlice";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    filter: filterVideos,
    chat: chatSlice,
    statusText: statusSlice,
    data1: dataSlice
  }
});

export default store;