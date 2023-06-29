import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import filterVideos from './filterVideos';
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    filter: filterVideos,
    chat: chatSlice
  }
});

export default store;