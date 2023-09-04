import React from "react";
function Todo(){
    var [list,setList]=React.useState(["string1","string2","string"]);
    function df(i){
        var temp=[...list];
        temp.splice(i,1);
        setList([...temp]);
    }
    function sa(){
        var b=document.getElementById("fg").value;
        setList([...list,b])
    }
    return(
        <div className="my">
            <input type="text" id="fg"/>
            <button onClick={sa}>add</button>
            {
           
            list.map((f,i)=>{
                return(
                    <div className="my">
                        
                    <li>{f}
                    <button  onClick={(()=>{df(i)})}>delete</button></li>
                    </div>
                )
            })
            }
            </div>
    )
}
export default Todo;
