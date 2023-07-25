import { useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();

    return (
        <div>
            <h1>OOOps!!</h1>
            <h2>Something went Wrong</h2>
            <h2>
                {error.status + " ::::" + error.message}
            </h2>
        </div>

    )
}

export default Error;