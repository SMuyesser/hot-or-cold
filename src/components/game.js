import React from 'react';
import Header from './header.js';
import LiveGuess from './liveGuess.js';
import GuessHistory from './guessHistory.js';
import Restart from './restart.js';
import './game.css';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Guess a number!',
			answer: Math.floor(Math.random() * 100) + 1,
		};
	}

	newGame() {
		this.setState({
			guesses: [],
			feedback: 'Guess a number!',
			answer: Math.floor(Math.random() * 100) + 1,
		});
	}

	guess(guess) {
		guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({
				feedback: 'Guess must be a number'
			});
			return;
		}

		const difference = Math.abs(guess - this.state.answer);

		let feedback;
		if (difference >= 50) {
			feedback = 'Freezing Cold';
		} else if (difference >= 25) {
			feedback = 'Cold';
		} else if (difference >= 10) {
			feedback = 'Heating Up'
		} else if (difference >= 1) {
			feedback = 'On Fire';
		} else {
			feedback = 'You Win!'
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});
	}

	render() {
		return (
			<div className="game">
				<Header />
				<LiveGuess feedback={this.state.feedback}
					onGuess={(guess) => this.guess(guess)}
					count={this.state.guesses.length} />
				<GuessHistory guesses={this.state.guesses}/>
				<Restart />
			</div>
		);
	}
}
