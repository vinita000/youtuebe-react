import { createSlice } from "@reduxjs/toolkit";

const filterVideos = createSlice({
  name: "filterVideo",
  initialState: {
    videos: [],
    filterVideos: [],
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setFilterVideos: (state, action) => {
      console.log("nnin", action.payload)
      state.filterVideos = action.payload;
    }
  },
})

export default filterVideos.reducer;
export const { setVideos, setFilterVideos } = filterVideos.actions;