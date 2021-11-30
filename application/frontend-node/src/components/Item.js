import '../style/ItemStyle.css'

function Item () {
    return (

        <div className="item-wrapper">
            <div className="item-sub-wrapper">
                <div className="img"></div>
                <div className="item-data">
                    <h3>Redel</h3>
                    <p>Kategooria</p>
                    <p>60€</p>
                    <p>Tallinn</p>
                </div>
            </div>
            
        </div>

    )
}

export default Item