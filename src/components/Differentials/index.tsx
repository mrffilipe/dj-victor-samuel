import styles from "./styles.module.css";

const Differentials = () => {
	const items = [
		{
			icon: "🎵",
			title: "Consultoria Musical Personalizada",
			description:
				"Trilhas sonoras exclusivas, criadas para atender ao perfil único do seu evento.",
		},
		{
			icon: "💡",
			title: "Equipamentos de Última Geração",
			description:
				"Tecnologia de ponta para som e iluminação que garante uma experiência impecável.",
		},
		{
			icon: "🤝",
			title: "Atendimento Profissional",
			description:
				"Compromisso com qualidade e pontualidade, desde o primeiro contato até o final do evento.",
		},
		{
			icon: "🔥",
			title: "Animação Garantida",
			description:
				"Performance enérgica que mantém seus convidados animados do início ao fim.",
		},
	];

	return (
		<section className={styles.differentials}>
			<h2 className={styles.title}>Diferenciais</h2>
			<div className={styles.grid}>
				{items.map((item, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.iconWrapper}>
							<span className={styles.icon}>{item.icon}</span>
						</div>
						<h3 className={styles.cardTitle}>{item.title}</h3>
						<p className={styles.cardDescription}>{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Differentials;
