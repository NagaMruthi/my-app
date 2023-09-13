import { Provider } from "react-redux";
import Count from "./features/counter/count";
import { store } from "./app/store";
import Todolist from "./features/todo/Todo";
function App(){ 
    return(
        <Provider store={store}>
            <h1 className="my">welcome</h1>
            <div style={{border:"3px solid black",margin:"10px",padding:"10px"}}>
        <Count></Count>
        <Todolist></Todolist></div></Provider>)
}
export default App;