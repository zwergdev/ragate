'use client'
import {ChangeEvent, useState} from 'react'
import {Code} from '@/app/api/edit/gates'

// const codes: Code[] = [
// 	{value: 'Code #1', attempts: 10},
// 	{value: 'Code #2', attempts: 50},
// 	{value: 'Code #3', attempts: 100},
// 	{value: 'Code #4', attempts: 400}
// ]

export default function CodesEdit({codes}: {codes: Code[]}) {
	const [gateCodes, setGateCodes] = useState(codes)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		const {name, value} = event.target
		const updatedGateCodes = [...gateCodes]
		updatedGateCodes[index][name] = value
		setGateCodes(updatedGateCodes)
	}

	const handleDelete = (index: number) => {
		setGateCodes(prevCodes => prevCodes.filter((_, idx) => idx !== index))
	}

	const handleAdd = () => {
		setGateCodes(prevCodes => [...prevCodes, {value: 'Code', attempts: 10}])
	}

	return (
		<div className='editMyCodesBox'>
			<h5>Gate codes</h5>
			<ul>
				{gateCodes.map((obj: Code, idx: number) => (
					<li key={idx}>
						<input
							type='text'
							value={obj.value}
							name='value'
							className='code'
							onChange={event => handleInputChange(event, idx)}
						/>
						<input
							type='number'
							value={obj.attempts}
							name='attempts'
							className='codeAttempts'
							onChange={event => handleInputChange(event, idx)}
						/>
						<button className='delete' onClick={() => handleDelete(idx)}>
							+
						</button>
					</li>
				))}
				<li onClick={handleAdd}>
					<button className='code'>Add</button>
					<button className='delete'>+</button>
				</li>
			</ul>
		</div>
	)
}
