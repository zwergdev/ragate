import {ObjectId} from 'bson'

export type Code = {
	value: string
	attempts: number
	[key: string]: string | number
}

export type Value = {
	value: string
	[key: string]: string
}

export type Bio = {
	title: string
	description: string
	codePlaceholder: string
	submitButton: string
	byeBye: string
}

export type Gate = {
	_id?: ObjectId
	image: {fileUrl: string; fileKey: string}[] | undefined
	bio: Bio
	codes: Code[]
	values: Value[]
	form?: []
}

export const gateTemplate: Gate = {
	image: undefined,
	bio: {
		title: 'Untitled Gate',
		description: 'Gate description',
		codePlaceholder: "Code's placeholder",
		submitButton: 'Submit button',
		byeBye: 'Bye-bye message'
	},
	codes: [
		{value: 'Code #1', attempts: 10},
		{value: 'Code #2', attempts: 50},
		{value: 'Code #3', attempts: 100},
		{value: 'Code #4', attempts: 400}
	],
	values: [{value: 'Twitter'}, {value: 'Discord ID'}, {value: 'Wallet'}],
	form: []
}
