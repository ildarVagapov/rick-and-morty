import { Location } from "../../models/models"


interface FullLocationCardProps {
	data?: Location | null
}

export const FullLocationCard: React.FC<FullLocationCardProps> = ({ data }) => {
	return (
		<div>
			<h3>{data?.name}</h3>
			{data?.residents.map(res => (
				<p>{res}</p>
			))}
		</div>
	)
}