
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const classFeatures = [
  '1 hour per week',
  '1–4 students per class',
  'Learn at your own pace',
  'Personalize your game and artwork',
  'Build skills over time',
];

const workshopFeatures = [
  'One-time, 1–3 hour experiences',
  'Designed for larger groups',
  'Build a playable game',
  'Based on our game-making books',
  'Great for schools and libraries',
];

function LearningCard({
  title,
  subtitle,
  features,
  buttonText,
  buttonLink,
  variant,
}) {
  return (
    <div
      className={`${styles.learningCard} ${
        variant === 'classes'
          ? styles.classesCard
          : styles.workshopsCard
      }`}
    >
      {/* Reserved illustration space on the left */}
      <div className={styles.cardArtwork}>
        <div className={styles.artPlaceholder}>
          <span>Artwork</span>
        </div>
      </div>

      {/* Text and button on the right */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <p className={styles.cardSubtitle}>{subtitle}</p>

        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Link
          to={buttonLink}
          className={`${styles.cardButton} ${
            variant === 'classes'
              ? styles.classesButton
              : styles.workshopsButton
          }`}
        >
          {buttonText} →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Make Small Games"
      description="Beginner-friendly game development workshops and lessons."
    >
      <main>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>Make</span>
              <span>Small Games</span>
            </h1>

            <h2 className={styles.heroSubtitle}>
              GAME DEVELOPMENT FOR BEGINNERS
            </h2>

            <p className={styles.heroDescription}>
              Turn your ideas into games
              <br />
              you can play, hold, and share.
            </p>
          </div>
        </section>

        {/* CHOOSE HOW TO LEARN */}
        <section className={styles.learningSection}>
          <div className={styles.learningContainer}>
            <div className={styles.learningHeader}>
              <h2>CHOOSE HOW TO LEARN</h2>
              <p>
                Weekly classes or one-time workshops.
                Two ways to bring your ideas to life!
              </p>
            </div>

            <div className={styles.learningCards}>
              <LearningCard
                title="CLASSES"
                subtitle="Small groups. More personalization."
                features={classFeatures}
                buttonText="Explore Classes"
                buttonLink="/classes"
                variant="classes"
              />

              <LearningCard
                title="WORKSHOPS"
                subtitle="One-time events. Complete games."
                features={workshopFeatures}
                buttonText="View Workshops"
                buttonLink="/workshops"
                variant="workshops"
              />
            </div>
          </div>
        </section>

		{/* LEARN BY MAKING GAMES */}
		<section className={styles.makingSection}>
		<div className={styles.makingContainer}>

			<div className={styles.makingHeader}>
			<h2>LEARN BY MAKING GAMES</h2>
			<p>
				We use MakeCode Arcade — a free,
				beginner-friendly platform from Microsoft.
			</p>
			</div>

			<div className={styles.makingGrid}>

			{/* LEFT: MAKECODE INFORMATION */}
			<div className={styles.makingIntro}>

				<div className={styles.makeCodeBrand}>
					<h3>Microsoft MakeCode Arcade</h3>
				</div>
				
				<h4>Build real games with blocks.</h4>

				<p>
				Create playable games using visual blocks
				while learning the same programming
				concepts used in larger games.
				</p>

				<Link
				to="/play-test"
				className={styles.exampleButton}
				>
				Try an Example Game →
				</Link>
			</div>

			{/* CENTER: GAME PREVIEW */}
			<div className={styles.makingPreview}>
				<Link to="/play-test">
				<img
					src="/img/makecode-arcade-example-preview.png"
					alt="Pixel art platformer with a wizard,
						coins, a ghost, and a castle"
				/>
				</Link>

				<p>Example: Platformer (Haunted Theme)</p>
			</div>

			{/* RIGHT: WHAT YOU'LL LEARN */}
			<div className={styles.makingTopics}>
				<h3>What You'll Learn</h3>

				<ul>
				{[
					['🏃', 'Movement'],
					['📦', 'Variables'],
					['📅', 'Events'],
					['💎', 'Conditions'],
					['👾', 'Sprites'],
					['⛰️', 'Collisions'],
					['⭐', 'Game Logic'],
				].map(([symbol, topic]) => (
					<li key={topic}>
					<span aria-hidden="true">{symbol}</span>
					<span>{topic}</span>
					</li>
				))}
				</ul>
			</div>

			</div>
		</div>
		</section>

			{/* MAKE A GAME YOU CAN PLAY, HOLD, AND SHARE */}
			<section className={styles.takeHomeSection}>
			<div className={styles.takeHomeContainer}>

				<div className={styles.takeHomeHeader}>
				<h2>MAKE A GAME YOU CAN PLAY, HOLD, AND SHARE</h2>
				<p>Every student leaves with something awesome.</p>
				</div>

				<div className={styles.takeHomeSteps}>

				{/* STEP 1 */}
				<div className={styles.takeHomeStep}>
					<div className={styles.gameDevice}>
					<img
						src="/img/makecode-arcade-example-preview.png"
						alt="Student-created platformer game"
					/>
					</div>
					<h3>Build a playable game</h3>
				</div>

				<span className={styles.takeHomeArrow} aria-hidden="true">
					→
				</span>

				{/* STEP 2 */}
				<div className={styles.takeHomeStep}>
					<div className={styles.artworkVisual}>
					<span aria-hidden="true">🎨</span>
					<span aria-hidden="true">👾</span>
					</div>
					<h3>Customize your artwork</h3>
					<p>Classes have more time for this!</p>
				</div>

				<span className={styles.takeHomeArrow} aria-hidden="true">
					→
				</span>

				{/* STEP 3 */}
				<div className={styles.takeHomeStep}>
					<div className={styles.keychainVisual}>
					<div className={styles.keychainRing}></div>
					<div className={styles.keychainBody}>
						<span aria-hidden="true">👻</span>
					</div>
					</div>
					<h3>Take home your mini game keychain</h3>
				</div>

				</div>
			</div>
			</section>


		{/* ==========================================
			GAMES YOU CAN MAKE
			========================================== */}
		<section className={styles.gamesSection}>
		<div className={styles.gamesContainer}>

			<div className={styles.gamesHeader}>
			<h2>GAMES YOU CAN MAKE</h2>
			<p>
				Here are some of the games we build
				in our workshops and classes.
			</p>
			</div>

			<div className={styles.gamesGrid}>

			{/* PLATFORMER - REAL SCREENSHOT */}
			<div className={styles.gameTile}>
				<div className={styles.gameThumbnail}>
				<img
					src="/img/makecode-arcade-example-preview.png"
					alt="Example platformer game"
					loading="lazy"
				/>
				</div>
				<h3>Platformer</h3>
			</div>

			{/* OTHER GAMES - ARTWORK PLACEHOLDERS */}
			{[
				['Pet Simulator', '🐾'],
				['Maze Chase', '👻'],
				['Clicker', '🪙'],
				['Endless Runner', '🏃'],
				['And More!', '•••'],
			].map(([title, symbol]) => (
				<div className={styles.gameTile} key={title}>
				<div
					className={`${styles.gameThumbnail} ${styles.gamePlaceholder}`}
				>
					<span
					className={styles.gamePlaceholderSymbol}
					aria-hidden="true"
					>
					{symbol}
					</span>
				</div>
				<h3>{title}</h3>
				</div>
			))}

			</div>
		</div>
		</section>


		{/* ==========================================
			WHAT PARENTS & STUDENTS SAY
			========================================== */}
		<section className={styles.testimonialsSection}>
		<div className={styles.testimonialsContainer}>

			<div className={styles.testimonialsHeader}>
			<h2>WHAT PARENTS & STUDENTS SAY</h2>
			<p>What students and families think about our programs.</p>
			</div>

			<div className={styles.testimonialsLayout}>

			{/* LEFT: GHOST ARTWORK PLACEHOLDER */}
			<div className={styles.testimonialArtwork}>
				<div className={styles.testimonialArtPlaceholder}>
				Ghost artwork
				</div>
			</div>

			{/* CENTER: TESTIMONIAL CARDS */}
			<div className={styles.testimonialCards}>

				<div className={styles.testimonialCard}>
				<p>
					Testimonial 1 goes here
				</p>
				<span>— Person 1</span>
				</div>

				<div className={styles.testimonialCard}>
				<p>
					Testimonial 3 goes here
				</p>
				<span>— Person 2</span>
				</div>

				<div className={styles.testimonialCard}>
				<p>
					Testimonial 3 goes here
				</p>
				<span>— Person 3</span>
				</div>

			</div>

			{/* RIGHT: UNICORN ARTWORK PLACEHOLDER */}
			<div className={styles.testimonialArtwork}>
				<div className={styles.testimonialArtPlaceholder}>
				Unicorn artwork
				</div>
			</div>

			</div>

			<p className={styles.testimonialsNotice}>
			</p>

		</div>
		</section>

      </main>
    </Layout>
  );
}
