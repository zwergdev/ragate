import HeaderHome from '@/app/home/components/HeaderHome'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function HomeLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<HeaderHome />
			{children}
		</>
	)
}
