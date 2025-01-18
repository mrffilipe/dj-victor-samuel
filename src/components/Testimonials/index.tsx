import styles from "./styles.module.css";

const Testimonials = () => {
	const testimonials = [
		{
			name: "Ana Souza",
			event: "Casamento",
			message:
				"O DJ Victor foi incrível! Nossos convidados não pararam de dançar.",
			photo: "/assets/img/ana-souza.jpg",
		},
		{
			name: "Carlos Lima",
			event: "Aniversário",
			message: "Excelente trabalho! Música de qualidade e muita animação.",
			photo: "/assets/img/carlos-lima.jpg",
		},
		{
			name: "Mariana Torres",
			event: "Festa Corporativa",
			message: "DJ Victor elevou nossa festa a outro nível! Super recomendo!",
			photo: "/assets/img/mariana-torres.jpg",
		},
	];

	return (
		<section className={styles.testimonials}>
			<h2 className={styles.title}>Depoimentos de Clientes</h2>
			<div className={styles.grid}>
				{testimonials.map((testimonial, index) => (
					<div key={index} className={styles.card}>
						<img
							src={testimonial.photo}
							alt={`Foto de ${testimonial.name}`}
							className={styles.photo}
						/>
						<h3 className={styles.name}>{testimonial.name}</h3>
						<p className={styles.event}>{testimonial.event}</p>
						<p className={styles.message}>{testimonial.message}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
