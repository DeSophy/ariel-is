import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import Closing from './Closing';
import styles from './TrackRecord.module.scss';

const TrackRecord = () => {
	return (
		<Container id="track-record">
			<SectionHeader link="Closed Deals">
				Experienced Professionals,
				<br />
				Trusted Relationships
			</SectionHeader>
			<div className={styles.wrapper}>
				<div className={`indent ${styles.column}`}>
					<p>
						Our investment sales professionals have a long, successful track
						record of closing every kind of commercial property including:
					</p>
				</div>
				<div className={`indent ${styles.column}`}>
					<div className={styles.list}>
						<h5>Multifamily Properties</h5>
						<ul>
							<li>Affordable</li>
							<li>Rent Stabilized</li>
							<li>Free Market</li>
							<li>Mixed-Use</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Commercial Properties</h5>
						<ul>
							<li>Retail Condominiums</li>
							<li>Industrial Assets</li>
							<li>Office Buildings</li>
							<li>Garages</li>
							<li>Triple-Net Lease (NNN) Assets</li>
						</ul>
					</div>
				</div>
				<div className={`indent ${styles.column}`}>
					<div className={styles.list}>
						<h5>Development Sites</h5>
						<ul>
							<li>Land</li>
							<li>Conversions</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Notes</h5>
						<ul>
							<li>Performing Loan Sales</li>
							<li>Non-Performing Loan Sales</li>
						</ul>
					</div>

					<p>
						We have the network, reach and insights to effectively price,
						position and close any transaction...
					</p>
				</div>
			</div>

			<div className={`${styles.wrapper} ${styles.closings}`}>
				<Closing />
				<Closing />
				<Closing />
			</div>
		</Container>
	);
};

export default TrackRecord;
