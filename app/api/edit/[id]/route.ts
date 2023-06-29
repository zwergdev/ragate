import {NextResponse} from 'next/server'
import {gates} from '@/app/api/edit/gates'
import {MongoClient, ServerApiVersion, ObjectId} from 'mongodb'

const uri = 'mongodb+srv://mikhail19bozhko:q8YqMAQhqqFfEbKO@cluster0.6qoycbj.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'ragate'
const collectionName = 'gates'
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
})

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
