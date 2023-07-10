import {Poppins} from 'next/font/google'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './style/global.scss'
import {Metadata} from 'next'

const poppins = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin']})

export const metadata: Metadata = {
	title: 'RaGate | Web3-Based Forms',
	description:
		'Effortlessly determine your audience with the easy-to-use tool, providing password-protected form entry.',
	themeColor: 'white',
	openGraph: {
		title: 'RaGate | Web3-Based Forms',
		description:
			'Effortlessly determine your audience with the easy-to-use tool, providing password-protected form entry.',
		url: 'https://ragate.vercel.app',
		siteName: 'RaGate',
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'RaGate | Web3-Based Forms',
		description:
			'Effortlessly determine your audience with the easy-to-use tool, providing password-protected form entry.',
		siteId: '1654564851425869826',
		creator: '@zwergdev',
		creatorId: '1654564851425869826'
	}
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ToastContainer
					position='top-right'
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable={false}
					pauseOnHover
					theme='dark'
				/>
				{children}
			</body>
		</html>
	)
}
