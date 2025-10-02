import type React from "react";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<div className="text-2xl font-bold mb-2">
							LawFirm<span className="text-blue-600">.</span>
						</div>
						<p className="text-gray-400">
							Professional Legal Services You Can Trust
						</p>
					</div>

					<div className="text-center md:text-right">
						<p className="text-gray-400 mb-2">
							&copy; {currentYear} LawFirm. All rights reserved.
						</p>
						<p className="text-gray-500 text-sm">
							Disclaimer: This website is for demonstration purposes only.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
