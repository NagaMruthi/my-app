import { useGetallCountriesQuery } from "../../services/country";
import{Link,Outlet} from 'react-router-dom';
import React from "react";
function Country(){
    const {isLoading,data} = useGetallCountriesQuery();
    console.log(data)
    return(
        <div className="d-fel flex-wrap">
           <div className="w-50">
            <h1>countries</h1>
            {
                isLoading&&<h4>loading...</h4>
            }
            {
                !isLoading&&(
                    data.map((count)=>{
                        return (<li>
                            <Link to={count.name.common}>{count.name.common}</Link></li>)
                    })
                )
            }
            </div>
            <div className="w-50">
             <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Country;