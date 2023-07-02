import {Bio, Value} from '@/app/api/edit/gates'
import {FormEvent, useState} from 'react'
import {toast} from 'react-toastify'
import {Status} from '@/app/[gate]/components/PublicGate'
import {sendForm} from '@/services/getGates'
import {ObjectId} from 'mongodb'

type FormState = Record<string, string>
type Props = {
	values: Value[]
	submitPlaceholder: Bio['submitButton']
	setStatus: (status: Status) => void
	_id: ObjectId | undefined
}

export default function FormPage({values, submitPlaceholder, setStatus, _id}: Props) {
	const [form, setForm] = useState<FormState>(
		values.reduce<FormState>((acc, curr) => {
			const key = curr.value.replace(/\s/g, '')
			acc[key] = ''
			return acc
		}, {})
	)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
		const {value} = event.target
		setForm((prevForm: any) => ({...prevForm, [key]: value}))
	}

	function validateForm() {
		for (let key in form) {
			if (form[key] === '') {
				return false
			}
		}
		return true
	}

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (validateForm()) {
			const response = await sendForm({_id, form})
			console.log(response)
			if (response) {
				setStatus(Status.FORM_SENT)
			} else {
				toast.error('Error sending the form')
			}
		} else {
			toast.error('Empty')
		}
	}

	return (
		<form className='formPage' onSubmit={handleFormSubmit}>
			{Object.keys(form).map(key => (
				<div className='inputBox' key={key}>
					<label htmlFor={key} className={form[key] && 'd_none'}>
						{key}
					</label>
					<input id={key} value={form[key]} className='button' onChange={e => handleInputChange(e, key)} />
				</div>
			))}
			<button type='submit' className='button submitButton'>
				{submitPlaceholder}
			</button>
		</form>
	)
}
