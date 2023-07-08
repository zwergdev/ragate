'use client'
import {toast} from 'react-toastify'

export default function FakeButton({placeholder}: {placeholder: string}) {
	return (
		<span className='fakeInput check' onClick={() => toast('Nice Try 🌈')}>
			{placeholder}
		</span>
	)
}
