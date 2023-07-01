import {Value} from '@/app/api/edit/gates'
import {useSelector} from 'react-redux'
import {setValues, valuesSelector} from '@/app/redux/gateSlice'
import {useAppDispatch} from '@/app/redux/store'

export default function ValuesEdit() {
	const dispatch = useAppDispatch()
	const values = useSelector(valuesSelector)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const {value} = event.target
		const updatedValues = values.map((item, idx) => (idx === index ? {...item, value} : item))
		dispatch(setValues(updatedValues))
	}

	const handleDelete = (index: number) => {
		const updatedValues = values.filter((_, idx) => idx !== index)
		dispatch(setValues(updatedValues))
	}
	const handleAdd = () => {
		const updatedValues = [...values, {value: 'Value'}]
		dispatch(setValues(updatedValues))
	}

	return (
		<div className='editMyValuesBox'>
			<h5>Gate values</h5>
			<ul>
				{values.map((obj: Value, idx: number) => (
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
