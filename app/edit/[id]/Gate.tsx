'use client'
import CodesEdit from '@/app/edit/components/CodesEdit'
import GateEdit from '@/app/edit/components/GateEdit'
import ValuesEdit from '@/app/edit/components/ValuesEdit'
import {useAppDispatch} from '@/app/redux/store'
import React, {useEffect} from 'react'
import {fetchSelector, setState} from '@/app/redux/gateSlice'
import {useSelector} from 'react-redux'
import {getGate} from '@/services/getGates'

export default function Gate({id}: {id: string}) {
	const dispatch = useAppDispatch()
	const isFetching = useSelector(fetchSelector)

	useEffect(() => {
		const getData = async () => {
			const state = await getGate(id)
			console.log(state)
			dispatch(setState(state))
		}
		getData()
	}, [])

	return (
		<>
			{isFetching ? (
				<h1>Loading</h1>
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
