import { Link } from "react-router-dom"
import { RootLocation } from "../../models/models"

interface LocationCardProps {
	data?: RootLocation | null
}


export const LocationCard: React.FC<LocationCardProps> = ({ data }) => {


	return (
		<div className="gap-5 mb-[90px] mt-11 w-[100%] grid-cols-3 grid ">
			{data?.results.map(item => (
				<div key={item.id} className=" rounded px-5 py-2 bg-zinc-700 grid gap-2 ">
					<Link to={`/fullLocation/${item.id}`}>
						<h3 className="location-font hover:text-lime-500 transition-colors font-black text-[19px]">
							{item.name}
						</h3>
					</Link>
					<p className="font-thin text-gray-300"> {item.type}</p>
					<p className="font-thin text-gray-300"> {item.dimension}</p>
				</div>))
			}
		</div >
	)
}