import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from './constants'

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT,1); // it will delete 1 message after every 5 messages
      state.messages.push(action.payload);
    }
  },
})

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
