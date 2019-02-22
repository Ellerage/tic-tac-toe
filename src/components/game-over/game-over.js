import React from 'react';
import './style.css';

const GameOver = ({result, restart}) => {
	if (result === 'Draw') {
		return <p className="result">!-- DRAW --!</p>
	}

	return (
		<div className="container">
			<p className="result">{result} winner</p>
			<button onClick={restart}>Restart</button>
		</div>
	);
}

export default GameOver;