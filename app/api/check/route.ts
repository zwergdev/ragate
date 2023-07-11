import {ObjectId} from 'mongodb'
import {NextResponse} from 'next/server'
import {client, dbName, collectionName} from '@/services/DB'

export async function POST(req: Request) {
	const body = await req.json()
	const {_id, code} = body
	let response = false

	try {
		await client.connect()
		const db = client.db(dbName)
		const collection = db.collection(collectionName!)

		const gate = await collection.findOne({_id: new ObjectId(_id), 'codes.value': code})

		if (gate) {
			const currentCode = gate.codes.find((codes: any) => codes.value === code)
			const isValid = currentCode && currentCode.attempts > 0
			if (isValid) {
				await collection.findOneAndUpdate(
					{_id: new ObjectId(_id), 'codes.value': code},
					{$inc: {'codes.$.attempts': -1}}
				)
				response = true
			} else {
				response = false
			}
		} else {
			response = false
		}
	} finally {
		await client.close()
	}

	return NextResponse.json(response)
}
