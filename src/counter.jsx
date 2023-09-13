import { connect } from "react-redux";
import React from "react";
import { decrementCount,incrementCount,resetCount } from "./logic";
function Counter(props){ 
    console.log(props)
    return (
        <div style={{border:"5px solid",width:"fit-content"}}>
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.increm()}}>increment</button>
            <button onClick={()=>{props.decre()}}>decrement</button>
            <button onClick={()=>{props.Reset()}}>Reset</button>
        </div>
    )
}
function mapStateToProps(state){return state.c};


function mapDispatchToProps(dispatch){return{
    increm:()=>{dispatch(incrementCount())},
    decre:()=>{dispatch(decrementCount())},
    Reset:()=>{dispatch(resetCount())},
}}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)
(Counter);