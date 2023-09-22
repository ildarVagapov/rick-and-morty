import { Link } from "react-router-dom";
import { Root } from "../../models/models"
import s from "./Character.module.scss";

interface CharacterCardProps {
	data?: Root | null
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {

	return (
		<>
			{
				data?.results.map(char => (
					<div className={s.card} key={char.id}>
						<div className={s.image_container}>
							<img src={char.image} alt={char.name} />
							{/* <img src='/Spinner.gif' alt='Loading' />} */}
						</div>
						<div className={s.info} >
							<div className={s.status}>
								{char.status === 'Dead' && < span style={{ backgroundColor: 'rgb(214, 61, 46)' }} className={s.status__icon}></span>}
								{char.status === 'Alive' && < span style={{ backgroundColor: '#a3e635' }} className={s.status__icon}></span>}
								{char.status === 'unknown' && < span style={{ backgroundColor: '#fffefe' }} className={s.status__icon}></span>}
								{char.status.toLowerCase()} - {char.gender.toLowerCase()}
							</div>
							<div className={s.name}>
								<Link to={`/fullcharacter/${char.id}`}>
									{char.name}
								</Link>
							</div>
							<div className={s.data}>
								Last known location:
								<a href='#'>{char.location.name}</a>
							</div>
						</div>
					</div >
				))}
		</>
	)
}