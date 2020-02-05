var mongoose = require('mongoose')
var Schema = mongoose.Schema

const ListingSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.']
    }, // String is shorthand for {type: String}
    location: String,
    latitude: Number,
    longitude: Number,
    listingEmail: String,
    listingType: String,
    description: String,
    website: String,
    phoneNumber: String,
    twitterURL: String,
    facebookURL: String,
    instagramURL: String,
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = Listing = mongoose.model('Listing', ListingSchema)
