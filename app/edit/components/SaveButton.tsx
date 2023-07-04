import {saveGate} from '@/services/getGates'
import {toast} from 'react-toastify'
import {Gate} from '@/app/api/edit/gates'
import {useSelector} from 'react-redux'
import {filesSelector, formSelector, imageSelector} from '@/app/redux/gateSlice'
import {useUploadThing} from '@/services/uploadthing'

export default function SaveButton() {
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

	const basicLoad = async (newGate: Gate) => {
		const response = await saveGate({id: form._id, gate: newGate})
		if (response) {
			toast.success('Saved')
		} else {
			toast.error('Error')
		}
	}

	const {startUpload} = useUploadThing('imageUploader', {
		onClientUploadComplete: res => {
			toast.success('Uploaded successfully!')
			return res
		},
		onUploadError: () => {
			toast.error('Error occurred while uploading')
		}
	})

	const handleSaveGate = async () => {
		const newGate = {...form, image: imageLink}
		delete newGate._id
		const validation = formValidation(newGate)
		if (validation) {
			if (files.length > 0) {
				newGate.image = await startUpload(files)
				basicLoad(newGate)
			} else {
				basicLoad(newGate)
			}
		} else {
			toast.error('Empty values')
		}
	}

	return (
		<button className='button save' onClick={handleSaveGate}>
			Save
		</button>
	)
}
