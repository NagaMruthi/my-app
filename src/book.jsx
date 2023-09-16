import axios from "axios";
import React,{ useEffect } from "react";
function Books(){
    var[Book,setBook]=React.useState([]);
    var[book1,setBook1]=React.useState({title:'',author:""});
    var[edits,setEdits]=React.useState(false);
    var[edit2,setEdit2]=React.useState(null);
    useEffect(()=>{
        genBooks();
    },[])
    function genBooks(){
        axios.get("http://localhost:4000/books").then((s)=>{
            setBook([...s.data]);
        })
    }
    console.log(Book);

    function del(i){
        axios.delete("http://localhost:4000/books/"+i).then((res)=>{
            genBooks();
        })
    };
    function add(){
        axios.post("http://localhost:4000/books/",book1).then((res)=>{
            genBooks()
        });
        
        
    }
    function e(g){
        setEdit2({...g});
        setEdits(true)

    };
    function up(){
        axios.put("http://localhost:4000/books/"+book1.id,book1).then((res)=>{
            alert("hi")
            genBooks();
        })
    }
    return(
        <div className="my">
        {
             !edits&&(
            <div>
        <label>Title:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" onChange={(e)=>{setBook1({...book1,title:e.target.value})}}></input>
        <br></br>
        <label>Author:</label>
        <input type="text" onChange={(e)=>{setBook1({...book1,author:e.target.value})}}></input><br></br>
        <button onClick={()=>{add()}}>Add</button>
        </div>)
       }
        {
        edits&&(
        <div>
        <label>Title:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" value={edit2.title}onChange={(e)=>{setBook1({...book1,title:e.target.value})}}></input>
        <br></br>
        <label>Author:</label>
        <input type="text" value={edit2.author} onChange={(e)=>{setBook1({...book1,author:e.target.value})}}></input><br></br>
        <button onClick={()=>{up()}}>update</button>
        </div>)
        
        }
        <div className="flex">
            {
                Book.map((g)=>{
                    return(<div className="my">
                    <h1>{g.title}</h1>
                    <h2>{g.author}</h2>
                    <button onClick={()=>{del(g.id)}}>delete</button>
                    <button  onClick={()=>{e(g)}}>Edit</button>
                    </div>
                    )
                })
            }</div> 
            </div>
    )

}
export default Books;