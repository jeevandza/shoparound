import { Button } from 'bootstrap';
import React from 'react';


const InputField = ({type, name, id }) =>{   
    
    return(
        <>
         <div className = "signin-in">
            <input 
             type="email" 
             name ="email"
             id="email"
             placeholder="Enter e-mail"/>
        </div>
      </>   

    )
}

export default InputField;