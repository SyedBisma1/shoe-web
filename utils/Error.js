
import { useRouteError } from "react-router-dom";



const Error = ()=>{
    const err = useRouteError();

  const {status , statusText ,data ,} = err;

    return(
      <>
        <h1>Oopsss</h1>
        <h1> Something went wrong</h1>
        <h2>{err.data}</h2>
        <h2>{`${status}${statusText}`}</h2>
      </>
    )
};

export default Error;