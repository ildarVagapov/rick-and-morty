import { Location } from "../../models/models"
import { useGetLocationCharacterQuery } from "../../redux/api/api"
import { CharacterLocationCard } from "../CharacterLocationCard/CharacterLocationCard"
import { Pagination } from "../Pagination/Pagination"
import { Skeleton } from "../Skeleton/Skeleton"
import { useState } from "react";

interface FullLocationCardProps {
	data?: Location | null
}

export const FullLocationCard: React.FC<FullLocationCardProps> = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const { data: Characters, isError, isSuccess, isLoading } = useGetLocationCharacterQuery(currentPage)

	const dataCharacterLocation = Characters?.results.filter(char => char.location.url === data?.url || char.origin.url === data?.url)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<div className="mt-20 mb-20">
			<h2 className="mb-10 text-[50px]">Location - {data?.name}</h2>
			<h3 className="mb-5 text-[25px]">Residents</h3>

			<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
				{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
				{isSuccess && <CharacterLocationCard data={dataCharacterLocation} />}
				{isError && <div>Ошибка загрузки</div>}
			</div>
			<Pagination data={Characters} handlePageChange={handlePageChange} />
		</div >
	)
}