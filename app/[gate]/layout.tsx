import '../style/public.scss'
import {Metadata} from 'next'
import {getPublicGate} from '@/services/getGates'
import {ObjectId} from 'mongodb'

export async function generateMetadata({params: {gate}}: {params: {gate: string}}): Promise<Metadata> {
	const currentGate = await getPublicGate(new ObjectId(gate))

	return {
		title: `${currentGate.bio.title} | RaGate`,
		description: currentGate.bio.description,
		openGraph: {
			title: `${currentGate.bio.title} | RaGate`,
			description: currentGate.bio.description,
			url: 'https://ragate.vercel.app',
			siteName: 'RaGate',
			locale: 'en_US',
			type: 'website'
		},
		twitter: {
			title: `${currentGate.bio.title} | RaGate`,
			description: currentGate.bio.description,
			card: 'summary_large_image',
			siteId: '1654564851425869826',
			creator: '@zwergdev',
			creatorId: '1654564851425869826'
		}
	}
}

export default function ({children}: {children: React.ReactNode}) {
	return <div className='publicGate'>{children}</div>
}
