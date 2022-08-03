import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import styles from './Technology.module.scss';

const Technology = () => {
	return (
		<div className={styles.section}>
			<Container>
				<SectionHeader link="Our Research">Innovative Technology</SectionHeader>

				<div className={styles.wrapper}>
					<div className={`indent ${styles.column}`}>
						<img src="/assets/technology.jpg" alt="Innovative Technology" />
					</div>
					<div className={styles.column}>
						<p>
							Working with the latest technology, we empower our brokers to be
							the most informed, efficient and effective sales professionals in
							the industry. Our proprietary, cutting-edge database and IT
							systems let us track, store and filter every property, owner,
							transaction, data point and contact (foreign and domestic) related
							to New York City real estate. All of this information is shared
							among our professionals, allowing them to quickly procure offers
							from a vast network of qualified investors.
						</p>
						<br />
						<p>
							Contact our Investment Sales professionals for all of your
							acquisition or disposition needs.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Technology;
