import styles from "./styles.module.css";

import ProfilePicture from "@/assets/img/about-dj-section.jpg";

const AboutDJ = () => {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.imageWrapper}>
					<img
						className={styles.image}
						src={ProfilePicture.src}
						alt="DJ Victor em um evento"
					/>
				</div>
				<div className={styles.content}>
					<h2 className={styles.title}>Quem é DJ Victor?</h2>
					<p className={styles.description}>
						DJ Victor é especializado em criar trilhas sonoras inesquecíveis
						para casamentos, aniversários e eventos especiais. Com anos de
						experiência, ele adapta sua performance ao estilo do cliente,
						misturando músicas clássicas, hits modernos e muito mais para
						proporcionar momentos únicos.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutDJ;
