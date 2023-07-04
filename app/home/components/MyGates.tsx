'use client'
import {Gate} from '@/app/api/edit/gates'
import Image from 'next/image'
import Link from 'next/link'
import CreateGateBox from '@/app/home/components/CreateGateBox'
import {useState} from 'react'
import HurryUp from '@/app/home/components/HurryUp'

export default function MyGates({gates}: {gates: Gate[]}) {
	const [myGates, setMyGates] = useState(gates)

	if (!myGates) return <HurryUp setMyGates={setMyGates} />
	return (
		<div className='myGatesBox'>
			{myGates.map((gate, idx) => (
				<Link href={`/edit/${gate._id}`} className='gate' key={idx}>
					<Image
						className={gate.image ? 'imgAvailable' : 'imgUnavailable'}
						src={gate.image ? gate.image[0].fileUrl : '/arrow-up.svg'}
						width={200}
						height={200}
						alt='gate image'
					/>
					<div className='bioBox'>
						<div className='textBox'>
							<h6>{gate.bio.title}</h6>
							<p>
								{gate.bio.description.length > 35 ? `${gate.bio.description.slice(0, 35)}...` : gate.bio.description}
							</p>
						</div>
						<div className='buttonsBox'>
							<button className='button'>Codes: {gate.codes.length}</button>
							<button className='button'>Values: {gate.values.length}</button>
						</div>
					</div>
				</Link>
			))}
			<CreateGateBox setMyGates={setMyGates} />
		</div>
	)
}
