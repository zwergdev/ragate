import {NextResponse} from 'next/server'
import {MongoClient, ServerApiVersion} from 'mongodb'

const uri = 'mongodb://localhost:27017'
const dbName = 'ragate'
const collectionName = 'gates'
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})

export async function GET() {
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.find({}).toArray()
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
