'use client'
import Image, {StaticImageData} from 'next/image'
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import useSound from 'use-sound'
import lan1 from '@/public/lan1.jpg'
import lan2 from '@/public/lan2.jpg'
import lan3 from '@/public/lan3.jpg'
import lan4 from '@/public/lan4.jpg'
import rect from '@/public/rect.svg'

export const landingConfig = {
	view: {threshold: 0, rootMargin: '-100px 0px'},
	sound: {volume: 0.18}
}

export default function StickySection() {
	const [play] = useSound('/camera.wav', landingConfig.sound)
	const [imageSrc, setImageSrc] = useState<StaticImageData>(rect)
	const [ref1, inView1] = useInView(landingConfig.view)
	const [ref2, inView2] = useInView(landingConfig.view)
	const [ref3, inView3] = useInView(landingConfig.view)
	const [ref4, inView4] = useInView(landingConfig.view)

	useEffect(() => {
		if (!inView1 || !inView2 || !inView3 || !inView4) {
			setImageSrc(rect)
		}
		if (inView1) {
			setImageSrc(lan1)
		}
		if (inView2 && !inView1) {
			setImageSrc(lan2)
		}
		if (inView3 && !inView2) {
			setImageSrc(lan3)
		}
		if (inView4 && !inView3) {
			setImageSrc(lan4)
		}
	}, [inView1, inView2, inView3, inView4])

	useEffect(() => {
		play()
	}, [imageSrc])

	return (
		<>
			<h5 ref={ref1} className={!inView1 ? 'invisible' : undefined}>
				Unlimited number of gates
			</h5>
			<h5 ref={ref2} className={!inView2 || inView1 ? 'invisible' : undefined}>
				Flexible configuration of entry codes
			</h5>
			<h5 ref={ref3} className={!inView3 || inView2 ? 'invisible' : undefined}>
				Personalized configuration of collected information
			</h5>
			<h5 ref={ref4} className={!inView4 || inView3 ? 'invisible' : undefined}>
				Fine-tuning of elements
			</h5>
			<Image src={imageSrc} priority alt='' width={1000} height={1000} quality={100} className='image'></Image>
		</>
	)
}
