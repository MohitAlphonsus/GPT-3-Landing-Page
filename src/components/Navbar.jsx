import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';

const navMenu = [
	{ name: 'Home', id: 'home' },
	{ name: 'What is GPT3?', id: 'what' },
	{ name: 'Open AI', id: 'possibility' },
	{ name: 'Case Studies', id: 'features' },
	{ name: 'Library', id: 'blog' },
];

const navLinkClasses = `font-medium text-lg capitalize mx-4 text-white cursor-pointer list-none`;

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="flex justify-between items-center px-10 py-4 lg:py-8  lg:px-24">
			<div className="flex justify-start items-center flex-1 ">
				<div className="mr-8">
					<img src={logo} alt="logo" className="w-[62.56px]" />
				</div>
				<div className="lg:flex hidden">
					{navMenu.map(menu => (
						<li key={menu.id} className={navLinkClasses}>
							<a href={`#${menu.id}`}>{menu.name}</a>
						</li>
					))}
				</div>
			</div>
			<div className="hidden lg:block">
				<a className={navLinkClasses}>Sign in</a>
				<button
					type="button"
					className="bg-colorButton text-white py-4 px-8 font-medium text-lg rounded-lg"
				>
					Sign up
				</button>
			</div>
			<div className="lg:hidden relative ml-4">
				{toggleMenu ? (
					<RiCloseLine
						className="cursor-pointer"
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenuLine
						lassName="cursor-pointer"
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="flex flex-col items-end justify-end gap-8 text-end bg-colorFooter p-8 absolute right-0 top-10 min-w-[210px] rounded-lg shadow-md">
						<div className="flex flex-col gap-2">
							{navMenu.map(menu => (
								<li key={menu.id} className={navLinkClasses}>
									<a href={`#${menu.id}`}>{menu.name}</a>
								</li>
							))}
						</div>
						<div className="flex flex-col gap-3">
							<a className={navLinkClasses}>Sign in</a>
							<button
								type="button"
								className="bg-colorButton text-white py-2 px-4 font-medium rounded-lg"
							>
								Sign up
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
