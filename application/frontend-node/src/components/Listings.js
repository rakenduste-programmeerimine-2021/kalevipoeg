import Item from './Item'
import '../style/StoreFrontStyle.css'

function Listings (props) {

    return (
        <div className="listed-items">
            {
                props.props.map(listing=>(
                    <Item
                        itemId={listing._id}
                        itemName={listing.itemName}
                        itemCategory={listing.itemCategory}
                        itemDescription={listing.itemDescription}
                        price={listing.itemPrice}
                        availability={listing.itemAvailability}
                        location={listing.itemLocation}
                        owner={listing.itemOwner}
                        image={listing.itemImage}
                    />
                ))
                    
            }
        </div>
        
    )
}

export default Listings