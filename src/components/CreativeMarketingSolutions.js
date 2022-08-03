import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import styles from './CreativeMarketingSolutions.module.scss';

const CreativeMarketingSolutions = () => {
	return (
		<Container>
			<SectionHeader link="See Our Inventory">
				Creative Marketing Solutions
			</SectionHeader>

			<div className={styles.wrapper}>
				<div className={`indent ${styles.column}`}>
					<img
						src="/assets/cms-background.png"
						alt="Creative Marketing Solutions"
					/>
				</div>
				<div className={styles.column}>
					<p className={styles.description}>
						For every exclusive listing, our Investment Sales professionals
						design and execute a customized marketing campaign, adapting our
						approach to each asset's unique value proposition. Through creative
						positioning, visually appealing deliverables, and a combination of
						targeted and far-reaching promotional activities, we create a
						competitive environment to achieve optimal results.
					</p>

					<h3>
						We Utilize All Major
						<br /> Marketing Channels
					</h3>

					<div className={styles.channels}>
						<h4>Mail</h4>
						<div className={styles.dLine}></div>
						<h4>Email</h4>
						<div className={styles.dLine}></div>
						<h4>Social Media</h4>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default CreativeMarketingSolutions;
