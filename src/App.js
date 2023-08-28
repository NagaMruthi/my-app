import React from "react";
//import Todo from './Todo';
function App(){
var [ob, setOb] = React.useState([
    {
      title:'clear bills',
      status:false
    },
    {
      title:'Moksha School',
      status:true
    },
    {
      title:'Manas Bus Fee',
      status:false
    },
    {
      title:'Gold Bill',
      status:false
    },
    {
      title:'Current Bill',
      status:true
    },
  ])
  function addtask()
{
  var mew=document.getElementById("task").value;
  setOb([...ob,{title:mew,status:false}]);
  }
  function rem(j){
    var temp=[...ob];
    temp.splice(j,1)
    setOb([...temp])
  }
  return (
    <div className="my">
      <h1>todolist</h1>
      <input typ="text" id="task"/>
          <button onClick={addtask}> Add task</button>
    {
      ob.map((k,i)=>{
        return (<div>
          {
          <li className="my" style={k.status===true?{backgroundColor:"green"}:{backgroundColor:"red"}}>{k.title}
          <button onClick={(()=>{rem(i)})}>del</button></li>
        } 
        </div>)
      })
    }
    </div>
  )
}  
export default App;