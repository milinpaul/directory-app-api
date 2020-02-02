const Listing = require('../../Schemas/ListingSchema')

const getSingleListing = async (req, res, next) => {
  const {
    params: { listingId }
  } = req
  try {
    const listing = await Listing.findOne({ _id: listingId })
    res.status(200).json(listing)
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = getSingleListing
