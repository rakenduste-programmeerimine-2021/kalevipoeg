const listing = require('../models/listing')

exports.getListings = async (req, res) => {
    const listings = await listing.find({})

    res.status(200).json( {listingsFromDb: listings })
}

exports.createListing = async (req, res) => {
    const { itemName, itemDescription, itemCategory, itemPrice, itemAvailability, itemLocation, itemImage, itemOwner } = req.body

    const newListing= {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        itemPrice: itemPrice,
        itemAvailability: itemAvailability,
        itemLocation: itemLocation,
        itemImage: itemImage,
        itemOwner: itemOwner
    }

    const createdListing = new listing(newListing)
    const savedListing = await createdListing.save()

    if(!savedListing) res.status(400).send({ message: "Toote lisamine ebaõnnestus!"})

    res.status(200).send({ message: `Uus toode ${savedListing.itemName} lisatud!`})
}

exports.updateListing = async (req, res) => {
    
    const { id }  = req.body
    const { itemName, itemDescription, itemCategory, itemPrice, itemAvailability, itemLocation, itemImage, itemOwner } = req.body

    const modifiedListing= {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        itemPrice: itemPrice,
        itemAvailability: itemAvailability,
        itemLocation: itemLocation,
        itemImage: itemImage,
        itemOwner: itemOwner
    }

    let modifyListing = await listing.findOneAndUpdate({ _id: id }, modifiedListing)
    if(!modifyListing) res.status(400).send(`Sellise id-ga listingut ei leitud! ${ id }`)

    if(modifiedListing.itemAvailability) res.status(200).send({ message: "Toode jälle saadaval!" })
    if(!modifiedListing.itemAvailability) res.status(200).send({ message: "Toode teile renditud!" })
    //const updatedListing = await listing.find({})
    res.status(200).send({ message: "Success!" })

}

exports.deleteListing = async (req, res) => {
    const { id } = req.body

    const deleteListing = await listing.findOneAndDelete({ _id: id })
    if(!deleteListing) res.status(400).send(`Sellise id-ga listingut ei leitud!`)

    res.status(200).send(`Kustutati: ${ deleteListing.itemName }`)
}