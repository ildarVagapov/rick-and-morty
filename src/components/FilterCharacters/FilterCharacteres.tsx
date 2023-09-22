
interface FilterCharactersProps {
	filterValue: string,
	setFilterValue: (value: string) => void
}

export const FilterCharacters: React.FC<FilterCharactersProps> = ({ filterValue, setFilterValue }) => {
	return (
		<form className=" w-[500px]   flex items-center mb-[100px] mt-[70px] ">
			<input
				className="w-[100%] focus:placeholder placeholder:opacity-50 focus:placeholder:opacity-0 border-solid border-inherit border-[1px] focus:cursor-auto cursor-pointer rounded-lg h-[45px] p-[10px] "
				type="text"
				placeholder="Filter by name"
				value={filterValue}
				onChange={e => setFilterValue(e.target.value)}
			/>
		</form>
	)
}