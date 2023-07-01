import {Bio, Value} from '@/app/api/edit/gates'
import {useState} from 'react'

type FormState = Record<string, string>
type Props = {
	values: Value[]
	submitPlaceholder: Bio['submitButton']
	setIsSent: (b: boolean) => void
}

export default function FormPage({values, submitPlaceholder, setIsSent}: Props) {
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

	return (
		<form className='formPage'>
			{Object.keys(form).map(key => (
				<div className='inputBox' key={key}>
					<label htmlFor={key} className={form[key] && 'd_none'}>
						{key}
					</label>
					<input id={key} value={form[key]} className='button' onChange={e => handleInputChange(e, key)} />
				</div>
			))}
			<button className='button submitButton'>{submitPlaceholder}</button>
		</form>
	)
}
