import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Characters, Location, Root, RootLocation, } from '../../models/models'


export const rickAndMortyApi = createApi({

	reducerPath: 'rickAndMortyApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
	endpoints: (builder) => ({
		getRickAndMorty: builder.query<Root, void>({
			query: () => `character`,
		}),
		getLocationCharacter: builder.query<Root, number>({
			query: (page) => `character/?page=${page}`,
		}),
		getFullCharacter: builder.query<Characters, string>({
			query: (id) => `character/${id}`,
		}),
		getCharactersFilter: builder.query<Root, { filter: string; page: number }>({
			query: ({ filter, page }) => `character/?${filter}&page=${page}`,
		}),
		getLocation: builder.query<RootLocation, number>({
			query: (page) => `location/?page=${page}`,
		}),
		getFullLocation: builder.query<Location, string>({
			query: (id) => `location/${id}`,
		}),
	}),
})

export const { useGetRickAndMortyQuery, useGetFullCharacterQuery, useGetCharactersFilterQuery, useGetLocationQuery, useGetFullLocationQuery, useGetLocationCharacterQuery } = rickAndMortyApi
