const Listing = require('../../schemas/ListingSchema')
const responseHelper = require('../../helpers/responseHelper')

const createListing = async (req, res, next) => {
  try {
    const listing = new Listing(req.body)
    const newListing = await listing.save()
    res.status(200).json(responseHelper(newListing))
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = createListing
