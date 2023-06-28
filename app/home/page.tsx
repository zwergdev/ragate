import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className='home'>
			<div className='container'>
				<div className='box'>
					<h6>RaGate's Workspace</h6>
					<div className='createBox'>
						<Image src='/rainbow.svg' alt='rainbow' width={200} height={118} />
						<p>Hurry up and open the gates, we've been waiting!</p>
						<Link href='/edit' className='button'>
							Create RaGate
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
