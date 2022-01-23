const router = require("express").Router()
const listingController = require('../controllers/listing')
const validationMiddleware = require('../middleware/validationMiddleware')

router.get("/", validationMiddleware, listingController.getListings)
router.post("/create", validationMiddleware, listingController.createListing)
router.put("/update/", validationMiddleware, listingController.updateListing)
router.delete("/delete/", validationMiddleware, listingController.deleteListing)

module.exports = router