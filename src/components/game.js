import React from 'react';
import Header from './header.js';
import LiveGuess from './liveGuess.js';
import GuessHistory from './guessHistory.js';
import Restart from './restart.js';
import './game.css';

export default function Game(props) {
	return (
		<div className="game">
			<Header title={props.title} />
			<LiveGuess />
			<GuessHistory />
			<Restart />
		</div>
	);
}

Game.defaultProps = {
	title: "Hot Or Cold"
}