import React from 'react';
import styles from './Link.module.scss';

const Link = (props) => {
	return (
		<div className={styles.link}>
			<div className={styles.preLinkLine}></div>
			<p
				className={
					props.linkWhite ? styles.linkTextWhite : styles.linkTextBlack
				}
			>
				{props.children}
			</p>

			<div className={styles.arrow}>
				<div className={styles.arrowLine}></div>
				<div className={styles.arrowHead}></div>
			</div>
		</div>
	);
};

export default Link;
