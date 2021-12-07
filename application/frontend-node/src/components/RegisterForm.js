import { Context } from "../rental";
import { useContext, useState } from "react"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';


function RegisterForm () {
    
    const [state, dispatch] = useContext(Context)
    const [serverStatus, setServerStatus] = useState("")

    const [firstNameRef, setFirstNameRef] = useState("")
    const [lastNameRef, setLastNameRef] = useState("")
    const [userNameRef, setUserNameRef] = useState("")
    const [passwordRef, setPasswordRef] = useState("")
    const [passwordRepRef, setPasswordRepRef] = useState("")

    function registerHandler() {

        const newUserData = {
            firstName: firstNameRef,
            lastName: lastNameRef,
            userName: userNameRef,
            email: "reinraaa@tlu.ee",
            password: passwordRef
        }

        if(newUserData.password==passwordRepRef && newUserData.email){
            console.log(newUserData)
            saveUser(newUserData)
        } else {
            alert("Paroolid ei ühti!")
        }
    }

    function saveUser(userData){

        fetch('http://localhost:8081/api/authenticate/register', {
            
            method: 'POST',
            body: JSON.stringify(userData),
            headers:{
                'Content-type' : 'application/json'
            }
            
        }).then(res =>  res.json().then(msg => (console.log(msg))))

        alert("Kasutaja loomine õnnestus, teid suunatakse edasi sisse logima.")

        window.location.replace("/login");
    }

    return(
        <Box
            sx={{
                height: 600,
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { m: "auto" },
            }}
        >
            <TextField
                helperText="Palun sisesta eesnimi"
                id="firstname"
                label="Eesnimi"
                onChange={ e=>setFirstNameRef(e.target.value) }
            />
            <TextField
                helperText="Palun sisesta Perekonnanimi"
                id="username"
                label="Perekonnanimi"
                onChange={ e=>setLastNameRef(e.target.value) }
            />
            <TextField
                helperText="Palun sisesta kasutajanimi"
                id="username"
                label="Kasutajanimi"
                onChange={ e=>setUserNameRef(e.target.value) }
            />
            <TextField
                helperText="Palun sisesta parool "
                id="password"
                label="Parool"
                type="password"
                onChange={ e=>setPasswordRef(e.target.value) }
            />
            <TextField
                helperText="Palun sisesta parool "
                id="password"
                label="Korda parooli"
                type="password"
                onChange={ e=>setPasswordRepRef(e.target.value) }
            />
            <Button color="secondary" onClick={registerHandler}  variant="outlined">
                Registreeru
            </Button>
        </Box>
    )
}

export default RegisterForm