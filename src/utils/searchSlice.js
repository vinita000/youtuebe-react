import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {

  }, 
  reducers: {
    chacheResult: (state, action) => {
      //{"ip": ['ip', 'iphone']}
      state = Object.assign(state, action.payload);
    }
  }
})

/**
 * Cache - search array - O(N)
 * array.indexOf() - O(N)
 * [i, ip, iph, iphone] - search - O(N)
 * 
 * {
 *  i:
 *  ip: 
 * } --- time Complexity - O(1)
 */

export default searchSlice.reducer;
export const { chacheResult } = searchSlice.actions;