import HeaderHome from '@/app/home/components/HeaderHome'
import {Providers} from '@/app/home/Providers'

export const metadata = {
	title: 'RaGate Workspace'
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<Providers>
				<HeaderHome />
				{children}
			</Providers>
		</>
	)
}
