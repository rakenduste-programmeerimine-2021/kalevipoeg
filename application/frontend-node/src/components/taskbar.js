import '../style/TaskbarStyle.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../rental";
import '../style/LandingStyle.css'

import { Button, ButtonGroup } from "@chakra-ui/react"

function Taskbar () {
    const [state, dispatch] = useContext(Context);

    if (state.auth.token==null) {
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

                        <Button type="primary">Primary Button</Button>
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
                    <h3>Welcome, { state.auth.user }</h3>
                </div>
            </>
        )
    }
}

export default Taskbar