import Image from 'next/image'
import {useSelector} from 'react-redux'
import {bioSelector, formSelector, setBio} from '@/app/redux/gateSlice'
import {useAppDispatch} from '@/app/redux/store'
import {saveGate} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'

export default function GateEdit() {
	const dispatch = useAppDispatch()
	const bio = useSelector(bioSelector)
	const form = useSelector(formSelector)

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		const {name, value} = event.target
		const updatedBio = {...bio, [name]: value}
		dispatch(setBio(updatedBio))
	}

	function formValidation(newGate: Gate) {
		const bioValues = Object.values(newGate.bio)
		if (bioValues.includes('')) {
			return false
		}

		const codesValues = newGate.codes.map(code => code.value)
		if (codesValues.includes('')) {
			return false
		}

		const valuesValues = newGate.values.map(value => value.value)
		return !valuesValues.includes('')
	}

	const handleSaveGate = async () => {
		const newGate = {...form}
		delete newGate._id
		const validation = formValidation(newGate)
		if (validation) {
			const response = await saveGate({id: form._id, gate: newGate})
			if (response.ok) {
				toast.success('Saved')
			} else {
				toast.error('Error')
			}
		} else {
			toast.error('Empty values')
		}
	}

	return (
		<div className='editMyGateBox'>
			<Image src='/skull.jpg' alt="gate's picture" width={200} height={200} />
			<div className='gateBio'>
				<input type='text' name='title' value={bio.title} className='titleInput' onChange={e => handleInputChange(e)} />
				<input
					type='text'
					name='description'
					value={bio.description}
					className='descriptionInput'
					onChange={e => handleInputChange(e)}
				/>
				<input
					type='text'
					name='codePlaceholder'
					value={bio.codePlaceholder}
					className='codePlaceholder button'
					onChange={e => handleInputChange(e)}
				/>
				<div className='submitButtonBox'>
					<button className='submitButton button'>{bio.submitButton}</button>
					<input
						type='text'
						name='submitButton'
						value={bio.submitButton}
						className='submitButtonPlaceholder'
						onChange={e => handleInputChange(e)}
					/>
				</div>
				<input
					type='text'
					name='byeBye'
					value={bio.byeBye}
					className='descriptionInput'
					onChange={e => handleInputChange(e)}
				/>
			</div>
			<div className='saveBox'>
				<button className='button save' onClick={handleSaveGate}>
					Save
				</button>
			</div>
		</div>
	)
}
