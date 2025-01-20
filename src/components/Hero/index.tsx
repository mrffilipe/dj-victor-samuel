"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

import ImageHero1 from "@/assets/img/hero-1.jpg";
import ImageHero2 from "@/assets/img/hero-2.jpg";
import ImageHero3 from "@/assets/img/hero-3.jpg";

const imagesUrl = [ImageHero1.src, ImageHero2.src, ImageHero3.src];

const Hero = () => {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);

			setTimeout(() => {
				setActiveImageIndex((prevIndex) => (prevIndex + 1) % imagesUrl.length);

				setIsAnimating(false);
			}, 1000);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const dots = imagesUrl.map((_, index) => (
		<div
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			key={index}
			className={`${styles.dot} ${index === activeImageIndex ? styles.active_dot : ""}`}
		/>
	));

	return (
		<section id="hero" className={styles.hero}>
			<div
				className={`${styles.background}`}
				style={{ backgroundImage: `url(${imagesUrl[activeImageIndex]})` }}
			/>
			<img
				className={`${styles.main_image} ${
					isAnimating ? styles.slide_out : styles.slide_in
				}`}
				src={imagesUrl[activeImageIndex]}
				alt="Dj Victor"
				draggable={false}
			/>
			<div className={styles.dots}>{dots}</div>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>DJ Victor</h1>
					<p className={styles.subtitle}>Transformando Momentos em Memórias</p>
					<div className={styles.actions}>
						<Link className={styles.cta_btn} href="#pacotes">
							Veja os Pacotes
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
