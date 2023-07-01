import {NextResponse} from 'next/server'
import {gateTemplate} from '@/app/api/edit/gates'
import {client, dbName, collectionName} from '@/services/DB'

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
