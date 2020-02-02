const { Router } = require('express')

const createListingService = require('./createListingService')
const getAllListingsService = require('./getAllListings')
const getSingleListing = require('./getSingleListing')
const updateLisiting = require('./updateListingService')

const router = Router()

router.get('/', getAllListingsService)
router.get('/:listingId', getSingleListing)
router.post('/', createListingService)
router.put('/:listingId', updateLisiting)

module.exports = router
