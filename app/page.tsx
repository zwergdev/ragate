import Image from 'next/image'
import Link from 'next/link'
import StickySection from '@/app/landing/StickySection'
import FAQ from '@/app/landing/FAQ'

export default function () {
	return (
		<main className='landing'>
			<header>
				<div className='container'>
					<Link href='/' className='logoBox'>
						<Image src='/logo.svg' alt='logo' width={40} height={40} />
						<span>RaGate</span>
					</Link>
					<div className='buttonsBox'>
						<button className='shadowButton'>Sign In</button>
						<button className='shadowButton'>Sign Up</button>
					</div>
				</div>
			</header>
			<main>
				<section className='mainBanner'>
					<div className='container'>
						<h1>RaGate</h1>
						<h2>Web3-Based Forms</h2>
						<p>
							Effortlessly determine your audience with the easy-to-use tool, providing password-protected form entry.
						</p>
						<button className='shadowButton'>Get started</button>
					</div>
					<div className='blob violet'></div>
					<div className='blob razz'></div>
				</section>
				<section className='solution'>
					<div className='container'>
						<h3>The best solution for filtering early birds</h3>
						<p className='suited'>Perfectly suited for your NFT collection or DAO.</p>
						<div className='solutionImage'>
							<div className='sol1'>
								<Image src='/logo-rect.svg' alt='logo code page preview' width={150} height={150} />
								<h6>Some Project DAO</h6>
								<p>Developed by one person.</p>
								<span className='fakeInput'>Code</span>
								<span className='fakeInput'>Check</span>
							</div>
							<div className='sol2'>
								<span className='fakeInput'>Twitter</span>
								<span className='fakeInput'>DiscordID</span>
								<span className='fakeInput'>Wallet</span>
								<span className='fakeInput'>TelegramID</span>
								<span className='fakeInput'>Wish</span>
								<span className='fakeInput'>Submit</span>
							</div>
							<span className='sol3'>Thank you for your attention! We will contact you later.</span>
						</div>
					</div>
				</section>
				<section className='features'>
					<h3>Features</h3>
					<div className='container'>
						<div className='content'>
							<StickySection />
						</div>
					</div>
					<div className='blob rose'></div>
					<div className='blob yellow'></div>
					<div className='blob green'></div>
					<div className='blob brown'></div>
					<div className='blob blue'></div>
				</section>
				<section className='faq'>
					<div className='container'>
						<h3>Frequently Asked Questions</h3>
						<div className='questionsBox'>
							<FAQ />
						</div>
					</div>
				</section>
			</main>
			<footer className='container'>
				<p className='developed'>
					Developed by{' '}
					<a href='https://twitter.com/zwergdev' target='_blank'>
						zwerg
					</a>
					.
				</p>
				<a className='gitRepo' href='https://github.com/zwergdev/ragate' target='_blank'>
					<Image src='/github.svg' width={30} height={30} alt='github logo' />
				</a>
			</footer>
		</main>
	)
}
