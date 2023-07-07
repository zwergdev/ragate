'use client'
import Image from 'next/image'
import Link from 'next/link'
import {Web3Button} from '@web3modal/react'

export default function HeaderHome() {
	return (
		<header className='home'>
			<nav className='container'>
				<Link href='/' className='toHome'>
					<Image src='/logo.svg' alt='logo' width={40} height={40} />
					<span>RaGate</span>
				</Link>
				<Web3Button />
				{/*<div>*/}
				{/*	<button className='profile_button'>*/}
				{/*		<Image src='/logo-rect.svg' alt='profile image' width={40} height={40} />*/}
				{/*		zwergdev@gmail.com*/}
				{/*	</button>*/}
				{/*</div>*/}
			</nav>
		</header>
	)
}
