const { Schema, model} = require('mongoose')

const listingSchema = new Schema ({
    itemName: { type: String, required: true },
    itemDescription: { type: String, required: true },
    itemCategory: { type: String, required: true },
    itemPrice: { type: String, required: true },
    itemAvailability: { type: Boolean, required: true, default: true },
    itemLocation: { type: String, required: true },
    itemImage: { type: String, required: true, default: "http://cdn.onlinewebfonts.com/svg/img_19667.png" },
    itemOwner: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
})

const listing = model("listing", listingSchema)
module.exports= listing