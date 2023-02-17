import people from '../assets/people.png';
import ai from '../assets/ai.png';
import { Brand, Button } from '../components';

const Header = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-10 lg:gap-0 px-10 py-16 lg:py-0 lg:flex-row lg:pl-16 xl:pl-24">
				<div className="flex flex-col gap-8 align-start md:w-9/12 lg:w-full basis-1/2">
					<h1 className="text-gradient text-5xl xl:text-6xl font-semibold">
						Let’s Build Something amazing with GPT-3 OpenAI
					</h1>
					<p className=" md:w-9/12">
						Yet bed any for travelling assistance indulgence unpleasing. Not
						thoughts all exercise blessing. Indulgence way everything joy
						alteration boisterous the attachment. Party we years to order allow
						asked of.
					</p>

					<div className="bg-colorInput md:w-9/12 flex rounded-md">
						<input
							type="email"
							placeholder="Your Email Address"
							className="w-3/5 p-4 bg-colorInput rounded-md"
						/>
						<Button
							className="w-2/5 bg-colorButton text-white font-medium text-lg rounded-r-lg"
							name="Get Started"
						/>
					</div>

					<div className="flex flex-col items-start md:flex-row md:items-center gap-4 font-medium text-white">
						<img src={people} alt="people" />
						<p>1,600 people requested access a visit in last 24 hours</p>
					</div>
				</div>
				<div className="lg:basis-1/2">
					<img src={ai} alt="ai" />
				</div>
			</div>
			<Brand />
		</>
	);
};

export default Header;
