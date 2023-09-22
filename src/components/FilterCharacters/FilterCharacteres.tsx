
interface FilterCharactersProps {
	filterByName: string
	filterByGender: string
	filterByStatus: string
	setFilterByName: (value: string) => void
	setFilterByGender: (value: string) => void
	setFilterByStatus: (value: string) => void
}

export const FilterCharacters: React.FC<FilterCharactersProps> = ({ setFilterByStatus, filterByStatus, filterByName, setFilterByName, filterByGender, setFilterByGender }) => {
	return (
		<form className=" w-[500px]  flex items-center mb-[100px] mt-[70px] gap-5  ">
			<input
				className="mb-[-20px] w-[100%] focus:placeholder placeholder:opacity-50 focus:placeholder:opacity-0 border-solid border-inherit border-[1px] focus:cursor-auto cursor-pointer rounded-lg h-[45px] p-[10px] "
				type="text"
				placeholder="Filter by name"
				value={filterByName}
				onChange={e => setFilterByName(e.target.value)}
			/>
			<div>
				status
				<select
					value={filterByStatus}
					onChange={(e) => setFilterByStatus(e.target.value)}
					className="cursor-pointer focus:bg-slate-800 border-solid border-inherit border-[1px] h-[42px] rounded-lg px-1"
					name="status"
				>
					<option value="">all</option>
					<option value="alive">aliev</option>
					<option value="dead">dead</option>
					<option value="unknown">unknown</option>
				</select>
			</div>
			<div>
				gender
				<select
					value={filterByGender}
					onChange={(e) => setFilterByGender(e.target.value)}
					className=" cursor-pointer focus:bg-slate-800 border-solid border-inherit border-[1px] h-[42px] rounded-lg px-1" name="gender">
					<option value="">all</option>
					<option value="unknown">unknown</option>
					<option value="genderless">genderless</option>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>
			</div>
		</form >
	)
}