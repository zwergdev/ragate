import ImageEditor from '@/app/edit/components/ImageEditor'
import SaveButton from '@/app/edit/components/SaveButton'
import BioEditor from '@/app/edit/components/BioEditor'

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
