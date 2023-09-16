import { useParams } from "react-router-dom"
import { useGetFullCharacterQuery } from "../redux/api/api"
import { FullCharacterCard } from "../components/FullCharacterCard/FullCharacterCard"


export const FullCharacter = () => {

	const { id } = useParams()
	const { data, isError, isLoading, isSuccess } = useGetFullCharacterQuery(id)

	return (
		<div>
			{isError && <p>Error</p>}
			{isLoading && <p>Загрузка...</p>}
			{isSuccess && <FullCharacterCard data={data} />}
		</div>
	)
}