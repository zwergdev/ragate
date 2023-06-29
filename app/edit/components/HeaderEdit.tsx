import Link from 'next/link'

export default function HeaderEdit() {
	return (
		<header className='edit'>
			<nav className='container'>
				<Link href='/home' className='toHome'>
					My RaGates
				</Link>
				<button className='button'>Share</button>
			</nav>
		</header>
	)
}
