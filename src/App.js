import { Link, Outlet } from "react-router-dom";
import React from "react";
function App(){
    return(
  <div>
     <Link to="/form">Please Click</Link>
    <Outlet></Outlet>
  </div>)
}

export default App;