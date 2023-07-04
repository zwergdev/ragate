import {useDropzone} from 'react-dropzone'
import type {FileWithPath} from 'react-dropzone'
import {generateClientDropzoneAccept} from '@/services/uploadthing'
import {useCallback, useRef} from 'react'
import Image from 'next/image'
import {useAppDispatch} from '@/app/redux/store'
import {filesSelector, imageSelector, setFiles} from '@/app/redux/gateSlice'
import {useSelector} from 'react-redux'

export default function ImageEditor() {
	const dispatch = useAppDispatch()
	const imageLink = useSelector(imageSelector)
	const files = useSelector(filesSelector)
	const imageBox = useRef<HTMLDivElement>(null)
	const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
		dispatch(setFiles(acceptedFiles))
	}, [])

	const {getRootProps, getInputProps} = useDropzone({
		onDrop,
		accept: generateClientDropzoneAccept(['image'])
	})

	const renderImage = () => {
		const renderProps = {
			className: 'previewImage',
			alt: 'preview image',
			width: 200,
			height: 200,
			priority: true
		}
		if (files.length > 0) {
			return <Image src={URL.createObjectURL(files[0])} {...renderProps} />
		}
		if (imageLink) {
			return <Image src={imageLink[0].fileUrl} {...renderProps} />
		}
	}

	return (
		<div className='imageEditor'>
			<div {...getRootProps()} className='imageBox' ref={imageBox}>
				<input {...getInputProps()} />
				{renderImage()}
				<Image
					className={files.length > 0 || imageLink ? 'hoverIcon withImage' : 'hoverIcon'}
					src='/arrow-up.svg'
					alt='arrow-up icon'
					width={200}
					height={200}
				/>
			</div>
		</div>
	)
}
