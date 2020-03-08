import React from 'react';

import Screen from '../Screen';

const Game = props => {
    const { optionClick } = props;

    return (
        <div id='game-container'>
            <div id='game-wrapper'>
                <Screen />

                <div id='options-container'>
                    <button onClick={optionClick} className='option-btn'>Option</button>
                    <button onClick={optionClick} className='option-btn'>Option</button>
                    <button onClick={optionClick} className='option-btn'>Option</button>
                    <button onClick={optionClick} className='option-btn'>Option</button>
                </div>
            </div>
        </div>
    );
}

export default Game;