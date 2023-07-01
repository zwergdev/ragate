import HeaderEdit from '@/app/edit/components/HeaderEdit'

export const metadata = {
	title: 'Edit my Gate'
}

export default function EditLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<HeaderEdit />
			{children}
		</>
	)
}
