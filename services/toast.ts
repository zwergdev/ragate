import {Id, toast} from 'react-toastify'

type FetchingToast = {
	promiseToast: Id
	text: string
	type: 'success' | 'error'
}
export const fetchingToast = ({promiseToast, text, type}: FetchingToast) => {
	toast.update(promiseToast, {
		render: text,
		type: type,
		isLoading: false,
		autoClose: 2000
	})
}
