import '../style/TaskbarStyle.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Taskbar () {
    const [user, setUser] = useState(true);

    if (!user) {
        return (
            <>
                <div className="taskBar">
                    <div className="taskButtons">
                        <Link to="/">
                            <button className="button">
                                Home
                            </button>
                        </Link>
    
                        <Link to="/login">
                            <button className="button">
                                Login
                            </button>
                        </Link>
    
                        <Link to="/contact">
                            <button className="button">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
                <button onClick={() => setUser(!user)}>SetUser (test only)</button>
            </>
        )
    } else {
        return (
            <>
                <div className="taskBar">
                    <div className="taskButtons">
                        <Link to="/">
                            <button className="button">
                                Home
                            </button>
                        </Link>

                        <Link to="/rent">
                            <button className="button">
                                Rendi
                            </button>
                        </Link>

                        <Link to="/createlisting">
                            <button className="button">
                                Lisa 
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="button">
                                Contact
                            </button>
                        </Link>

                        <Link to="/user">
                            <button className="button">
                                Minu Kasutaja
                            </button>
                        </Link>
                    </div>
                </div>
                <button onClick={() => setUser(!user)}>SetUser (test only)</button>
            </>
        )
    }

    
        
    
}

export default Taskbar