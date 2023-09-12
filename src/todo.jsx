import React, { useState } from "react";
import {connect} from "react-redux"
function TodoList(props){
    var [nt,setNt]=useState('')
    console.log(props)
    return(<div style={{border:"5px solid",width:"fit-content"}}>
        <h1>TodoList</h1>
        <input type="text" onChange={(e)=>{setNt(e.target.value)}}></input>
        <button onClick={()=>{props.dispatch({type:"Add",paylod:nt})}}>Add</button>
        <ul>{props.t.todo.map((f)=>{
            return <li><butto>{f}</butto></li>
            
        })}</ul>
    </div>)
}
export default connect(function(store){return store})(TodoList);