import styles from "./styles.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>DJ Victor</h1>
					<p className={styles.subtitle}>Transformando Momentos em Memórias</p>
					<a href="#pacotes" className={styles.cta_btn}>
						Veja os Pacotes
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
