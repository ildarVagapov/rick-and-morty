import { useEffect } from "react";
import { useGetRickAndMortyQuery } from "../redux/api/api"
import { CharacterCard } from "../components/CharacterCard/CharacterCard";


export const Home = () => {

	const { data, refetch } = useGetRickAndMortyQuery()

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			<main >
				<h1 className="text-left text-[65px] font-black home mb-[25px] ">The Rick and Morty</h1>
				<CharacterCard data={data} />
			</main>
		</>
	)
}