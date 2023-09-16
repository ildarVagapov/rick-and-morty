import { Characters } from "../../models/models";


interface FullCharacterCardProps {
	data: Characters;
}

export const FullCharacterCard: React.FC<FullCharacterCardProps> = ({ data }) => {


	return (
		<div>
			<div>{data.name}</div>
			<img src={data.image} />
			<div>{data.gender}</div>
			<div>{data.status}</div>
			<div>{data.url}</div>
			<div>{data.episode}</div>
			<div>{data.created}</div>
			<div>{data.species}</div>
			<div>
				origin
				<div>{data.origin.name}</div>
				<div>{data.origin.url}</div>
			</div>
			<div>
				location
				<div> {data.location.name}</div>
				<div> {data.location.url}</div>
			</div>
		</div>
	)
}