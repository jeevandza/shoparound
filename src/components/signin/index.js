import React from 'react'
import { Form, Button } from 'react-bootstrap';
import validateInfo from '../../validate';
import UseForms from '../../hooks/forms';
import { BsBriefcase, BsFillShieldLockFill } from "react-icons/bs";
import { Footer } from "../footer";


const SignIn = ({submitForm}) =>{
    const {handleLogin, errors, handleChange, values} = UseForms(
        submitForm,
        validateInfo 
      );
   
    return(
        <>
         <h1 className = "site-name"> Welcome to SHOParound.com</h1>
          <div className="container">
             <div className= "sign-in">
             <Form onSubmit = {handleLogin} noValidate>
                <div>
                <span className ="sign-in-icon"> {<BsBriefcase/>}</span>
                <input 
                   value ={values.email}
                   onChange={handleChange} 
                   className = { errors.email ? "error signup-form": "signup-form" } 
                   type="email" 
                   name ="email"
                   id="email"
                   placeholder="Enter e-mail"/> 
                {errors.email && <p className = "error">{errors.email}</p>}
                </div> 
                    <br />
                <div>
                <span className ="sign-in-icon"><BsFillShieldLockFill/></span>
                <input 
                    value ={values.password}
                    onChange={handleChange}  
                    className = {errors.password ? 'error signup-form' : "signup-form"} 
                    type="password"
                    name ="password"
                    id="password"
                    placeholder="Enter Password" />
                    {errors.password && <p className = "error">{errors.password}</p>}
                </div>
                <h3 className = "new-to-alibaba">Login to SHOParound</h3>
                <Button type ="submit" className ="signup-button" color = 'primary'>Login</Button>
            </Form>
           </div>
           </div>
           <Footer/>
        </>
    )
}

export default SignIn;