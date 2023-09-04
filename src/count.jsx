import React from "react";
function Count(){
    console.log("welcome")
    var [d,setD]=React.useState(0)
    function del(){
        console.log("hello")
        setD(d+1);
    }
    function led(){
        console.log("hello")
        setD(d-1);
    }
    return(
        <div className="my">
            <h1>count{d}</h1>
            
                <button  onClick={()=>{del()}}>increment</button>
                <button  onClick={()=>{led()}}>decrement</button>
        </div>
        
    )
}
export default Count;