import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
	return (
		<Layout
			title="Under Construction"
			description="Make Small Games is currently under construction."
		>
			<main className={styles.main}>
				<img
					src="/img/Under Construction Main Image.png"
					alt="Make Small Games under construction"
					className={styles.image}
				/>
			</main>
		</Layout>
	);
}