import { createSlice } from '@reduxjs/toolkit';
const initialState={
    todo:["car", "bike"]
}
export const todoSlice= createSlice({
name:"todo",
initialState,
reducers: {
add:(state,action)=>{
state.todo.push(action.payload)
},
delt:(state,action)=>{
    state.todo.splice(action.payload,1)
}
}
})
export const{add,delt}=todoSlice.actions;
export default todoSlice.reducer;
