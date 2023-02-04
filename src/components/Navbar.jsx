import React from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';

const navMenu = [
	{ name: 'Home', id: 'home' },
	{ name: 'What is GPT3?', id: 'what' },
	{ name: 'Open AI', id: 'possibility' },
	{ name: 'Case Studies', id: 'features' },
	{ name: 'Library', id: 'blog' },
];

const navLinkClasses = `font-medium text-lg capitalize mx-4 text-white cursor-pointer`;

const Navbar = () => {
	return (
		<div className="flex justify-between items-center py-8 px-24">
			<div className="flex justify-start items-center flex-1 ">
				<div className="mr-8">
					<img src={logo} alt="logo" className="w-[62.56px]" />
				</div>
				<div className="list-none flex">
					{navMenu.map(menu => (
						<li key={menu.id} className={navLinkClasses}>
							<a href={`#${menu.id}`}>{menu.name}</a>
						</li>
					))}
				</div>
			</div>
			<div>
				<a className={navLinkClasses}>Sign in</a>
				<button
					type="button"
					className="bg-colorButton text-white py-4 px-8 font-medium text-lg rounded-lg"
				>
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Navbar;
