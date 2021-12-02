import { useContext, useState } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";
import { logoutUser } from "../rental/actions";
import Button from "@material-ui/core/Button";

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

                <Button color="secondary" onClick={userLogoutHandler} variant="outlined">
            Log Out
            </Button>
            }
            
            
        </>
    )
}

export default MyRent