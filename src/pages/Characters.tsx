import { CharacterCard } from "../components/CharacterCard/CharacterCard"
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useGetCharactersFilterQuery, useGetCharactersPageQuery } from "../redux/api/api";
import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { FilterCharacters } from "../components/FilterCharacters/FilterCharacteres";


export const Characters = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filterValue, setFilterValue] = useState('');
	const { isLoading: isLoadingPage, isSuccess: isSuccessPage, isError: isErrorPage, data: pageData } = useGetCharactersPageQuery(currentPage)
	const { isLoading: isLoadingFilter, isSuccess: isSuccessFilter, isError: isErrorFilter, data: filterData } = useGetCharactersFilterQuery(filterValue)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};


	const isLoading = isLoadingPage || isLoadingFilter;
	const isSuccess = isSuccessPage && isSuccessFilter;
	const isError = isErrorPage || isErrorFilter;

	const filterAndPaginationData = filterValue ? filterData : pageData
	const mergedData = isSuccess ? filterAndPaginationData : null;


	return (
		<>
			<main >
				<FilterCharacters filterValue={filterValue} setFilterValue={setFilterValue} />
				<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
					{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={mergedData} />}
					{isError && <div>Ошибка загрузки</div>}
				</div>
			</main>
			<Pagination handlePageChange={handlePageChange} data={pageData} />
		</>
	)
}