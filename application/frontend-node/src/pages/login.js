import { Context } from "../rental";
import { useContext, useState } from "react";
import { loginUser } from "../rental/actions";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';


function Login () {

    const [state, dispatch] = useContext(Context);

    const [loginPassword, setLoginPassword] = useState("")
    const [loginUsername, setLoginUsername] = useState("")

    const [activeUser, setActiveUser] = useState([])

    function userLoginHandler () {

        const loginCred = {
            userName: loginUsername,
            password: loginPassword
        }

        fetch('http://localhost:8081/api/authenticate/login', {
            
            method: 'POST',
            body: JSON.stringify(loginCred),
            headers:{
                'Content-type' : 'application/json'
            }
            
        }).then(res =>  res.json().then(data => ({body: data}))).then(obj => 
            setActiveUser({
                id: obj.body.loggedUser.id,
                firstName: obj.body.loggedUser.firstName,
                lastName: obj.body.loggedUser.lastName,
                userName: obj.body.loggedUser.userName
            }));

        dispatch(loginUser(activeUser))
        
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
            onChange={e => setLoginUsername(e.target.value)}
        />
        <TextField
            helperText="Palun sisesta parool "
            id="password"
            label="Parool"
            onChange={e => setLoginPassword(e.target.value)}
        />

        {   !state.auth.userName ?

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