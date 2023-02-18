import React from 'react';
import { Button } from '../components';
import possibilityImg from '../assets/possibility.png';

const headingTertiaryClasses = 'text-gradient text-4xl font-semibold ';
const buttonClasses =
	'font-semibold text-colorSubtext border-b-2 border-transparent pb-2 transition-all  hover:border-currentColor';

const Possibility = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center gap-10 px-12 lg:px-16 xl:px-24">
			<figure className="lg:w-1/2">
				<img src={possibilityImg} alt="possibility image" />
			</figure>
			<div className="lg:w-1/2 flex flex-col gap-4 items-start">
				<Button
					className={`${buttonClasses} text-[#71E5FF]`}
					name="Request Early Access to Get Started"
				/>
				<h3 className={headingTertiaryClasses}>
					The possibilities are beyond your imagination
				</h3>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<Button
					className={buttonClasses}
					name="Request Early Access to Get Started"
				/>
			</div>
		</div>
	);
};

export default Possibility;
