import { CharacterCard } from "../components/CharacterCard/CharacterCard"
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useGetCharactersFilterQuery, useGetCharactersPageQuery } from "../redux/api/api";
import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";


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

	const mergedData = isSuccess ? (filterValue ? filterData : pageData) : null;

	return (
		<>
			<main >
				<div className=" w-[500px]   flex items-center mb-[100px] mt-[70px] ">
					<input
						className="w-[100%] border-solid border-inherit border-[1px] focus:cursor-auto cursor-pointer rounded-lg h-[45px] p-[10px] "
						type="text"
						placeholder="search..."
						value={filterValue}
						onChange={e => setFilterValue(e.target.value)}
					/>
				</div>
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