import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from '../src/components/game.js'

ReactDOM.render(
	<Game />, 
	document.getElementById('root')
);


/*
-overall display
-number to be guessed
-current guess
-guess history
-guess count
-feedback (hot or cold)
-new game/restart
*/