import React from 'react';
import { Blog } from '../components';
import blogImg1 from '../assets/blog01.png';
import blogImg2 from '../assets/blog02.png';
import blogImg3 from '../assets/blog03.png';
import blogImg4 from '../assets/blog04.png';
import blogImg5 from '../assets/blog05.png';

const Blogs = () => {
	return (
		<div className="px-12 lg:px-16 xl:px-24">
			<h1 className="text-gradient text-5xl xl:text-6xl font-semibold mb-10">
				A lot is happening, We are blogging about it.
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6 lg:h-[80vh] xl:h-[100vh]">
				<Blog
					img={blogImg1}
					className="row-span-2 col-span-2 lg:col-auto lg:row-span-full"
					textBig={true}
				/>
				<Blog img={blogImg2} />
				<Blog img={blogImg3} />
				<Blog img={blogImg4} className="col-span-2 lg:col-auto" />
				<Blog img={blogImg5} className="col-span-2 lg:col-auto" />
			</div>
		</div>
	);
};

export default Blogs;
