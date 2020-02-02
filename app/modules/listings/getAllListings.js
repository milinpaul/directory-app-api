const Listing = require('../../Schemas/ListingSchema')

const getAllListings = async (req, res, next) => {
  try {
    const listings = await Listing.find()
    res.status(200).json(listings)
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = getAllListings
