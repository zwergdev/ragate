import Image from 'next/image'
import {createGate, getMyGates} from '@/services/getGates'
import {Gate} from '@/app/api/edit/gates'
import {toast} from 'react-toastify'
import {fetchingToast} from '@/services/toast'
import {useAccount} from 'wagmi'
import {useWeb3Modal} from '@web3modal/react'

export default function HurryUp({setMyGates}: {setMyGates: (gates: Gate[]) => void}) {
	const {address, isConnected} = useAccount()
	const {open} = useWeb3Modal()
	const handleCreateGate = async () => {
		const promiseToast = toast.loading('Creating the gate 🧐')
		if (await createGate(address!)) {
			const gates = await getMyGates(address!)
			fetchingToast({promiseToast, text: 'Gate created 👌', type: 'success'})
			setMyGates(gates)
		} else {
			fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
		}
	}

	return (
		<div className='createBox'>
			<Image src='/rainbow.svg' alt='rainbow' width={200} height={118} />
			{address && isConnected ? (
				<>
					<p>Hurry up and open the gates, we're waiting!</p>
					<button className='button' onClick={handleCreateGate}>
						Create RaGate
					</button>
				</>
			) : (
				<>
					<p>Let's connect the wallet, we're looking for you!</p>
					<button className='button' onClick={open}>
						Connect Wallet
					</button>
				</>
			)}
		</div>
	)
}
