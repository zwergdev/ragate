import {configureStore} from '@reduxjs/toolkit'
import gate from './gateSlice'
import {useDispatch} from 'react-redux'

export const store = configureStore({
	reducer: {
		gate
	}
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
