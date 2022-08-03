import React from 'react';
import styles from './Hero.module.scss';

const HeroMenuItem = (props) => {
	return (
		<div className={styles.menuItem} onMouseEnter={props.hoverHandler}>
			<a href={props.link}>
				<h4>{props.title}</h4>
			</a>
			<div className={styles.arrow}>
				<div className={styles.arrowLine}></div>
				<div className={styles.arrowHead}></div>
			</div>
		</div>
	);
};

export default HeroMenuItem;
