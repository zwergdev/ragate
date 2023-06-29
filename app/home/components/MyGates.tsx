import {Gate} from '@/app/api/edit/gates'
import Image from 'next/image'
import Link from 'next/link'

export default function MyGates({gates}: {gates: Gate[]}) {
	return (
		<div className='myGatesBox'>
			{gates.map((gate, idx) => (
				<Link href={`/edit/${gate._id}`} className='gate' key={idx}>
					<Image src='/skull.jpg' width={200} height={200} alt='gate image' />
					<div className='bioBox'>
						<div>
							<h6>{gate.bio.title}</h6>
							<p>
								{gate.bio.description.length > 50 ? `${gate.bio.description.slice(0, 50)}...` : gate.bio.description}
							</p>
						</div>
						<div className='buttonsBox'>
							<button className='button'>Codes: {gate.codes.length}</button>
							<button className='button'>Values: {gate.values.length}</button>
						</div>
					</div>
				</Link>
			))}
			<article className='gate'>
				<span>+</span>
			</article>
		</div>
	)
}
