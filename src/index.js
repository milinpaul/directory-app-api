const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

require('dotenv').config()

const { errorMiddleware, notFoundMiddlware } = require('./middlewares')

const app = express()

app.use(helmet())
app.use(morgan('combined'))
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
)
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Directory App base route with version V1'
  })
})

app.use(notFoundMiddlware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 2255

app.listen(PORT, () => console.log(`App is listening to port ${PORT}`))
