import React from 'react';
import {useParams} from 'react-router-dom'
import { useGetcountrieDetailesByNameQuery } from '../../services/country';
function CountryDetails(){
    var x = useParams();
    var {isLoading,data}=useGetcountrieDetailesByNameQuery(x.cname);
    console.log(x)
    return(
        <div className='p-4'>
            <h4>countryDetails</h4>
            {
                isLoading&&<h1>Loading...</h1>
            },
            {
                !isLoading&&(data.map((gh)=>{
                return(<div>
                    <div className="card mb-3" style={{mixwidth:"540px"}}>
                    <div className="row g-0">
                   <div className="col-md-4">
               <img src={gh.flags[0]} class="img-fluid rounded-start" alt="..."/>
                 </div>
                <div className="col-md-8">
               <div className="card-body">
                 <h5 className="card-title">{gh.name.common}</h5>
                 <p className="card-text">{gh.population}</p>
                </div>
                 </div>
                  </div>
                </div>
                </div>)
                })
                )
            }
        </div>
    )
}
export default CountryDetails;