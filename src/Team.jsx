
import React, { memo } from 'react';
function Team(props) {
  console.log("hi")
  return(
      <div className='my'>
        <h1>{props.tname}</h1>
        {
          props.team.map((player)=>{
            return <li>{player}</li>
          })
        }
      </div>
  )
}
export default memo( Team);

