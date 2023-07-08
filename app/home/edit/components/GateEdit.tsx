import ImageEditor from '@/app/home/edit/components/ImageEditor'
import SaveButton from '@/app/home/edit/components/SaveButton'
import BioEditor from '@/app/home/edit/components/BioEditor'

export default function GateEdit() {
	return (
		<div className='editMyGateBox'>
			<ImageEditor />
			<div className='gateBio'>
				<BioEditor />
			</div>
			<div className='saveBox'>
				<SaveButton />
			</div>
		</div>
	)
}
