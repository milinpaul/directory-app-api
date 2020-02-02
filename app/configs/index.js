const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

module.exports = (app, express) => {
  app.use(helmet())
  app.use(morgan('combined'))
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN
    })
  )
  app.use(express.json())
}
