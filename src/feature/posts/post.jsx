import React from 'react'
import { useGetPostsByNameQuery ,useDelpostMutation,useLazyGetPostsByNameQuery} from '../../services/posts'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Posts() {
  // Using a query hook automatically fetches data and returns query values
   var {isLoading,data}=useGetPostsByNameQuery()
   console.log(data);
   console.log(isLoading);
   var [remove]=useDelpostMutation();
   var [g]=useLazyGetPostsByNameQuery();
   var navigate=useNavigate();
   function del(id){
    remove(id).then(()=>{
      g()
    });
   }
   
  return (<div >
    <Link to="del"><button>add</button></Link> 
    <div className='d-flex flex-wrap'>
    {
    isLoading&&<h1>isLoading</h1>
    }
    {
      !isLoading&&(data.map((k)=>{
        return(<div className='my' key={k.id}><h1>{k.title}</h1>
        <h2>{k.author}</h2>
        <h2>{k.type1}</h2>
        <button onClick={()=>{del(k.id)}}>remove</button>
        <button onClick={()=>{navigate("update",{state:k})}}>update</button>
        </div>)
      }))
    }</div>
    <div>
      <Outlet></Outlet>
    </div>
  </div>)
}
export default Posts;