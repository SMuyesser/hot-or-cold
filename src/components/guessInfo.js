import React from 'react';
import Feedback from './feedback.js';
import GuessCount from './guessCount.js';

import './guessInfo.css';

export default function GuessInfo(props) {
	return (			
		<div className="guessInfo">
			<Feedback />
			<GuessCount />
		</div>
	);
}