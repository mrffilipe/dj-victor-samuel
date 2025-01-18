import styles from "./styles.module.css";

import PackageImage1 from "@/assets/img/package-1.png";
import PackageImage2 from "@/assets/img/package-2.png";
import PackageImage3 from "@/assets/img/package-3.png";

const Packages = () => {
	const packages = [
		{
			title: "Pacote Básico",
			description: "Som, luzes básicas, 4 horas de evento.",
			price: "R$ 1.000,00",
			detailsLink: "/pacotes/basico",
			image: PackageImage1.src,
		},
		{
			title: "Pacote Intermediário",
			description: "Tudo do básico + show de luzes, 6 horas de evento.",
			price: "R$ 1.800,00",
			detailsLink: "/pacotes/intermediario",
			image: PackageImage2.src,
		},
		{
			title: "Pacote Premium",
			description:
				"Tudo do intermediário + luzes personalizadas, até 8 horas de evento.",
			price: "R$ 2.500,00",
			detailsLink: "/pacotes/premium",
			image: PackageImage3.src,
		},
	];

	return (
		<section className={styles.packages}>
			<h2 className={styles.title}>Pacotes e Valores</h2>
			<div className={styles.grid}>
				{packages.map((pkg, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.imageWrapper}>
							<img
								src={pkg.image}
								alt={`Imagem do ${pkg.title}`}
								className={styles.image}
							/>
						</div>
						<h3 className={styles.cardTitle}>{pkg.title}</h3>
						<p className={styles.cardDescription}>{pkg.description}</p>
						<p className={styles.cardPrice}>{pkg.price}</p>
						<div className={styles.cardActions}>
							<a href={pkg.detailsLink} className={styles.detailsButton}>
								Ver Detalhes
							</a>
							<button className={styles.buyButton}>Comprar Agora</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Packages;
