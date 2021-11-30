import { Link } from "react-router-dom"

function LandingNoUser () {
    return (
        <div className="home-wrapper">
            <div className="content-wrapper">
                <h2>Tööriistade ja -vahendite rentimine</h2>
                <div className="sub-content-wrapper"> 
                    <p>Liitu meiega ja</p>
                    <Link to="/register">
                        <button>alusta rentimist</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingNoUser