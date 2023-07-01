'use client'
import Image from 'next/image'
import {createGate} from '@/services/getGates'

export default function HurryUp() {
	const handleCreateGate = async () => {
		const res = await createGate()
		if (res.ok) {
			alert('Created')
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
