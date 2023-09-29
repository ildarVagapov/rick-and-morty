import { Location } from "../../models/models"
import { useGetRickAndMortyQuery } from "../../redux/api/api"
import { CharacterLocationCard } from "../CharacterLocationCard/CharacterLocationCard"
import { Skeleton } from "../Skeleton/Skeleton"


interface FullLocationCardProps {
	data?: Location | null
}

export const FullLocationCard: React.FC<FullLocationCardProps> = ({ data }) => {

	const { data: Characters, isError, isSuccess, isLoading } = useGetRickAndMortyQuery()
	const dataCharLoc = Characters?.results.filter(char => char.location.url === data?.url || char.origin.url === data?.url)
	return (
		<div className="mt-20 mb-20">
			<h3 className="mb-10 text-3xl">{data?.name}</h3>

			<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
				{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
				{isSuccess && <CharacterLocationCard data={dataCharLoc} />}
				{isError && <div>Ошибка загрузки</div>}
			</div>

		</div >
	)
}