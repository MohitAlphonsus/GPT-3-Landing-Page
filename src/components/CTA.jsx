import React from 'react';
import Button from './Button';

const buttonClasses =
	'font-semibold text-colorSubtext border-b-2 border-transparent pb-2 transition-all  hover:border-currentColor';

const CTA = () => {
	return (
		<div className="px-12 lg:px-16 xl:px-24 py-20">
			<div className="gradient-bar text-[#000] flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:justify-between p-10 rounded-md">
				<div>
					<Button
						className={`${buttonClasses} text-[#000]`}
						name="Request Early Access to Get Started"
					/>
					<p className="text-2xl font-semibold">
						Register today & start exploring the endless possiblities.
					</p>
				</div>
				<Button
					className="bg-colorBg text-white py-4 px-10 rounded-full hover:bg-[#000]"
					name="Get Started"
				/>
			</div>
		</div>
	);
};

export default CTA;
