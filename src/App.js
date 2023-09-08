import { Link, Outlet } from "react-router-dom";
import React from "react";
function App(){
    return(
  <div style={{border:"2px solid "}}>
    <div style={{border:"2px solid red", margin:"10px"}}>
    <Link to="/">welcome</Link>&nbsp;&nbsp;
    </div>
     &nbsp;&nbsp;
     <Link to="/form">from</Link>
    <Link to="/home">Home</Link>&nbsp;&nbsp;
    <Link to="/aboutus">aboutus</Link>&nbsp;&nbsp;
    <Link to="/contact">contact</Link>&nbsp;&nbsp;
    <Link to="/country">country</Link>&nbsp;&nbsp;
    <Outlet></Outlet>
  </div>)
}

export default App;