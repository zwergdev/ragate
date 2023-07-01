import {Bio} from '@/app/api/edit/gates'
import Image from 'next/image'
import {FormEvent, useState} from 'react'
import {checkCode} from '@/services/getGates'
import {ObjectId} from 'mongodb'

type Props = {
	bio: Bio
	setIsValid: (b: boolean) => void
	_id: ObjectId | undefined
}

export default function CodePage({bio, setIsValid, _id}: Props) {
	const [code, setCode] = useState<string>('')

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const body = {_id, code}
		const response = await checkCode(body)
		if (response) {
			setIsValid(true)
			console.log('good')
		} else {
			console.error('bad')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Image src='/skull.jpg' alt="gate's image" width={200} height={200} className='publicImage' />
			<h5>{bio.title}</h5>
			<p>{bio.description}</p>
			<div className='inputBox'>
				<label htmlFor='code' className={code && 'd_none'}>
					{bio.codePlaceholder}
				</label>
				<input
					id='code'
					className='button'
					autoCorrect='off'
					autoComplete='off'
					onChange={e => setCode(e.target.value)}
					value={code}
				/>
			</div>
			<button className='button submitButton' type='submit'>
				{bio.submitButton}
			</button>
		</form>
	)
}
