



import {Formik}from "formik";
import *as Yup from "yup"
let FormsSchema = Yup.object({
    fristnamename: Yup.string().required("please fill the fristname").min("please enter more than 3letters"),
    lastname:Yup.string().required("please fill the lastname"),
    age:Yup.number().required("Age must be filled"),
    email:Yup.string().required("plase enter valid email"),
     });
function Forms(){
    function Dfg(){
        alert("hi maruthi")
    }
    return(
        <div>
            <Formik
            initialValues={{fristname:"",lastname:"",age:"",email:""}}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={FormsSchema}
        >
                   {
            (fobj)=>{
                console.log(fobj.touched)
                return(
                    <form onSubmit={fobj.handleSubmit}>
                        Fristname:  <input type="text"  name="firstname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur}></input>
                            <b>{fobj.touched.fristname && fobj.errors && fobj.errors.fristname} </b><br />
                        Lastname:  <input type="text" name="lastname"  onChange={fobj.handleChange} onBlur={fobj.handleBlur} />
                            <b>{fobj.touched.lastname && fobj.errors && fobj.errors.lastname}</b><br />
                        Age:  <input type="text" name="age" onChange={fobj.handleChange}  onBlur={fobj.handleBlur}/> 
                            <b>{fobj.touched.age&& fobj.errors && fobj.errors.age}</b><br />
                        Email:  <input type="email"  name="email"  onChange={fobj.handleChange} onBlur={fobj.handleBlur}></input>
                            <b>{fobj.touched.email && fobj.errors && fobj.errors.email} </b><br />
                            <button onClick={Dfg}>add</button>
                    </form>
                )
            }
        }
              
            </Formik>
        </div>
    )

}
export default  Forms;