import Item from './Item'
import '../style/StoreFrontStyle.css'

function Listings (props) {

    return (
        <div className="listed-items">
            {
                props.props.map(listing=>(
                    <Item
                        itemName={listing.itemName}
                        itemCategory={listing.itemCategory}
                        price={listing.itemPrice}
                        location={listing.itemLocation}
                        image={listing.itemImage}
                    />
                ))
                    
            }
        </div>
        
    )
}

export default Listings