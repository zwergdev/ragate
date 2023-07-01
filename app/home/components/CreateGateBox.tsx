import {createGate, getMyGates} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'
import {fetchingToast} from '@/services/toast'

export default function CreateGateBox({setMyGates}: {setMyGates: (gates: Gate[]) => void}) {
	const handleCreateGate = async () => {
		const promiseToast = toast.loading('Creating the gate 🧐')
		const response = await createGate()
		if (response) {
			const gates = await getMyGates()
			fetchingToast({promiseToast, text: 'Gate created 👌', type: 'success'})
			setMyGates(gates)
		} else {
			fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
		}
	}
	return (
		<article className='gate' onClick={handleCreateGate}>
			<span>+</span>
		</article>
	)
}
