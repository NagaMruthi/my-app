import { combineReducers ,createStore } from "redux";
import Todoreducer from "../reducer/todoreduce";
import Counterreducer from "../reducer/counterreducer";
const reducer=combineReducers({c:Counterreducer,t:Todoreducer});
const store=new createStore(reducer);
export default store; 