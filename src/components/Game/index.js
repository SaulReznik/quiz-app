import React from 'react';

import Screen from '../Screen';

const Game = props => {
    const {question, optionClick } = props;
    console.log(question);

    return (
        <div id='game-container'>
            <div id='game-wrapper'>
                <Screen question={question} />

                <div id='options-container'>
                    {
                        question.options.map((item, index) => {
                            const { text, isCorrect } = item;
                            return <button
                                key={index}
                                onClick={() => optionClick(isCorrect)} 
                                className='option-btn'
                            >
                                {text}
                            </button>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Game;