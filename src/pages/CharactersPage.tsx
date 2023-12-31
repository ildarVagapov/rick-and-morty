import { CharacterCard } from "../components/CharacterCard/CharacterCard"
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useGetCharactersFilterQuery } from "../redux/api/api";
import { useState } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { FilterCharacters } from "../components/FilterCharacters/FilterCharacteres";


export const CharactersPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filterByName, setFilterByName] = useState('');
	const [filterByGender, setFilterByGender] = useState('');
	const [filterByStatus, setFilterByStatus] = useState('');

	const params = {
		filter: `name=${filterByName}&gender=${filterByGender}&status=${filterByStatus}`,
		page: currentPage
	}
	const { data, isLoading, isSuccess, isError } = useGetCharactersFilterQuery(params)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};


	return (
		<>
			<div >
				<FilterCharacters
					filterByName={filterByName}
					filterByGender={filterByGender}
					filterByStatus={filterByStatus}
					setFilterByName={setFilterByName}
					setFilterByGender={setFilterByGender}
					setFilterByStatus={setFilterByStatus}
				/>
				<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
					{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={data} />}
					{isError && <div>Ошибка загрузки</div>}
				</div>
			</div>
			<Pagination handlePageChange={handlePageChange} data={data} />
		</>
	)
}