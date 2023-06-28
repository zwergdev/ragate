import Image from 'next/image'
import Link from 'next/link'

export default function Edit() {
	return (
		<main className='edit'>
			<div className='container'>
				<div className='editMyCodesBox'>
					<h5>Gate codes</h5>
					<ul>
						<li>
							Zwerg<span>10</span>
						</li>
						<li>
							666<span>50</span>
						</li>
						<li>
							mySecretCode<span>100</span>
						</li>
						<li>
							password<span>400</span>
						</li>
						<li className='addCode'>
							+<span>0</span>
						</li>
					</ul>
				</div>
				<div className='editMyGateBox'>
					<Image src='/skull.jpg' alt="gate's picture" width={200} height={200} />
					<div className='gateBio'>
						<h5>Untitled Gate</h5>
						<p>Gate description</p>
						<span className='button'>Code's placeholder</span>
						<span className='button submit'>Submit button</span>
						<p>Bye-bye message</p>
					</div>
				</div>
				<div className='editMyValuesBox'>
					<h5>Gate values</h5>
					<ul>
						<li>
							<button className='button'>Twitter</button>
							<span>X</span>
						</li>
						<li>
							<button className='button'>Discord ID</button>
							<span>X</span>
						</li>
						<li>
							<button className='button'>Wallet</button>
							<span>X</span>
						</li>
						<li>
							<button className='button'>Add</button>
							<span>X</span>
						</li>
					</ul>
				</div>
			</div>
		</main>
	)
}
