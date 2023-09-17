import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Country from './featues/country/countrie';
import CountryDetails from './featues/country/countrydetails';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[{
        path:"/country",
        element:<Country></Country>,
        children:[{
            path:"/country/:cname",
            element:<CountryDetails></CountryDetails>
        }]
      }]
    },
  ]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
