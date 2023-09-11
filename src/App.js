import React from "react";
import { Link, Outlet } from "react-router-dom";
function App(){
    return(
   <div>
    <Link to="/country">on country</Link>
    <Outlet></Outlet>
  </div>)
}
export default App;