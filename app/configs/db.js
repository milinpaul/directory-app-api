const mongoose = require('mongoose')

const dbConnect = async (db) => {
  try {
    const dbConnectionString = `${process.env.DB_URI}${process.env.DB_NAME}`
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
