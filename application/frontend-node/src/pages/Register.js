import { useContext } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";

function Register () {
    const [state, dispatch] = useContext(Context);

    return (
        <>
            {   state.auth.userName ?

                <Redirect to="/" />

                :

                <p>a</p>
            }
            
            
        </>
    )
}

export default Register