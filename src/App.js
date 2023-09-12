import React from "react";
import { Provider, } from "react-redux";
import store from "./store/store";
import Counter from "./counter";
import TodoList from "./todo.jsx"
function App(){ 
    return(
        <Provider store={store}>
            <Counter></Counter>
            <TodoList></TodoList>
        </Provider>)
}
export default App;