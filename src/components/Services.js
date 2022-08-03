import React from 'react';
import Container from './Container';
import Link from './Link';
import styles from './Services.module.scss';

const Services = () => {
	return (
		<div className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.column}>
						<div>
							<h2>Capital Services</h2>
							<Link linkWhite={false}>More Info</Link>
						</div>
						<div className={styles.dLine}></div>
					</div>

					<hr className={styles.servicesLine} />
					<div className={styles.column}>
						<div>
							<h2>Research</h2>
							<Link linkWhite={false}>More Info</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Services;
