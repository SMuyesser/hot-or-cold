import React from 'react';

import './restart.css';

export default function Restart(props) {
	return (
		<div className="restart">
			<button onClick={props.onClick}>Restart Game</button>
		</div>
	);
}