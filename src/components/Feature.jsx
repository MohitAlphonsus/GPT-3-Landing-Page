import React from 'react';

const headingSmallClasses =
	'text-xl text-white font-semibold relative before:absolute before:top-[-.5rem] before:left-0 before:w-12 before:h-1 before:bg-gradient-to-tr before:from-colorText before:to-colorSubtext';

const Feature = ({ title, text }) => {
	return (
		<div className="flex flex-col gap-4 xl:flex-row xl:gap-8">
			<h4 className={`${headingSmallClasses} xl:w-1/4`}>{title}</h4>
			<p className="xl:w-3/4">{text}</p>
		</div>
	);
};

export default Feature;
