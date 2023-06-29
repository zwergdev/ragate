import CodesEdit from '@/app/edit/components/CodesEdit'
import GateEdit from '@/app/edit/components/GateEdit'
import ValuesEdit from '@/app/edit/components/ValuesEdit'
import {getGate} from '@/services/getGates'

type Props = {
	params: {id: string}
}

export default async function Edit({params: {id}}: Props) {
	const gate = await getGate(id)

	return (
		<main className='edit'>
			<div className='container'>
				<CodesEdit codes={gate.codes} />
				<GateEdit bio={gate.bio} />
				<ValuesEdit values={gate.values} />
			</div>
		</main>
	)
}
