import { useDispatch, useSelector } from "react-redux";
import { add,delt } from "./todoSlice";
import { useState } from "react";
function Todolist(){
  var [nt,setNt]=useState('');  
    var {todo}=useSelector((state)=>{
        return state.t;
    })
    var dispatch=useDispatch();
    console.log(todo)
    return(<div>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNt(e.target.value)}}/>
        <button onClick={()=>{dispatch(add(nt))}}>add task</button>
        <ul>
            {
                todo.map((d,i)=>{
                    return(
                        <li>{d}<button onClick={()=>{dispatch(delt(i))}}>delete</button></li>
                    )
                })
            }
        </ul>
    </div>)
}
export default Todolist;