import { useFormik, validateYupSchema } from "formik";
import React from "react";
import *as Yup from 'yup';
function FormValidations(){
    var my=useFormik({
        initialValues:{
            email:'',
            password:''
        }
    });
    validateSchema:Yup.object({
        email:Yup.string().required("email"),
        password:Yup.string().required("password")
    });
    onsubmit :((x)=>{
        console.log(x)
    })
    return(
        <div>
            <form onsubmit={my.handleSubmit}>
                <input type="email" namre="email" placeholder="enter the email" onChange={my.handleChange}></input>
                <input type="password" namre="password" placeholder="enter the password" onChange={my.handleChange}></input>
                <button>
                submit
               </button>
            </form>
        </div>
    )
}
export default FormValidations;