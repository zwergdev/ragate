'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useWeb3Modal} from '@web3modal/react'
import {useAccount} from 'wagmi'
import {usePathname} from 'next/navigation'

export default function Header() {
	const {address, isConnected} = useAccount()
	const {open} = useWeb3Modal()
	const pathname = usePathname()

	return (
		<header className='home'>
			<nav className='container'>
				{pathname.includes('/edit') ? (
					<Link href={'/home'} className='toHome'>
						My RaGates
					</Link>
				) : (
					<Link href='/' className='toLanding'>
						<Image src='/logo.svg' alt='logo' width={40} height={40} />
						<span>RaGate</span>
					</Link>
				)}
				{address && isConnected && (
					<button className='profile_button' onClick={open}>
						<span className='image'></span>
						{`${address.slice(0, 4)}...${address.slice(-4)}`}
					</button>
				)}
			</nav>
		</header>
	)
}
