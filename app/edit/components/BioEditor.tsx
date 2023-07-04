import {useAppDispatch} from '@/app/redux/store'
import {useSelector} from 'react-redux'
import {bioSelector, setBio} from '@/app/redux/gateSlice'

export default function BioEditor() {
	const dispatch = useAppDispatch()
	const bio = useSelector(bioSelector)

	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		const {name, value} = event.target
		const updatedBio = {...bio, [name]: value}
		dispatch(setBio(updatedBio))
	}

	return (
		<>
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
		</>
	)
}
