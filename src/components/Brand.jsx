import React from 'react';
import googleBrandImg from '../assets/google.png';
import slackBrandImg from '../assets/slack.png';
import altassianBrandImg from '../assets/atlassian.png';
import dropboxBrandImg from '../assets/dropbox.png';
import shopifyBrandImg from '../assets/shopify.png';

const Brand = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-10 py-16 xl:px-24 ">
			<img src={googleBrandImg} alt="googleBrandImg" />
			<img src={slackBrandImg} alt="slackBrandImg" />
			<img src={altassianBrandImg} alt="altassianBrandImg" />
			<img src={dropboxBrandImg} alt="dropboxBrandImg" />
			<img src={shopifyBrandImg} alt="shopifyBrandImg" />
		</div>
	);
};

export default Brand;
