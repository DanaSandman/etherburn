const MongoClient = require('mongodb').MongoClient

const config = require('../config')

module.exports = {
    getCollection
}

const dbName = 'ETHERBURN_DB'// MongoDB Atlas - prod
// const dbName = 'etherburn' // MongoDB Local - dev

var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        console.log(' getCollection collection db service', collection);
        return collection
    } catch (err) {
        // logger.error('Failed to get Mongo collection', err)
        console.log('Failed to get Mongo collection', err);
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        const client = await MongoClient.connect(config.dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        // logger.error('Cannot Connect to DB', err)
        console.log('Cannot Connect to DB', err);
        throw err
    }
}