import clipboardCopy from 'clipboard-copy'
import {useSelector} from 'react-redux'
import {formSelector} from '@/app/redux/gateSlice'
import {toast} from 'react-toastify'
import {deleteGate, downloadApplicants, SITE_URL} from '@/services/getGates'
import Link from 'next/link'
import {fetchingToast} from '@/services/toast'
import {useRouter} from 'next/navigation'
import {saveAs} from 'file-saver'
import * as XLSX from 'xlsx'

export default function ExtraEdit() {
	const {_id} = useSelector(formSelector)
	const router = useRouter()

	const copyLink = () => {
		clipboardCopy(`${SITE_URL}/${_id}`).then(() => toast.success('Link copied'))
	}
	const deleteMyGate = async () => {
		const promiseToast = toast.loading('Creating the gate 🧐')
		const {deletedCount} = await deleteGate(_id)
		if (deletedCount > 0) {
			fetchingToast({promiseToast, text: 'Deleted 👌', type: 'success'})
			router.push('/home')
		} else {
			fetchingToast({promiseToast, text: 'Error! 🤯', type: 'error'})
		}
	}
	const download = async () => {
		const promiseToast = toast.loading("Downloading applicants' data 🧐")
		const data = await downloadApplicants(_id)
		if (data.length > 0) {
			const sheet = XLSX.utils.json_to_sheet(data)
			const workbook = XLSX.utils.book_new()
			XLSX.utils.book_append_sheet(workbook, sheet, 'Applicants')
			const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'})
			const blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
			saveAs(blob, 'gateApplicants.xlsx')
			fetchingToast({promiseToast, text: 'Downloaded 👌', type: 'success'})
		} else fetchingToast({promiseToast, text: 'Zero applicants! 🤯', type: 'error'})
	}

	return (
		<div className='editExtra'>
			<h5>Extra</h5>
			<div className='buttonsBox'>
				<div className='copyDelete'>
					<button className='button' onClick={copyLink}>
						Copy link
					</button>
					<button className='button delete' onClick={deleteMyGate}>
						Delete
					</button>
				</div>
				<button className='button' onClick={download}>
					Download applicants' data
				</button>
				<Link href={`/${_id}`} className='button enter'>
					Enter the Gate
				</Link>
			</div>
		</div>
	)
}
