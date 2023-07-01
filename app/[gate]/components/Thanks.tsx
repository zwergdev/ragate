import {Bio} from '@/app/api/edit/gates'

export default function Thanks({message}: {message: Bio['byeBye']}) {
	return <h5>{message}</h5>
}
