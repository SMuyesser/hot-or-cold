import React from 'react';

import './guessHistory.css';

export default function GuessHistory(props) {
	return (
		<div className="guessHistory">
			<h2>Guess History</h2>
			<ul>
				<li>{props.oldGuess}</li>
			</ul>
		</div>
	);
}