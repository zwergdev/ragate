'use client'
import {ChangeEvent, useState} from 'react'
import {Value} from '@/app/api/edit/gates'

//const values: Value[] = [{value: 'Twitter'}, {value: 'Discord ID'}, {value: 'Wallet'}]

export default function ValuesEdit({values}: {values: Value[]}) {
	const [gateValues, setGateValues] = useState(values)

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
		const {value} = event.target
		setGateValues(prevValues => prevValues.map((item, idx: number) => (idx === index ? {...item, value} : item)))
	}

	const handleDelete = (index: number) => {
		setGateValues(prevValues => prevValues.filter((_, idx) => idx !== index))
	}

	const handleAdd = () => {
		setGateValues(prevValues => [...prevValues, {value: 'Value'}])
	}

	return (
		<div className='editMyValuesBox'>
			<h5>Gate values</h5>
			<ul>
				{gateValues.map((obj: Value, idx: number) => (
					<li key={idx}>
						<input type='text' value={obj.value} className='button' onChange={event => handleInputChange(event, idx)} />
						<button className='delete' onClick={() => handleDelete(idx)}>
							+
						</button>
					</li>
				))}
				<li onClick={handleAdd}>
					<button className='button'>Add</button>
					<button className='delete'>+</button>
				</li>
			</ul>
		</div>
	)
}
