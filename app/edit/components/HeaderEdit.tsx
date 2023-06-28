import Link from 'next/link'

export default function HeaderEdit() {
	return (
		<header className='edit'>
			<nav className='container'>
				<div className='toHome'>
					<Link href='/home'>My RaGates</Link>
					<span className='gateStatus'>Your gate is autosaved.</span>
				</div>
				<button className='button'>Share</button>
			</nav>
		</header>
	)
}
