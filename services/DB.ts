import {MongoClient} from 'mongodb'

const uri = process.env.MONGO_URI
const dbName = process.env.MONGO_DB_NAME
const collectionName = process.env.MONGO_COLLECTION_NAME
const client = new MongoClient(uri!)

export {dbName, collectionName, client}
