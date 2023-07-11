import {NextResponse} from 'next/server'
const {ObjectId} = require('mongodb')
import {client, dbName, collectionName} from '@/services/DB'

// get current gate to edit
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

// save edited gate
export async function POST(req: Request, {params}: {params: {id: string}}) {
	const newGate = await req.json()
	const {id} = params
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName!)
		response = await collection.updateOne({_id: new ObjectId(id)}, {$set: newGate})
		if (response.matchedCount === 0) {
			response = false
		}
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
