import {ImageResponse} from 'next/server'
import {getPublicGate} from '@/services/getGates'
import defaultIcon from '@/public/icon.png'

export const runtime = 'edge'

export const size = {
	width: 64,
	height: 64
}
export const contentType = 'image/png'

export default async function Icon({params}: {params: {gate: string}}) {
	const paraGate = params.gate
	const gate = await getPublicGate(paraGate)

	return new ImageResponse(
		(
			<>
				<img
					src={gate.image ? gate.image[0].fileUrl : defaultIcon}
					alt='icon'
					width={64}
					height={64}
					style={{borderRadius: '12px'}}
				/>
			</>
		),
		{
			...size
		}
	)
}
