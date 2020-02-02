const express = require('express')

const app = express()
const router = express.Router()
require('dotenv').config()

require('./configs')(app, express)
require('./configs/db')

// Importing Modules
require('./modules/Home')(app)

//Error Handling & Not Found Middlewares
require('./middlewares')(app)

const PORT = process.env.PORT || 2255
app.listen(PORT, () => console.log(`--- Sever is running on http://localhost:${PORT} ---`))
