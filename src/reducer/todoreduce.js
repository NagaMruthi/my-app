const initialStae={
    todo:["Honda","Shine"]
}
function Todoreducer(state=initialStae,action){
    if(action.type==='Add'){
        return{...state,todo:[...state.todo,action.paylod]}
    };
    if(action.type==='Del'){
        var temp=[...state.todo]
        temp.splice(action.paylod,1)
        return{...state,todo:[...temp]}
    }
    return state;
}
export default Todoreducer;