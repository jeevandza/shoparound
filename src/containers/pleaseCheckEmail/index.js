import {Button} from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router';




const VerifyEmail = () =>{
    const history = useHistory();
    const handleChange = (e) =>{
        e.preventDefault();
        history.push("/signIn" )
    }

    
    
    return(
        <div className = "check-email">
         <div className= "check-email-container">
            <h1 >We have received your request! <br></br>Click login to continue</h1>
            <Button onClick = {handleChange}  className="login" >Login</Button>
        </div>
       </div>
    )
}

export default VerifyEmail;