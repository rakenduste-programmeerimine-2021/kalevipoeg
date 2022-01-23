import CreateItemForm from "../components/CreateItemForm"
import { useContext } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";

function CreateListing () {
    const [state, dispatch] = useContext(Context);
    
    return (
        <>
            {   !state.auth.userName ?

                <Redirect to="/" />

                :

                <CreateItemForm></CreateItemForm>

            }
            
            
        </>
    )
}

export default CreateListing