import { Outlet } from "react-router-dom";
function Home(){
    return(<div>
        <h1>My Home</h1>
        <Outlet></Outlet>
    </div>)
}
export default Home;