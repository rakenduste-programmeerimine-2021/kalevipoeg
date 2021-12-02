import { Context } from "../rental";
import { useContext, useState } from "react";
import { loginUser } from "../rental/actions";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";


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

                    <Box
        sx={{
        height: 600,
        display: 'flex',
        margin: 'normal',
        alignItems: 'center',
        '& > :not(style)': { m: "auto" },
      }}
        >

                        <TextField
            helperText="Palun sisesta kasutajanimi"
            id="username"
            label="Kasutajanimi"
            />
            <TextField
            helperText="Palun sisesta parool "
            id="password"
            label="Parool"
            />

            {   !state.auth.authenticated ?

            <Button color="secondary" onClick={userLoginHandler} variant="outlined">
            Logi Sisse
            </Button>

                
                :
                
                <Redirect to="/" />
                
            }
             <Link to="/register">  
             <Button color="secondary" variant="outlined" >
                Registreerima
            </Button>
            </Link>
            
            </Box>
    )
}

export default Login