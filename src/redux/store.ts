import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rickAndMortyApi } from './api/api'

export const store = configureStore({
	reducer: {
		[rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)