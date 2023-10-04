import { useRouteError } from "react-router-dom"
export const ErrorPage=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1> OOPS!</h1>
            <h3>{err.status}: Page  {err.statusText}</h3>
        </div>
    )
}