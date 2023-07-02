import {NextResponse} from 'next/server'
import {client, collectionName, dbName} from '@/services/DB'

// get home gates
export async function GET() {
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection
			.aggregate([
				{
					$project: {
						form: 0
					}
				}
			])
			.toArray()
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
