import { CharacterCard } from "../components/CharacterCard/CharacterCard"
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useGetCharactersPageQuery } from "../redux/api/api";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";


export const Characters = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { isLoading, isSuccess, isError, data, refetch } = useGetCharactersPageQuery(currentPage)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			<main >
				<div>Filter</div>
				<div>Search</div>
				<br />
				<Pagination handlePageChange={handlePageChange} data={data} />
				<br />
				<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
					{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={data} />}
					{isError && <div>Ошибка загрузки...</div>}
				</div>
			</main>
			<Pagination handlePageChange={handlePageChange} data={data} />
		</>
	)
}