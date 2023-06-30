'use client'
import {createGate} from '@/services/getGates'

export default function CreateGateBox() {
	const handleCreateGate = async () => {
		const res = await createGate()
		if (res.ok) {
			alert('Created')
		}
	}
	return (
		<article className='gate' onClick={handleCreateGate}>
			<span>+</span>
		</article>
	)
}
