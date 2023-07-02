import Link from 'next/link'
import Image from 'next/image'

export default function HeaderEdit() {
	return (
		<header className='edit'>
			<nav className='container'>
				<Link href={'/home'} className='toHome'>
					My RaGates
				</Link>
				<div>
					<button className='profile_button'>
						<Image src='/zwerg_pfp.jpg' alt='profile image' width={40} height={40} />
						zwergdev@gmail.com
					</button>
				</div>
			</nav>
		</header>
	)
}
