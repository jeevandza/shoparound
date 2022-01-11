import React, {useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import axios from 'axios';



export const EmailVerified =()=>{
  const history = useHistory();
    let params = useParams();
    console.log(params.id)

    useEffect(()=>{
   
        axios.post(`https://flaskwebsite-ecom.herokuapp.com/verify/${params.id}`,{})
        .then((response) => {
          history.push('./signin');
        }, (error) => {
          console.log(error);
         
        });
      
        
      }, [])
    return(
        <>
         HEllo
        </>
    )

}