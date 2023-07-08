'use client'
import MyGates from '@/app/home/components/MyGates'
import {useAccount} from 'wagmi'
import {useEffect, useState} from 'react'
import {Gate} from '@/app/api/edit/gates'
import {getMyGates} from '@/services/getGates'
import HurryUp from '@/app/home/components/HurryUp'
import LoadingRainbow from '@/app/home/components/LoadingRainbow'

export default function Home() {
	const {address} = useAccount()
	const [myGates, setMyGates] = useState<Gate[]>([])
	const [fetching, setFetching] = useState(true)

	useEffect(() => {
		const getGates = async () => {
			if (address === undefined) {
				setFetching(false)
			} else {
				const gates = await getMyGates(address)
				setMyGates(gates)
				setFetching(false)
			}
		}
		getGates()
	}, [address])

	const toRender = () => {
		if (fetching) return <LoadingRainbow />
		if (myGates?.length === 0 || !address) return <HurryUp setMyGates={setMyGates} />
		return <MyGates myGates={myGates} setMyGates={setMyGates} />
	}

	return (
		<>
			<main className='home'>
				<div className='container'>
					<div className='box'>
						<h6>RaGate's Workspace</h6>
						{toRender()}
					</div>
				</div>
			</main>
		</>
	)
}
