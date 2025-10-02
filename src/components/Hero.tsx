import type React from "react";

const Hero: React.FC = () => {
	const scrollToContact = () => {
		const element = document.querySelector("#contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center"
		>
			<div className="container mx-auto px-6 pt-20">
				<div className="max-w-4xl mx-auto text-center text-white">
					<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
						Expert Legal Representation You Can Trust
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-blue-100">
						With over 20 years of experience, we provide comprehensive legal
						services tailored to your unique needs.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							type="button"
							onClick={scrollToContact}
							className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
						>
							Free Consultation
						</button>
						<button
							type="button"
							onClick={() =>
								document
									.querySelector("#services")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
						>
							Our Services
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
