import React, { useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
function Count(){
    var{cname}=useParams();
    var [x,setX]=React.useState(null)
useEffect(()=>{
axios.get("https://restcountries.com/v3.1/name/"+cname).then(function(res){
console.log(res.data)
setX({...res.data[0]})
})
},[cname])
    return(
    <div>
        <h1>Country Detailes</h1>
            {
                        x&&(
                            <div className='card'>
                                <img src={x.flags.png}></img>
                                <div className='card-body'>
                            <h1>{x.name.common}</h1>
                            </div>
                            </div>
                        )
                
            }
    </div>
    )
    }
export default Count;