import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const sections = ["home", "about", "services", "contact"];

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				}
			},
			{ threshold: 0.5 },
		);

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				observer.observe(element);
			}
		}

		return () => {
			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					observer.unobserve(element);
				}
			}
		};
	}, []);

	return (
		<div className="min-h-screen">
			<Header activeSection={activeSection} />
			<main>
				<Hero />
				<About />
				<Services />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
