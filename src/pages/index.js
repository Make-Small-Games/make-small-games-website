import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
	return (
		<Layout
			title="Make Small Games"
			description="Beginner-friendly game development workshops, lessons, and books."
		>
			<main>
				<section className={styles.hero}>
					<img
						src="/img/make-small-games-banner.png"
						alt="Make Small Games"
						className={styles.heroImage}
					/>
				</section>
			</main>
		</Layout>
	);
}