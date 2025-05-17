import { Navigate, useNavigate, useRouteError } from "react-router-dom";
export const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error);
    const navigate=useNavigate()
    const handleGoback=()=>{
        navigate(-1);

    }
    return(
        <>
        <h1>{error.statusText}</h1>
        <button  onClick={handleGoback}>go back</button>
        </>

    )
}