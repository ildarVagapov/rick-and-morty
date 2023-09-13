import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Root } from '../../models/models'


export const rickAndMortyApi = createApi({

	reducerPath: 'rickAndMortyApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
	endpoints: (builder) => ({
		getRickAndMorty: builder.query<Root, void>({
			query: () => `character`,
		}),
	}),
})

export const { useGetRickAndMortyQuery } = rickAndMortyApi
