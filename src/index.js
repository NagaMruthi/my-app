 import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } 
  from "react-router-dom";
  import Home from './home';
import Country from './country';
import Contact from './contact';
import Aboutus from './aboutus';
import Forms from './formik';
  const router = createBrowserRouter
  ( [{
    path:"/",
    element:<App></App>
  },
    {
      path:"/form",
      element:<Forms></Forms> ,   
     },
      
      {
        path:"/home",
        element:<Home></Home>
      } ,
      {
        path:"/contact",
        element:<Contact></Contact>
      } ,
      {
        path:"/country",
        element:<Country></Country>
      } ,
      {
        path:"/aboutus",
        element:<Aboutus></Aboutus>
    }]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}></RouterProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();