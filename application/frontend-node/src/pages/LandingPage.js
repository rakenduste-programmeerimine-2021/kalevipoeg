import { Context } from "../rental";
import { useContext, useState, useEffect } from "react";
import LandingNoUser from "../components/LandingNoUser";
import LandingUser from "../components/LandingUser";
import { loginUser, logoutUser } from "../rental/actions";

function LandingPage () {
    const [state, dispatch] = useContext(Context);
    const [userStatus, setUser] = useState(true)

    /*const data = {
        token: "thisisnewusertoken",
        user: "placeHolder",
        authenticated: true
    }*/

    useEffect(() => {
        if (!state.auth.authenticated){
            setUser(false)
        } else {
            setUser(true)
        }
    })
    

    /*function userLoginHandler () {
        dispatch(loginUser(data))
        setUser(true)
    }

    function userLogoutHandler () {
        dispatch(logoutUser())
        setUser(false)
    }*/



    return (
        <>
            {   !userStatus ?

                <LandingNoUser />

                :

                <LandingUser />

            }
        </>
    )
}

export default LandingPage