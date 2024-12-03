import { useState } from "react";
import { useNavigate } from "react-router-dom";
//we use useNavigate hook here
//so we have to use it above the export default function

const[name,setName]=useState("Hanzul");
const[password,setPassword]=useState("ysfmee123");

export default function Login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        if (setName === setPassword) {
            console.log("You are logged in");
        } else {
            console.log("Your password or username is incorrect");
        }
        
        navigate('/dashboard');
    }

    

   
    return(
        <div>
             
            <h1>Login Here</h1>
            
           
        <form>
            <p>Username  :  
            <input type="text" placeholder="enter your username" name="username" /></p>
            <p>Password :
            <input type="password" placeholder="enter your password" name="password" /></p>
         </form>

         <button onClick={authenticate}>Login</button>

        </div>
    )
}
export default Login;
