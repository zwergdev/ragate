'use client'
import Image from 'next/image'
import {ChangeEventHandler, useState} from 'react'
import {Bio} from '@/app/api/edit/gates'

// const gate = {
// 	title: 'Untitled Gate',
// 	description: 'Gate description',
// 	codePlaceholder: "Code's placeholder",
// 	submitButton: 'Submit button',
// 	byeBye: 'Bye-bye message'
// }

export default function GateEdit({bio}: {bio: Bio}) {
	const [gateValues, setGateValues] = useState(bio)

	const handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
		const {name, value} = event.target
		setGateValues(prevValues => ({...prevValues, [name]: value}))
	}

	return (
		<div className='editMyGateBox'>
			<Image src='/skull.jpg' alt="gate's picture" width={200} height={200} />
			<div className='gateBio'>
				<input
					type='text'
					name='title'
					value={gateValues.title}
					className='titleInput'
					onChange={e => handleInputChange(e)}
				/>
				<input
					type='text'
					name='description'
					value={gateValues.description}
					className='descriptionInput'
					onChange={e => handleInputChange(e)}
				/>
				<input
					type='text'
					name='codePlaceholder'
					value={gateValues.codePlaceholder}
					className='codePlaceholder button'
					onChange={e => handleInputChange(e)}
				/>
				<div className='submitButtonBox'>
					<button className='submitButton button'>{gateValues.submitButton}</button>
					<input
						type='text'
						name='submitButton'
						value={gateValues.submitButton}
						className='submitButtonPlaceholder'
						onChange={e => handleInputChange(e)}
					/>
				</div>
				<input
					type='text'
					name='byeBye'
					value={gateValues.byeBye}
					className='descriptionInput'
					onChange={e => handleInputChange(e)}
				/>
			</div>
			<div className='saveBox'>
				<button className='button save'>Save</button>
			</div>
		</div>
	)
}
