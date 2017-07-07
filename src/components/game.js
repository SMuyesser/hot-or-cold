import React from 'react';

import './game.css';

export default function Game() {
	return (
		<div className="game">
			<div className="header">
				<h1>Hot or Cold</h1>
			</div>
			<div className="liveGuess">
				<div className="mysteryNum">
					<h2>Mystery Number</h2>
					<h1>??</h1>
				</div>
				<div className="guessInfo">
					<div className="feedback">
						<p>HOT</p>
					</div>
					<div className="guessCount">
						<p>Guess # 1</p>
					</div>
				</div>
				<div className="yourGuess">
					<h2>Your Guess</h2>
					<h1>00</h1>
				</div>
			</div>
			<div className="guessHistory">
				<h2>Guess History</h2>
				<ul>
					<li>00</li>
					<li>01</li>
				</ul>
			</div>
			<div className="restart">
				<h2>Restart Game</h2>
			</div>
		</div>
	);
}