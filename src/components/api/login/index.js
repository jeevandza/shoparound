import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router';
import axios from 'axios';


export  const Login = () =>{
    
    const history = useHistory();
    let params = useParams();   
    console.log(params.id)

    useEffect(() => {
      
       

    }, [])

    return(
        <>
         
        </>
    )

}
