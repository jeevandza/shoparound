
const validateInfo = (values)=>{
    //values = {}
    let errors = {};
    let inputDisablers = {};
    //errors = {}
    if (!values.userName){
        errors.userName = "Username required.";
        inputDisablers.password = true;
        inputDisablers.password2 = true;
    }
     if(!values.email){
         //{}.email =false so we reverse false to true
         errors.email = "Email Required";
         //{}.email = {email:"email required"}
         inputDisablers.password = true;
         inputDisablers.password2 = true;
     }else if(!/\S+@\S+\.\S+/.test(values.email)){
         //when above condition fails we check email is correct 
         //
         errors.email = 'Add Proper E-mail'
     }else {
        inputDisablers.password = false;
        inputDisablers.password2 = false;
     }

     ////{}.password =false so we reverse false to true
     if(!values.password){
         //{email:"email required"}.password = {email:"email required", password:"Password is Required"}
         errors.password = "Password is required";
     }else if(values.password.length < 3){
         errors.password = "Password must be 6 characters or more"
     }

     if(!values.password2){
         //{email:"email required", password:"Password is Required"}.password = {email:"emai required", password:"Password is Required",password2: "Please re-enter your password"}
         errors.password2 = "Please re-enter your password"
     }else if (values.password2 !== values.password){
         errors.password2 = "password is not matching"
     }
   return {errors, inputDisablers}
 }

 export default validateInfo;