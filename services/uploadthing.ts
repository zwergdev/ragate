import {generateReactHelpers} from '@uploadthing/react/hooks'

import type {OurFileRouter} from '@/app/api/uploadthing/core'

export const {useUploadThing} = generateReactHelpers<OurFileRouter>()

export const generateMimeTypes = (fileTypes: string[]) => {
	const accepted = fileTypes.map(type => (type !== 'blob' ? `${type}/*` : 'blob'))

	if (accepted.includes('blob')) {
		return undefined
	}
	return accepted
}
export const generateClientDropzoneAccept = (fileTypes: string[]) => {
	const mimeTypes = generateMimeTypes(fileTypes)

	if (!mimeTypes) return undefined

	return Object.fromEntries(mimeTypes.map(type => [type, []]))
}
