const express = require('express')

const app = express()
require('dotenv').config()

require('./configs')(app, express)
require('./configs/db')

const BASE_URL = process.env.BASE_URL

// Importing Modules
const homeRouter = require('./modules/Home')
const listingRouter = require('./modules/listings')

app.use(`${BASE_URL}`, homeRouter)
app.use(`${BASE_URL}/listing`, listingRouter)

//Error Handling & Not Found Middlewares
require('./middlewares')(app)

const PORT = process.env.PORT || 2255
app.listen(PORT, () => console.log(`--- Sever is running on http://localhost:${PORT} ---`))
