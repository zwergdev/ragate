import {NextResponse} from 'next/server'
const {ObjectId} = require('mongodb')
import {client, dbName, collectionName} from '@/services/DB'

// get current gate to edit
export async function POST(req: Request, {params}: {params: {id: string}}) {
	const owner = await req.json()
	const {id} = params
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection
			.aggregate([
				{
					$match: {
						_id: new ObjectId(id),
						owner: owner
					}
				},
				{
					$project: {
						form: 0
					}
				}
			])
			.toArray()
		response = response[0]
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
