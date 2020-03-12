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

let clickedButtonIndex;

const Game = props =>{
    const { question } = props;
    let shuffled = shuffle(question.options);

    const changeColor = (isCorrect, index) => {
        clickedButtonIndex = index;
        let el = document.getElementById(`btn${index}`);

        if (isCorrect) {
            el.classList.add('green-background');
        } else {
            el.classList.add('red-background');
        }

        setTimeout(() => {
            clickedButtonIndex = null;
            el.classList.remove(isCorrect ? 'green-background' : 'red-background')
            props.optionClick(isCorrect);
        }, 500);
    }

    return (
        <div id='game-container'>
            <div id='game-wrapper'>
                <Screen question={question} />

                <div id='options-container'>
                    {
                        shuffled.map((item, index) => {
                            const { text, isCorrect } = item;

                            return <button
                                id={`btn${index}`}
                                key={index}
                                onClick={() => changeColor(isCorrect, index)}
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