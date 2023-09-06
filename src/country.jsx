import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function Country(){
    var [countries,setCountries]=React.useState([]);
useEffect(
        ()=>{
        axios.get("https://restcountries.com/v3/all").then(function(response){
            console.log(response.data);
            setCountries(response.data);
        })
    },[])
    return(
<div className="d-flex">
        <div>
            <h1>Country Names</h1>
            <ul>
            {
           countries.length>0 && countries.map((s)=>{
            return<li>
                <Link to={"detaile/"+s.name.common}>{s.name.common}</Link></li>})
        }
        </ul>
        </div>
    <div>
        <Outlet></Outlet>
    </div>
</div>
    )
}

export default Country;