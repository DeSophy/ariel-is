import React from 'react';
import Container from './Container';
import SectionHeader from './SectionHeader';
import styles from './Team.module.scss';

const Team = () => {
	return (
		<div className={styles.section}>
			<Container id="team">
				<SectionHeader link="Meet Our Team">Team Based Approach</SectionHeader>
				<div className={styles.wrapper}>
					<div className={`indent ${styles.text}`}>
						<p>
							We view teamwork as both a centerpiece of our company and an
							essential component to delivering great service to our clients.
							Every exclusive listing is staffed with a team of senior and
							associate-level professionals to ensure maximum reach and a
							streamlined process.
						</p>
					</div>
					<div className={styles.photos}>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
						<div className={styles.photo}>
							<img src="/assets/dpanic.jpg" alt="Dusan Panic" />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Team;
