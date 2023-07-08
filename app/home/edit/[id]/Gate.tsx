'use client'
import CodesEdit from '@/app/home/edit/components/CodesEdit'
import GateEdit from '@/app/home/edit/components/GateEdit'
import ValuesEdit from '@/app/home/edit/components/ValuesEdit'
import {useAppDispatch} from '@/app/redux/store'
import {useEffect} from 'react'
import {fetchSelector, setState} from '@/app/redux/gateSlice'
import {useSelector} from 'react-redux'
import {getGate} from '@/services/getGates'
import {useAccount} from 'wagmi'
import {toast} from 'react-toastify'
import LoadingRainbow from '@/app/home/components/LoadingRainbow'
import {useRouter} from 'next/navigation'

export default function Gate({id}: {id: string}) {
	const router = useRouter()
	const {address, isConnected} = useAccount()
	const dispatch = useAppDispatch()
	const isFetching = useSelector(fetchSelector)

	useEffect(() => {
		if (address && isConnected) {
			const getData = async () => {
				const state = await getGate({id, address})
				dispatch(setState(state))
			}
			getData()
		} else {
			toast.error('Wallet is disconnected')
			router.push('/home')
		}
	}, [address])

	return (
		<>
			{isFetching ? (
				<LoadingRainbow />
			) : (
				<>
					<CodesEdit />
					<GateEdit />
					<ValuesEdit />
				</>
			)}
		</>
	)
}
