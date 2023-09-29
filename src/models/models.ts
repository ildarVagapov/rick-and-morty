export interface Root {
	info: Info
	results: Characters[]
}

export interface Info {
	count: number
	pages: number
	next: string
	prev: any
}

export interface Characters {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	origin: Origin
	location: CharactersLocation
	image: string
	episode: string[]
	url: string
	created: string
}

export interface Origin {
	name: string
	url: string
}

export interface CharactersLocation {
	name: string
	url: string
}


// location query
export interface RootLocation {
	info: Info
	results: Location[]
}

export interface Location {
	id: number
	name: string
	type: string
	dimension: string
	residents: string[]
	url: string
	created: string
}
