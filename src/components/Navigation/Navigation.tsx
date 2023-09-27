import { useNavigate } from "react-router-dom";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'

export const Navigation = () => {

	const navigate = useNavigate();
	return (
		<div className="flex text-[18px] gap-5 mb-[20px]  ">
			<button className="bg-zinc-700 py-[5px] px-[10px] rounded flex items-center gap-2 hover:text-lime-400 transition-colors" onClick={() => navigate(-1)}><CgArrowLongLeft /> Назад</button>
			<button className="bg-zinc-700 py-[5px] px-[10px] rounded flex items-center gap-2 hover:text-lime-400 transition-colors" onClick={() => navigate(-1)}>Вперед <CgArrowLongRight /></button>
		</div>
	)
}