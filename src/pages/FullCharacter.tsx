import { useParams } from "react-router-dom"
import { useGetFullCharacterQuery } from "../redux/api/api"


export const FullCharacter = () => {

	const { id } = useParams()
	const { data, isError, isLoading, isSuccess } = useGetFullCharacterQuery(id)

	return (
		<div>
			{isError && <p>Error</p>}
			{isLoading && <p>Загрузка...</p>}
			{isSuccess &&
				<div>
					<div>{data.name}</div>
					<img src={data.image} />
					<div>{data.gender}</div>
					<div>{data.status}</div>
					<div>{data.url}</div>
					<div>{data.episode}</div>
					<div>{data.created}</div>
					<div>{data.species}</div>
					<div>
						origin
						<div>{data.origin.name}</div>
						<div>{data.origin.url}</div>
					</div>
					<div>
						location
						<div> {data.location.name}</div>
						<div> {data.location.url}</div>
					</div>
				</div>
			}
		</div>
	)
}