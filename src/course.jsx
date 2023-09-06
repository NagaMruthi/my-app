import React from "react"
function Abc(){
    const [list,setList] =React.useState([1,2,6,4])
    return(
        <div>
            {
                list.map((d)=>{
                    return(
                        <li>{d}</li>
                    )
                })
            }
        </div>
    
    )
}


export default Abc;