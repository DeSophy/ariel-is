import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Container = (props) => {
	const [animated, setAnimated] = useState(false);
	const containerStyle = animated ? 'animatedContainer' : 'hiddenContainer';

	const container = useRef();

	useEffect(() => {
		let options = {
			root: null,
			rootMargin: '10%',
			threshold: 0,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setAnimated(entry.isIntersecting));
		}, options);

		observer.observe(container.current);
	}, []);

	return (
		<div
			ref={container}
			className={`container ${containerStyle}`}
			id={props.id}
		>
			{props.children}
		</div>
	);
};

export default Container;
