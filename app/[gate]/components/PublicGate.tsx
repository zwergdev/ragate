'use client'
import {useState} from 'react'
import {Gate} from '@/app/api/edit/gates'
import CodePage from '@/app/[gate]/components/CodePage'
import FormPage from '@/app/[gate]/components/FormPage'
import Thanks from '@/app/[gate]/components/Thanks'

export default function ({gate}: {gate: Gate}) {
	const [isCodeValid, setIsCodeValid] = useState(false)
	const [isFormSent, setIsFormSent] = useState(false)

	const render = () => {
		if (!isCodeValid && !isFormSent) {
			return <CodePage _id={gate._id} bio={gate.bio} setIsValid={setIsCodeValid} />
		}
		if (isCodeValid) {
			return <FormPage values={gate.values} submitPlaceholder={gate.bio.submitButton} setIsSent={setIsFormSent} />
		}
		if (isFormSent) {
			return <Thanks message={gate.bio.byeBye} />
		}
	}

	return <div className='publicGate'>{render()}</div>
}
