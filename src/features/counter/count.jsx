import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
function Count(){
    var {count}=useSelector((state)=>{
        return state.c
    })
    var dispatch=useDispatch();
    console.log(count)
    return(<div>
        <h1>counter::{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>)
}
export default Count;