import {createGate, getMyGates} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'
import {fetchingToast} from '@/services/toast'
import {useAccount} from 'wagmi'

export default function CreateGateBox({setMyGates}: {setMyGates: (gates: Gate[]) => void}) {
	const {address, isConnected} = useAccount()

	const handleCreateGate = async () => {
		if (isConnected && address) {
			const promiseToast = toast.loading('Creating the gate 🧐')
			if (await createGate(address)) {
				const gates = await getMyGates(address)
				fetchingToast({promiseToast, text: 'Gate created 👌', type: 'success'})
				setMyGates(gates)
			} else {
				fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
			}
		} else toast.error('Wallet is disconnected!')
	}
	return (
		<article className='gate' onClick={handleCreateGate}>
			<span>+</span>
		</article>
	)
}
