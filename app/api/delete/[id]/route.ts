import {NextResponse} from 'next/server'
import {client, dbName, collectionName} from '@/services/DB'
import {ObjectId} from 'mongodb'

// delete gate
export async function GET(req: Request, {params}: {params: {id: string}}) {
	const {id} = params
	let response

	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.deleteOne({_id: new ObjectId(id)})
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
