import { useRouteError } from "react-router"
const Error = ()=>{
    const err = useRouteError();
    console.log("err:-",err , err.status , err.statusText);
    return(<>
    <h1>Oops!</h1>
    <h2>Someting Went Wrong!</h2>
    {(err.status && err.statusText) ? <p>{err.status + " : " + err.statusText}</p> : <p>{err.toString()}</p> }
    </>)
}

export default Error;