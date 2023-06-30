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
	bio: Bio
	codes: Code[]
	values: Value[]
}

export const gates: Gate[] = [
	{
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
		values: [{value: 'Twitter'}, {value: 'Discord ID'}, {value: 'Wallet'}]
	},
	{
		bio: {
			title: 'New Gate',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorem itaque nemo nesciunt odit pariatur perspiciatis sequi temporibus ullam vero!',
			codePlaceholder: "Code's placeholder",
			submitButton: 'Submit button',
			byeBye: 'Chao!'
		},
		codes: [
			{value: 'Code #1', attempts: 10},
			{value: 'Code #2', attempts: 50},
			{value: 'Code #3', attempts: 100},
			{value: 'Code #4', attempts: 400}
		],
		values: [{value: 'Name'}, {value: 'Surname'}, {value: 'E-Mail'}]
	}
]

export const gateTemplate: Gate = {
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
	values: [{value: 'Twitter'}, {value: 'Discord ID'}, {value: 'Wallet'}]
}
