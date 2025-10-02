import type React from "react";
import { useState } from "react";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message. We will get back to you soon!");
		setFormData({ name: "", email: "", phone: "", message: "" });
	};

	return (
		<section id="contact" className="py-20 bg-gray-900 text-white">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">Contact Us</h2>
						<p className="text-xl text-gray-300">
							Ready to discuss your legal needs? Get in touch with us today.
						</p>
						<div className="w-24 h-1 bg-blue-600 mx-auto mt-4" />
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Information */}
						<div>
							<h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

							<div className="space-y-6 mb-8">
								<div className="flex items-start">
									<div className="bg-blue-600 p-3 rounded-lg mr-4">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Fef</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-semibold mb-1">Office Address</h4>
										<p className="text-gray-300">
											123 Legal Avenue
											<br />
											Suite 500
											<br />
											New York, NY 10001
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-blue-600 p-3 rounded-lg mr-4">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Fef</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-semibold mb-1">Phone Number</h4>
										<p className="text-gray-300">(555) 123-4567</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="bg-blue-600 p-3 rounded-lg mr-4">
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<title>Fef</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<h4 className="font-semibold mb-1">Email Address</h4>
										<p className="text-gray-300">info@lawfirm.com</p>
									</div>
								</div>
							</div>

							<div className="bg-blue-800 p-6 rounded-lg">
								<h4 className="font-semibold mb-2">Office Hours</h4>
								<p className="text-gray-300">
									Monday - Friday: 9:00 AM - 6:00 PM
									<br />
									Saturday: 10:00 AM - 2:00 PM
									<br />
									Sunday: Closed
								</p>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-gray-800 p-8 rounded-lg">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
										placeholder="Your full name"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
										placeholder="your.email@example.com"
									/>
								</div>

								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium mb-2"
									>
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
										placeholder="(555) 123-4567"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
										placeholder="Tell us about your legal needs..."
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
