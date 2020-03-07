import React from 'react';

function Header(props) {
    return (
        <header>
            <button id='start-game-btn'>Start game</button>
            <span id='question-amount'>5/10</span>
        </header>
    )
}

export default Header;
