const initialState={
    count:0
}
function Counterreducer(state=initialState,action){
    if(action.type==="Inc"){
        return{...state,count:state.count+1}
    }
    if(action.type==="Dce"){
        return{...state,count:state.count-1}
    }
    if(action.type==="Res"){
        return{...state,count:initialState.count}
    }
    return state;
}
export default Counterreducer;