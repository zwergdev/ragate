import Image from 'next/image'
import Link from 'next/link'

export default function HurryUp() {
	return (
		<div className='createBox'>
			<Image src='/rainbow.svg' alt='rainbow' width={200} height={118} />
			<p>Hurry up and open the gates, we've been waiting!</p>
			<Link href='/edit' className='button'>
				Create RaGate
			</Link>
		</div>
	)
}
