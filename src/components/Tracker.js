import React from 'react';
import TrackerItem from './TrackerItem';
import styles from './Tracker.module.scss';

const Tracker = () => {
	return (
		<div className={styles.section}>
			<div className={styles.trackerContainer}>
				<TrackerItem />
				<TrackerItem />
				<TrackerItem />
			</div>
		</div>
	);
};

export default Tracker;
