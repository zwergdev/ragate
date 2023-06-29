import {getMyGates} from '@/services/getGates'
import HurryUp from '@/app/home/components/HurryUp'
import MyGates from '@/app/home/components/MyGates'

export default async function Home() {
	const gates = await getMyGates()
	return (
		<main className='home'>
			<div className='container'>
				<div className='box'>
					<h6>RaGate's Workspace</h6>
					{gates ? <MyGates gates={gates} /> : <HurryUp />}
				</div>
			</div>
		</main>
	)
}
