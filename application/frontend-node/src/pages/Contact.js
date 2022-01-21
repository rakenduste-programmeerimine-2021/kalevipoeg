import * as React from 'react';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Contact () {
    
    return (
     
        <Box
        className="Logimine"
      >
        <TextField
          helperText="Sisesta eesnimi"
          id="firstname"
          label="Eesnimi"
        />
        <TextField id="secondname" label="Perekonnanimi" helperText="Sisesta perekonnanimi" />
        <TextField id="phonenumber" label="Telefoninumber" helperText="Sisesta telefoninumber" />
        <TextField id="email" label="Email" helperText="Sisesta email"/>
        <TextField
          id="textarea"
          helperText="Sisesta probleem"
          label="Sisesta küsimus/probleem"
          variant="standard"
        />
        <Button color="secondary" variant="outlined" className='LoginButton'  >
            Saada
        </Button>
      </Box>
     )
    }
  
export default Contact