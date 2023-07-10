'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useWeb3Modal} from '@web3modal/react'
import {useAccount} from 'wagmi'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function Header() {
	const [walletDefined, setWalletDefined] = useState(false)
	const {address, isConnected} = useAccount()
	const [wallet, setWallet] = useState(address)
	const {open} = useWeb3Modal()
	const pathname = usePathname()

	useEffect(() => {
		const checkWallet = () => {
			if (address !== undefined) {
				setWalletDefined(true)
				setWallet(address)
			} else {
				setWalletDefined(false)
				setWallet(undefined)
			}
		}
		checkWallet()
	}, [address, isConnected])

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
				{walletDefined && (
					<button className='profile_button' onClick={open}>
						<span className='image'></span>
						{`${wallet?.slice(0, 4)}...${wallet?.slice(-4)}`}
					</button>
				)}
			</nav>
		</header>
	)
}
