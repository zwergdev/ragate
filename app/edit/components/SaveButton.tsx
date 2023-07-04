import {saveGate} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'
import {useSelector} from 'react-redux'
import {filesSelector, formSelector, imageSelector} from '@/app/redux/gateSlice'
import {useUploadThing} from '@/services/uploadthing'
import {fetchingToast} from '@/services/toast'
import {useState} from 'react'

export default function SaveButton() {
	const [fetching, setFetching] = useState(false)
	const imageLink = useSelector(imageSelector)
	const files = useSelector(filesSelector)
	const form = useSelector(formSelector)

	function formValidation(newGate: Gate) {
		const bioValues = Object.values(newGate.bio)
		if (bioValues.includes('')) {
			return false
		}
		const codesValues = newGate.codes.map(code => code.value)
		if (codesValues.includes('')) {
			return false
		}
		if (!imageLink && !files) {
			return false
		}
		const valuesValues = newGate.values.map(value => value.value)
		return !valuesValues.includes('')
	}

	const {startUpload} = useUploadThing('imageUploader', {
		onClientUploadComplete: res => {
			return res
		},
		onUploadError: () => {
			toast.error('Error occurred while uploading image')
		}
	})

	const handleSaveGate = async () => {
		const newGate = {...form, image: imageLink}
		delete newGate._id
		const validation = formValidation(newGate)
		if (validation) {
			const promiseToast = toast.loading('Saving your gate 🧐')
			if (files.length > 0) {
				setFetching(true)
				newGate.image = await startUpload(files)
				const response = await saveGate({id: form._id, gate: newGate})
				if (response) {
					fetchingToast({promiseToast, text: 'Gate saved 👌', type: 'success'})
				} else {
					fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
				}
				setFetching(false)
			} else {
				setFetching(true)
				const response = await saveGate({id: form._id, gate: newGate})
				if (response) {
					fetchingToast({promiseToast, text: 'Gate saved 👌', type: 'success'})
				} else {
					fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
				}
				setFetching(false)
			}
		} else {
			toast.error('Empty values')
		}
	}

	return (
		<button className='button save' onClick={handleSaveGate} disabled={fetching}>
			Save
		</button>
	)
}
