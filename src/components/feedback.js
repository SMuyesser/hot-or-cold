import React from 'react';

import './feedback.css';

export default function Feedback(props) {
	return (
		<div className="feedback">
			<p>{props.feedback}</p>
		</div>
	);
}