import '../style/TaskbarStyle.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../rental";
import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../style/LandingStyle.css'

function Taskbar () {
    const [state, dispatch] = useContext(Context);

    if (state.auth.token==null) {
        return (
            
            <>
                <div className="taskBar">
                    <div className="taskButtons">
                        <Link to="/">
                            <HomeIcon classname="taskbutton" />
                        </Link>
    
                        <Link to="/login">
                        <LoginIcon classname="taskbutton" />
                        </Link>
    
                        <Link to="/contact">
                        <ContactPageIcon classname="taskbutton" />
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
                        <HomeIcon classname="taskbutton" />
                        </Link>

                        <Link to="/rent">
                        <MenuBookIcon classname="taskbutton" />
                        </Link>

                        <Link to="/createlisting">
                        <AddBoxIcon classname="taskbutton" />
                        </Link>

                        <Link to="/contact">
                        <ContactPageIcon classname="taskbutton" />
                        </Link>

                        <Link to="/user">
                           <PersonIcon  classname="taskbutton" />
                        </Link>
                    </div>
                    <h3>Welcome, { state.auth.user }</h3>
                </div>
            </>
        )
    }
}

export default Taskbar