import React from 'react';
import { Button } from '../components';

const buttonClasses =
	'font-semibold text-colorSubtext border-b-2 border-transparent pb-2 transition-all  hover:border-currentColor';

const Blog = ({ img, className, textBig }) => {
	return (
		<div className={`${className} h-full flex flex-col bg-colorBlog`}>
			<figure>
				<img src={img} />
			</figure>

			<div className="text-white flex flex-col items-start gap-2 p-4 basis-full">
				<p className="text-xs">Sep 26, 2022</p>
				<h4 className={`${textBig ? 'text-2xl' : 'text-xl'}`}>
					GPT-3 and Open AI is the future. Let us exlore how it is?
				</h4>
				<Button
					className={`${buttonClasses} text-xs text-[#fff] mt-auto`}
					name="Read Full Article"
				/>
			</div>
		</div>
	);
};

export default Blog;
