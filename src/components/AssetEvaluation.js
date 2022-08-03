import React from 'react';
import Container from './Container';
import Link from './Link';
import styles from './AssetEvaluation.module.scss';

const AssetEvaluation = () => {
	return (
		<div className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.column}>
						<img src="/assets/ae-book.png" alt="AE Book" />
					</div>

					<div className={styles.column}>
						<h2>Asset Evaluations</h2>
						<p>
							Before taking an assignment, we produce an Asset Evaluation which
							provides clients with a comprehensive understanding of the current
							value of their property and market trends. Combining the insights
							of our brokers with sophisticated analytical tools and the latest
							comparable sales, our evaluations inform clients and help them
							stay ahead of changes in the commercial real estate market.
						</p>

						<hr />

						<h4>
							Request A Complimentary
							<br /> Asset Evaluation
						</h4>
						<Link linkWhite={true}>Request Now</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default AssetEvaluation;
