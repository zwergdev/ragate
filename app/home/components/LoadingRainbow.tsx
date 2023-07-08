import Image from 'next/image'

export default function LoadingRainbow() {
	return <Image className='loadingRainbow' src='/rainbow.svg' alt='rainbow' width={200} height={118} />
}
