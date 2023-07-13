import { createSlice } from "@reduxjs/toolkit";


const statusSlice = createSlice({
  name: "statusText",
  initialState: {
    id: '',
    text: '',
    status: 'incomplete',
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    setText: (state, action) => {
      console.log(action.type)
      state.text = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload
    }
  },
})

export default statusSlice.reducer;
export const { setText, setStatus, setId } = statusSlice.actions;
export const setTextActionType = statusSlice.actions.setText.type;
export const setStatusActionType = statusSlice.actions.setStatus.type;