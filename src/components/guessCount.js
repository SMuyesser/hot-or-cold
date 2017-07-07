import React from 'react';

import './guessCount.css';

export default function GuessCount(props) {
	return (
		<div className="guessCount">
			<p>Guess # {props.count}</p>
		</div>
	);
}