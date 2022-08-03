import React from 'react';
import styles from './Tracker.module.scss';

const TrackerItem = () => {
	return (
		<div className={styles.trackerItem}>
			<div className={styles.label}>
				<div className={styles.preLinkLine}></div>
				<p>For Sale</p>
			</div>

			<div className={styles.text}>
				<h4>2251 Nostrand Avenue</h4>
				<p className={styles.type}>Development</p>
				<p>
					Corner Development Site with 91,969 Buildable SF within an Opportunity
					Zone
				</p>
			</div>
		</div>
	);
};

export default TrackerItem;
