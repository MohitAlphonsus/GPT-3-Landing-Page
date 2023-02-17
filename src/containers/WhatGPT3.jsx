import React from 'react';
import { Button } from '../components';

const headingQuatClasses =
	'text-2xl text-white font-semibold relative before:absolute before:top-[-.5rem] before:left-0 before:w-12 before:h-1 before:bg-gradient-to-tr before:from-colorText before:to-colorSubtext';

const boxClasses = 'flex flex-col gap-4 lg:gap-6 w-full';

const WhatGPT3 = () => {
	return (
		<div className="px-24">
			<div className="bg-gradient-box px-12 py-12 lg:px-16 lg:py-16">
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-0 mb-12">
					<h4 className={`${headingQuatClasses} w-1/2 `}>What is GPT-3</h4>
					<p className="w-full">
						We so opinion friends me message as delight. Whole front do of plate
						heard oh ought. His defective nor convinced residence own.
						Connection has put impossible own apartments boisterous. At jointure
						ladyship an insisted so humanity he. Friendly bachelor entrance to
						on by.
					</p>
				</div>

				<div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-0 lg:items-center lg:justify-between mb-16">
					<h3 className="text-gradient text-4xl font-semibold lg:w-1/2">
						The possibilities are beyond your imagination
					</h3>
					<Button
						className="font-semibold text-colorSubtext border-b-2 border-transparent pb-2 transition-all  hover:border-currentColor"
						name="Explore The Library"
					/>
				</div>

				<div className="flex flex-col gap-10 lg:flex-row lg:gap-6 xl:gap-10">
					<div className={boxClasses}>
						<h4 className={headingQuatClasses}>Chatbots</h4>
						<p>
							We so opinion friends me message as delight. Whole front do of
							plate heard oh ought.
						</p>
					</div>

					<div className={boxClasses}>
						<h4 className={headingQuatClasses}>Knowledgebase</h4>
						<p>
							At jointure ladyship an insisted so humanity he. Friendly bachelor
							entrance to on by. As put impossible own apartments b
						</p>
					</div>

					<div className={boxClasses}>
						<h4 className={headingQuatClasses}>Education</h4>
						<p>
							At jointure ladyship an insisted so humanity he. Friendly bachelor
							entrance to on by. As put impossible own apartments b
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatGPT3;
