import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count:0,
}

export const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers: {
    increment: (state,action) => {
      state.count += 1
    },
    decrement: (state,action) => {
      state.count -= 1
    },
    reset: (state,action) => {
      state.count = initialState.count;
    }
  },
})
export const { increment, decrement,reset } = counterSlice.actions

export default counterSlice.reducer;