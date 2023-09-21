import ReactPaginate from "react-paginate"
import { Root } from "../../models/models"
import s from '../Pagination/Pagination.module.scss'

interface PaginationProps {
	data?: Root,
	handlePageChange: ({ selected }: { selected: number }) => void
}

export const Pagination: React.FC<PaginationProps> = ({ handlePageChange, data }) => {

	return (
		<div className={s.root}>
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				onPageChange={handlePageChange}
				pageRangeDisplayed={4}
				pageCount={data?.info.pages || 0}
				previousLabel="<"
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}