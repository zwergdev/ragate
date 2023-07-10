import {Bio} from '@/app/api/edit/gates'
import Image from 'next/image'
import {FormEvent, useState} from 'react'
import {checkCode} from '@/services/getGates'
import {ObjectId} from 'mongodb'
import {toast} from 'react-toastify'
import {Status} from '@/app/[gate]/components/PublicGate'
import {fetchingToast} from '@/services/toast'

type Props = {
	bio: Bio
	setStatus: (status: Status) => void
	_id: ObjectId | undefined
	image: {fileUrl: string; fileKey: string}[] | undefined
}

export default function CodePage({bio, setStatus, _id, image}: Props) {
	const [code, setCode] = useState<string>('')
	const [attempts, setAttempts] = useState(5)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (code) {
			if (attempts > 0) {
				setAttempts(attempts - 1)
				const promiseToast = toast.loading('Checking your code 🧐')
				const response = await checkCode({_id, code})
				if (response) {
					setStatus(Status.CODE_VALID)
					fetchingToast({promiseToast, text: 'Code is legitimate 👌', type: 'success'})
				} else {
					fetchingToast({promiseToast, text: 'Incorrect code 🤯', type: 'error'})
				}
			} else {
				toast.error('Exceeded the maximum number of attempts.')
			}
		} else {
			toast.error('Enter the code before verification.')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='publicImage'>
				<Image src={image ? image[0].fileUrl : '/logo-rect.svg'} alt="gate's image" width={200} height={200} />
			</div>
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
