import axios from "axios";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function Card(){
    var [country,setCountry]=React.useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){  
            setCountry(res.data);
        })
},[])
console.log(country)
function inc(){
    country.sort(function(g,h){
        if(g.population>h.population){
            return 1;
        }
        if(g.population<h.population){
            return -1;
        }
        return 0;
    })
    setCountry([...country])

}function DC(){
    country.sort(function(g,h){
        if(g.population>h.population){
            return -1;
        }
        if(g.population<h.population){
            return 1;
        }
        return 0;
    })
    setCountry([...country])

}
function op(){
    country.filter((g)=>{
        var k=document.getElementById("po").value;
        console.log(k)
        return(g.population)
})
setCountry([...country])
}
    return(<div><h1>country</h1>
    <div>
    <div style={{border:"1px solid black",marginLeft:"351px",backgroundColor:"red",padding:"10px"}}><span onClick={inc}>Ascending </span>&nbsp;&nbsp;&nbsp;
    <span onClick={DC}> Descending</span>&nbsp;&nbsp;&nbsp;
    <span>sort population</span>&nbsp;&nbsp;&nbsp;
    <span >
    <input type="text" id="po" onKeyUp={op}/><i class="bi bi-search"></i>
    </span>
    </div>
        <div className="d-flex" style={{width:"500%"}}>
            <ul> 
            {
                country.map((k)=>{
                    return (<div>
                    <li><Link to={"detailes/"+k.name.common}>{k.name.common}</Link>
                    </li>
                    </div>
                    )
                    })
            }
            </ul>
            
            <div>
            {
                country.map((k)=>{
                    return (<div className="card" style={{width: "300px",heigth:"10px",display:"flex"}} >
                        
                        <img src={k.flags[0]} class="card-img-top" alert=""></img>
                    <div class="card-body">
                      <h5 class="card-title">{k.name.common}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{k.population}</h6>
                    </div>
                  </div>
                    )
                    })
            }</div>
            <Outlet></Outlet>
        </div>
        </div>
        </div>
     )
}

export default Card;