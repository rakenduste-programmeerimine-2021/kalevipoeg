import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import * as React from 'react';

function LandingNoUser () {
    return (
        <div className="home-wrapper">
            <div className="content-wrapper">
                <h2>Tööriistade ja -vahendite rentimine</h2>
                <div className="sub-content-wrapper"> 
                    <p>Liitu meiega ja</p>
                    <Link to="/register" className="startrent">  
             <Button color="secondary" variant="outlined" >
               Alusta rentimist
            </Button>
            </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingNoUser