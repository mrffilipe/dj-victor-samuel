import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.hero}>
					<div className={styles.container}>
						<div className={styles.content}>
							<h1 className={styles.title}>DJ Victor</h1>
							<p className={styles.subtitle}>
								Transformando Momentos em Memórias
							</p>
							<a href="#pacotes" className={styles.cta_btn}>
								Veja os Pacotes
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
