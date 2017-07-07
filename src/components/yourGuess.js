import React from 'react';

import './yourGuess.css';

export default function YourGuess(props) {
	return (
		<div className="yourGuess">
			<h2>Your guess</h2>
			<form>
				<input name="number" placeholder="00"/>
				<button>Submit</button>
			</form>
		</div>
	);
}