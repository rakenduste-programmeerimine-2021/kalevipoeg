const listing = require('../models/listing')

exports.getListings = async (req, res) => {
    const listings = await listing.find({})

    res.status(200).json( {listingsFromDb: listings })
}

exports.createListing = async (req, res) => {
    const { itemName, itemDescription, itemCategory, itemPrice, availableFrom, availableTo, itemLocation, itemImage, itemOwner } = req.body

    const newListing= {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        itemPrice: itemPrice,
        availableFrom: availableFrom,
        availableTo: availableTo,
        itemLocation: itemLocation,
        itemImage: itemImage,
        itemOwner: itemOwner
    }

    const createdListing = new listing(newListing)
    const savedListing = await createdListing.save()

    res.status(200).send(`Uus listing lisatud! ${savedListing.itemName}`)
}

exports.updateListing = async (req, res) => {
    
    const { id }  = req.body
    const { itemName, itemDescription, itemCategory, itemPrice, availableFrom, availableTo, itemAvailability, itemLocation, itemImage, itemOwner } = req.body

    const modifiedListing= {
        itemName: itemName,
        itemDescription: itemDescription,
        itemCategory: itemCategory,
        itemPrice: itemPrice,
        availableFrom: availableFrom,
        availableTo: availableTo,
        itemAvailability: itemAvailability,
        itemLocation: itemLocation,
        itemImage: itemImage,
        itemOwner: itemOwner
    }

    let modifyListing = await listing.findOneAndUpdate({ _id: id }, modifiedListing)
    if(!modifyListing) res.status(400).send(`Sellise id-ga listingut ei leitud! ${ id }`)

    const updatedListing = await listing.find({})
    res.status(200).send(updatedListing)

}

exports.deleteListing = async (req, res) => {
    const { id } = req.body

    const deleteListing = await listing.findOneAndDelete({ _id: id })
    if(!deleteListing) res.status(400).send(`Sellise id-ga listingut ei leitud!`)

    res.status(200).send(`Kustutati: ${ deleteListing.itemName }`)
}