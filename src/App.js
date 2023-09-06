import { Link, Outlet } from "react-router-dom";
import Country from "./country";
import Count from "./detaile";
function App(){
    return(
  <div>
    <div style={{textAlign:"center"}}>
        <h1><Link to="/">Welcome to my project</Link></h1>
      </div>
        <div style={{border:"2px solid",padding:"10px",margin:"3px"}}>
        <Link to = "jk">numbers</Link>
        <div style={{border:"2px solid red",padding:"10px",margin:"3px"}} className="d-flex">
       <Link to="/country">Countries</Link>
       <Outlet></Outlet>      
      </div>
    </div>
  </div>)
  
}

export default App;