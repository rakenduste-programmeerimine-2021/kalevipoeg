import Item from "../components/Item"
import { useContext } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";

function StoreFront () {
    const [state, dispatch] = useContext(Context);

    return (
        <>
            {   !state.auth.userName ?

                <Redirect to="/" />

                :

                <div className="storefront-wrapper">
                    <h2>Rendikataloog</h2>
                    <Item/>
                </div>
            }

        </>
    )
}

export default StoreFront