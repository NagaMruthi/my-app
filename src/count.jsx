import React from "react";
function Count(props){
    var [count,setCount]=React.useState(props.p);
        function inc(){
          setCount(count+props.i)
      }
      function dec(){
          setCount(count-props.i);
      }
    return(<div>
        <h1>count:{count}</h1>
        <button className="in" onClick={inc}>increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="dc" onClick={dec}>decrement</button>
        <input type={"number"}></input>
    </div>)
}
export default Count;