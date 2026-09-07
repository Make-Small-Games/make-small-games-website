import React from 'react';
import Layout from '@theme/Layout';
import styles from './workshops.module.css';

export default function Workshops() {
	return (
		<Layout
			title="Workshops"
			description="Beginner-friendly game development workshops."
		>
			<main className={styles.main}>
				<h1>Workshops</h1>

				<p>
					Beginner-friendly workshops for schools, libraries, maker spaces, and community programs.
				</p>
				<p>
					Each workshop can be adapted to 1, 2, or 3 hours depending on your program.
				</p>

				<div className={styles.workshopCard}>
					<h2>Platformer Workshop</h2>
					<p>
						Students build a playable platform game while learning core programming concepts.
					</p>

					<a
						href="https://arcade.makecode.com/S38023-39140-72784-38851"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.playButton}
					>
						Play Example Game
					</a>


					<div className={styles.durationGrid}>
						<div className={`${styles.durationCard} ${styles.oneHour}`}>
							<h3>1 Hour</h3>
							<p>Intro Workshop</p>

							<ul>
								<li>Movement</li>
								<li>Jumping</li>
								<li>Hazards</li>
								<li>Goal</li>
							</ul>
						</div>

						<div className={`${styles.durationCard} ${styles.twoHour}`}>
							<h3>2 Hours</h3>
							<p>Expanded Workshop</p>

							<ul>
								<li>Everything in 1 Hour</li>
								<li>Enemies</li>
								<li>Defeat enemies by jumping on them</li>
							</ul>
						</div>

						<div className={`${styles.durationCard} ${styles.threeHour}`}>
							<h3>3 Hours</h3>
							<p>Full Workshop</p>

							<ul>
								<li>Everything in 2 Hours</li>
								<li>Power-up</li>
								<li>Projectile attack</li>
							</ul>
						</div>
					</div>

					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSddnZ6jqkVlzj00_AIzc5w-4D5Bogo1TQoRWtCmFWZeY-87OQ/viewform?usp=publish-editor"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.requestButton}
					>
						Request This Workshop
					</a>

				</div>
				

				
			</main>
		</Layout>
	);
}CSS