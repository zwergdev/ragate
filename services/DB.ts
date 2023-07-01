import {MongoClient} from 'mongodb'

const uri = 'mongodb://localhost:27017'
const dbName = 'ragate'
const collectionName = 'gates'
const client = new MongoClient(uri)

export {dbName, collectionName, client}
