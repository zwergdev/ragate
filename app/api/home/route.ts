import {NextResponse} from 'next/server'
import {client, collectionName, dbName} from '@/services/DB'

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
