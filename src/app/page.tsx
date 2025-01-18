import AboutDJ from "@/components/AboutDJ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Contact from "@/components/Contact";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Hero />
				<AboutDJ />
				<Gallery />
				<Packages />
				<Differentials />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
