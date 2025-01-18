import AboutDJ from "@/components/AboutDJ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
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
			</main>
			<Footer />
		</>
	);
}
