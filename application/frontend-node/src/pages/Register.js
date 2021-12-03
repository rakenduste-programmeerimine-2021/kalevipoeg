import { useContext } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";
import RegisterForm from '../components/RegisterForm';

function Register () {

    const [state, dispatch] = useContext(Context);

    return (
        <>
            {   !state.auth.userName ? 
                <RegisterForm/>
            :
                <Redirect to="/" />
            }
        </>
    )
}

export default Register