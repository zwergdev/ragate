import {NextResponse} from 'next/server'
import {client, dbName, collectionName} from '@/services/DB'
import {ObjectId} from 'mongodb'

export async function POST(req: Request) {
	const {form, _id} = await req.json()
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.findOneAndUpdate({_id: new ObjectId(_id)}, {$push: {form: form}})
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
