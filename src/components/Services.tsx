import type React from "react";
import type { Service } from "../types";

const Services: React.FC = () => {
	const services: Service[] = [
		{
			id: 1,
			title: "Corporate Law",
			description:
				"Legal guidance for businesses including formation, contracts, compliance, and corporate governance.",
			icon: "🏢",
		},
		{
			id: 2,
			title: "Family Law",
			description:
				"Compassionate representation in divorce, child custody, adoption, and domestic matters.",
			icon: "👨‍👩‍👧‍👦",
		},
		{
			id: 3,
			title: "Real Estate Law",
			description:
				"Expert assistance with property transactions, disputes, zoning, and landlord-tenant issues.",
			icon: "🏠",
		},
		{
			id: 4,
			title: "Criminal Defense",
			description:
				"Aggressive defense representation for criminal charges at both state and federal levels.",
			icon: "⚖️",
		},
		{
			id: 5,
			title: "Estate Planning",
			description:
				"Comprehensive planning including wills, trusts, probate, and asset protection strategies.",
			icon: "📝",
		},
		{
			id: 6,
			title: "Personal Injury",
			description:
				"Dedicated advocacy for victims of accidents, medical malpractice, and workplace injuries.",
			icon: "🚗",
		},
	];

	return (
		<section id="services" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Legal Services
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive legal solutions tailored to meet your specific needs
						and objectives.
					</p>
					<div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
						>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-4">
								{service.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
