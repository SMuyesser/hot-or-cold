import React from 'react';
import Feedback from './feedback.js';
import GuessCount from './guessCount.js';

import './guessInfo.css';

export default function GuessInfo(props) {
	return (			
		<div className="guessInfo">
			<Feedback temp="HOT" />
			<GuessCount count="0" />
		</div>
	);
}