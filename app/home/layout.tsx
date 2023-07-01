import HeaderHome from '@/app/home/components/HeaderHome'

export const metadata = {
	title: 'RaGate Workspace'
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<HeaderHome />
			{children}
		</>
	)
}
