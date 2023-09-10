import { useFormik } from "formik";
import *as Yup from 'yup';

function Form(){
    var myform =useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            age:"",
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("enter firstname"),
            lastname:Yup.string().required("enter lastname"),
            age:Yup.string().required("enter age"),
            email:Yup.string().required("enter email account name"),
            password:Yup.string().required("enter password"),
        }),
        onSubmit: ((x)=>{
        console.log(x);
        })
    })
    return(
        <div>
            <form onSubmit={myform.handleSubmit}>

           FirstName <input type="text" placeholder="firstname" name="firstname" onChange={myform.handleChange}/>
            <b>{myform.touched.firstname && myform.errors &&myform.errors.firstname}</b>
            <br></br>
            <br></br>
            LastName<input type="text" placeholder="lastname" name="lastname"  onChange={myform.handleChange}/><br></br>
            <b>{myform.touched.lastname && myform.errors &&myform.errors.lastname}</b>
            <br></br>
           Age<input type="number" placeholder="age" name="age"  onChange={myform.handleChange}/><br></br>
            <b>{myform.touched.age && myform.errors &&myform.errors.age}</b>
            <br></br>
            <i class="bi bi-envelope-check-fill"></i><input type="email" placeholder="email" name="email"  onChange={myform.handleChange}/><br></br>
            <b>{myform.touched.email && myform.errors &&myform.errors.email}</b>
            <br></br>
            Password<input type="password" placeholder="password" name="password"  onChange={myform.handleChange}/><br></br>
            <b>{myform.touched.password && myform.errors &&myform.errors.password}</b>
            <br></br>
            <button>save</button>
            </form>
        </div>
    )
}
export default Form;