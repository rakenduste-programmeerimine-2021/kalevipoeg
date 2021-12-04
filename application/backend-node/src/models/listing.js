const { Schema, model} = require('mongoose')

const listingSchema = new Schema ({
    itemName: { type: String, required: true },
    itemDescription: { type: String, required: true },
    itemCategory: { type: String, required: true },
    itemPrice: { type: String, required: true },
    itemAvailability: { type: Boolean, required: true, default: true },
    availableFrom: { type: Date, required: true, default: Date.now },
    availableTo: { type: Date, required: true, default: Date.now },
    itemLocation: { type: String, required: true },
    itemImage: { type: String, required: true },
    itemOwner: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
})

const listing = model("listing", listingSchema)
module.exports= listing