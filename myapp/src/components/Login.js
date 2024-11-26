import { useNavigate } from "react-router-dom";
//we use useNavigate hook here
//so we have to use it above the export default function
export default function Login(){
    const navigate = useNavigate();
    const authenticate=()=>{
        navigate('/dashboard');
    }

    return(
        <div>
            <h1>Login Here</h1>
            <button onClick={authenticate}>Login</button>
        </div>
    )
}
