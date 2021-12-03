import { useContext } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";
import { logoutUser } from "../rental/actions";
import * as React from 'react';
import Button from '@mui/material/Button';

function MyRent () {
    const [state, dispatch] = useContext(Context);

    function userLogoutHandler () {
        dispatch(logoutUser())
    }

    return (

        <>
            {   !state.auth.userName ?
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