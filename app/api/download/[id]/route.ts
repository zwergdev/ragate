import {NextResponse} from 'next/server'
import {client, dbName, collectionName} from '@/services/DB'
import {ObjectId} from 'mongodb'

// download applicants
export async function GET(req: Request, {params}: {params: {id: string}}) {
	let response
	const {id} = params
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName!)
		response = await collection
			.aggregate([
				{
					$match: {
						_id: new ObjectId(id)
					}
				},
				{
					$project: {
						_id: 0,
						'form._id': 0
					}
				}
			])
			.toArray()
		response = response[0].form
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
