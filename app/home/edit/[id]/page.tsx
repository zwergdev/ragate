'use client'
import {store} from '@/app/redux/store'
import {Provider} from 'react-redux'
import Gate from '@/app/home/edit/[id]/Gate'

type Props = {
	params: {id: string}
}

export default function Edit({params: {id}}: Props) {
	return (
		<main className='edit'>
			<div className='container'>
				<Provider store={store}>
					<Gate id={id} />
				</Provider>
			</div>
		</main>
	)
}
