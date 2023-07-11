import {ImageResponse} from 'next/server'
import {getPublicGate} from '@/services/getGates'

export const runtime = 'edge'
export const alt = 'Project preview'
export const contentType = 'image/png'

const getPoppinsBold = async () => {
	const response = await fetch(new URL('public/Poppins-Bold.ttf', import.meta.url))
	return await response.arrayBuffer()
}
export default async function Image({params}: {params: {gate: string}}) {
	const paraGate = params.gate
	const gate = await getPublicGate(paraGate)
	return new ImageResponse(
		(
			<div
				style={{
					position: 'relative',
					backgroundColor: '#151515',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					height: '100%',
					padding: '0 73px',
					width: '100%',
					gap: '15px'
				}}>
				<img src={gate.image[0].fileUrl} style={{borderRadius: '50px'}} alt="project's logo" width={280} height={280} />
				<h5
					style={{
						marginTop: '40px',
						fontSize: `${754 / (gate.bio.title.length / 1.5)}px`,
						color: '#F3F1E5',
						fontFamily: 'Poppins'
					}}>
					{gate.bio.title}
				</h5>
				<p
					style={{
						fontSize: '40px',
						position: 'absolute',
						color: '#F3F1E5',
						fontFamily: 'Poppins',
						opacity: '.5',
						right: 40,
						bottom: 10
					}}>
					Created by RaGate
				</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Poppins',
					data: await getPoppinsBold(),
					style: 'normal'
				}
			]
		}
	)
}
