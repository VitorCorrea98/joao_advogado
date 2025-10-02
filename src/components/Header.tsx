import type React from "react";
import { useEffect, useState } from "react";

interface HeaderProps {
	activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "#home" },
		{ label: "About", href: "#about" },
		{ label: "Services", href: "#services" },
		{ label: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-6">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<div className="flex items-center">
						<div
							className={`text-2xl font-bold ${
								isScrolled ? "text-blue-900" : "text-white"
							}`}
						>
							LawFirm<span className="text-blue-600">.</span>
						</div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<button
								type="button"
								key={item.label}
								onClick={() => scrollToSection(item.href)}
								className={`font-medium transition-colors duration-200 ${
									activeSection === item.href.slice(1)
										? "text-blue-600"
										: isScrolled
											? "text-gray-700 hover:text-blue-600"
											: "text-white hover:text-blue-300"
								}`}
							>
								{item.label}
							</button>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className={`md:hidden p-2 ${
							isScrolled ? "text-gray-700" : "text-white"
						}`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>This is a mobile menu for the header</title>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden mt-4 pb-4">
						<div className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<button
									key={item.label}
									type="button"
									onClick={() => scrollToSection(item.href)}
									className={`text-left font-medium transition-colors duration-200 ${
										activeSection === item.href.slice(1)
											? "text-blue-600"
											: isScrolled
												? "text-gray-700 hover:text-blue-600"
												: "text-white hover:text-blue-300"
									}`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
