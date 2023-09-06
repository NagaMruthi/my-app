import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Country from './country';
import Count from './detaile';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } 
  from "react-router-dom";
import Abc from './course';
  const router = createBrowserRouter([
    {
      path:"/",
      element:<App></App>,
      children:[
   
    {
      path:"/jk",
      element:<Abc></Abc>,
    },
      {
        path:"/country",
        element:<Country></Country>,
        children:[{
        path:"/country/detaile/:cname",
        element:<Count></Count>,
        }]
      },]
      
    },
  
    
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();