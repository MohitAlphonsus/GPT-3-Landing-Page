import { CTA, Navbar } from './components';
import {
	Blogs,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
} from './containers';

function App() {
	return (
		<div className="bg-gradient text-colorText">
			<div>
				<Navbar />
				<Header />
			</div>
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blogs />
			<Footer />
		</div>
	);
}

export default App;
