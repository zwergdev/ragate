'use client'
import {useCallback, useState} from 'react'
import useSound from 'use-sound'
import {landingConfig} from '@/app/landing/StickySection'

const faq = [
	{
		q: 'How much does using the application cost?',
		a: 'Using the platform is free. The application was developed quite quickly without any financial expenses. In the spirit of openness and transparency!'
	},
	{
		q: 'Who is the mind behind this project?',
		a: 'The RaGate project was developed by a single developer over the course of 10 days to showcase their skills and contribute to the Web3 community.'
	},
	{
		q: 'Will the project undergo further enhancements?',
		a: 'Definitely yes, there are plans to add new features. Additionally, anyone can contribute to the development as the source code is available.'
	}
]

export default function FAQ() {
	const [play] = useSound('/camera.wav', landingConfig.sound)
	const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

	const toggleAccordion = useCallback(
		(idx: number) => {
			play()
			if (idx === activeIndex) {
				setActiveIndex(undefined)
			} else {
				setActiveIndex(idx)
			}
		},
		[activeIndex]
	)

	return (
		<>
			{faq.map((faq, idx) => (
				<div
					key={idx}
					onClick={() => toggleAccordion(idx)}
					className={idx === activeIndex ? 'question active' : 'question'}>
					<button>{faq.q}</button>
					<div className={idx === activeIndex ? 'toggled' : undefined}>
						<p>{faq.a}</p>
					</div>
				</div>
			))}
		</>
	)
}
