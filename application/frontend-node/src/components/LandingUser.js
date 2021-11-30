import { Link } from "react-router-dom"

function LandingUser () {
    return (
        <div className="home-wrapper">
            <div className="content-wrapper">
                <h2>Tööriistade ja -vahendite rentimine</h2>
                <div className="sub-content-wrapper"> 
                    <Link to="/rent">
                        <button className="button-outline">Rendi toode</button>
                    </Link>

                    <Link to="/createlisting">
                        <button className="button-outline">Lisa toode</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingUser