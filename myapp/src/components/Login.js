import { useState } from "react";
import { useNavigate } from "react-router-dom";
//we use useNavigate hook here
//so we have to use it above the export default function
export default function Login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dashboard');
    }

    const[name,setName]=useState("Hanzul");
    const[password,setPassword]=useState("ysfmee123");

    if (setName === setPassword) {
        console.log("You are logged in");
    } else {
        console.log("Your password or username is incorrect");
    }
    return(
        <div>
            <div>
            <h1>Login Here</h1>
            <button onClick={authenticate}>Login</button>
            </div>
        <form>
            <label>Username</label>
            <input type="text" placeholder="enter your username" name="username" />
            <label>Password</label>
            <input type="password" placeholder="enter your password" name="password" />

        </form>
        </div>
    )
}
