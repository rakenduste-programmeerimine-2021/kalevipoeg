import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function LandingUser () {
    return (
        <div className="home-wrapper">
            <div className="content-wrapper">
                <h2>Tööriistade ja -vahendite rentimine</h2>
                <div className="sub-content-wrapper"> 
                    <Link to="/rent" >
                    <Button color="secondary" variant="outlined" >
               Alusta rentimist
            </Button>
                    </Link>

                    <Link to="/createlisting" className="startrent">
                    <Button color="secondary" variant="outlined" >
              Lisa Toode
            </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingUser