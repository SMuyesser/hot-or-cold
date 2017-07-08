import React from 'react';

import './yourGuess.css';

export default class YourGuess extends React.Component {
	onGuess(event) {
		event.preventDefault();
		if (this.props.onGuess) {
			const value = this.input.value;
			this.props.onGuess(value);
		}
		this.input.value = '';
	}

	render() {
		return (
			<div className="yourGuess">
				<h2>Your Guess (1-100)</h2>
				<form onSubmit={e => this.onGuess(e)}>
					<input type="text" name="number" maxLength="3" autoComplete="off" placeholder="00" ref={input => this.input = input} />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}