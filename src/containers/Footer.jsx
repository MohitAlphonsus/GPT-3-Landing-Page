import React from 'react';
import { Button } from '../components';
import logo from '../assets/logo.svg';

const FooterLinksColumn = ({ title, links }) => {
	return (
		<div>
			<p className="font-medium mb-6">{title}</p>
			<ul className="flex flex-col gap-4">
				{links.map(link => (
					<li key={Math.random().toString()}>
						<a href="#">{link}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

const Footer = () => {
	return (
		<div className="bg-colorFooter text-white px-12 py-12 lg:px-16 xl:px-24">
			<div className="mb-12">
				<h1 className="text-gradient text-5xl xl:text-6xl font-semibold mb-8">
					Do you want to step in to the future before others
				</h1>
				<Button
					className="py-2 px-4 border border-1 border-white"
					name="Request Early Access"
				/>
			</div>

			<div className="py-12 flex flex-col lg:flex-row gap-10">
				<div className=" xl:w-2/5">
					<img src={logo} alt="logo" className="mb-4" />
					<p className="text-xs">GPT-3 Landing Page, All Rights Reserved</p>
				</div>

				<div className="w-full xl:w-3/5 flex flex-wrap gap-10 justify-between">
					<FooterLinksColumn
						title="Links"
						links={['Overons', 'Social Media', 'Counters', 'Contact']}
					/>
					<FooterLinksColumn
						title="Company"
						links={['Terms & Conditions', 'Privacy Policy', 'Contact']}
					/>
					<FooterLinksColumn
						title="Get in touch"
						links={[
							'4807 3rd Ave, 	New Hampshire',
							'(308) 234-9586',
							'info@gpt-ai.com',
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
