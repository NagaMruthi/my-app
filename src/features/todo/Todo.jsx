import { useDispatch, useSelector } from "react-redux";
import { add,delt } from "./todoSlice";
// import { useState } from "react";
function Todolist(){
//   var [nt,setNt]=useState(
// //     {
// //     name:"",
// //     age:"",
// //     email:""
// //   }
//   );  
    var {todo}=useSelector((state)=>{
        return state.t;
    })
    var dispatch=useDispatch();
    console.log(todo)
    return(<div>
        <h1>Todolist</h1>
        <label>name</label>
        <input type="text" id="g" />&nbsp;&nbsp;&nbsp;<br></br>
        <label>age</label>&nbsp;&nbsp;&nbsp;
        <input type="text"id="d"/>&nbsp;&nbsp;&nbsp;<br></br>
        <label>email</label>
        <input type="email" id="k"/>&nbsp;<br></br>
        <button onClick={()=>{dispatch(add({name:document.getElementById("g").value,
         age:document.getElementById("d").value,
    email:document.getElementById("k").value,
    }))}}>add task</button>
        <ul>    
            {
                todo.map((d,i)=>{
                    return(<div >
                        <h1>{d.name}</h1>
                        <h2>{d.age}</h2>
                        <h3 >{d.email}</h3>
                        <button onClick={()=>{dispatch(delt(i))}}>delete</button>
                        </div>
                    )
                })
            }
        </ul>
    </div>)
}
export default Todolist;