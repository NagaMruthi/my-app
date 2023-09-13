import React from "react";
import { Provider, } from "react-redux";
import store from "./store/store";
import TodoList from "./todo"
import Counter from "./counter";
function App(){ 
    return(
        <Provider store={store}>
            <Counter></Counter>
              <TodoList></TodoList>
        </Provider>)
}
export default App;