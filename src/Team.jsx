
import React from 'react';
function Team(props) {
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
export default Team;

