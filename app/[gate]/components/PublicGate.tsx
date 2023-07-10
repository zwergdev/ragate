'use client'
import {useState} from 'react'
import {Gate} from '@/app/api/edit/gates'
import CodePage from '@/app/[gate]/components/CodePage'
import FormPage from '@/app/[gate]/components/FormPage'
import Thanks from '@/app/[gate]/components/Thanks'

export enum Status {
	START,
	CODE_VALID,
	FORM_SENT
}

export default function ({gate}: {gate: Gate}) {
	const [status, setStatus] = useState(Status.START)

	if (status === Status.START) {
		return <CodePage _id={gate._id} image={gate.image} bio={gate.bio} setStatus={setStatus} />
	}
	if (status === Status.CODE_VALID) {
		return (
			<FormPage _id={gate._id} values={gate.values} submitPlaceholder={gate.bio.submitButton} setStatus={setStatus} />
		)
	}
	if (status === Status.FORM_SENT) {
		return <Thanks message={gate.bio.byeBye} />
	}
}
