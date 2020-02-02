const HomeService = require('./HomeService')

module.exports = (app) => {
  app.get('/', HomeService)
}
