import { Context } from "../rental";
import { useContext } from "react";
import { Redirect } from "react-router";
import * as React from 'react';
import LoginForm from "../components/LoginForm";

function Login () {

    const [state, dispatch] = useContext(Context);

    return (
        <>
            {   !state.auth.userName ?
                <>
                <LoginForm/>
                </>
            :
                <Redirect to="/" />
            }
        </>
    )
}

export default Login