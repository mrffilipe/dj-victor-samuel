import styles from "./styles.module.css";

const Contact = () => {
	const contactLinks = [
		{
			icon: "📞",
			label: "WhatsApp",
			link: "https://wa.me/5511999999999", // Substitua pelo número real
		},
		{
			icon: "✉️",
			label: "E-mail",
			link: "mailto:contato@djvictor.com",
		},
		{
			icon: "📷",
			label: "Instagram",
			link: "https://instagram.com/djvictor", // Substitua pelo perfil real
		},
	];

	return (
		<section className={styles.contact}>
			<h2 className={styles.title}>Entre em Contato</h2>
			<div className={styles.buttons}>
				{contactLinks.map((contact, index) => (
					<a
						key={index}
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.button}
					>
						<span className={styles.icon}>{contact.icon}</span>
						{contact.label}
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
