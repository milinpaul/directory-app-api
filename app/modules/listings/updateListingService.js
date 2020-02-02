const Listing = require('../../Schemas/ListingSchema')

const updateListingService = async (req, res, next) => {
  const {
    params: { listingId },
    body
  } = req
  try {
    // const listing = await Listing.findOne({ _id: listingId })

    const updatedListing = await Listing.updateOne({ _id: listingId }, { $set: { ...body } })

    res.status(200).json(updatedListing)
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = updateListingService
