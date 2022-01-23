import { Context } from "../rental";
import { useContext, useEffect } from "react";
import LandingNoUser from "../components/LandingNoUser";
import LandingUser from "../components/LandingUser";

function LandingPage () {
    const [state, dispatch] = useContext(Context);

    /*useEffect(() => {
        if (!state.auth.authenticated){
            setUser(false)
        } else {
            setUser(true)
        }
    })*/

    return (
        <>
            {   !state.auth.userName ?

                <LandingNoUser />

                :

                <LandingUser />

            }
        </>
    )
}

export default LandingPage