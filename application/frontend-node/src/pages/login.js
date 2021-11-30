import { Context } from "../rental";
import { useContext, useState } from "react";
import { loginUser } from "../rental/actions";
import { Redirect } from "react-router";

function Login () {
    const [state, dispatch] = useContext(Context);
    const [userStatus, setUser] = useState(state.auth.authenticated)
    console.log("enne login", userStatus)

    const data = {
        token: "thisisnewusertoken",
        user: "placeHolder",
        authenticated: true
    }

    function userLoginHandler () {
        dispatch(loginUser(data))
        setUser(state.auth.authenticated)
        console.log("peale login", userStatus)
    }

    return (

        <>
            {   !state.auth.authenticated ?

                <button onClick={userLoginHandler}>Log in</button>
                
                :
                
                <Redirect to="/" />
                
            }
            
            
        </>
    )
}

export default Login