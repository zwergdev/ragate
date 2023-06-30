import {Gate} from '@/app/api/edit/gates'

export const SITE_URL = 'http://localhost:3000'

export const getGate = async (id: string) => {
	const response = await fetch(`${SITE_URL}/api/edit/${id}`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to fetch current gate.')
	}

	return response.json()
}

export const getMyGates = async () => {
	const response = await fetch(`${SITE_URL}/api/home`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to fetch your gates.')
	}

	return response.json()
}

export const saveGate = async (id: string, values: Gate) => {
	const response = await fetch(`${SITE_URL}/api/edit/${id}`, {
		cache: 'no-store',
		method: 'POST',
		body: JSON.stringify(values)
	})
	if (!response.ok) {
		throw new Error('Unable to fetch current gate.')
	}

	return response.json()
}

export const createGate = async () => {
	const response = await fetch(`${SITE_URL}/api/create`, {cache: 'no-store'})
	if (!response.ok) {
		throw new Error('Unable to fetch your gates.')
	}

	return response.json()
}
