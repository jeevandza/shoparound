import React from 'react';
import UserProfile from '../user_profile';
import { Navbar} from 'react-bootstrap';
import SideBar from './sidebar';



const ANavBar = ({personProfile}) =>{ 
   
    return(
        <>
        <Navbar  className="justify-content-end" bg="light" expand="lg" style = {{ boxShadow: "0 0 10px #0000004c", backgroundColor:"red"}}> 
            <div style={{width:"100%", fontSize:"3rem"}}>
                <SideBar/>
               </div> 
            <div >
                <UserProfile
                img={personProfile}/>
           </div> 
        </Navbar>      
        </>
    )
}

export default ANavBar;