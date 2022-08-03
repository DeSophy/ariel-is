import React from 'react';
import Link from './Link';
import styles from './TrackRecord.module.scss';

const Closing = () => {
	return (
		<div className={styles.column}>
			<hr />

			<h4>5-Story, 20-Unit Multifamily…</h4>

			<p className={styles.date}>
				<b>Closed</b> | 3.28.2022
			</p>

			<div className={`indent ${styles.closing}`}>
				<img src="/assets/closing-placeholder.png" alt="Closing Placeholder" />

				<div className={styles.closingHover}>
					<p className={styles.closingDescription}>
						Ariel Property Advisors has been retained on an exclusive basis to
						arrange the sale of 414-416 East 119th Street, a 50' wide..
					</p>

					<Link linkWhite={true}>More Info</Link>
				</div>
			</div>
		</div>
	);
};

export default Closing;
