import {createGate, getMyGates} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'
import {fetchingToast} from '@/services/toast'
import {useAccount} from 'wagmi'
import {useState} from 'react'

export default function CreateGateBox({setMyGates}: {setMyGates: (gates: Gate[]) => void}) {
	const {address, isConnected} = useAccount()
	const [creating, setCreating] = useState(false)

	const handleCreateGate = async () => {
		if (isConnected && address) {
			setCreating(true)
			const promiseToast = toast.loading('Creating the gate 🧐')
			if (await createGate(address)) {
				const gates = await getMyGates(address)
				fetchingToast({promiseToast, text: 'Gate created 👌', type: 'success'})
				setMyGates(gates)
			} else {
				fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
			}
			setCreating(false)
		} else toast.error('Wallet is disconnected!')
	}
	return (
		<button disabled={creating} className='gate' onClick={handleCreateGate}>
			<span>+</span>
		</button>
	)
}
