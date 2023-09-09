import { Link, Outlet } from "react-router-dom";
import React from "react";
function App(){
    return(
  <div style={{border:"2px solid "}}>
    <Link to="/">welcome</Link>&nbsp;&nbsp;
     &nbsp;&nbsp;
     <Link to="/form">from</Link>
    <Outlet></Outlet>
  </div>)
}

export default App;