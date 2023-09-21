import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Characters, Root } from '../../models/models'


export const rickAndMortyApi = createApi({

	reducerPath: 'rickAndMortyApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
	endpoints: (builder) => ({
		getRickAndMorty: builder.query<Root, void>({
			query: () => `character`,
		}),
		getFullCharacter: builder.query<Characters, string | undefined>({
			query: (id: string) => `character/${id}`,
		}),
		getCharactersPage: builder.query<Root, number>({
			query: (page: number) => `character?page=${page}`,
		}),
		getCharactersFilter: builder.query<Root, string>({
			query: (name: string) => `character/?name=${name}`,
		}),
	}),
})

export const { useGetRickAndMortyQuery, useGetFullCharacterQuery, useGetCharactersPageQuery, useGetCharactersFilterQuery } = rickAndMortyApi
