"use client";

import { useState } from "react";

import styles from "./styles.module.css";

import Gallery1 from "@/assets/img/gallery-1.jpg";
import Gallery2 from "@/assets/img/gallery-2.jpg";
import Gallery3 from "@/assets/img/gallery-3.jpg";
import Gallery4 from "@/assets/img/gallery-4.jpg";
import Gallery5 from "@/assets/img/gallery-5.jpg";

const Gallery = () => {
	// Lista de imagens
	const images = [
		Gallery1.src,
		Gallery2.src,
		Gallery3.src,
		Gallery4.src,
		Gallery5.src,
		Gallery1.src,
		Gallery2.src,
		Gallery3.src,
		Gallery4.src,
	];

	// Estado para controlar quantas imagens estão visíveis
	const [visibleCount, setVisibleCount] = useState(6);

	// Função para carregar mais imagens
	const handleViewMore = () => {
		setVisibleCount((prevCount) => prevCount + 6);
	};

	return (
		<section className={styles.gallery}>
			<h2 className={styles.title}>Galeria de Trabalhos</h2>
			<div className={styles.grid}>
				{images.slice(0, visibleCount).map((image, index) => (
					<div
						key={index}
						className={`${styles.imageWrapper} ${
							index % 2 === 0 ? styles.large : styles.small
						}`}
					>
						<img
							src={image}
							alt={`Evento ${index + 1}`}
							className={styles.image}
						/>
					</div>
				))}
			</div>
			{visibleCount < images.length && (
				<button className={styles.viewMore} onClick={handleViewMore}>
					Ver Mais
				</button>
			)}
		</section>
	);
};

export default Gallery;
