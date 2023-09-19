import React, { useState } from "react";
import { useAddpostMutation ,useLazyGetPostsByNameQuery} from "../../services/posts";
export default function Det(){
    var [newpost, setNewpost]=useState({
        title:"",
        author:"",
    })
    var [newposts]=useAddpostMutation();
    function add(){
        alert("kl")
        newposts(newpost).then(abc());
    }
    var[abc]=useLazyGetPostsByNameQuery();
    return(<div className="my">
        <label>title</label>
        <input type="text" placeholder="enter title" onChange={(e)=>{setNewpost({...newpost,title:e.target.value})}}></input>
        <label>author</label>
        <input type="text" placeholder="enter author" onChange={(e)=>{setNewpost({...newpost,author:e.target.value})}}></input>&nbsp;
        <button onClick={()=>{add()}}>submit data</button>
    </div>)
}