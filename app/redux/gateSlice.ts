import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './store'
import {Bio, Code, Gate, Value} from '@/app/api/edit/gates'

type State = {
	form: Gate
	isFetching: boolean
}
const initialState: State = {
	form: {
		_id: undefined,
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
	isFetching: true
}

export const gateSlice = createSlice({
	name: 'gate',
	initialState,
	reducers: {
		setState(state, action: PayloadAction<Gate>) {
			state.form = action.payload
			state.isFetching = false
		},
		setCodes(state, action: PayloadAction<Code[]>) {
			state.form.codes = action.payload
		},
		setValues(state, action: PayloadAction<Value[]>) {
			state.form.values = action.payload
		},
		setBio(state, action: PayloadAction<Bio>) {
			state.form.bio = action.payload
		}
	}
})
export const formSelector = (state: RootState) => state.gate.form
export const bioSelector = (state: RootState) => state.gate.form.bio
export const codesSelector = (state: RootState) => state.gate.form.codes
export const valuesSelector = (state: RootState) => state.gate.form.values
export const fetchSelector = (state: RootState) => state.gate.isFetching
export const {setState, setCodes, setValues, setBio} = gateSlice.actions
export default gateSlice.reducer
