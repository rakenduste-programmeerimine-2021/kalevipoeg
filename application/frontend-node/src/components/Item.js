import '../style/ItemStyle.css'
import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

function Item (props) {
    const [itemOpen, setItemOpen] = useState(false)
    const [available, setAvailable] = useState(props.availability)

    function rentItem () {

        let updatedListing

        if (available) {
            updatedListing = {
                id: props.itemId,
                itemAvailability: false
            }
            setAvailable(false)
            setItemOpen(false)
        } else {
            alert('Viga! Toode juba välja renditud!')
        }

        console.log("Rented item: ", props.itemId)

        fetch('http://localhost:8081/api/listing/update', {
            
            method: 'PUT',
            body: JSON.stringify(updatedListing),
            headers:{
                'Content-type' : 'application/json'
            }
            
        }).then(res =>  res.json()).then(msg => (alert(msg.message)))

        //window.location.replace("/rent");
    }

    return (
        <>
            {
                !itemOpen ?
                    <div className="item-wrapper" onClick={ () => setItemOpen(true)}>
                        <img src={props.image} id="itemImage" className="img"></img>
                        <div className="item-data">
                            <p className="item-title">{props.itemName}</p>
                            <p className="item-par">{props.itemCategory}</p>
                        <div className="item-bottom">
                            <div className="item-detail">
                                <EuroSymbolIcon/>
                                <p className="item-par">{props.price}</p>
                            </div>
                            <div className="item-detail">
                                <LocationOnIcon/>
                                <p className="item-par">{props.location}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                :
                    <div>
                        <div className="item-wrapper" onClick={ () => setItemOpen(true)}>
                            <img src={props.image} id="itemImage" className="img"></img>
                            <div className="item-data">
                                <p className="item-title">{props.itemName}</p>
                                <p className="item-par">{props.itemCategory}</p>
                            <div className="item-bottom">
                                <div className="item-detail">
                                    <EuroSymbolIcon/>
                                    <p className="item-par">{props.price}</p>
                                </div>
                                <div className="item-detail">
                                    <LocationOnIcon/>
                                    <p className="item-par">{props.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-enlarge-wrapper">
                        <div className="item-enlarge">
                            <div className="left-devider">
                                <img src={props.image} id="itemImage" className="img-large"></img>
                                <div className="item-detail-enlarge">
                                    <p>{props.price}</p>
                                </div>
                            </div>
                            
                            <div className="item-data-enlarge">
                                <div className="item-header">
                                    <div className="item-var">
                                        <h1>{props.itemName}</h1>
                                        <p>{props.itemCategory}</p>
                                    </div>
                                    <CloseIcon onClick={ () => setItemOpen(false)} className="CloseIcon"/>
                                </div>
                                <div className="item-body">
                                    <p>{props.itemDescription}</p>
                                </div>
                                <div className="item-footer">
                                    
                                    <div className="item-owner">
                                        <div className="owner-sub">
                                            <LocationOnIcon/>
                                            <p> {props.location}</p>
                                        </div>
                                        <div className="owner-sub">
                                            <PersonIcon/>
                                            <p> {props.owner}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button disabled={!available} color="secondary" variant="contained" onClick={rentItem}>RENDI</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            }
        </>
    )
}

export default Item