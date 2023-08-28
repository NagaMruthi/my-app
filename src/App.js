import React from "react";
import Count from "./count";
function App(){
return(
  <div className="my">
    <Count s={200} i={5}></Count>
    <Count s={500} i={10}></Count>
  </div>
)
}  
export default App;