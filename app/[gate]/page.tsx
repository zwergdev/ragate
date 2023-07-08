import {getPublicGate} from '@/services/getGates'
import PublicGate from '@/app/[gate]/components/PublicGate'

type Props = {
	params: {gate: string}
}

export default async function ({params: {gate}}: Props) {
	const currentGate = await getPublicGate(gate)

	return (
		<>
			<PublicGate gate={currentGate} />
		</>
	)
}
