import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Link, Outlet } from "react-router-dom";
function App(){
  return (
    <Provider store={store}>
      <div>
      <Link to="/">welcome</Link>
      <Link to="/posts">posts</Link>
      <div>
        <Outlet></Outlet>
      </div>
      </div>
    </Provider>
  )
}  
export default App;
