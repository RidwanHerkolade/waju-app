// import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import './Form.css';

function Form(){
       const { register, handleSubmit, formState: {errors}} = useForm();
       const navigate = useNavigate();
       const onSubmit =() => {
              navigate("/confirm");
       }
//        const [FormErrors, setFormErrors] = useState([]);
//        const [register, setRegister] = useState({
//               firstName: "",
//               lastName: "",
//               email: "",
//               phoneNo:  ""
//        });

// function handleChange(event){
//        const { name, value} = event.target;
//        setRegister((prevRegister) => {
//               return {
//                      ...prevRegister,
//                      [name]: value,
//               };
//        });
//   };
 
//   function handleValidate(formValue){
//          const errors = {};
//          if(!formValue.firstName) {
//                 errors.firstName= "firstName is required";
//          }
//          setFormErrors(errors);
//          return errors;
//   };
//   function handleSubmit(event){
//          event.preventDefault();
//          const validation = handleValidate(register);
//          if(Object.keys(validation).length !== 0 ) {
//                 return;
//          }

//   }

    return(
        <div className="form__div">
             <form onSubmit={handleSubmit(onSubmit)}>
                     <img src="../img/"/>
                     <h2>Get started</h2>
                      <div className="form">
                          <div className="input">
                                <label htmlFor="firstName">First name</label>
                                 <input
                                        type="name"
                                        name="firstName"
                                        { ...register("firstName", {required: "your name is required"})}
                                      

                                 />
                                   {errors.firstName && <p className="errors">{errors.firstName.message}</p>}
                                
                          </div>

                          <div className="input">
                                <label htmlFor="name">Last name</label>
                                 <input
                                        type="name"
                                        name="lastName"
                                        {...register("name", {required: "your name is required "})}
                                   
                                 />
                                  {errors.firstName && <p className="errors">{errors.firstName.message}</p>}
                                
                          </div>
                          <div className="input">
                                <label htmlFor="email">Email</label>
                                 <input
                                        type="email"
                                        name="email"
                                        {...register("email", {required: "your email is required",
                                         pattern: {
                                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                          message: 'Please enter a valid email',
                                 } ,
                                   
                                   })}
                                 />
                                  {errors.email && <p className="errors">{errors.email.message}</p>}
                          </div>
                          <div className="input">
                                <label htmlFor="phone">Phone no</label>
                                 <input
                                        type="number"
                                        name="phoneNo"
                                        {...register("phoneNo", {required: "your phone no is required", maxLength:{value: 11,}})}
                                  
                                 />
                             {errors.phoneNo && <p className="errors">{errors.phoneNo.message}</p>}
                          </div>
                          <button type="submit">register</button>
                      


                      </div>

             </form>
        </div>
    )
}

export default Form;