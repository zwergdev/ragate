import {NextResponse} from 'next/server'
const {ObjectId} = require('mongodb')
import {client, dbName, collectionName} from '@/services/DB'

export async function GET(req: Request, {params}: {params: {id: string}}) {
	let response
	const {id} = params
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.findOne({_id: new ObjectId(id)})
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}

export async function POST(req: Request, {params}: {params: {id: string}}) {
	const body = await req.json()
	const {id} = params
	let response
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		response = await collection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: body})
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
