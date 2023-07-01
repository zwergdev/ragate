import {Code} from '@/app/api/edit/gates'
import {useSelector} from 'react-redux'
import {codesSelector, setCodes} from '@/app/redux/gateSlice'
import {useAppDispatch} from '@/app/redux/store'

export default function CodesEdit() {
	const dispatch = useAppDispatch()
	const codes = useSelector(codesSelector)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		let {name, value} = event.target
		if (name === 'attempts') {
			// @ts-ignore
			value = Number(value)
		}
		const updatedGateCodes = [...codes]
		updatedGateCodes[index] = {...updatedGateCodes[index], [name]: value}
		dispatch(setCodes(updatedGateCodes))
	}

	const handleDelete = (index: number) => {
		const updatedCodes = codes.filter((_, idx) => idx !== index)
		dispatch(setCodes(updatedCodes))
	}
	const handleAdd = () => {
		const updatedCodes = [...codes, {value: 'Code', attempts: 10}]
		dispatch(setCodes(updatedCodes))
	}

	return (
		<div className='editMyCodesBox'>
			<h5>Gate codes</h5>
			<ul>
				{codes.map((obj: Code, idx: number) => (
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
