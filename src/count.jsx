import React from "react";
function Count(props){
    var [d,setD]=React.useState(props.s,props.i)
    function inc(){
        
        setD(d+props.i);
    }
    function dec(){
        setD(d-+props.i);
    }
    return(
        <div className="my">
            <h1>count{d}</h1>
                <button  onClick={()=>{inc()}}>increment</button>
                <button  onClick={()=>{dec()}}>decrement</button>
        </div>
    )
}
export default Count