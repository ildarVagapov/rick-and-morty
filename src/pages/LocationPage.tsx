import { LocationCard } from "../components/LocationCard/LocationCard";
import { Pagination } from "../components/Pagination/Pagination"
import { useGetLocationQuery } from "../redux/api/api"
import { useState } from "react";


export const LocationPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data } = useGetLocationQuery(currentPage)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};


	return (
		<>
			<div >
				<LocationCard data={data} />
			</div>
			<Pagination handlePageChange={handlePageChange} data={data} />
		</>

	)
}