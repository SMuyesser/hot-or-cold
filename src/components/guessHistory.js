import React from 'react';

import './guessHistory.css';

export default function GuessHistory(props) {
	const guesses = props.guesses.map((guess, index) => (
		<li key={index}>
			{guess}
		</li>
	));

	return (
		<div className="guessHistory">
			<h2>Guess History</h2>
			<ul>
				{guesses}
			</ul>
		</div>
	);
}