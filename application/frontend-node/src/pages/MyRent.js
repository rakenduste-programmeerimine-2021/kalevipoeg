import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental"
import { logoutUser } from "../rental/actions"


function MyRent () {
    const [state, dispatch] = useContext(Context);
    const [userStatus, setUser] = useState(state.auth.authenticated)

    function userLogoutHandler () {
        dispatch(logoutUser())
        setUser(state.auth.authenticated)

        console.log(userStatus, state.auth.authenticated)
    }

    return (

        <>
            {   !state.auth.authenticated ?

                <Redirect to="/" />

                :

                <button onClick={userLogoutHandler}>Log out</button>
            }
            
            
        </>
    )
}

export default MyRent