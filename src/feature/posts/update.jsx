import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateMutation } from "../../services/posts";
import { useLazyGetPostsByNameQuery } from "../../services/posts";
export default function Up(){
    const {state}=useLocation();
    console.log(state);
    var [book,setBook]=useState({
        title:"",
        author:"",
        type1:"",
        type2:"",
    });
    useEffect(()=>{
        setBook({...state})
    },[state]);
    var [upd]=useUpdateMutation();
    var [h]=useLazyGetPostsByNameQuery();
    function update(){
        upd(book).then(()=>{h()});
    }
    return(<div>
        <h1>up</h1>
        <label>title</label>
        <input type="text" placeholder="enter title" value={book.title} onChange={(e)=>{setBook({...book,title:e.target.value})}}></input>
        <label>author</label>
        <input type="text" placeholder="enter author" value={book.author} onChange={(e)=>{setBook({...book,author:e.target.value})}}></input>&nbsp;
        ofline:<input type="radio" name="input" onChange={(e)=>{setBook({...book,type1:e.target.value})}}></input>
        online<input type="radio" name="input" onChange={(e)=>{setBook({...book,type2:e.target.value})}}></input>
        <button onClick={()=>{update()}}>submit data</button>
    </div>)
}