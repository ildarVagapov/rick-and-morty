import { Link, NavLink } from "react-router-dom"
import { Logo } from "../Icons/Logo"


export const Header = () => {
	return (
		<div>
			<header className="flex justify-between py-[20px] items-center mb-[30px]">
				<Link to='/'>
					<Logo />
				</Link >
				<nav >
					<ul className='text-gray-400  font-semibold text-sm[15px] flex justify-center  gap-3' >
						<li className='hover:text-lime-500  transition-colors'>
							<NavLink to='/characters'>
								Characters
							</NavLink>
						</li>
						<li className='hover:text-lime-500  transition-colors'>
							<NavLink to='/'>
								New Page
							</NavLink>
						</li>
					</ul>
				</nav>
			</header >
		</div >
	)
}