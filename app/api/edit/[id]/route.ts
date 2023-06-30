import {NextResponse} from 'next/server'
import {MongoClient} from 'mongodb'
const {ObjectId} = require('mongodb')

const uri = 'mongodb://localhost:27017'
const dbName = 'ragate'
const collectionName = 'gates'
const client = new MongoClient(uri)

export async function GET(req: Request, {params}: {params: {id: string}}) {
	let response
	const {id} = params
	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName)
		// @ts-ignore
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
		// @ts-ignore
		response = await collection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: body})
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
