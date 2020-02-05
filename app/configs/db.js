const mongoose = require('mongoose')

const dbConnect = async (db) => {
  try {
    const dbConnectionString = process.env.MONGO_DB_URI
    await db.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Connected To MongoDb, ${dbConnectionString}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect(mongoose)
