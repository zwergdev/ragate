import Image from 'next/image'
import {createGate, getMyGates} from '@/services/getGates'
import {Gate} from '@/app/api/edit/gates'
import {toast} from 'react-toastify'
import {fetchingToast} from '@/services/toast'

export default function HurryUp({setMyGates}: {setMyGates: (gates: Gate[]) => void}) {
	const handleCreateGate = async () => {
		const promiseToast = toast.loading('Creating the gate 🧐')
		if (await createGate()) {
			const gates = await getMyGates()
			fetchingToast({promiseToast, text: 'Gate created 👌', type: 'success'})
			setMyGates(gates)
		} else {
			fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
		}
	}

	return (
		<div className='createBox'>
			<Image src='/rainbow.svg' alt='rainbow' width={200} height={118} />
			<p>Hurry up and open the gates, we've been waiting!</p>
			<button className='button' onClick={handleCreateGate}>
				Create RaGate
			</button>
		</div>
	)
}
