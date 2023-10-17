// import Books from "./book";
import React from "react";
import { Formik } from "formik";
function App(){
    return(
        <div>
            <h1>welcome</h1>
            {/* <Books></Books> */}
            <Formik
            initialValues={{email:'',password:"",name:'',age:""}}
            onSubmit={(Values)=>{
                Values.
            }}
            >
            </Formik>
        </div>
    )
}
export default App;
