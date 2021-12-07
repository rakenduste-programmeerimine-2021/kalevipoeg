import { Context } from '../rental'

import { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

function CreateItemForm () {

    const [state, dispatch] = useContext(Context)

    const [titleRef, setTitleRef] = useState("")
    const [descriptionRef, setDescriptionRef] = useState("")
    const [categoryRef, setCategoryRef] = useState("")
    const [locationRef, setLocationRef] = useState("")
    const [priceRef, setPriceRef] = useState("")
    const [pictureRef, setPictureRef] = useState("")


    function submitItem () {
        let newItem = {
            itemName: titleRef,
            itemDescription: descriptionRef,
            itemCategory: categoryRef,
            itemPrice: priceRef,
            itemLocation: locationRef,
            itemImage: "http://cdn.onlinewebfonts.com/svg/img_19667.png",
            itemOwner: state.auth.userName
        }

        fetch('http://localhost:8081/api/listing/create', {
            
            method: 'POST',
            body: JSON.stringify(newItem),
            headers:{
                'Content-type' : 'application/json'
            }
            
        }).then(res =>  res.json().then(msg => (console.log(msg))))

        //alert("Teie toode lisati edukalt! Teid viiakse tagasi rendilehele.")

        window.location.replace("/rent");
    }



    return (
        <Box>
            <TextField
                required="true"
                label="Tootenimetus"
                onChange={ e=>setTitleRef(e.target.value)}
            />
            <TextField
                required="true"
                label="Kategooria"
                onChange={ e=>setCategoryRef(e.target.value)}
            />
            <TextField
                required="true"
                label="Kirjeldus"
                onChange={ e=>setDescriptionRef(e.target.value)}
            />
            <TextField
                required="true"
                label="Asukoht"
                onChange={ e=>setLocationRef(e.target.value)}
            />
            <TextField
                required="true"
                label="Hind"
                onChange={ e=>setPriceRef(e.target.value)}
            />
            <Button color="secondary" variant="outlined" onClick={submitItem}>LISA</Button>
        </Box>
    )
}

export default CreateItemForm