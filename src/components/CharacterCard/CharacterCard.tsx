import { Link } from "react-router-dom";
import { Characters } from "../../models/models"
import s from "./Character.module.scss";

interface CharacterCardProps {
	data?: {
		results: Characters[];
	}
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {

	return (
		<div className={s.container} >
			{data?.results.map(char => (
				<div className={s.card} key={char.id}>
					<div className={s.image_container}>
						<img className="" src={char.image} />
					</div>
					<div className={s.info} >
						<div className={s.status}>
							{char.status} - {char.gender}
						</div>
						<div className={s.name}>
							<Link to='/'>
								{char.name}
							</Link>
						</div>
						<div className={s.data}>
							Last known location:
							<a href='#'>{char.location.name}</a>
						</div>
					</div>
				</div>
			))
			}
		</div >
	)
}