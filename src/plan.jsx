import React from "react";
import axios from "axios";
function Tours(){
    var [d,setD]=React.useState([]);
    React.useEffect( 
        function(){
    axios.get("https://course-api.com/react-tours-project").then(function(res){
        console.log(res.data);
        setD([...res.data])
    })},[])
    return(
        <div>
            {
                d.map(function(s){
                    return(<div className="my">
                        <img src={s.image} style={{width:"400px"}}></img>
                        <div>
                        <h2>{s.name}</h2>
                        <h2 className="kl">{s.price}</h2>
                        
                        </div>
                        <p>{s.info}</p>
                        
                    </div>)
                })
            }
        </div>
    )
}
export default Tours;