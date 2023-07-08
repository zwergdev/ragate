import {Providers} from '@/app/home/Providers'
import Header from '@/app/home/components/Header'
import '../style/home-edit.scss'
export const metadata = {
	title: 'RaGate Workspace'
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<Providers>
				<Header />
				{children}
			</Providers>
		</>
	)
}
