import {NextResponse} from 'next/server'
import {MongoClient} from 'mongodb'
import {gateTemplate} from '@/app/api/edit/gates'

const uri = 'mongodb://localhost:27017'
const dbName = 'ragate'
const collectionName = 'gates'
const client = new MongoClient(uri)

export async function GET() {
	let response

	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.insertOne(gateTemplate)
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
