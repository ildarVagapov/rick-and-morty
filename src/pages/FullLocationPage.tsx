import { useParams } from "react-router-dom"
import { useGetFullLocationQuery } from "../redux/api/api"
import { FullLocationCard } from "../components/FullLocationCard/FullLocationCard"


export const FullLocationPage = () => {

	const { id } = useParams()
	const { data, isError, isSuccess, isLoading } = useGetFullLocationQuery(id ? id : '')

	return (
		<>
			{isLoading && <p>Загрузка...</p>}
			{isSuccess && <FullLocationCard data={data} />}
			{isError && <p>Ошибка Загрузки</p>}
		</>
	)
}