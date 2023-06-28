import Image from 'next/image'
import Link from 'next/link'

export default function HeaderHome() {
	return (
		<header className='home'>
			<nav className='container'>
				<Link href='/' className='toHome'>
					<Image src='/logo.svg' alt='logo' width={40} height={40} />
					<span>RaGate</span>
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
