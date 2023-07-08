import {Gate} from '@/app/api/edit/gates'
import Image from 'next/image'
import Link from 'next/link'
import CreateGateBox from '@/app/home/components/CreateGateBox'

type Props = {
	myGates: Gate[]
	setMyGates: (gates: Gate[]) => void
}

export default function MyGates({myGates, setMyGates}: Props) {
	return (
		<div className='myGatesBox'>
			{myGates.map((gate, idx) => (
				<Link href={`home/edit/${gate._id}`} className='gate' key={idx}>
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
							<button className='button'>Inputs: {gate.values.length}</button>
						</div>
					</div>
				</Link>
			))}
			<CreateGateBox setMyGates={setMyGates} />
		</div>
	)
}
