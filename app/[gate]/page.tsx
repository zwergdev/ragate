import {getPublicGate} from '@/services/getGates'
import PublicGate from '@/app/[gate]/components/PublicGate'
import {ObjectId} from 'mongodb'

export default async function ({params: {gate}}: {params: {gate: string}}) {
	const currentGate = await getPublicGate(new ObjectId(gate))

	return (
		<>
			<PublicGate gate={currentGate} />
		</>
	)
}
