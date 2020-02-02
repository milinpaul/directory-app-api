const notFoundMiddlware = require('./NotFoundMiddleware')
const errorMiddleware = require('./ErrorMiddleware')

module.exports = Object.freeze({
  notFoundMiddlware,
  errorMiddleware
})
