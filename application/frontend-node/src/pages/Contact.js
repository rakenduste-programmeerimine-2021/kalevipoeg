import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function Contact () {
    
    return (
     
        <Box
        
      >
        <TextField
          helperText="Sisesta eesnimi"
          id="firstname"
          label="Eesnimi"
        />
        <TextField id="secondname" label="Perekonnanimi" />
        <TextField id="phonenumber" label="Telefoninumber" />
        <TextField id="email" label="Email" />
        <TextField
          id="textarea"
          label="Sisesta küsimus/probleem"
          variant="standard"
        />
        <Button color="secondary" variant="outlined" >
            Saada
        </Button>
      </Box>
     )
    }
  
export default Contact