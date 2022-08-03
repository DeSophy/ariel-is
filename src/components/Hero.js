import React from 'react';
import Container from './Container';
import Link from './Link';
import HeroMenuItem from './HeroMenuItem';
import HeroMenuList from './HeroMenuList';
import styles from './Hero.module.scss';

const Hero = () => {
	const menuList = HeroMenuList;

	return (
		<div className={styles.section}>
			<Container>
				<div className="wrapper">
					<div className={styles.columnMain}>
						<h1>
							Investment
							<br />
							Sales
						</h1>
						<p>
							Our Investment Sales Division provides private and institutional
							clients, equity capital, lenders, government agencies and
							not-for-profit organizations with institutional-quality brokerage
							services. To ensure optimal pricing and deal terms, we take a
							holistic approach to marketing and negotiating diverse property
							types, varying in size and complexity.
						</p>

						<hr className={styles.heroLine} />

						<h4>
							Request a Complimentary
							<br /> Evaluation of Your Assets
						</h4>
						<Link linkWhite={false}>Request Now</Link>
					</div>
					<div className={styles.columnMenu}>
						{menuList.map((menuItem) => (
							<HeroMenuItem key={menuItem.title} title={menuItem.title} />
						))}
					</div>
					<div className={styles.columnText}>
						<p>
							Our Investment Sales Division provides private and institutional
							clients, equity capital, lenders, government agencies and
							not-for-profit organizations with institutional-quality brokerage
							services. To ensure optimal pricing and deal terms, we take a
							holistic approach to marketing and negotiating diverse property
							types, varying in size and complexity.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
