const Listing = require('../../Schemas/ListingSchema')

const createListing = async (req, res, next) => {
  try {
    console.log('req', req.body)
    const listing = new Listing(req.body)
    const newListing = await listing.save()
    res.status(200).json({
      newListing
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422)
    }
    next(error)
  }
}

module.exports = createListing
