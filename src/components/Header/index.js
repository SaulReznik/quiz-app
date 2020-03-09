import React from 'react';

function Header(props) {
    const { startButton, questionCount } = props;
    return (
        <header>
            <button onClick={startButton} id='start-game-btn'>Start game</button>
            <span id='question-amount'>{questionCount}/10</span>
        </header>
    )
}

export default Header;
