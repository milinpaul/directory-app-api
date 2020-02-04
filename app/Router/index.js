const homeRouter = require('../modules/home')
const listingRouter = require('../modules/listings')

const BASE_URL = process.env.BASE_URL

module.exports = (app) => {
  app.use(`${BASE_URL}`, homeRouter)
  app.use(`${BASE_URL}/listing`, listingRouter)
}
