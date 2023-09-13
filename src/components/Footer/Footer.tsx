

export const Footer = () => {
	return (
		<footer className="w-[100%] text-center py-5 ">
			<nav>
				<ul className="text-gray-500  font-semibold text-[14px] cursor-pointer  flex justify-center  gap-3">
					<li className="hover:text-gray-400">
						<a target="_blank">
							GitHub
						</a>
					</li>
					<li className="hover:text-gray-400 transition-colors">
						<a target="_blank">
							Telegramm
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	)
}