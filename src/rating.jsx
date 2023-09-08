// function Abc(){
//         var allspans=document.getElementsByTagName("span");
//         function rating(r){
//             document.getElementById("d2").innerHTML=r+"/5";
//             for(var i=0;i<=4;i++){
//                 allspans[i].innerHTML=""
//             }
//             for(var i=0;i<=r-1;i++){
//                 allspans[i].innerHTML=""
//             }
//         }
//     return (
//         <div style={{textAlign:"center"}}>
//         <div className="border border-2 border-warning m-2 p-2 justify-content:center">
//             <h1>click</h1>
//             <span onClick={rating}> <i class="bi bi-star"></i></span>
//             <span onClick={rating}> <i class="bi bi-star"></i></span>
//             <span onClick={rating}><i class="bi bi-star"></i></span>
//             <span onClick={rating}><i class="bi bi-star"></i></span>
//            <span  onClick={rating}> <i class="bi bi-star"></i></span>
//         </div>
//         <h1>Reating<div id="kl">0/5</div></h1>
//         </div>
//     )
// }
// export default Abc;