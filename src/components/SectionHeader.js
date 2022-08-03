import React from 'react';
import Link from './Link';

const SectionHeader = (props) => {
	return (
		<div className="sectionHeader">
			<div className="title">
				<h2>{props.children}</h2>
				<Link linkWhite={false}>{props.link}</Link>
			</div>
			<hr />
		</div>
	);
};

export default SectionHeader;
