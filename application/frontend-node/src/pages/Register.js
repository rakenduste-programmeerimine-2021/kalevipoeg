import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

function Register () {
    return (

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
/>
<TextField
helperText="Palun sisesta Perekonnanimi"
id="username"
label="Perekonnanimi"
/>
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
<TextField
helperText="Palun sisesta parool "
id="password"
label="Korda parooli"
/>


<Button color="secondary"  variant="outlined">
Registreeru
</Button>



</Box>
    )
}

export default Register