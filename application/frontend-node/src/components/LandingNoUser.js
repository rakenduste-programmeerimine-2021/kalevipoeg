import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button";

function LandingNoUser () {
    return (
        <div className="home-wrapper">
            <div className="content-wrapper">
                <h2>Tööriistade ja -vahendite rentimine</h2>
                <div className="sub-content-wrapper"> 
                    <p>Liitu meiega ja</p>
                    <Link to="/register">  
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