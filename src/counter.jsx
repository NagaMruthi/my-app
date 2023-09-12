import { connect } from "react-redux";
import React from "react";
function Counter(props){ 
    return(
        <div style={{border:"5px solid",width:"fit-content"}}>
            <h1>Counter:{props.c.count}</h1>
            <button onClick={()=>{props.dispatch({type:"Inc"})}}>increment</button>
            <button onClick={()=>{props.dispatch({type:"Dce"})}}>decrement</button>
            <button onClick={()=>{props.dispatch({type:"Res"})}}>Reset</button>
        </div>
    )
}
export default connect(function(store){return store})(Counter);