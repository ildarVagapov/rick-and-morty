import { useEffect } from "react";
import { useGetRickAndMortyQuery } from "../redux/api/api"
import { CharacterCard } from "../components/CharacterCard/CharacterCard";
import { Skeleton } from "../components/Sceleton/Sceleton";


export const Home = () => {

	const { isLoading, isSuccess, isError, data, refetch } = useGetRickAndMortyQuery()

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			<main >
				<h1 className="text-left text-[65px] font-black home mb-[25px] ">The Rick and Morty</h1>
				<div className=' gap-[23px] mb-[90px] w-[100%] grid-cols-2 grid' >
					{isLoading && Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)}
					{isSuccess && <CharacterCard data={data} />}
					{isError && <div>Ошибка загрузки...</div>}
				</div>
			</main>
		</>
	)
}