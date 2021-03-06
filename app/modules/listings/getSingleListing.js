const mongoose = require('mongoose')

const Listing = require('../../schemas/ListingSchema')
const responseHelper = require('../../helpers/responseHelper')

const getSingleListing = async (req, res, next) => {
  const {
    params: { listingId }
  } = req
  try {
    if (!mongoose.Types.ObjectId.isValid(listingId)) {
      return res.status(404).json({
        success: false,
        message: 'Cannot find the listingId'
      })
    }

    const listing = await Listing.findById({ _id: listingId })
    res.status(200).json(responseHelper(listing))
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = getSingleListing
