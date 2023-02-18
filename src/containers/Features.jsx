import React from 'react';
import { Button, Feature } from '../components';

const content = [
	{
		id: 1,
		title: 'Improving end distrusts instantly',
		text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
	},
	{
		id: 2,
		title: 'Become the tended active',
		text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
	},
	{
		id: 3,
		title: 'Message or am nothing',
		text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
	},
	{
		id: 4,
		title: 'Really boy law county',
		text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
	},
];

const headingTertiaryClasses = 'text-gradient text-4xl font-semibold ';
const buttonClasses =
	'font-semibold text-colorSubtext border-b-2 border-transparent pb-2 transition-all  hover:border-currentColor';

const Features = () => {
	return (
		<div className="px-12 lg:px-16 xl:px-24 py-20 flex gap-10">
			<div className="w-1/2 xl:w-2/5">
				<h3 className={`${headingTertiaryClasses} mb-8`}>
					The Future is Now and You Just Need To Realize It. Step into Future
					Today & Make it Happen.
				</h3>
				<Button
					className={buttonClasses}
					name="Request Early Access to Get Started"
				/>
			</div>
			<div className="flex flex-col gap-10 w-1/2 xl:w-3/5">
				{content.map(cont => (
					<Feature key={cont.id} title={cont.title} text={cont.text} />
				))}
			</div>
		</div>
	);
};

export default Features;
