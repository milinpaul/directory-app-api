const notFoundMiddlware = require('./NotFoundMiddleware')
const errorMiddleware = require('./ErrorMiddleware')

module.exports = (app) => {
  app.use(notFoundMiddlware)
  app.use(errorMiddleware)
}
