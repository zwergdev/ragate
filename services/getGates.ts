import {ObjectId} from 'mongodb'
import {Gate} from '@/app/api/edit/gates'

export const SITE_URL = 'http://localhost:3000'

export const getPublicGate = async (id: string) => {
	const response = await fetch(`${SITE_URL}/api/edit/${id}`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to fetch current gate.')
	}

	return response.json()
}

export const getGate = async ({address, id}: {address: string; id: string}) => {
	const response = await fetch(`${SITE_URL}/api/auth/${id}`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify(address)
	})
	if (!response.ok) {
		throw new Error('Unable to fetch current gate.')
	}

	return response.json()
}

export const getMyGates = async (owner: string) => {
	const response = await fetch(`${SITE_URL}/api/home/${owner}`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to fetch your gates.')
	}

	return response.json()
}

export const saveGate = async ({id, gate}: {id: ObjectId | undefined; gate: Gate}) => {
	const response = await fetch(`${SITE_URL}/api/edit/${id}`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify(gate)
	})
	if (!response.ok) {
		throw new Error('Unable to save current gate.')
	}

	return response.json()
}

export const createGate = async (owner: string) => {
	const response = await fetch(`${SITE_URL}/api/create/${owner}`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to create gate.')
	}

	return response.json()
}

export const checkCode = async (values: object) => {
	const response = await fetch(`${SITE_URL}/api/check`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify(values)
	})
	if (!response.ok) {
		throw new Error('Unable to check your code.')
	}

	return response.json()
}

export const sendForm = async (values: object) => {
	const response = await fetch(`${SITE_URL}/api/form`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify(values)
	})
	if (!response.ok) {
		throw new Error('Unable to send form.')
	}

	return response.json()
}

export const deleteGate = async (id: ObjectId | undefined) => {
	const response = await fetch(`${SITE_URL}/api/delete/${id}`, {
		cache: 'no-store'
	})
	if (!response.ok) {
		throw new Error('Unable to save current gate.')
	}

	return response.json()
}

export const downloadApplicants = async (id: ObjectId | undefined) => {
	const response = await fetch(`${SITE_URL}/api/download/${id}`, {
		cache: 'no-store'
	})
	if (!response.ok) {
		throw new Error('Unable to save current gate.')
	}

	return response.json()
}
