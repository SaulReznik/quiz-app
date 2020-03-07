import React from 'react';

import Screen from '../Screen';

const Game = props => {
    return (
        <div id='game-container'>
            <div id='game-wrapper'>
                <Screen />

                <div id='options-container'>
                    <button className='option-btn'>Option</button>
                    <button className='option-btn'>Option</button>
                    <button className='option-btn'>Option</button>
                    <button className='option-btn'>Option</button>
                </div>
            </div>
        </div>
    );
}

export default Game;