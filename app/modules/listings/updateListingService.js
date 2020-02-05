const mongoose = require('mongoose')

const Listing = require('../../schemas/ListingSchema')
const responseHelper = require('../../helpers/responseHelper')

const updateListingService = async (req, res, next) => {
  const {
    params: { listingId },
    body
  } = req
  try {
    if (!mongoose.Types.ObjectId.isValid(listingId)) {
      return res.status(404).json({
        error: true,
        message: 'Cannot find the listingId'
      })
    }

    const updatedListing = await Listing.updateOne({ _id: listingId }, { $set: { ...body } })
    res.status(200).json(responseHelper(updatedListing))
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = updateListingService
