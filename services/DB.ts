import {MongoClient, ServerApiVersion} from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGO_DB_NAME
const collectionName = process.env.MONGO_COLLECTION_NAME
const client = new MongoClient(uri!, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})

export {dbName, collectionName, client}
