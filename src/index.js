const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

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

mongoose
  .connect('mongodb://mongo:27017/directory-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected To MongoDb'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.json({
    message: 'Directory App base route with version V1'
  })
})

app.use(notFoundMiddlware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 2255

app.listen(PORT, () => console.log(`App is listening to port ${PORT}`))
