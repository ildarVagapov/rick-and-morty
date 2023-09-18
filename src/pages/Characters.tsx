import { CharacterCard } from "../components/CharacterCard/CharacterCard"
import { Skeleton } from "../components/Skeleton/Skeleton";
import { useGetCharactersPageQuery } from "../redux/api/api";
import { useEffect } from "react";


export const Characters = () => {
	const { isLoading, isSuccess, isError, data, refetch } = useGetCharactersPageQuery(5)

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			<main >
				<div>Filter</div>
				<div>Search</div>
				<br />
				<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
					{isLoading && Array.from({ length: 12 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={data} />}
					{isError && <div>Ошибка загрузки...</div>}
				</div>
			</main>
		</>
	)
}