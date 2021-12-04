import Listings from "../components/Listings"
import '../style/StoreFrontStyle.css'
import { useContext, useEffect, useState } from "react"
import { Redirect } from "react-router";
import { Context } from "../rental";

function StoreFront () {
    const [state, dispatch] = useContext(Context);
    const [listingsLoading, setListingsLoading] = useState(true)
    const [availableListings, setAvailableListings] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8081/api/listing')
            
            .then(res => res.json()).then(data =>({body: data})).then(obj => {
                setAvailableListings(obj.body.listingsFromDb)
                setListingsLoading(false)
            })
    }, [])

    if(listingsLoading){
        return (
            <p>Laeb...</p>
        )
    }

    return (
        <div className="listed-items">
            {   !state.auth.userName ?
                    <Redirect to="/" />
                :
                    <Listings className="listed-items" props={availableListings}/>
            }
        </div>
    )
}

export default StoreFront