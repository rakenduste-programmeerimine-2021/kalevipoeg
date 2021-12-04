import '../style/ItemStyle.css'

function Item (props) {

    return (

        <div className="item-wrapper">
            <div className="item-sub-wrapper">
                <img src={props.image} id="itemImage" className="img"></img>
                <div className="item-data">
                    <p className="item-title">{props.itemName}</p>
                    <p className="item-par">{props.itemCategory}</p>
                    <p className="item-par">{props.price}</p>
                    <p className="item-par">{props.location}</p>
                </div>
            </div>
        </div>

    )
}

export default Item