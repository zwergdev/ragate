export const SITE_URL = 'http://localhost:3000'

export const getGate = async (id: string) => {
	const response = await fetch(`${SITE_URL}/api/edit/${id}`, {next: {revalidate: 10}})
	if (!response.ok) {
		throw new Error('Unable to fetch current gate.')
	}

	return response.json()
}

export const getMyGates = async () => {
	const response = await fetch(`${SITE_URL}/api/home`, {next: {revalidate: 10}})
	if (!response.ok) {
		throw new Error('Unable to fetch your gates.')
	}

	return response.json()
}
