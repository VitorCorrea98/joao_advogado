import type React from "react";

const About: React.FC = () => {
	return (
		<section id="about" className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							About Our Firm
						</h2>
						<div className="w-24 h-1 bg-blue-600 mx-auto" />
					</div>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-2xl font-semibold text-gray-800 mb-6">
								Dedicated to Protecting Your Rights
							</h3>
							<p className="text-gray-600 mb-6 leading-relaxed">
								For over two decades, our law firm has been committed to
								providing exceptional legal representation to individuals and
								businesses alike. Our team of experienced attorneys brings a
								wealth of knowledge and dedication to every case.
							</p>
							<p className="text-gray-600 mb-6 leading-relaxed">
								We believe in building strong relationships with our clients,
								understanding their unique situations, and developing strategic
								solutions that achieve the best possible outcomes.
							</p>
							<div className="grid grid-cols-2 gap-6 mt-8">
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										20+
									</div>
									<div className="text-gray-600">Years Experience</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										1000+
									</div>
									<div className="text-gray-600">Cases Handled</div>
								</div>
							</div>
						</div>

						<div className="bg-white p-8 rounded-lg shadow-lg">
							<h4 className="text-xl font-semibold text-gray-800 mb-4">
								Our Values
							</h4>
							<ul className="space-y-4">
								{[
									"Integrity and honesty in all our dealings",
									"Client-focused approach",
									"Excellence in legal representation",
									"Clear and transparent communication",
									"Commitment to justice",
								].map((value) => (
									<li key={value} className="flex items-start">
										<svg
											className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<title>Finding what this is about</title>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-gray-600">{value}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
