import { Pagination } from "../components/Pagination/Pagination"
import { useGetLocationQuery } from "../redux/api/api"
import { useState } from "react";


export const LocationPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data } = useGetLocationQuery(currentPage)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};


	return (
		<>
			<main >
				{/* <FilterCharacters
					filterByName={filterByName}
					filterByGender={filterByGender}
					filterByStatus={filterByStatus}
					setFilterByName={setFilterByName}
					setFilterByGender={setFilterByGender}
					setFilterByStatus={setFilterByStatus}
				/> */}
				{/* <div className=' ' > */}
				{/* {isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={data} />}
					{isError && <div>Ошибка загрузки</div>} */}
				<div className="gap-[23px] mb-[90px] mt-11 w-[100%] grid-cols-3 grid">{data?.results.map(item => (
					<div className=" rounded px-5 py-2 bg-zinc-700 mb-5">
						<h3>{item.name}</h3>
					</div>
				))}</div>
				{/* </div> */}
			</main>
			<Pagination handlePageChange={handlePageChange} data={data} />

		</>

	)
}