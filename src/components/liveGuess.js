import React from 'react';
import MysteryNum from './mysteryNum.js';
import YourGuess from './yourGuess.js';
import GuessInfo from './guessInfo.js';

import './liveGuess.css';

export default function LiveGuess(props) {
	return (
		<div className="liveGuess">
			<MysteryNum />
			<GuessInfo />
			<YourGuess />
		</div>
	);
}