import React,{useState} from "react";
import Nav from "../../NavBar/Nav";
import { useForm } from "react-hook-form";
import Map from "../../Map/Map";
import Footer from "../../Footer/Footer";
import Display from "./Display";
import './Contact.css'
function Contact(){
          const [display, setDisplay] = useState(false)
             const {register, handleSubmit, formState: {errors}} = useForm();
             const onSubmit =(data)=> {
                setDisplay(true);
             }
             
             
              return(
                  <div className="div">
                       <Nav/>
                       <div className="centered">
                             <div className="centered__div">
                                    <div className="nav__divs">
                                    {/* <div className="grid"> */}
                                    <form action="" className="form__action" onSubmit={handleSubmit(onSubmit)}>
                                        <h4>contact</h4>
                                       
                                            <input
                                                 type="name"
                                                 placeholder="firstName"
                                                 name="firstName"
                                                  className="contact__input"
                                                  { ...register("firstName",{required: "your name is required"})}

                                        />
                                        {errors.firstName && <p className="errors"> {errors.firstName.message}</p>}
                                       
                                       
                                            <input
                                                 type="email"
                                                 placeholder="email"
                                                  className="contact__input"
                                                  { ...register("email",{required: "your email is required",
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: 'Please enter a valid email',
                                                    }
                                                })}
                                        />
                                         {errors.email && <p className="errors"> {errors.email.message}</p>}
                                      
                                               
                                        <textarea
                                            type="text"
                                            placeholder="request"
                                            name="textArea"
                                            {...register("textArea", {required:"your ideaology is needed"})}

                                        />
                                         {errors.textArea && <p className="errors"> {errors.textArea.message}</p>}
                                        <button type="submit">send</button>
                                        
                                 </form>
                           

                                    {/* </div> */}
                           
                                    
                            <div className="grid__img">
                                <div className="gridss__img">
                                     <div className="imgs__grid">
                                         <img src="../images/first.png" alt=""/>
                                     </div>

                                </div>
                                
                                 <div className="second__img">
                                         <div className="img__shii">
                                               <img src="../images/second.png" alt=""/>
                                         </div>
                                         <div className="img__shii">
                                               <img src="../images/third.png" alt=""/>
                                         </div>
                                 </div>
                            </div>
                       </div>
                                  

                             </div>

                       </div>
                       <div className="mapping__add">
                            <Map/>
                            <Footer/>

                            
                       </div>
                    { display && <div className="display__div"><Display/></div>}

                   </div>
                   
                  
              )
}
export default Contact;