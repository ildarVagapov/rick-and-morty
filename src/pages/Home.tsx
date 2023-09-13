import { useGetRickAndMortyQuery } from "../redux/api/api"


export const Home = () => {

	const { data } = useGetRickAndMortyQuery()

	console.log(data)
	return (
		<>
			<main className="">
				<h1 className="text-left text-[50px] font-black home mb-[20px] ">The Rick and Morty</h1>
				{/* <div className="flex flex-wrap gap-3 justify-between"> */}
				<div className="container">
					{data?.results.map(char => (
						<div className="flex rounded-[15px] bg-neutral-700 w-[50%] " key={char.id}>
							<img className="rounded-s-[15px]" src={char.image} />
							<div className="w-[100px]" >
								<h4>{char.name}</h4>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	)
}