import React from 'react';

import Screen from '../Screen';

function shuffle(array) {
    var currentIndex = array.length;
    let temporaryValue; 
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const Game = props => {
    const {question, optionClick } = props;
    let shuffled = shuffle(question.options);
    console.log(question);

    return (
        <div id='game-container'>
            <div id='game-wrapper'>
                <Screen question={question} />

                <div id='options-container'>
                    {
                        shuffled.map((item, index) => {
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